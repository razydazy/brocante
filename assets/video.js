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
/******/ 	return __webpack_require__(__webpack_require__.s = 61);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ objectHasNoKeys; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ getImageSrcset; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ getSiblings; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* binding */ wrapTable; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ wrapIframe; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Helpers; });

// UNUSED EXPORTS: makeSelectorFromElement, findInstance, keyboardKeys, removeInstance, compact, defaultTo, text_truncate, headerIsActive, getJSTemplate, initAlpineComponent, isEventSupported

// CONCATENATED MODULE: ./node_modules/@switchthemes/utilities/node_modules/@shopify/theme-images/images.js
/**
 * Image Helper Functions
 * -----------------------------------------------------------------------------
 * https://github.com/Shopify/slate.git.
 *
 */

/**
 * Preloads an image in memory and uses the browsers cache to store it until needed.
 *
 * @param {Array} images - A list of image urls
 * @param {String} size - A shopify image size attribute
 */

function preload(images, size) {
  if (typeof images === 'string') {
    images = [images];
  }

  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    loadImage(getSizedImageUrl(image, size));
  }
}

/**
 * Loads and caches an image in the browsers cache.
 * @param {string} path - An image url
 */
function loadImage(path) {
  new Image().src = path;
}

/**
 * Find the Shopify image attribute size
 *
 * @param {string} src
 * @returns {null}
 */
function imageSize(src) {
  const match = src.match(
    /.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/
  );

  if (match) {
    return match[1];
  } else {
    return null;
  }
}

/**
 * Adds a Shopify size attribute to a URL
 *
 * @param src
 * @param size
 * @returns {*}
 */
function getSizedImageUrl(src, size) {
  if (size === null) {
    return src;
  }

  if (size === 'master') {
    return removeProtocol(src);
  }

  const match = src.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);

  if (match) {
    const prefix = src.split(match[0]);
    const suffix = match[0];

    return removeProtocol(`${prefix[0]}_${size}${suffix}`);
  } else {
    return null;
  }
}

function removeProtocol(path) {
  return path.replace(/http(s)?:/, '');
}

// CONCATENATED MODULE: ./node_modules/@switchthemes/utilities/index.js
/**
 * Utility helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions for dealing with arrays and objects
 *
 * @namespace utils
 */

 

 /**
  * Make a selector from an element’s class and its data- and aria- attributes
  *
  * @param {HTMLElement} element The element to create a selector from
  * @param {Array.<String>} exclusions Attribute names to exclude
  */
 
 function makeSelectorFromElement(element, exclusions = []) {
   let selectorAttributes = [],
     classString;
 
   for (var i = 0; i < element.attributes.length; i++) {
     var attribute = element.attributes[i];
 
     if (
       attribute.name.indexOf('data-') === 0 ||
       attribute.name.indexOf('aria-') === 0
     ) {
       if (exclusions.indexOf(attribute.name) === -1) {
         selectorAttributes.push(attribute);
       }
     }
 
     if (attribute.name === 'class' && attribute.value) {
       classString = attribute.value;
     }
   }
 
   let selector = '';
 
   if (classString && classString !== '') {
     selector += '.' + classString.split(/\s+/).join('.');
   }
 
   if (selectorAttributes && selectorAttributes.length > 0) {
     for (var i = 0; i < selectorAttributes.length; i++) {
       var attribute = selectorAttributes[i];
       if (attribute.value) {
         selector += `[${attribute.name}="${attribute.value}"]`;
       } else {
         selector += `[${attribute.name}]`;
       }
     }
   }
 
   return selector;
 }
 
 /**
  * Return an object from an array of objects that matches the provided key and value
  *
  * @param {array} array - Array of objects
  * @param {string} key - Key to match the value against
  * @param {string} value - Value to get match of
  */
 function findInstance(array, key, value) {
   for (var i = 0; i < array.length; i++) {
     if (array[i][key] === value) {
       return array[i];
     }
   }
 }
 
 const keyboardKeys = {
   TAB: 9,
   ENTER: 13,
   ESCAPE: 27,
   LEFTARROW: 37,
   RIGHTARROW: 39,
   SPACE: 32,
 };
 
 /**
  * Remove an object from an array of objects by matching the provided key and value
  *
  * @param {array} array - Array of objects
  * @param {string} key - Key to match the value against
  * @param {string} value - Value to get match of
  */
 function removeInstance(array, key, value) {
   var i = array.length;
   while (i--) {
     if (array[i][key] === value) {
       array.splice(i, 1);
       break;
     }
   }
 
   return array;
 }
 
 /**
  * _.compact from lodash
  * Remove empty/false items from array
  * Source: https://github.com/lodash/lodash/blob/master/compact.js
  *
  * @param {array} array
  */
 function compact(array) {
   var index = -1;
   var length = array == null ? 0 : array.length;
   var resIndex = 0;
   var result = [];
 
   while (++index < length) {
     var value = array[index];
     if (value) {
       result[resIndex++] = value;
     }
   }
   return result;
 }
 
 /**
  * _.defaultTo from lodash
  * Checks `value` to determine whether a default value should be returned in
  * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
  * or `undefined`.
  * Source: https://github.com/lodash/lodash/blob/master/defaultTo.js
  *
  * @param {*} value - Value to check
  * @param {*} defaultValue - Default value
  * @returns {*} - Returns the resolved value
  */
 function defaultTo(value, defaultValue) {
   return value == null || value !== value ? defaultValue : value;
 }
 
 function text_truncate(str, length, ending) {
   if (length == null) {
     length = 200;
   }
   if (ending == null) {
     ending = '...';
   }
   if (str.length > length) {
     return str.substring(0, length - ending.length) + ending;
   } else {
     return str;
   }
 }
 
 /**
  * A very basic alternative to _.isEmpty for objects
  *
  * @param {Object} obj An object
  */
 
 function objectHasNoKeys(obj) {
   for (var key in obj) {
     if (obj.hasOwnProperty(key)) return false;
   }
 
   return true;
 }
 
 /**
  * Generate an srcset given an image’s src
  * and an array of sizes
  *
  * @param {string} src The image’s src
  * @param {(string|number)[]} sizes The sizes
  *
  * @returns {string}
  */
 
 function getImageSrcset(
   src,
   sizes = [
     180,
     360,
     540,
     720,
     900,
     1080,
     1296,
     1512,
     1728,
     1944,
     2160,
     2376,
     2592,
     2808,
     3024,
   ],
 ) {
   if (!src) return;
 
   const srcset = [];
 
   sizes.forEach((size) => {
     srcset.push(`${getSizedImageUrl(src, size.toString() + 'x')} ${size}w`);
   });
 
   return srcset.join(',\n');
 }
 
 /**
  * Header is active
  */
 
 function headerIsActive() {
   return (
     document.querySelector('.site-header').classList.contains('active') || false
   );
 }
 
 /**
  * Returns the content of a JS Template
  *
  * @param {string} id The id of the template
  */
 function getJSTemplate(id) {
   try {
     return document.getElementById(id).content;
   } catch (e) {
     console.error(`There was an error getting template ${id}`);
     return null;
   }
 }
 
 /**
  * Initialize Alpine component after page load
  *
  * @param {string} functionName Name of Alpine data function for `x-data`
  */
 
 function initAlpineComponent(functionName) {
   if (!functionName) return;
 
   document
     .querySelectorAll(`[data-alpinejs-component="${functionName}()"`)
     .forEach((el) => {
       el.removeAttribute('data-alpinejs-component');
       el.setAttribute('x-data', `${functionName}()`);
       window.Alpine.initializeComponent(el);
     });
 }
 
 const isEventSupported = (function () {
   const TAGNAMES = {
     select: 'input',
     change: 'input',
     submit: 'form',
     reset: 'form',
     error: 'img',
     load: 'img',
     abort: 'img',
   };
 
   function isEventSupported(eventName) {
     let el = document.createElement(TAGNAMES[eventName] || 'div');
     eventName = 'on' + eventName;
 
     const isSupported = eventName in el;
 
     if (!isSupported) {
       el.setAttribute(eventName, 'return;');
       isSupported = typeof el[eventName] == 'function';
     }
     el = null;
     return isSupported;
   }
 
   return isEventSupported;
 })();
 
 /**
  * Get an element's siblings
  *
  * @param {elem} Element for which you want the sibling elements
  */
 
 function getSiblings(elem) {
   // Setup siblings array and get the first sibling
   let siblings = [];
   let sibling = elem.parentNode.firstChild;
 
   // Loop through each sibling and push to the array
   while (sibling) {
     if (sibling.nodeType === 1 && sibling !== elem) {
       siblings.push(sibling);
     }
     sibling = sibling.nextSibling;
   }
 
   return siblings;
 }
 
 /**
  * Wrap tables in a container div to make them scrollable when needed
  *
  * @param {object} options - Options to be used
  * @param {NodeList} options.tables - Elements of the table(s) to wrap
  * @param {string} options.tableWrapperClass - table wrapper class name
  */
 function wrapTable(options) {
   options.tables.forEach(function(table) {
     var wrapper = document.createElement('div');
     wrapper.classList.add(options.tableWrapperClass);
 
     table.parentNode.insertBefore(wrapper, table);
     wrapper.appendChild(table);
   });
 }
 
 /**
  * Wrap iframes in a container div to make them responsive
  *
  * @param {object} options - Options to be used
  * @param {NodeList} options.iframes - Elements of the iframe(s) to wrap
  * @param {string} options.iframeWrapperClass - class name used on the wrapping div
  */
 function wrapIframe(options) {
   options.iframes.forEach(function(iframe) {
     var wrapper = document.createElement('div');
     wrapper.classList.add(options.iframeWrapperClass);
 
     iframe.parentNode.insertBefore(wrapper, iframe);
     wrapper.appendChild(iframe);
 
     iframe.src = iframe.src;
   });
 }

 const Helpers = (function () {
  var touchDevice = false;

  function setTouch() {
    touchDevice = true;
  }

  function isTouch() {
    return touchDevice;
  }

  return {
    setTouch: setTouch,
    isTouch: isTouch,
  };
})();

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const LibraryLoader = (function () {
  const types = {
    link: 'link',
    script: 'script',
  };

  const status = {
    requested: 'requested',
    loaded: 'loaded',
  };

  const cloudCdn = 'https://cdn.shopify.com/shopifycloud/';

  const libraries = {
    youtubeSdk: {
      tagId: 'youtube-sdk',
      src: 'https://www.youtube.com/iframe_api',
      type: types.script,
    },
    vimeoSdk: {
      tagId: 'vimeo-sdk',
      src: 'https://player.vimeo.com/api/player.js',
      type: types.script,
    },
    plyrShopifyStyles: {
      tagId: 'plyr-shopify-styles',
      src: cloudCdn + 'plyr/v2.0/shopify-plyr.css',
      type: types.link,
    },
    shopifyXr: {
      tagId: 'shopify-model-viewer-xr',
      src: cloudCdn + 'shopify-xr-js/assets/v1.0/shopify-xr.en.js',
      type: types.script,
    },
    modelViewerUi: {
      tagId: 'shopify-model-viewer-ui',
      src: cloudCdn + 'model-viewer-ui/assets/v1.0/model-viewer-ui.en.js',
      type: types.script,
    },
    modelViewerUiStyles: {
      tagId: 'shopify-model-viewer-ui-styles',
      src: cloudCdn + 'model-viewer-ui/assets/v1.0/model-viewer-ui.css',
      type: types.link,
    },
  };

  function load(libraryName, callback) {
    const library = libraries[libraryName];

    if (!library) return;
    if (library.status === status.requested) return;

    callback = callback || function () {};
    if (library.status === status.loaded) {
      callback();
      return;
    }

    library.status = status.requested;

    let tag;

    switch (library.type) {
      case types.script:
        tag = createScriptTag(library, callback);
        break;
      case types.link:
        tag = createLinkTag(library, callback);
        break;
    }

    tag.id = library.tagId;
    library.element = tag;

    const firstScriptTag = document.getElementsByTagName(library.type)[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  function createScriptTag(library, callback) {
    const tag = document.createElement('script');
    tag.src = library.src;
    tag.addEventListener('load', function () {
      library.status = status.loaded;
      callback();
    });
    return tag;
  }

  function createLinkTag(library, callback) {
    const tag = document.createElement('link');
    tag.href = library.src;
    tag.rel = 'stylesheet';
    tag.type = 'text/css';
    tag.addEventListener('load', function () {
      library.status = status.loaded;
      callback();
    });
    return tag;
  }

  return {
    load: load,
  };
})();

/* harmony default export */ __webpack_exports__["a"] = (LibraryLoader);


/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _switchthemes_library_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _switchthemes_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


defineGlobalOnce('ThemeModule_Video', function (id, type, host, autoplay) {
  return {
    enabled: false,
    id: id,
    type: type,
    host: host,
    youtubeReady: false,
    productMediaWrapper: null,
    ytPlayer: null,
    vimeoPlayer: null,
    autoPlayOnDesktop: autoplay,
    mounted: function mounted() {
      var _this = this;

      document.addEventListener('touchstart', function () {
        _switchthemes_utilities__WEBPACK_IMPORTED_MODULE_1__[/* Helpers */ "a"].setTouch();
      });
      document.body.addEventListener('pauseAllMedia', function (e) {
        if (e.detail !== null) {
          if (e.detail.id !== _this.id) {
            _this.pause();
          }
        } else {
          _this.pause();
        }
      });

      if (this.host === 'youtube') {
        document.body.addEventListener('youtubeiframeapiready', function () {
          _this.youtubeReady = true;
        });
        _switchthemes_library_loader__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].load('youtubeSdk');
      }

      if (this.host === 'vimeo') {
        _switchthemes_library_loader__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].load('vimeoSdk');
      } //check if this is product media


      this.productMediaWrapper = this.$el.closest('[data-product-single-media-wrapper]');

      if (this.productMediaWrapper !== null) {
        this.setupProductMediaListeners();
      }
    },
    enableVideo: function enableVideo() {
      var _this2 = this;

      this.enabled = true;
      this.$nextTick(function () {
        if (_this2.type === 'video') {
          var video = _this2.$refs.video_container.querySelector('.video');

          video.onplay = function () {
            _this2.dispatchPauseEvent();
          };
        } else {
          if (_this2.host === 'youtube') {
            var youtubeFrame = _this2.$refs.video_container.querySelector('.js-youtube');

            _this2.ytPlayer = new YT.Player(youtubeFrame, {
              events: {
                onStateChange: function (e) {
                  if (e.data === 1) {
                    this.dispatchPauseEvent();
                  }
                }.bind(_this2)
              }
            });
          }

          if (_this2.host === 'vimeo') {
            var vimeoFrame = _this2.$refs.video_container.querySelector('.js-vimeo');

            _this2.vmPlayer = new Vimeo.Player(vimeoFrame);

            _this2.vmPlayer.on('play', function () {
              _this2.dispatchPauseEvent();
            });
          }
        }
      });
    },
    dispatchPauseEvent: function dispatchPauseEvent() {
      document.body.dispatchEvent(new CustomEvent('pauseAllMedia', {
        detail: {
          id: this.id
        }
      }));
    },
    pause: function pause() {
      if (!this.enabled) {
        return false;
      }

      if (this.type === 'video') {
        this.$refs.video_container.querySelector('video').pause();
      } else {
        switch (this.host) {
          case 'youtube':
            this.ytPlayer.pauseVideo();
            break;

          case 'vimeo':
            this.vmPlayer.pause();
            break;
        }
      }
    },
    play: function play() {
      if (!this.enabled) {
        return false;
      }

      if (this.type === 'video') {
        this.$refs.video_container.querySelector('video').play();
      } else {
        switch (this.host) {
          case 'youtube':
            this.ytPlayer.playVideo();
            break;

          case 'vimeo':
            this.vmPlayer.play();
            break;
        }
      } //this.dispatchPauseEvent();

    },
    setupProductMediaListeners: function setupProductMediaListeners() {
      var _this3 = this;

      this.productMediaWrapper.addEventListener('mediaHidden', function () {
        _this3.pause();
      });
      this.productMediaWrapper.addEventListener('xrLaunch', function () {
        _this3.pause();
      }); //function for when it is visible (we don't have thumbnails so commenting this out for now)

      this.productMediaWrapper.addEventListener('mediaVisible', function () {
        if (_switchthemes_utilities__WEBPACK_IMPORTED_MODULE_1__[/* Helpers */ "a"].isTouch()) return;

        if (!_this3.enabled && _this3.autoPlayOnDesktop) {
          _this3.enableVideo();
        } else {
          _this3.play();
        }
      });
    }
  };
});

/***/ })

/******/ });