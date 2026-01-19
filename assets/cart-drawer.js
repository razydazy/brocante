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
/******/ 	return __webpack_require__(__webpack_require__.s = 60);
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

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatMoney = formatMoney;
/**
 * Currency Helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions that help with currency formatting
 *
 * Current contents
 * - formatMoney - Takes an amount in cents and returns it as a formatted dollar value.
 *
 */

var moneyFormat = '${{amount}}';

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
  var value = '';
  var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
  var formatString = format || moneyFormat;

  function formatWithDelimiters(number) {
    var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    var thousands = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ',';
    var decimal = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '.';

    if (isNaN(number) || number == null) {
      return 0;
    }

    number = (number / 100.0).toFixed(precision);

    var parts = number.split('.');
    var dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands);
    var centsAmount = parts[1] ? decimal + parts[1] : '';

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


/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ getState; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ addItem; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ addItemFromForm; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ updateItem; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ updateNote; });

// UNUSED EXPORTS: getItemIndex, getItem, removeItem, clearItems, getAttributes, updateAttributes, clearAttributes, getNote, clearNote, getShippingRates

// CONCATENATED MODULE: ./node_modules/@shopify/theme-cart/request.js
function getDefaultRequestConfig() {
  return JSON.parse(
    JSON.stringify({
      credentials: 'same-origin',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json;'
      }
    })
  );
}

function fetchJSON(url, config) {
  return fetch(url, config).then(function(response) {
    if (!response.ok) {
      throw response;
    }
    return response.json();
  });
}

function cart() {
  return fetchJSON('/cart.js', getDefaultRequestConfig());
}

function cartAdd(id, quantity, properties) {
  var config = getDefaultRequestConfig();

  config.method = 'POST';
  config.body = JSON.stringify({
    id: id,
    quantity: quantity,
    properties: properties
  });

  return fetchJSON('/cart/add.js', config);
}

function cartAddFromForm(formData) {
  var config = getDefaultRequestConfig();
  delete config.headers['Content-Type'];

  config.method = 'POST';
  config.body = formData;

  return fetchJSON('/cart/add.js', config);
}

function cartChange(line, options) {
  var config = getDefaultRequestConfig();

  options = options || {};

  config.method = 'POST';
  config.body = JSON.stringify({
    line: line,
    quantity: options.quantity,
    properties: options.properties
  });

  return fetchJSON('/cart/change.js', config);
}

function cartClear() {
  var config = getDefaultRequestConfig();
  config.method = 'POST';

  return fetchJSON('/cart/clear.js', config);
}

function cartUpdate(body) {
  var config = getDefaultRequestConfig();

  config.method = 'POST';
  config.body = JSON.stringify(body);

  return fetchJSON('/cart/update.js', config);
}

function cartShippingRates() {
  return fetchJSON('/cart/shipping_rates.json', getDefaultRequestConfig());
}

// CONCATENATED MODULE: ./node_modules/@shopify/theme-cart/validate.js
function validate_key(key) {
  if (typeof key !== 'string' || key.split(':').length !== 2) {
    throw new TypeError(
      'Theme Cart: Provided key value is not a string with the format xxx:xxx'
    );
  }
}

function quantity(quantity) {
  if (typeof quantity !== 'number' || isNaN(quantity)) {
    throw new TypeError(
      'Theme Cart: An object which specifies a quantity or properties value is required'
    );
  }
}

function validate_id(id) {
  if (typeof id !== 'number' || isNaN(id)) {
    throw new TypeError('Theme Cart: Variant ID must be a number');
  }
}

function properties(properties) {
  if (typeof properties !== 'object') {
    throw new TypeError('Theme Cart: Properties must be an object');
  }
}

function validate_form(form) {
  if (!(form instanceof HTMLFormElement)) {
    throw new TypeError('Theme Cart: Form must be an instance of HTMLFormElement');
  }
}

function validate_options(options) {
  if (typeof options !== 'object') {
    throw new TypeError('Theme Cart: Options must be an object');
  }

  if (
    typeof options.quantity === 'undefined' &&
    typeof options.properties === 'undefined'
  ) {
    throw new Error(
      'Theme Cart: You muse define a value for quantity or properties'
    );
  }

  if (typeof options.quantity !== 'undefined') {
    quantity(options.quantity);
  }

  if (typeof options.properties !== 'undefined') {
    properties(options.properties);
  }
}

// CONCATENATED MODULE: ./node_modules/@shopify/theme-cart/theme-cart.js
/**
 * Cart Template Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Cart template.
 *
 * @namespace cart
 */




/**
 * Returns the state object of the cart
 * @returns {Promise} Resolves with the state object of the cart (https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#get-cart)
 */
function getState() {
  return cart();
}

/**
 * Returns the index of the cart line item
 * @param {string} key The unique key of the line item
 * @returns {Promise} Resolves with the index number of the line item
 */
function getItemIndex(key) {
  validate_key(key);

  return cart().then(function(state) {
    var index = -1;

    state.items.forEach(function(item, i) {
      index = item.key === key ? i + 1 : index;
    });

    if (index === -1) {
      return Promise.reject(
        new Error('Theme Cart: Unable to match line item with provided key')
      );
    }

    return index;
  });
}

/**
 * Fetches the line item object
 * @param {string} key The unique key of the line item
 * @returns {Promise} Resolves with the line item object (See response of cart/add.js https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#add-to-cart)
 */
function getItem(key) {
  validate_key(key);

  return cart().then(function(state) {
    var lineItem = null;

    state.items.forEach(function(item) {
      lineItem = item.key === key ? item : lineItem;
    });

    if (lineItem === null) {
      return Promise.reject(
        new Error('Theme Cart: Unable to match line item with provided key')
      );
    }

    return lineItem;
  });
}

/**
 * Add a new line item to the cart
 * @param {number} id The variant's unique ID
 * @param {object} options Optional values to pass to /cart/add.js
 * @param {number} options.quantity The quantity of items to be added to the cart
 * @param {object} options.properties Line item property key/values (https://help.shopify.com/en/themes/liquid/objects/line_item#line_item-properties)
 * @returns {Promise} Resolves with the line item object (See response of cart/add.js https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#add-to-cart)
 */
function addItem(id, options) {
  options = options || {};

  validate_id(id);

  return cartAdd(id, options.quantity, options.properties);
}

/**
 * Add a new line item to the cart from a product form
 * @param {object} form DOM element which is equal to the <form> node
 * @returns {Promise} Resolves with the line item object (See response of cart/add.js https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#add-to-cart)
 */
function addItemFromForm(form) {
  validate_form(form);

  var formData = new FormData(form);
  validate_id(parseInt(formData.get('id'), 10));

  return cartAddFromForm(formData);
}

/**
 * Changes the quantity and/or properties of an existing line item.
 * @param {string} key The unique key of the line item (https://help.shopify.com/en/themes/liquid/objects/line_item#line_item-key)
 * @param {object} options Optional values to pass to /cart/add.js
 * @param {number} options.quantity The quantity of items to be added to the cart
 * @param {object} options.properties Line item property key/values (https://help.shopify.com/en/themes/liquid/objects/line_item#line_item-properties)
 * @returns {Promise} Resolves with the state object of the cart (https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#get-cart)
 */
function updateItem(key, options) {
  validate_key(key);
  validate_options(options);

  return getItemIndex(key).then(function(line) {
    return cartChange(line, options);
  });
}

/**
 * Removes a line item from the cart
 * @param {string} key The unique key of the line item (https://help.shopify.com/en/themes/liquid/objects/line_item#line_item-key)
 * @returns {Promise} Resolves with the state object of the cart (https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#get-cart)
 */
function removeItem(key) {
  validate_key(key);

  return getItemIndex(key).then(function(line) {
    return cartChange(line, { quantity: 0 });
  });
}

/**
 * Sets all quantities of all line items in the cart to zero. This does not remove cart attributes nor the cart note.
 * @returns {Promise} Resolves with the state object of the cart (https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#get-cart)
 */
function clearItems() {
  return cartClear();
}

/**
 * Gets all cart attributes
 * @returns {Promise} Resolves with the cart attributes object
 */
function getAttributes() {
  return cart().then(function(state) {
    return state.attributes;
  });
}

/**
 * Sets all cart attributes
 * @returns {Promise} Resolves with the cart state object
 */
function updateAttributes(attributes) {
  return cartUpdate({ attributes: attributes });
}

/**
 * Clears all cart attributes
 * @returns {Promise} Resolves with the cart state object
 */
function clearAttributes() {
  return getAttributes().then(function(attributes) {
    for (var key in attributes) {
      attributes[key] = '';
    }
    return updateAttributes(attributes);
  });
}

/**
 * Gets cart note
 * @returns {Promise} Resolves with the cart note string
 */
function getNote() {
  return cart().then(function(state) {
    return state.note;
  });
}

/**
 * Sets cart note
 * @returns {Promise} Resolves with the cart state object
 */
function updateNote(note) {
  return cartUpdate({ note: note });
}

/**
 * Clears cart note
 * @returns {Promise} Resolves with the cart state object
 */
function clearNote() {
  return cartUpdate({ note: '' });
}

/**
 * Get estimated shipping rates.
 * @returns {Promise} Resolves with response of /cart/shipping_rates.json (https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#get-shipping-rates)
 */
function getShippingRates() {
  return cartShippingRates();
}


/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shopify_theme_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _shopify_theme_currency__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _shopify_theme_currency__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_theme_currency__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _switchthemes_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _shopify_theme_images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _shopify_theme_images__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_theme_images__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _switchthemes_live_region__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);





var toggles = document.querySelectorAll('[data-cart-drawer-toggle]');

window['ThemeModule_CartDrawer'] = function (showOnAdd) {
  return {
    state: null,
    lastUpdate: null,
    loading: true,
    updating: false,
    noteUpdating: false,
    errorMessages: {},
    getSizedImageUrl: _shopify_theme_images__WEBPACK_IMPORTED_MODULE_3__["getSizedImageUrl"],
    mounted: function mounted() {
      var _this = this;

      toggles.forEach(function (toggle) {
        toggle.setAttribute('role', 'button');
      });
      this.$watch('state', function (value) {
        if (value) {
          _this.loading = false;
          _this.updating = false;
          _this.rowUpdating = false;
          _this.noteUpdating = false; // Save a non-reactive copy of the state
          // to compare changes against

          _this.lastUpdate = JSON.parse(JSON.stringify(value));
          document.body.dispatchEvent(new CustomEvent('label:modalcart:itemcountupdate', {
            detail: {
              count: value.item_count
            }
          }));
        }
      });
      document.body.addEventListener('label:modalcart:afteradditem', function () {
        _this._getState(function () {
          if (showOnAdd === true) {
            Spruce.store('drawer').cartDrawerOpen = true;
          }
        });
      });

      this._getState();
    },
    _getState: function _getState(callback) {
      var _this2 = this;

      _shopify_theme_cart__WEBPACK_IMPORTED_MODULE_0__[/* getState */ "c"]().then(function (state) {
        _this2.state = state;

        if (typeof callback === 'function') {
          callback();
        }
      });
    },
    flatProperties: function flatProperties(properties) {
      if (!properties || Object(_switchthemes_utilities__WEBPACK_IMPORTED_MODULE_2__[/* objectHasNoKeys */ "d"])(properties)) return [];
      var propertiesArray = [];

      for (var propKey in properties) {
        // Ignore properties that start with
        // an underscore as they are considered
        // 'private' by Shopify
        if (propKey.charAt(0) === '_' || !properties[propKey].trim()) continue;
        var propObj = {};
        propObj['name'] = propKey;
        propObj['value'] = properties[propKey];
        propertiesArray.push(propObj);
      }

      return propertiesArray;
    },
    formatMoney: function formatMoney(amount) {
      return Object(_shopify_theme_currency__WEBPACK_IMPORTED_MODULE_1__["formatMoney"])(amount, window.theme.moneyFormat);
    },
    qtyAdjust: function qtyAdjust($event, item) {
      if (this.updating) return;
      var operation = $event.currentTarget.dataset.qtyAdjust || 'plus';

      if (operation === 'plus') {
        item.quantity++;
      }

      if (operation === 'minus') {
        item.quantity--;

        if (item.quantity <= 0) {
          item.quantity = 0;
        }
      }

      if (operation === 'remove') {
        item.quantity = 0;
      }

      this.updateQuantity(item);
    },
    getCopyFromLastStateUpdate: function getCopyFromLastStateUpdate(item) {
      return this.lastUpdate.items[this.state.items.indexOf(item)];
    },
    updateQuantity: function updateQuantity(item) {
      var _this3 = this;

      var lastQuantity = this.getCopyFromLastStateUpdate(item).quantity || 0;
      if (lastQuantity === item.quantity) return;
      this.updating = true;
      this.rowUpdating = true;
      item.updating = true;
      delete this.errorMessages[item.key];
      _shopify_theme_cart__WEBPACK_IMPORTED_MODULE_0__[/* updateItem */ "d"](item.key, {
        quantity: item.quantity
      }).then(function (state) {
        var newItem = state.items.find(function (newItemData) {
          return newItemData.key == item.key;
        });

        if (newItem) {
          Object(_switchthemes_live_region__WEBPACK_IMPORTED_MODULE_4__[/* cartLiveRegion */ "a"])(newItem, false);

          if (state.item_count === _this3.state.item_count) {
            _this3.errorMessages[item.key] = window.theme.strings.cartAddError.replace('{{ title }}', newItem.title);
          }
        } else {
          if (item.quantity === 0) {
            Object(_switchthemes_live_region__WEBPACK_IMPORTED_MODULE_4__[/* liveRegion */ "b"])(window.theme.strings.quantity + ' 0');
            setTimeout(function () {
              var title = document.getElementById('CartTitle');
              if (title) title.focus();
            }, 100);
          }
        }

        _this3.state = state;
      })["catch"](function (error) {
        error.json().then(function (errorData) {
          if (errorData.status === 422) {
            _this3.errorMessages[item.key] = errorData.message;
            item.quantity = lastQuantity;
          }

          _this3.updating = false;
          _this3.rowUpdating = false;
          item.updating = false;
        });
      });
    },
    updateNote: function updateNote($event) {
      var _this4 = this;

      var value = $event.currentTarget.value || '';
      if (this.lastUpdate.note == value) return;
      this.updating = true;
      this.noteUpdating = true;
      _shopify_theme_cart__WEBPACK_IMPORTED_MODULE_0__[/* updateNote */ "e"](value).then(function (state) {
        _this4.state = state;
      });
    },
    keyupOnInput: function keyupOnInput($event) {
      // This handler must be debounced
      var target = $event.target;
      target.dispatchEvent(new Event('change'));
    },
    getCartImgSrcset: function getCartImgSrcset(src) {
      var sizes = [60, 100, 120, 200];
      return Object(_switchthemes_utilities__WEBPACK_IMPORTED_MODULE_2__[/* getImageSrcset */ "b"])(src, sizes);
    }
  };
};

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.preload = preload;
exports.loadImage = loadImage;
exports.imageSize = imageSize;
exports.getSizedImageUrl = getSizedImageUrl;
exports.removeProtocol = removeProtocol;
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

  for (var i = 0; i < images.length; i++) {
    var image = images[i];
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
  var match = src.match(/.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/);

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

  var match = src.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);

  if (match) {
    var prefix = src.split(match[0]);
    var suffix = match[0];

    return removeProtocol(prefix[0] + '_' + size + suffix);
  } else {
    return null;
  }
}

function removeProtocol(path) {
  return path.replace(/http(s)?:/, '');
}


/***/ })

/******/ });