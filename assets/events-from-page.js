defineGlobalOnce('ThemeSection_EventsFromPage', (requestURL) => {
  return {
    init() {
      fetch(requestURL)
        .then((res) => res.text())
        .then((data) => {
          let sectionData;
          if (requestURL.indexOf('?sections=') > -1) {
            const sectionID = requestURL.split('?sections=').pop();
            const jsonData = JSON.parse(data);
            sectionData = jsonData[sectionID];
          } else {
            sectionData = data;
          }
          const newDOM = new DOMParser().parseFromString(
            sectionData,
            'text/html',
          );
          this.$el.innerHTML = newDOM.querySelector(
            '[data-section-tour-events]',
          ).innerHTML;
        })
        .catch(function (error) {
          console.warn('error fetching events data:', error);
        });
    },
  };
});
