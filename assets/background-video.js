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
/******/ 	return __webpack_require__(__webpack_require__.s = 67);
/******/ })
/************************************************************************/
/******/ ({

/***/ 12:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(9),
    getRawTag = __webpack_require__(17),
    objectToString = __webpack_require__(18);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

var baseTrim = __webpack_require__(19),
    isObject = __webpack_require__(6),
    isSymbol = __webpack_require__(21);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(12)))

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(9);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ 18:
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

var trimmedEndIndex = __webpack_require__(20);

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(13),
    isObjectLike = __webpack_require__(22);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ 22:
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(7);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6),
    now = __webpack_require__(23),
    toNumber = __webpack_require__(14);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


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

/***/ 6:
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@switchthemes/library-loader/index.js
var library_loader = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/@switchthemes/video-component-observer/index.js
/**
 * Video Component Observer
 *
 * Creates a global instance of IntersectionObserver,
 * with a rootMargin tuned for pausing out-of-viewport
 * video components
 *
 * @fires VideoComponentObserver#`${namespace}:video-component:visible`
 * @fires VideoComponentObserver#`${namespace}:video-component:not-visible`
 */

 const VideoComponentObserver = (function () {
  function VideoComponentObserver() {
    let globalThemeName;

    if (true) {
      globalThemeName = "Label";
    } else {}

    const namespace = globalThemeName.toLowerCase();

    this.options = {
      rootMargin: "25% 0px 75% 0px",
    }

    this.callback = function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.dispatchEvent(
            new CustomEvent(`${namespace}:video-component:visible`, {
              bubbles: false,
              cancelable: false
            })
          );
        } else {
          entry.target.dispatchEvent(
            new CustomEvent(`${namespace}:video-component:not-visible`, {
              bubbles: false,
              cancelable: false
            })
          );
        }
      });
    }

    this._observedElementsCount = 0;
  }

  VideoComponentObserver.prototype = Object.assign({}, VideoComponentObserver.prototype, {
    _init: function () {
      if (!('IntersectionObserver' in window)) {
        return;
      }

      this._observer = new IntersectionObserver(
        this.callback,
        this.options
      );
    },

    _isInitialized: function () {
      if (this._observedElementsCount > 0) {
        return true;
      }

      return false;
    },

    /**
     * Start observing the video section
     *
     * @param {HTMLElement} containerEl The video section’s container element
     */

    observe: function (containerEl) {
      try {
        if (!this._isInitialized()) {
          this._init();
        }

        this._observer.observe(containerEl);

        this._observedElementsCount++;
      } catch (e) {
        console.error(e);
      }
    },

    /**
     * Stop observing the video section
     *
     * @param {HTMLElement} containerEl The video section’s container element
     */

    unobserve: function (containerEl) {
      if (this._observer) {
        this._observer.unobserve(containerEl);
        this._observedElementsCount--;

        if (this._observedElementsCount === 0) {
          this._deInit();
        }
      }
    },

    _deInit: function () {
      this._observer.disconnect();
    }
  });

  return VideoComponentObserver;
})();

/* harmony default export */ var video_component_observer = (VideoComponentObserver);

// EXTERNAL MODULE: ./node_modules/lodash/debounce.js
var debounce = __webpack_require__(4);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);

// CONCATENATED MODULE: ./src/scripts/modules/background-video.js



/**
 * Background video component
 * ------------------------------------------------------------------------------
 *
 */
// Keeping the players here instead of
// as a property on the section
// inexplicably makes playback smoother

var ytPlayers = [];
defineGlobalOnce('ThemeModule_BackgroundVideo', function (_ref) {
  var videoType = _ref.videoType,
      videoId = _ref.videoId;
  return {
    mounted: function mounted() {
      if (!videoType || !videoId) {
        this._showFallBackImage();

        return;
      }

      this.componentId = this.$el.id;
      this.videoProvider = videoType;
      this.videoId = videoId;
      this.playerId = "player-".concat(this.componentId);
      this.YTReady = false;
      this.selectors = {
        fallBackImage: '[data-fallback-image]',
        player: "#".concat(this.playerId)
      };
      this.classes = {
        isPlaying: 'is-playing',
        hidden: 'hide',
        errorElClass: 'background-video__error',
        tallIframeClass: 'background-video-iframe--tall'
      };
      this.eventHandlers = {};

      this._init();
    },
    _onPlayerStateChange: function _onPlayerStateChange(playerState) {
      var thisPlayer = ytPlayers[this.playerId];

      if (playerState === 1) {
        this._hideFallBackImage();

        this.$el.classList.add(this.classes.isPlaying);
      }

      if (playerState === -1) {
        this.$el.classList.remove(this.classes.isPlaying);

        if (thisPlayer.didBuffer === true) {
          // Loading or playing failed
          this._showFallBackImage();
        }
      }

      if (playerState === 3) {
        thisPlayer.didBuffer = true;
      }
    },
    _init: function _init() {
      var _this = this;

      if (this.videoProvider === 'youtube') {
        if (typeof YT !== 'undefined') {
          this._initYTVideo();
        } else {
          document.body.addEventListener('youtubeiframeapiready', function () {
            _this._initYTVideo();
          });
          library_loader["a" /* default */].load('youtubeSdk');
        }
      } else {
        this.htmlVideoEl = this.$el.querySelector('video');
        this.htmlVideoEl.id = this.playerId;

        this._initVideoContainerObserver();
      }

      this.fallBackImageEl = this.$el.querySelector(this.selectors.fallBackImage);
      this.playerEl = this.$el.querySelector(this.selectors.player);
      this.eventHandlers.inView = this._inView.bind(this);
      this.eventHandlers.outOfView = this._outOfView.bind(this);
      this.$el.addEventListener('label:video-component:visible', this.eventHandlers.inView);
      this.$el.addEventListener('label:video-component:not-visible', this.eventHandlers.outOfView);
    },
    _showFallBackImage: function _showFallBackImage() {
      if (!this.fallBackImageEl) return;
      this.fallBackImageEl.classList.remove(this.classes.hidden);
      if (!this.playerEl) return;
      this.playerEl.classList.add(this.classes.hidden);
    },
    _hideFallBackImage: function _hideFallBackImage() {
      if (!this.fallBackImageEl) return;
      this.fallBackImageEl.classList.add(this.classes.hidden);
      if (!this.playerEl) return;
      this.playerEl.classList.remove(this.classes.hidden);
    },
    _showErrorMessage: function _showErrorMessage(errorMessage) {
      var existingErrorEl = this.$el.querySelector(".".concat(this.classes.errorElClass));

      if (existingErrorEl !== null) {
        existingErrorEl.remove();
      }

      var errorEl = document.createElement('div');
      errorEl.classList.add(this.classes.errorElClass);
      errorEl.innerText = errorMessage;
      this.$el.prepend(errorEl);
    },
    _onYTPlayerError: function _onYTPlayerError(e) {
      var errorMessage = '';

      switch (e.data) {
        case 2:
          errorMessage = 'Label Background Video: Invalid parameter value';
          break;

        case 100:
          errorMessage = 'Label Background Video: Video not found';
          break;

        case 101:
        case 150:
          errorMessage = 'Label Background Video: Video owner does not permit embedding';
          break;

        default:
          errorMessage = 'Label Background Video: An error occurred';
      }

      if (errorMessage !== '') {
        console.error(errorMessage);

        if (Shopify.designMode) {
          this._showErrorMessage(errorMessage);
        }
      }

      if (!Shopify.designMode) {
        this._showFallBackImage();
      }
    },
    _onYTPlayerReady: function _onYTPlayerReady() {
      if (this.YTReady === true) {
        this._play();
      } else {
        this.YTReady = true;

        this._initResponsiveVideoContainer();

        this._initVideoContainerObserver();
      }
    },
    _initYTVideo: function _initYTVideo() {
      ytPlayers[this.playerId] = new YT.Player(this.playerId, {
        videoId: this.videoId,
        width: 1280,
        height: 720,
        events: {
          onError: function (e) {
            this._onYTPlayerError(e);
          }.bind(this),
          onReady: function (e) {
            this._onYTPlayerReady(e);
          }.bind(this),
          onStateChange: function (e) {
            // Loop; call method on player
            // directly to minimize brief flash
            if (e.data === 0) {
              e.target.seekTo(0);
            }

            this._onPlayerStateChange(e.data);
          }.bind(this)
        },
        playerVars: {
          autohide: 0,
          branding: 0,
          cc_load_policy: 0,
          controls: 0,
          fs: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          playsinline: 1,
          quality: 'hd720',
          rel: 0,
          showinfo: 0,
          wmode: 'opaque'
        }
      });
      document.getElementById(this.playerId).setAttribute('tabindex', '-1');
    },
    _inView: function _inView() {
      this._play();
    },
    _outOfView: function _outOfView() {
      this._pause();
    },
    _play: function _play() {
      if (this.videoProvider === 'youtube') {
        if (this.YTReady === true) {
          var ytPlayer = ytPlayers[this.playerId];
          ytPlayer.mute();
          ytPlayer.playVideo();
        }
      } else {
        this.htmlVideoEl.play();
      }
    },
    _pause: function _pause() {
      if (this.videoProvider === 'youtube') {
        if (this.YTReady === true) {
          ytPlayers[this.playerId].pauseVideo();
        }
      } else {
        this.htmlVideoEl.pause();
      }
    },

    /**
     * Watch the aspect ratio of the container
     * and assign classes accordingly; for tall
     * iframes, calculate width and left offset
     */
    _checkContainerSize: function _checkContainerSize() {
      var playerEl = document.getElementById(this.playerId);
      /**
       * Assume 16/9 ratio
       */

      var videoRatio = (16 / 9).toFixed(2);
      var containerAspectRatio = (this.$el.clientWidth / this.$el.clientHeight).toFixed(2);
      playerEl.classList.remove(this.classes.tallIframeClass);
      playerEl.style.width = '';
      playerEl.style.left = '';

      if (containerAspectRatio < videoRatio) {
        playerEl.classList.add(this.classes.tallIframeClass);
        var newWidth = (videoRatio / containerAspectRatio * 100).toFixed(2);
        var newLeft = (newWidth - 100) / 2;
        playerEl.style.width = "".concat(newWidth, "%");
        playerEl.style.left = "-".concat(newLeft, "%");
      }
    },
    _initResponsiveVideoContainer: function _initResponsiveVideoContainer() {
      this._checkContainerSize();

      this._debouncedCheckContainerSize = debounce_default()(this._checkContainerSize.bind(this), 300);
      window.addEventListener('resize', this._debouncedCheckContainerSize);
    },
    _initVideoContainerObserver: function _initVideoContainerObserver() {
      if (typeof window.Label._videoComponentObserver === 'undefined') {
        window.Label._videoComponentObserver = new video_component_observer();
      }

      window.Label._videoComponentObserver.observe(this.$el);
    },
    deinit: function deinit() {
      window.Label._videoComponentObserver.unobserve(this.$el);

      window.removeEventListener('resize', this._debouncedCheckContainerSize);
      this.$el.removeEventListener('label:video-component:visible', this.eventHandlers.inView);
      this.$el.removeEventListener('label:video-component:not-visible', this.eventHandlers.outOfView);
      window.removeEventListener('resize', this._debouncedCheckContainerSize);
      ytPlayers[this.playerId].destroy();
    }
  };
});

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(16);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(7);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ })

/******/ });