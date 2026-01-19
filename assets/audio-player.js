/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 62);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ liveRegion; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ cartLiveRegion; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ variantLiveRegion; });

// CONCATENATED MODULE: ./node_modules/@switchthemes/live-region/node_modules/@shopify/theme-currency/currency.js
/**
 * Currency Helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions that help with currency formatting
 *
 * Current contents
 * - formatMoney - Takes an amount in cents and returns it as a formatted dollar value.
 *
 */

const moneyFormat = '${{amount}}';

/**
 * Format money values based on your shop currency settings
 * @param  {Number|string} cents - value in cents or dollar amount e.g. 300 cents
 * or 3.00 dollars
 * @param  {String} format - shop money_format setting
 * @return {String} value - formatted value
 */
function formatMoney(cents, format) {
  if (typeof cents === 'string') {
    cents = cents.replace('.', '');
  }
  let value = '';
  const placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
  const formatString = format || moneyFormat;

  function formatWithDelimiters(
    number,
    precision = 2,
    thousands = ',',
    decimal = '.'
  ) {
    if (isNaN(number) || number == null) {
      return 0;
    }

    number = (number / 100.0).toFixed(precision);

    const parts = number.split('.');
    const dollarsAmount = parts[0].replace(
      /(\d)(?=(\d\d\d)+(?!\d))/g,
      `$1${thousands}`
    );
    const centsAmount = parts[1] ? decimal + parts[1] : '';

    return dollarsAmount + centsAmount;
  }

  switch (formatString.match(placeholderRegex)[1]) {
    case 'amount':
      value = formatWithDelimiters(cents, 2);
      break;
    case 'amount_no_decimals':
      value = formatWithDelimiters(cents, 0);
      break;
    case 'amount_with_comma_separator':
      value = formatWithDelimiters(cents, 2, '.', ',');
      break;
    case 'amount_no_decimals_with_comma_separator':
      value = formatWithDelimiters(cents, 0, '.', ',');
      break;
  }

  return formatString.replace(placeholderRegex, value);
}

// CONCATENATED MODULE: ./node_modules/@switchthemes/live-region/index.js


/**
 * Generic live region announcement
 *
 */
function liveRegion(content, clear) {
  clearTimeout(window.liveRegionTimeout);
  let region = document.getElementById('screenreader-announce');
  region.innerHTML = content;

  window.liveRegionTimeout = setTimeout(() => {
    region.innerHTML = '';
  }, 3000);
}

function cartLiveRegion(item) {
  const templateString =
    theme.strings.update +
    ': [QuantityLabel]: [Quantity], [Regular] [$$] [DiscountedPrice] [$]. [PriceInformation]';

  function _liveRegionContent() {
    let liveRegionContent = templateString;

    liveRegionContent = liveRegionContent
      .replace('[QuantityLabel]', theme.strings.quantity)
      .replace('[Quantity]', item.quantity);

    let regularLabel = '';
    let regularPrice = formatMoney(item.original_line_price, theme.moneyFormat);
    let discountLabel = '';
    let discountPrice = '';
    let discountInformation = '';

    if (item.original_line_price > item.final_line_price) {
      regularLabel = theme.strings.regularTotal;

      discountLabel = theme.strings.discountedTotal;
      discountPrice = formatMoney(item.final_line_price, theme.moneyFormat);

      discountInformation = theme.strings.priceColumn;
    }

    liveRegionContent = liveRegionContent
      .replace('[Regular]', regularLabel)
      .replace('[$$]', regularPrice)
      .replace('[DiscountedPrice]', discountLabel)
      .replace('[$]', discountPrice)
      .replace('[PriceInformation]', discountInformation)
      .replace('  .', '')
      .trim();

    return liveRegionContent;
  }

  liveRegion(_liveRegionContent(), true);
}

function variantLiveRegion(variant) {
  const templateString =
    '[Availability] [Regular] [$$] [Sale] [$]. [UnitPrice] [$$$]';

  function _getBaseUnit() {
    if (variant.unit_price_measurement.reference_value === 1) {
      return variant.unit_price_measurement.reference_unit;
    }

    return (
      variant.unit_price_measurement.reference_value +
      variant.unit_price_measurement.reference_unit
    );
  }

  /**
   * Compose the live region’s content based on the
   * variant’s properties.
   *
   * @param {Object} variant The variant
   */
  function _liveRegionContent() {
    let liveRegionContent = templateString;

    // Update availability
    const availability = variant.available ? '' : theme.strings.soldOut + ',';
    liveRegionContent = liveRegionContent.replace(
      '[Availability]',
      availability,
    );

    // Update pricing
    let regularLabel = '';
    let regularPrice = formatMoney(variant.price, theme.moneyFormat);

    let saleLabel = '',
      salePrice = '',
      unitLabel = '',
      unitPrice = '';

    if (variant.compare_at_price > variant.price) {
      regularLabel = theme.strings.regularPrice;
      regularPrice = formatMoney(variant.compare_at_price, theme.moneyFormat);

      saleLabel = theme.strings.sale;
      salePrice = formatMoney(variant.price, theme.moneyFormat);
    }

    if (variant.unit_price) {
      unitLabel = theme.strings.unitPrice;
      unitPrice =
        formatMoney(variant.unit_price, theme.moneyFormat) +
        ' ' +
        theme.strings.unitPriceSeparator +
        ' ' +
        _getBaseUnit();
    }

    liveRegionContent = liveRegionContent
      .replace('[Regular]', regularLabel)
      .replace('[$$]', regularPrice)
      .replace('[Sale]', saleLabel)
      .replace('[$]', salePrice)
      .replace('[UnitPrice]', unitLabel)
      .replace('[$$$]', unitPrice)
      .replace('  .', '')
      .trim();

    return liveRegionContent;
  }

  liveRegion(_liveRegionContent(), false);
}


/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _switchthemes_live_region__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

defineGlobalOnce('ThemeModule_AudioPlayer', function (tracklist, id, product_title, featured_media_url) {
  tracklist.forEach(function (track) {
    var audio = new Audio(track.url);
    audio.preload = 'metadata';
    track.audio = audio;
    track.formattedTime = '';
  });
  window.Spruce.store(id, {
    tracklist: tracklist,
    track_index: 0,
    current_track: tracklist[0],
    is_playing: false,
    vinyl_tracklist_format: false,
    changeTrack: function changeTrack() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.current_track.audio.pause();
      this.current_track = tracklist[index];
      this.track_index = index;
      Object(_switchthemes_live_region__WEBPACK_IMPORTED_MODULE_0__[/* liveRegion */ "b"])(this.current_track.title);
    },
    updatePlayStatus: function updatePlayStatus(status) {
      this.is_playing = status;
    },
    formatTime: function formatTime(seconds) {
      return new Date(seconds * 1000).toISOString().substr(14, 5);
    }
  }); //const audioEl = document.getElementById(`audio-${block_id}`);

  return {
    current_audio_duration: null,
    current_audio_progress: 0,
    featured_media_url: featured_media_url,

    get audio() {
      return this.$store[id].audio;
    },

    get current_track() {
      return this.$store[id].current_track;
    },

    get progressPercentage() {
      return this.current_audio_duration !== null ? this.current_audio_progress / this.current_audio_duration * 100 : 0;
    },

    mounted: function mounted() {
      var _this = this;

      this.$store[id].tracklist.forEach(function (track, index) {
        track.audio.onloadedmetadata = function () {
          if (index === 0) {
            _this.current_audio_duration = track.audio.duration;
          }

          track.formattedTime = _this.formatTime(track.audio.duration);
        };

        track.audio.ontimeupdate = function () {
          _this.current_audio_progress = track.audio.currentTime;
        };

        track.audio.onended = function () {
          _this.nextTrack();
        };

        track.audio.onplay = function () {
          _this.current_audio_duration = track.audio.duration;

          _this.$store[id].updatePlayStatus(true);

          _this.updateMediaSession();
        };

        track.audio.onpause = function () {
          _this.$store[id].updatePlayStatus(false);
        }; //check if it uses vinyl format


        if (index === 0 && track.title.startsWith('A1')) {
          _this.$store[id].vinyl_tracklist_format = true;
        }
      });
      var tracklistId = "tracklistButton-".concat(id);
      document.body.addEventListener(tracklistId, function (e) {
        if (e.detail.index !== _this.$store[id].track_index) {
          _this.$store[id].changeTrack(e.detail.index);

          _this.current_track.audio.currentTime = 0;

          _this.current_track.audio.play();
        } else {
          e.detail.play ? _this.current_track.audio.play() : _this.current_track.audio.pause();
        }
      });
      document.body.addEventListener('pauseAllMedia', function () {
        _this.current_track.audio.pause();
      });
    },
    formatTime: function formatTime(seconds) {
      return new Date(seconds * 1000).toISOString().substr(14, 5);
    },
    playTrack: function playTrack() {
      document.body.dispatchEvent(new CustomEvent('pauseAllMedia'));
      this.current_track.audio.play();
    },
    playButtonToggle: function playButtonToggle() {
      this.current_track.audio.paused ? this.playTrack() : this.current_track.audio.pause();
    },
    seekBarClick: function seekBarClick(e) {
      var newTime = this.current_audio_duration * (e.offsetX / e.target.offsetWidth);
      this.current_track.audio.currentTime = newTime;
      this.current_track.audio.play();
    },
    nextTrack: function nextTrack() {
      if (this.$store[id].track_index < this.$store[id].tracklist.length - 1) {
        this.$store[id].changeTrack(this.$store[id].track_index + 1);
        this.current_track.audio.currentTime = 0;
        this.current_track.audio.play();
      } else {
        this.$store[id].changeTrack(0);
        this.current_track.audio.currentTime = 0;
      }
    },
    prevTrack: function prevTrack() {
      this.$store[id].changeTrack(this.$store[id].track_index - 1);
      this.current_track.audio.currentTime = 0;
      this.current_track.audio.play();
    },
    updateMediaSession: function updateMediaSession() {
      var _this2 = this;

      var artist = '';
      var album = '';

      if (product_title.indexOf(' - ') > -1) {
        var splitTitle = product_title.split(' - ');
        artist = splitTitle[0];
        album = splitTitle[1];
      } else {
        artist = product_title;
      }

      if ('mediaSession' in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
          title: this.current_track.title,
          artist: artist,
          album: album,
          artwork: [{
            src: this.featured_media_url.replace('{width}', '96'),
            sizes: '96x96'
          }, {
            src: this.featured_media_url.replace('{width}', '128'),
            sizes: '128x128'
          }, {
            src: this.featured_media_url.replace('{width}', '192'),
            sizes: '192x192'
          }, {
            src: this.featured_media_url.replace('{width}', '256'),
            sizes: '256x256'
          }, {
            src: this.featured_media_url.replace('{width}', '384'),
            sizes: '384x384'
          }, {
            src: this.featured_media_url.replace('{width}', '512'),
            sizes: '512x512'
          }]
        });

        if (this.$store[id].track_index > 0) {
          navigator.mediaSession.setActionHandler('previoustrack', function () {
            _this2.prevTrack();
          });
        }

        if (this.$store[id].track_index !== this.$store[id].tracklist.length - 1) {
          navigator.mediaSession.setActionHandler('nexttrack', function () {
            _this2.nextTrack();
          });
        }
      }
    },
    decodeHTML: function decodeHTML(html) {
      var txt = document.createElement('textarea');
      txt.innerHTML = html;
      return txt.value;
    }
  };
});

/***/ })

/******/ });