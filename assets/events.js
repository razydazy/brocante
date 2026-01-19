defineGlobalOnce(
  'ThemeSection_tourEvents',
  ({
    source,
    bandsintown,
    eventbriteToken,
    maxEvents,
    useExternalSource,
  }) => {
    return {
      eventData: [],
      rawEvents: {
        bandsintown: [],
        eventbrite: [],
      },
      source: source || '',
      maxEvents:
        maxEvents === 'all'
          ? -1
          : parseInt(maxEvents),
      moreLinkUrl: '',
      storeLocale: window.theme.locale || 'en',
      getDayFromDate(date) {
        return new Intl.DateTimeFormat(this.storeLocale, {
          day: 'numeric',
        }).format(Date.parse(date));
      },
      getMonthFromDate(date) {
        return new Intl.DateTimeFormat(this.storeLocale, {
          month: 'short',
        }).format(Date.parse(date));
      },
      fetchEvents() {
        if (useExternalSource === false) {
          const rawData = JSON.parse(
            this.$el.querySelector('[data-event-data]').innerHTML,
          );
          this.eventData = rawData.events;
        } else {
          switch (this.source) {
            case 'bandsintown': {
              const artistName = bandsintown;
              const bandsintownName = artistName
                .toLowerCase()
                .replace(' ', '%20');
              const url = `//rest.bandsintown.com/artists/${bandsintownName}/events?app_id=girafficthemes`;

              const responsePromise = fetch(url);
              responsePromise
                .then((resp) => resp.json())
                .then((data) => {
                  this.rawEvents.bandsintown = JSON.parse(JSON.stringify(data));
                  this.moreLinkUrl = this.rawEvents.bandsintown.length ? this.rawEvents.bandsintown[0]?.artist?.url : null;
                  this.processBandsintownEvents();
                })
                .catch((error) => {
                  console.warn('error fetching bandsintown data:', error);
                });
              break;
            }
            case 'eventbrite': {
              const token = eventbriteToken;
              const apiUrl = 'https://switchthemes.co/.netlify/functions/get-eventbrite-events/';
              const data = { token: token };
              fetch(apiUrl, {
                method: 'POST', // or 'PUT'
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
              })
              .then(response => response.json())
              .then(data => {
                this.rawEvents.eventbrite = data.events;
                if (data.events[0]) {
                  const firstEvent = data.events[0];

                  if (firstEvent.organizer && firstEvent.organizer.url) {
                    this.moreLinkUrl = firstEvent.organizer.url;
                  }
                }

                this.processEventbriteEvents();
              })
              .catch((error) => {
                //this.error = "Sorry, looks like something went wrong. Please try again.";
              });
              break;
            }
          }
        }
      },
      processBandsintownEvents() {
        let events = this.rawEvents.bandsintown.map((event) => {
          let eventLocation;

          if (event.venue.location.indexOf(event.venue.country) !== -1) {
            eventLocation = event.venue.location;
          } else {
            eventLocation = `${event.venue.location}, ${event.venue.country}`;
          }

          return {
            day: ('0' + this.getDayFromDate(event.datetime)).slice(-2),
            month: this.getMonthFromDate(event.datetime),
            endDay: event.festival_end_date ? ('0' + this.getDayFromDate(event.festival_end_date)).slice(-2) : null,
            endMonth: event.festival_end_date ? this.getMonthFromDate(event.festival_end_date) : null,
            name: event.venue.name,
            location: eventLocation,
            venue: event.venue ? event.venue.name : null,
            url: event.url,
          };
        });

        if (this.maxEvents !== -1) {
          this.eventData = events.slice(0, this.maxEvents);
        } else {
          this.eventData = events;
        }
      },
      processEventbriteEvents() {
        let events = this.rawEvents.eventbrite.map((event) => {
          let eventLocation;

          if (event.online_event === true) {
            eventLocation = window.theme.strings.onlineEvent || 'Online event';
          } else if (event.venue) {
            eventLocation = `${event.venue.address.city}, ${event.venue.address.country}`;
          }

          return {
            day: ('0' + this.getDayFromDate(event.start.local)).slice(-2),
            month: this.getMonthFromDate(event.start.local),
            endDay: event.end ? ('0' + this.getDayFromDate(event.end.local)).slice(-2) : null,
            endMonth: event.end ? this.getMonthFromDate(event.end.local) : null,
            name: event.name.text,
            location: eventLocation,
            venue: event.vanue ? event.vanue.name : null,
            url: event.url,
          };
        });
        if (this.maxEvents !== -1) {
          this.eventData = events.slice(0, this.maxEvents);
        } else {
          this.eventData = events;
        }
      },
    };
  },
);
