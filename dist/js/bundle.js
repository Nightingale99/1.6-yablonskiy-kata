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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '../scss/style.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script.js */ "./src/js/script.js");



/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _swiper_bundle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swiper-bundle.js */ "./src/js/swiper-bundle.js");

var swiper = new _swiper_bundle_js__WEBPACK_IMPORTED_MODULE_0__["default"]('.swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  breakpoints: {
    768: {
      spaceBetween: 24,
      allowSlideNext: false,
      allowSlidePrev: false
    },
    1120: {
      spaceBetween: 32,
      allowSlideNext: false,
      allowSlidePrev: false
    }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});
var main = document.querySelector('.main');

function buttonHandler(wrapper, wrapperClass, button, buttonClass) {
  return function changer() {
    if (wrapper.classList.contains(wrapperClass)) {
      wrapper.classList.remove(wrapperClass);
      button.textContent = 'Скрыть';
      button.classList.add(buttonClass);
    } else {
      wrapper.classList.add(wrapperClass);
      button.textContent = 'Показать';
      button.classList.remove(buttonClass);
    }
  };
}
/*repairBrands*/


var repairBrandsButtonMore = main.querySelector('.repair-brands__button-more');
var repairBrandWrapper = main.querySelector('.repair-brands__swiper-wrapper');
var repairBrandsButtonHandler = buttonHandler(repairBrandWrapper, 'repair-brands__swiper-wrapper--hidden', repairBrandsButtonMore, 'repair-brands__button-more--rotate');
repairBrandsButtonMore.addEventListener('click', repairBrandsButtonHandler);
/*repairTechnics*/

var repairTechnicsButtonMore = main.querySelector('.repair-technics__button-more');
var repairTechnicsWrapper = main.querySelector('.repair-technics__swiper-wrapper');
var repairTechnicsButtonHandler = buttonHandler(repairTechnicsWrapper, 'repair-technics__swiper-wrapper--hidden', repairTechnicsButtonMore, 'repair-technics__button-more--rotate');
repairTechnicsButtonMore.addEventListener('click', repairTechnicsButtonHandler);
/*companyInfo*/

var companyInfoButtonMore = main.querySelector('.company-info__button-more');
var companyInfoText = main.querySelector('.company-info__text');
var companyInfoButtonHandler = buttonHandler(companyInfoText, 'company-info__text--hidden', companyInfoButtonMore, 'company-info__button-more--rotate');
companyInfoButtonMore.addEventListener('click', companyInfoButtonHandler);
/**/

var blur = document.querySelector('.blur');
var headerWrapper = document.querySelector('.header');
var burgerButton = headerWrapper.querySelector('.button-link__logo--burger');
var mobileMenu = document.querySelector('.mobile-menu');
burgerButton.addEventListener('click', function () {
  if (mobileMenu.classList.contains('mobile-menu--hidden')) {
    mobileMenu.classList.remove('mobile-menu--hidden');
    document.body.style.overflow = 'hidden';
    blur.style.zIndex = '5';
  }
});

function closeMenu() {
  if (!mobileMenu.classList.contains('mobile-menu--hidden')) {
    mobileMenu.classList.add('mobile-menu--hidden');
    document.body.style.overflow = 'auto';
    blur.style.zIndex = '-1';
  }
}
/*modalCall*/


var modalCall = document.querySelector('.modal-call');

function openCallModal() {
  if (modalCall.classList.contains('modal-call--hidden')) {
    modalCall.classList.remove('modal-call--hidden');
    document.body.style.overflow = 'hidden';
    blur.style.zIndex = '8';
    modalCall.focus();
  }
}

function closeCallModal() {
  if (!modalCall.classList.contains('modal-call--hidden')) {
    modalCall.classList.add('modal-call--hidden');
    document.body.style.overflow = 'auto';
    blur.style.zIndex = '6';
  }

  if (mobileMenu.classList.contains('mobile-menu--hidden')) {
    blur.style.zIndex = '-1';
  }
}

var openModalCallButton = mobileMenu.querySelector('.mobile-button-link__btn--call');
openModalCallButton.addEventListener('click', openCallModal);
var headerOpenModalCallButton = headerWrapper.querySelector('.button-link__logo--call');
headerOpenModalCallButton.addEventListener('click', openCallModal);
var closeModalCallButton = modalCall.querySelector('.modal-call__btn--close');
closeModalCallButton.addEventListener('click', closeCallModal);
/*modalFeedback*/

var modalFeedback = document.querySelector('.modal-feedback');

function openFeedbackModal() {
  if (modalFeedback.classList.contains('modal-feedback--hidden')) {
    modalFeedback.classList.remove('modal-feedback--hidden');
    document.body.style.overflow = 'hidden';
    blur.style.zIndex = '8';
    modalFeedback.focus();
  }
}

function closeFeedbackModal() {
  if (!modalFeedback.classList.contains('modal-feedback--hidden')) {
    modalFeedback.classList.add('modal-feedback--hidden');
    document.body.style.overflow = 'auto';
    blur.style.zIndex = '6';
  }

  if (mobileMenu.classList.contains('mobile-menu--hidden')) {
    blur.style.zIndex = '-1';
  }
}

var openModalFeedbackButton = mobileMenu.querySelector('.mobile-button-link__btn--chat');
openModalFeedbackButton.addEventListener('click', openFeedbackModal);
var headerOpenModalFeedbackButton = headerWrapper.querySelector('.button-link__logo--chat');
headerOpenModalFeedbackButton.addEventListener('click', openFeedbackModal);
var closeModalFeedbackButton = modalFeedback.querySelector('.modal-feedback__btn--close');
closeModalFeedbackButton.addEventListener('click', closeFeedbackModal);
/**/

function closeAllWindows() {
  closeMenu();
  closeCallModal();
  closeFeedbackModal();
}

var closeMenuButton = mobileMenu.querySelector('.mobile-button-link__btn--close');
closeMenuButton.addEventListener('click', closeMenu);
blur.addEventListener('click', closeAllWindows);

/***/ }),

/***/ "./src/js/swiper-bundle.js":
/*!*********************************!*\
  !*** ./src/js/swiper-bundle.js ***!
  \*********************************/
/*! exports provided: default, Swiper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Swiper", function() { return Swiper; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperties(e, t) {
  for (var a = 0; a < t.length; a++) {
    var i = t[a];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
  }
}

function _createClass(e, t, a) {
  return t && _defineProperties(e.prototype, t), a && _defineProperties(e, a), e;
}

function _extends() {
  return (_extends = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];

      for (var i in a) {
        Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
      }
    }

    return e;
  }).apply(this, arguments);
}

function isObject(e) {
  return null !== e && "object" == _typeof(e) && "constructor" in e && e.constructor === Object;
}

function extend(e, t) {
  void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach(function (a) {
    void 0 === e[a] ? e[a] = t[a] : isObject(t[a]) && isObject(e[a]) && Object.keys(t[a]).length > 0 && extend(e[a], t[a]);
  });
}

var ssrDocument = {
  body: {},
  addEventListener: function addEventListener() {},
  removeEventListener: function removeEventListener() {},
  activeElement: {
    blur: function blur() {},
    nodeName: ""
  },
  querySelector: function querySelector() {
    return null;
  },
  querySelectorAll: function querySelectorAll() {
    return [];
  },
  getElementById: function getElementById() {
    return null;
  },
  createEvent: function createEvent() {
    return {
      initEvent: function initEvent() {}
    };
  },
  createElement: function createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute: function setAttribute() {},
      getElementsByTagName: function getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS: function createElementNS() {
    return {};
  },
  importNode: function importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  }
};

function getDocument() {
  var e = "undefined" != typeof document ? document : {};
  return extend(e, ssrDocument), e;
}

var ssrWindow = {
  document: ssrDocument,
  navigator: {
    userAgent: ""
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  },
  history: {
    replaceState: function replaceState() {},
    pushState: function pushState() {},
    go: function go() {},
    back: function back() {}
  },
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener: function addEventListener() {},
  removeEventListener: function removeEventListener() {},
  getComputedStyle: function getComputedStyle() {
    return {
      getPropertyValue: function getPropertyValue() {
        return "";
      }
    };
  },
  Image: function Image() {},
  Date: function Date() {},
  screen: {},
  setTimeout: function setTimeout() {},
  clearTimeout: function clearTimeout() {},
  matchMedia: function matchMedia() {
    return {};
  },
  requestAnimationFrame: function requestAnimationFrame(e) {
    return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame: function cancelAnimationFrame(e) {
    "undefined" != typeof setTimeout && clearTimeout(e);
  }
};

function getWindow() {
  var e = "undefined" != typeof window ? window : {};
  return extend(e, ssrWindow), e;
}

function _inheritsLoose(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}

function _getPrototypeOf(e) {
  return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  })(e);
}

function _setPrototypeOf(e, t) {
  return (_setPrototypeOf = Object.setPrototypeOf || function (e, t) {
    return e.__proto__ = t, e;
  })(e, t);
}

function _isNativeReflectConstruct() {
  if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
  if (Reflect.construct.sham) return !1;
  if ("function" == typeof Proxy) return !0;

  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
  } catch (e) {
    return !1;
  }
}

function _construct(e, t, a) {
  return (_construct = _isNativeReflectConstruct() ? Reflect.construct : function (e, t, a) {
    var i = [null];
    i.push.apply(i, t);
    var s = new (Function.bind.apply(e, i))();
    return a && _setPrototypeOf(s, a.prototype), s;
  }).apply(null, arguments);
}

function _isNativeFunction(e) {
  return -1 !== Function.toString.call(e).indexOf("[native code]");
}

function _wrapNativeSuper(e) {
  var t = "function" == typeof Map ? new Map() : void 0;
  return (_wrapNativeSuper = function _wrapNativeSuper(e) {
    if (null === e || !_isNativeFunction(e)) return e;
    if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");

    if (void 0 !== t) {
      if (t.has(e)) return t.get(e);
      t.set(e, a);
    }

    function a() {
      return _construct(e, arguments, _getPrototypeOf(this).constructor);
    }

    return a.prototype = Object.create(e.prototype, {
      constructor: {
        value: a,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), _setPrototypeOf(a, e);
  })(e);
}

function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}

function makeReactive(e) {
  var t = e.__proto__;
  Object.defineProperty(e, "__proto__", {
    get: function get() {
      return t;
    },
    set: function set(e) {
      t.__proto__ = e;
    }
  });
}

var Dom7 = function (e) {
  function t(t) {
    var a;
    return makeReactive(_assertThisInitialized(a = e.call.apply(e, [this].concat(t)) || this)), a;
  }

  return _inheritsLoose(t, e), t;
}(_wrapNativeSuper(Array));

function arrayFlat(e) {
  void 0 === e && (e = []);
  var t = [];
  return e.forEach(function (e) {
    Array.isArray(e) ? t.push.apply(t, arrayFlat(e)) : t.push(e);
  }), t;
}

function arrayFilter(e, t) {
  return Array.prototype.filter.call(e, t);
}

function arrayUnique(e) {
  for (var t = [], a = 0; a < e.length; a += 1) {
    -1 === t.indexOf(e[a]) && t.push(e[a]);
  }

  return t;
}

function qsa(e, t) {
  if ("string" != typeof e) return [e];

  for (var a = [], i = t.querySelectorAll(e), s = 0; s < i.length; s += 1) {
    a.push(i[s]);
  }

  return a;
}

function $(e, t) {
  var a = getWindow(),
      i = getDocument(),
      s = [];
  if (!t && e instanceof Dom7) return e;
  if (!e) return new Dom7(s);

  if ("string" == typeof e) {
    var r = e.trim();

    if (r.indexOf("<") >= 0 && r.indexOf(">") >= 0) {
      var n = "div";
      0 === r.indexOf("<li") && (n = "ul"), 0 === r.indexOf("<tr") && (n = "tbody"), 0 !== r.indexOf("<td") && 0 !== r.indexOf("<th") || (n = "tr"), 0 === r.indexOf("<tbody") && (n = "table"), 0 === r.indexOf("<option") && (n = "select");
      var o = i.createElement(n);
      o.innerHTML = r;

      for (var l = 0; l < o.childNodes.length; l += 1) {
        s.push(o.childNodes[l]);
      }
    } else s = qsa(e.trim(), t || i);
  } else if (e.nodeType || e === a || e === i) s.push(e);else if (Array.isArray(e)) {
    if (e instanceof Dom7) return e;
    s = e;
  }

  return new Dom7(arrayUnique(s));
}

function addClass() {
  for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) {
    t[a] = arguments[a];
  }

  var i = arrayFlat(t.map(function (e) {
    return e.split(" ");
  }));
  return this.forEach(function (e) {
    var t;
    (t = e.classList).add.apply(t, i);
  }), this;
}

function removeClass() {
  for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) {
    t[a] = arguments[a];
  }

  var i = arrayFlat(t.map(function (e) {
    return e.split(" ");
  }));
  return this.forEach(function (e) {
    var t;
    (t = e.classList).remove.apply(t, i);
  }), this;
}

function toggleClass() {
  for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) {
    t[a] = arguments[a];
  }

  var i = arrayFlat(t.map(function (e) {
    return e.split(" ");
  }));
  this.forEach(function (e) {
    i.forEach(function (t) {
      e.classList.toggle(t);
    });
  });
}

function hasClass() {
  for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) {
    t[a] = arguments[a];
  }

  var i = arrayFlat(t.map(function (e) {
    return e.split(" ");
  }));
  return arrayFilter(this, function (e) {
    return i.filter(function (t) {
      return e.classList.contains(t);
    }).length > 0;
  }).length > 0;
}

function attr(e, t) {
  if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;

  for (var a = 0; a < this.length; a += 1) {
    if (2 === arguments.length) this[a].setAttribute(e, t);else for (var i in e) {
      this[a][i] = e[i], this[a].setAttribute(i, e[i]);
    }
  }

  return this;
}

function removeAttr(e) {
  for (var t = 0; t < this.length; t += 1) {
    this[t].removeAttribute(e);
  }

  return this;
}

function transform(e) {
  for (var t = 0; t < this.length; t += 1) {
    this[t].style.transform = e;
  }

  return this;
}

function transition(e) {
  for (var t = 0; t < this.length; t += 1) {
    this[t].style.transitionDuration = "string" != typeof e ? e + "ms" : e;
  }

  return this;
}

function on() {
  for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) {
    t[a] = arguments[a];
  }

  var i = t[0],
      s = t[1],
      r = t[2],
      n = t[3];

  function o(e) {
    var t = e.target;

    if (t) {
      var a = e.target.dom7EventData || [];
      if (a.indexOf(e) < 0 && a.unshift(e), $(t).is(s)) r.apply(t, a);else for (var i = $(t).parents(), n = 0; n < i.length; n += 1) {
        $(i[n]).is(s) && r.apply(i[n], a);
      }
    }
  }

  function l(e) {
    var t = e && e.target && e.target.dom7EventData || [];
    t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
  }

  "function" == typeof t[1] && (i = t[0], r = t[1], n = t[2], s = void 0), n || (n = !1);

  for (var d, p = i.split(" "), u = 0; u < this.length; u += 1) {
    var c = this[u];
    if (s) for (d = 0; d < p.length; d += 1) {
      var h = p[d];
      c.dom7LiveListeners || (c.dom7LiveListeners = {}), c.dom7LiveListeners[h] || (c.dom7LiveListeners[h] = []), c.dom7LiveListeners[h].push({
        listener: r,
        proxyListener: o
      }), c.addEventListener(h, o, n);
    } else for (d = 0; d < p.length; d += 1) {
      var v = p[d];
      c.dom7Listeners || (c.dom7Listeners = {}), c.dom7Listeners[v] || (c.dom7Listeners[v] = []), c.dom7Listeners[v].push({
        listener: r,
        proxyListener: l
      }), c.addEventListener(v, l, n);
    }
  }

  return this;
}

function off() {
  for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) {
    t[a] = arguments[a];
  }

  var i = t[0],
      s = t[1],
      r = t[2],
      n = t[3];
  "function" == typeof t[1] && (i = t[0], r = t[1], n = t[2], s = void 0), n || (n = !1);

  for (var o = i.split(" "), l = 0; l < o.length; l += 1) {
    for (var d = o[l], p = 0; p < this.length; p += 1) {
      var u = this[p],
          c = void 0;
      if (!s && u.dom7Listeners ? c = u.dom7Listeners[d] : s && u.dom7LiveListeners && (c = u.dom7LiveListeners[d]), c && c.length) for (var h = c.length - 1; h >= 0; h -= 1) {
        var v = c[h];
        r && v.listener === r || r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (u.removeEventListener(d, v.proxyListener, n), c.splice(h, 1)) : r || (u.removeEventListener(d, v.proxyListener, n), c.splice(h, 1));
      }
    }
  }

  return this;
}

function trigger() {
  for (var e = getWindow(), t = arguments.length, a = new Array(t), i = 0; i < t; i++) {
    a[i] = arguments[i];
  }

  for (var s = a[0].split(" "), r = a[1], n = 0; n < s.length; n += 1) {
    for (var o = s[n], l = 0; l < this.length; l += 1) {
      var d = this[l];

      if (e.CustomEvent) {
        var p = new e.CustomEvent(o, {
          detail: r,
          bubbles: !0,
          cancelable: !0
        });
        d.dom7EventData = a.filter(function (e, t) {
          return t > 0;
        }), d.dispatchEvent(p), d.dom7EventData = [], delete d.dom7EventData;
      }
    }
  }

  return this;
}

function transitionEnd(e) {
  var t = this;
  return e && t.on("transitionend", function a(i) {
    i.target === this && (e.call(this, i), t.off("transitionend", a));
  }), this;
}

function outerWidth(e) {
  if (this.length > 0) {
    if (e) {
      var t = this.styles();
      return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
    }

    return this[0].offsetWidth;
  }

  return null;
}

function outerHeight(e) {
  if (this.length > 0) {
    if (e) {
      var t = this.styles();
      return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
    }

    return this[0].offsetHeight;
  }

  return null;
}

function offset() {
  if (this.length > 0) {
    var e = getWindow(),
        t = getDocument(),
        a = this[0],
        i = a.getBoundingClientRect(),
        s = t.body,
        r = a.clientTop || s.clientTop || 0,
        n = a.clientLeft || s.clientLeft || 0,
        o = a === e ? e.scrollY : a.scrollTop,
        l = a === e ? e.scrollX : a.scrollLeft;
    return {
      top: i.top + o - r,
      left: i.left + l - n
    };
  }

  return null;
}

function styles() {
  var e = getWindow();
  return this[0] ? e.getComputedStyle(this[0], null) : {};
}

function css(e, t) {
  var a,
      i = getWindow();

  if (1 === arguments.length) {
    if ("string" != typeof e) {
      for (a = 0; a < this.length; a += 1) {
        for (var s in e) {
          this[a].style[s] = e[s];
        }
      }

      return this;
    }

    if (this[0]) return i.getComputedStyle(this[0], null).getPropertyValue(e);
  }

  if (2 === arguments.length && "string" == typeof e) {
    for (a = 0; a < this.length; a += 1) {
      this[a].style[e] = t;
    }

    return this;
  }

  return this;
}

function each(e) {
  return e ? (this.forEach(function (t, a) {
    e.apply(t, [t, a]);
  }), this) : this;
}

function filter(e) {
  return $(arrayFilter(this, e));
}

function html(e) {
  if (void 0 === e) return this[0] ? this[0].innerHTML : null;

  for (var t = 0; t < this.length; t += 1) {
    this[t].innerHTML = e;
  }

  return this;
}

function text(e) {
  if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;

  for (var t = 0; t < this.length; t += 1) {
    this[t].textContent = e;
  }

  return this;
}

function is(e) {
  var t,
      a,
      i = getWindow(),
      s = getDocument(),
      r = this[0];
  if (!r || void 0 === e) return !1;

  if ("string" == typeof e) {
    if (r.matches) return r.matches(e);
    if (r.webkitMatchesSelector) return r.webkitMatchesSelector(e);
    if (r.msMatchesSelector) return r.msMatchesSelector(e);

    for (t = $(e), a = 0; a < t.length; a += 1) {
      if (t[a] === r) return !0;
    }

    return !1;
  }

  if (e === s) return r === s;
  if (e === i) return r === i;

  if (e.nodeType || e instanceof Dom7) {
    for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1) {
      if (t[a] === r) return !0;
    }

    return !1;
  }

  return !1;
}

function index() {
  var e,
      t = this[0];

  if (t) {
    for (e = 0; null !== (t = t.previousSibling);) {
      1 === t.nodeType && (e += 1);
    }

    return e;
  }
}

function eq(e) {
  if (void 0 === e) return this;
  var t = this.length;
  if (e > t - 1) return $([]);

  if (e < 0) {
    var a = t + e;
    return $(a < 0 ? [] : [this[a]]);
  }

  return $([this[e]]);
}

function append() {
  for (var e, t = getDocument(), a = 0; a < arguments.length; a += 1) {
    e = a < 0 || arguments.length <= a ? void 0 : arguments[a];

    for (var i = 0; i < this.length; i += 1) {
      if ("string" == typeof e) {
        var s = t.createElement("div");

        for (s.innerHTML = e; s.firstChild;) {
          this[i].appendChild(s.firstChild);
        }
      } else if (e instanceof Dom7) for (var r = 0; r < e.length; r += 1) {
        this[i].appendChild(e[r]);
      } else this[i].appendChild(e);
    }
  }

  return this;
}

function prepend(e) {
  var t,
      a,
      i = getDocument();

  for (t = 0; t < this.length; t += 1) {
    if ("string" == typeof e) {
      var s = i.createElement("div");

      for (s.innerHTML = e, a = s.childNodes.length - 1; a >= 0; a -= 1) {
        this[t].insertBefore(s.childNodes[a], this[t].childNodes[0]);
      }
    } else if (e instanceof Dom7) for (a = 0; a < e.length; a += 1) {
      this[t].insertBefore(e[a], this[t].childNodes[0]);
    } else this[t].insertBefore(e, this[t].childNodes[0]);
  }

  return this;
}

function next(e) {
  return this.length > 0 ? e ? this[0].nextElementSibling && $(this[0].nextElementSibling).is(e) ? $([this[0].nextElementSibling]) : $([]) : this[0].nextElementSibling ? $([this[0].nextElementSibling]) : $([]) : $([]);
}

function nextAll(e) {
  var t = [],
      a = this[0];
  if (!a) return $([]);

  for (; a.nextElementSibling;) {
    var i = a.nextElementSibling;
    e ? $(i).is(e) && t.push(i) : t.push(i), a = i;
  }

  return $(t);
}

function prev(e) {
  if (this.length > 0) {
    var t = this[0];
    return e ? t.previousElementSibling && $(t.previousElementSibling).is(e) ? $([t.previousElementSibling]) : $([]) : t.previousElementSibling ? $([t.previousElementSibling]) : $([]);
  }

  return $([]);
}

function prevAll(e) {
  var t = [],
      a = this[0];
  if (!a) return $([]);

  for (; a.previousElementSibling;) {
    var i = a.previousElementSibling;
    e ? $(i).is(e) && t.push(i) : t.push(i), a = i;
  }

  return $(t);
}

function parent(e) {
  for (var t = [], a = 0; a < this.length; a += 1) {
    null !== this[a].parentNode && (e ? $(this[a].parentNode).is(e) && t.push(this[a].parentNode) : t.push(this[a].parentNode));
  }

  return $(t);
}

function parents(e) {
  for (var t = [], a = 0; a < this.length; a += 1) {
    for (var i = this[a].parentNode; i;) {
      e ? $(i).is(e) && t.push(i) : t.push(i), i = i.parentNode;
    }
  }

  return $(t);
}

function closest(e) {
  var t = this;
  return void 0 === e ? $([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
}

function find(e) {
  for (var t = [], a = 0; a < this.length; a += 1) {
    for (var i = this[a].querySelectorAll(e), s = 0; s < i.length; s += 1) {
      t.push(i[s]);
    }
  }

  return $(t);
}

function children(e) {
  for (var t = [], a = 0; a < this.length; a += 1) {
    for (var i = this[a].children, s = 0; s < i.length; s += 1) {
      e && !$(i[s]).is(e) || t.push(i[s]);
    }
  }

  return $(t);
}

function remove() {
  for (var e = 0; e < this.length; e += 1) {
    this[e].parentNode && this[e].parentNode.removeChild(this[e]);
  }

  return this;
}

$.fn = Dom7.prototype;
var support,
    device,
    browser,
    Methods = {
  addClass: addClass,
  removeClass: removeClass,
  hasClass: hasClass,
  toggleClass: toggleClass,
  attr: attr,
  removeAttr: removeAttr,
  transform: transform,
  transition: transition,
  on: on,
  off: off,
  trigger: trigger,
  transitionEnd: transitionEnd,
  outerWidth: outerWidth,
  outerHeight: outerHeight,
  styles: styles,
  offset: offset,
  css: css,
  each: each,
  html: html,
  text: text,
  is: is,
  index: index,
  eq: eq,
  append: append,
  prepend: prepend,
  next: next,
  nextAll: nextAll,
  prev: prev,
  prevAll: prevAll,
  parent: parent,
  parents: parents,
  closest: closest,
  find: find,
  children: children,
  filter: filter,
  remove: remove
};

function deleteProps(e) {
  var t = e;
  Object.keys(t).forEach(function (e) {
    try {
      t[e] = null;
    } catch (e) {}

    try {
      delete t[e];
    } catch (e) {}
  });
}

function nextTick(e, t) {
  return void 0 === t && (t = 0), setTimeout(e, t);
}

function now() {
  return Date.now();
}

function getTranslate(e, t) {
  void 0 === t && (t = "x");
  var a,
      i,
      s,
      r = getWindow(),
      n = r.getComputedStyle(e, null);
  return r.WebKitCSSMatrix ? ((i = n.transform || n.webkitTransform).split(",").length > 6 && (i = i.split(", ").map(function (e) {
    return e.replace(",", ".");
  }).join(", ")), s = new r.WebKitCSSMatrix("none" === i ? "" : i)) : a = (s = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = r.WebKitCSSMatrix ? s.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = r.WebKitCSSMatrix ? s.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0;
}

function isObject$1(e) {
  return "object" == _typeof(e) && null !== e && e.constructor && e.constructor === Object;
}

function extend$1() {
  for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = 1; t < arguments.length; t += 1) {
    var a = t < 0 || arguments.length <= t ? void 0 : arguments[t];
    if (null != a) for (var i = Object.keys(Object(a)), s = 0, r = i.length; s < r; s += 1) {
      var n = i[s],
          o = Object.getOwnPropertyDescriptor(a, n);
      void 0 !== o && o.enumerable && (isObject$1(e[n]) && isObject$1(a[n]) ? extend$1(e[n], a[n]) : !isObject$1(e[n]) && isObject$1(a[n]) ? (e[n] = {}, extend$1(e[n], a[n])) : e[n] = a[n]);
    }
  }

  return e;
}

function bindModuleMethods(e, t) {
  Object.keys(t).forEach(function (a) {
    isObject$1(t[a]) && Object.keys(t[a]).forEach(function (i) {
      "function" == typeof t[a][i] && (t[a][i] = t[a][i].bind(e));
    }), e[a] = t[a];
  });
}

function calcSupport() {
  var e = getWindow(),
      t = getDocument();
  return {
    touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
    pointerEvents: !!e.PointerEvent && "maxTouchPoints" in e.navigator && e.navigator.maxTouchPoints >= 0,
    observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
    passiveListener: function () {
      var t = !1;

      try {
        var a = Object.defineProperty({}, "passive", {
          get: function get() {
            t = !0;
          }
        });
        e.addEventListener("testPassiveListener", null, a);
      } catch (e) {}

      return t;
    }(),
    gestures: "ongesturestart" in e
  };
}

function getSupport() {
  return support || (support = calcSupport()), support;
}

function calcDevice(e) {
  var t = (void 0 === e ? {} : e).userAgent,
      a = getSupport(),
      i = getWindow(),
      s = i.navigator.platform,
      r = t || i.navigator.userAgent,
      n = {
    ios: !1,
    android: !1
  },
      o = i.screen.width,
      l = i.screen.height,
      d = r.match(/(Android);?[\s\/]+([\d.]+)?/),
      p = r.match(/(iPad).*OS\s([\d_]+)/),
      u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
      c = !p && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
      h = "Win32" === s,
      v = "MacIntel" === s;
  return !p && v && a.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(o + "x" + l) >= 0 && ((p = r.match(/(Version)\/([\d.]+)/)) || (p = [0, 1, "13_0_0"]), v = !1), d && !h && (n.os = "android", n.android = !0), (p || c || u) && (n.os = "ios", n.ios = !0), n;
}

function getDevice(e) {
  return void 0 === e && (e = {}), device || (device = calcDevice(e)), device;
}

function calcBrowser() {
  var e,
      t = getWindow();
  return {
    isEdge: !!t.navigator.userAgent.match(/Edge/g),
    isSafari: (e = t.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
  };
}

function getBrowser() {
  return browser || (browser = calcBrowser()), browser;
}

Object.keys(Methods).forEach(function (e) {
  $.fn[e] = Methods[e];
});

var supportsResizeObserver = function supportsResizeObserver() {
  return void 0 !== getWindow().ResizeObserver;
},
    Resize = {
  name: "resize",
  create: function create() {
    var e = this;
    extend$1(e, {
      resize: {
        observer: null,
        createObserver: function createObserver() {
          e && !e.destroyed && e.initialized && (e.resize.observer = new ResizeObserver(function (t) {
            var a = e.width,
                i = e.height,
                s = a,
                r = i;
            t.forEach(function (t) {
              var a = t.contentBoxSize,
                  i = t.contentRect,
                  n = t.target;
              n && n !== e.el || (s = i ? i.width : (a[0] || a).inlineSize, r = i ? i.height : (a[0] || a).blockSize);
            }), s === a && r === i || e.resize.resizeHandler();
          }), e.resize.observer.observe(e.el));
        },
        removeObserver: function removeObserver() {
          e.resize.observer && e.resize.observer.unobserve && e.el && (e.resize.observer.unobserve(e.el), e.resize.observer = null);
        },
        resizeHandler: function resizeHandler() {
          e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
        },
        orientationChangeHandler: function orientationChangeHandler() {
          e && !e.destroyed && e.initialized && e.emit("orientationchange");
        }
      }
    });
  },
  on: {
    init: function init(e) {
      var t = getWindow();
      e.params.resizeObserver && supportsResizeObserver() ? e.resize.createObserver() : (t.addEventListener("resize", e.resize.resizeHandler), t.addEventListener("orientationchange", e.resize.orientationChangeHandler));
    },
    destroy: function destroy(e) {
      var t = getWindow();
      e.resize.removeObserver(), t.removeEventListener("resize", e.resize.resizeHandler), t.removeEventListener("orientationchange", e.resize.orientationChangeHandler);
    }
  }
},
    Observer = {
  attach: function attach(e, t) {
    void 0 === t && (t = {});
    var a = getWindow(),
        i = this,
        s = new (a.MutationObserver || a.WebkitMutationObserver)(function (e) {
      if (1 !== e.length) {
        var t = function t() {
          i.emit("observerUpdate", e[0]);
        };

        a.requestAnimationFrame ? a.requestAnimationFrame(t) : a.setTimeout(t, 0);
      } else i.emit("observerUpdate", e[0]);
    });
    s.observe(e, {
      attributes: void 0 === t.attributes || t.attributes,
      childList: void 0 === t.childList || t.childList,
      characterData: void 0 === t.characterData || t.characterData
    }), i.observer.observers.push(s);
  },
  init: function init() {
    var e = this;

    if (e.support.observer && e.params.observer) {
      if (e.params.observeParents) for (var t = e.$el.parents(), a = 0; a < t.length; a += 1) {
        e.observer.attach(t[a]);
      }
      e.observer.attach(e.$el[0], {
        childList: e.params.observeSlideChildren
      }), e.observer.attach(e.$wrapperEl[0], {
        attributes: !1
      });
    }
  },
  destroy: function destroy() {
    this.observer.observers.forEach(function (e) {
      e.disconnect();
    }), this.observer.observers = [];
  }
},
    Observer$1 = {
  name: "observer",
  params: {
    observer: !1,
    observeParents: !1,
    observeSlideChildren: !1
  },
  create: function create() {
    bindModuleMethods(this, {
      observer: _extends({}, Observer, {
        observers: []
      })
    });
  },
  on: {
    init: function init(e) {
      e.observer.init();
    },
    destroy: function destroy(e) {
      e.observer.destroy();
    }
  }
},
    modular = {
  useParams: function useParams(e) {
    var t = this;
    t.modules && Object.keys(t.modules).forEach(function (a) {
      var i = t.modules[a];
      i.params && extend$1(e, i.params);
    });
  },
  useModules: function useModules(e) {
    void 0 === e && (e = {});
    var t = this;
    t.modules && Object.keys(t.modules).forEach(function (a) {
      var i = t.modules[a],
          s = e[a] || {};
      i.on && t.on && Object.keys(i.on).forEach(function (e) {
        t.on(e, i.on[e]);
      }), i.create && i.create.bind(t)(s);
    });
  }
},
    eventsEmitter = {
  on: function on(e, t, a) {
    var i = this;
    if ("function" != typeof t) return i;
    var s = a ? "unshift" : "push";
    return e.split(" ").forEach(function (e) {
      i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][s](t);
    }), i;
  },
  once: function once(e, t, a) {
    var i = this;
    if ("function" != typeof t) return i;

    function s() {
      i.off(e, s), s.__emitterProxy && delete s.__emitterProxy;

      for (var a = arguments.length, r = new Array(a), n = 0; n < a; n++) {
        r[n] = arguments[n];
      }

      t.apply(i, r);
    }

    return s.__emitterProxy = t, i.on(e, s, a);
  },
  onAny: function onAny(e, t) {
    var a = this;
    if ("function" != typeof e) return a;
    var i = t ? "unshift" : "push";
    return a.eventsAnyListeners.indexOf(e) < 0 && a.eventsAnyListeners[i](e), a;
  },
  offAny: function offAny(e) {
    var t = this;
    if (!t.eventsAnyListeners) return t;
    var a = t.eventsAnyListeners.indexOf(e);
    return a >= 0 && t.eventsAnyListeners.splice(a, 1), t;
  },
  off: function off(e, t) {
    var a = this;
    return a.eventsListeners ? (e.split(" ").forEach(function (e) {
      void 0 === t ? a.eventsListeners[e] = [] : a.eventsListeners[e] && a.eventsListeners[e].forEach(function (i, s) {
        (i === t || i.__emitterProxy && i.__emitterProxy === t) && a.eventsListeners[e].splice(s, 1);
      });
    }), a) : a;
  },
  emit: function emit() {
    var e,
        t,
        a,
        i = this;
    if (!i.eventsListeners) return i;

    for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) {
      r[n] = arguments[n];
    }

    "string" == typeof r[0] || Array.isArray(r[0]) ? (e = r[0], t = r.slice(1, r.length), a = i) : (e = r[0].events, t = r[0].data, a = r[0].context || i), t.unshift(a);
    var o = Array.isArray(e) ? e : e.split(" ");
    return o.forEach(function (e) {
      i.eventsAnyListeners && i.eventsAnyListeners.length && i.eventsAnyListeners.forEach(function (i) {
        i.apply(a, [e].concat(t));
      }), i.eventsListeners && i.eventsListeners[e] && i.eventsListeners[e].forEach(function (e) {
        e.apply(a, t);
      });
    }), i;
  }
};

function updateSize() {
  var e,
      t,
      a = this,
      i = a.$el;
  e = void 0 !== a.params.width && null !== a.params.width ? a.params.width : i[0].clientWidth, t = void 0 !== a.params.height && null !== a.params.height ? a.params.height : i[0].clientHeight, 0 === e && a.isHorizontal() || 0 === t && a.isVertical() || (e = e - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), t = t - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), extend$1(a, {
    width: e,
    height: t,
    size: a.isHorizontal() ? e : t
  }));
}

function updateSlides() {
  var e = this,
      t = function t(_t) {
    return e.isHorizontal() ? _t : {
      width: "height",
      "margin-top": "margin-left",
      "margin-bottom ": "margin-right",
      "margin-left": "margin-top",
      "margin-right": "margin-bottom",
      "padding-left": "padding-top",
      "padding-right": "padding-bottom",
      marginRight: "marginBottom"
    }[_t];
  },
      a = function a(e, _a) {
    return parseFloat(e.getPropertyValue(t(_a)) || 0);
  },
      i = getWindow(),
      s = e.params,
      r = e.$wrapperEl,
      n = e.size,
      o = e.rtlTranslate,
      l = e.wrongRTL,
      d = e.virtual && s.virtual.enabled,
      p = d ? e.virtual.slides.length : e.slides.length,
      u = r.children("." + e.params.slideClass),
      c = d ? e.virtual.slides.length : u.length,
      h = [],
      v = [],
      f = [];

  var m = s.slidesOffsetBefore;
  "function" == typeof m && (m = s.slidesOffsetBefore.call(e));
  var g = s.slidesOffsetAfter;
  "function" == typeof g && (g = s.slidesOffsetAfter.call(e));
  var w = e.snapGrid.length,
      b = e.slidesGrid.length,
      y = s.spaceBetween,
      x = -m,
      E = 0,
      T = 0;

  if (void 0 !== n) {
    var C, S;
    "string" == typeof y && y.indexOf("%") >= 0 && (y = parseFloat(y.replace("%", "")) / 100 * n), e.virtualSize = -y, o ? u.css({
      marginLeft: "",
      marginTop: ""
    }) : u.css({
      marginRight: "",
      marginBottom: ""
    }), s.slidesPerColumn > 1 && (C = Math.floor(c / s.slidesPerColumn) === c / e.params.slidesPerColumn ? c : Math.ceil(c / s.slidesPerColumn) * s.slidesPerColumn, "auto" !== s.slidesPerView && "row" === s.slidesPerColumnFill && (C = Math.max(C, s.slidesPerView * s.slidesPerColumn)));

    for (var M, $, z, P = s.slidesPerColumn, k = C / P, L = Math.floor(c / s.slidesPerColumn), O = 0; O < c; O += 1) {
      S = 0;
      var I = u.eq(O);

      if (s.slidesPerColumn > 1) {
        var D = void 0,
            A = void 0,
            N = void 0;

        if ("row" === s.slidesPerColumnFill && s.slidesPerGroup > 1) {
          var G = Math.floor(O / (s.slidesPerGroup * s.slidesPerColumn)),
              B = O - s.slidesPerColumn * s.slidesPerGroup * G,
              H = 0 === G ? s.slidesPerGroup : Math.min(Math.ceil((c - G * P * s.slidesPerGroup) / P), s.slidesPerGroup);
          D = (A = B - (N = Math.floor(B / H)) * H + G * s.slidesPerGroup) + N * C / P, I.css({
            "-webkit-box-ordinal-group": D,
            "-moz-box-ordinal-group": D,
            "-ms-flex-order": D,
            "-webkit-order": D,
            order: D
          });
        } else "column" === s.slidesPerColumnFill ? (N = O - (A = Math.floor(O / P)) * P, (A > L || A === L && N === P - 1) && (N += 1) >= P && (N = 0, A += 1)) : A = O - (N = Math.floor(O / k)) * k;

        I.css(t("margin-top"), 0 !== N && s.spaceBetween && s.spaceBetween + "px");
      }

      if ("none" !== I.css("display")) {
        if ("auto" === s.slidesPerView) {
          var W = i.getComputedStyle(I[0], null),
              R = I[0].style.transform,
              X = I[0].style.webkitTransform;
          if (R && (I[0].style.transform = "none"), X && (I[0].style.webkitTransform = "none"), s.roundLengths) S = e.isHorizontal() ? I.outerWidth(!0) : I.outerHeight(!0);else {
            var _ = a(W, "width"),
                F = a(W, "padding-left"),
                Y = a(W, "padding-right"),
                V = a(W, "margin-left"),
                q = a(W, "margin-right"),
                j = W.getPropertyValue(W, "box-sizing");

            if (j && "border-box" === j) S = _ + V + q;else {
              var U = I[0],
                  K = U.clientWidth;
              S = _ + F + Y + V + q + (U.offsetWidth - K);
            }
          }
          R && (I[0].style.transform = R), X && (I[0].style.webkitTransform = X), s.roundLengths && (S = Math.floor(S));
        } else S = (n - (s.slidesPerView - 1) * y) / s.slidesPerView, s.roundLengths && (S = Math.floor(S)), u[O] && (u[O].style[t("width")] = S + "px");

        u[O] && (u[O].swiperSlideSize = S), f.push(S), s.centeredSlides ? (x = x + S / 2 + E / 2 + y, 0 === E && 0 !== O && (x = x - n / 2 - y), 0 === O && (x = x - n / 2 - y), Math.abs(x) < .001 && (x = 0), s.roundLengths && (x = Math.floor(x)), T % s.slidesPerGroup == 0 && h.push(x), v.push(x)) : (s.roundLengths && (x = Math.floor(x)), (T - Math.min(e.params.slidesPerGroupSkip, T)) % e.params.slidesPerGroup == 0 && h.push(x), v.push(x), x = x + S + y), e.virtualSize += S + y, E = S, T += 1;
      }
    }

    if (e.virtualSize = Math.max(e.virtualSize, n) + g, o && l && ("slide" === s.effect || "coverflow" === s.effect) && r.css({
      width: e.virtualSize + s.spaceBetween + "px"
    }), s.setWrapperSize) r.css((($ = {})[t("width")] = e.virtualSize + s.spaceBetween + "px", $));
    if (s.slidesPerColumn > 1) if (e.virtualSize = (S + s.spaceBetween) * C, e.virtualSize = Math.ceil(e.virtualSize / s.slidesPerColumn) - s.spaceBetween, r.css(((z = {})[t("width")] = e.virtualSize + s.spaceBetween + "px", z)), s.centeredSlides) {
      M = [];

      for (var Z = 0; Z < h.length; Z += 1) {
        var J = h[Z];
        s.roundLengths && (J = Math.floor(J)), h[Z] < e.virtualSize + h[0] && M.push(J);
      }

      h = M;
    }

    if (!s.centeredSlides) {
      M = [];

      for (var Q = 0; Q < h.length; Q += 1) {
        var ee = h[Q];
        s.roundLengths && (ee = Math.floor(ee)), h[Q] <= e.virtualSize - n && M.push(ee);
      }

      h = M, Math.floor(e.virtualSize - n) - Math.floor(h[h.length - 1]) > 1 && h.push(e.virtualSize - n);
    }

    if (0 === h.length && (h = [0]), 0 !== s.spaceBetween) {
      var te,
          ae = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
      u.filter(function (e, t) {
        return !s.cssMode || t !== u.length - 1;
      }).css(((te = {})[ae] = y + "px", te));
    }

    if (s.centeredSlides && s.centeredSlidesBounds) {
      var ie = 0;
      f.forEach(function (e) {
        ie += e + (s.spaceBetween ? s.spaceBetween : 0);
      });
      var se = (ie -= s.spaceBetween) - n;
      h = h.map(function (e) {
        return e < 0 ? -m : e > se ? se + g : e;
      });
    }

    if (s.centerInsufficientSlides) {
      var re = 0;

      if (f.forEach(function (e) {
        re += e + (s.spaceBetween ? s.spaceBetween : 0);
      }), (re -= s.spaceBetween) < n) {
        var ne = (n - re) / 2;
        h.forEach(function (e, t) {
          h[t] = e - ne;
        }), v.forEach(function (e, t) {
          v[t] = e + ne;
        });
      }
    }

    extend$1(e, {
      slides: u,
      snapGrid: h,
      slidesGrid: v,
      slidesSizesGrid: f
    }), c !== p && e.emit("slidesLengthChange"), h.length !== w && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), v.length !== b && e.emit("slidesGridLengthChange"), (s.watchSlidesProgress || s.watchSlidesVisibility) && e.updateSlidesOffset();
  }
}

function updateAutoHeight(e) {
  var t,
      a = this,
      i = [],
      s = 0;
  if ("number" == typeof e ? a.setTransition(e) : !0 === e && a.setTransition(a.params.speed), "auto" !== a.params.slidesPerView && a.params.slidesPerView > 1) {
    if (a.params.centeredSlides) a.visibleSlides.each(function (e) {
      i.push(e);
    });else for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
      var r = a.activeIndex + t;
      if (r > a.slides.length) break;
      i.push(a.slides.eq(r)[0]);
    }
  } else i.push(a.slides.eq(a.activeIndex)[0]);

  for (t = 0; t < i.length; t += 1) {
    if (void 0 !== i[t]) {
      var n = i[t].offsetHeight;
      s = n > s ? n : s;
    }
  }

  s && a.$wrapperEl.css("height", s + "px");
}

function updateSlidesOffset() {
  for (var e = this.slides, t = 0; t < e.length; t += 1) {
    e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
  }
}

function updateSlidesProgress(e) {
  void 0 === e && (e = this && this.translate || 0);
  var t = this,
      a = t.params,
      i = t.slides,
      s = t.rtlTranslate;

  if (0 !== i.length) {
    void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
    var r = -e;
    s && (r = e), i.removeClass(a.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];

    for (var n = 0; n < i.length; n += 1) {
      var o = i[n],
          l = (r + (a.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + a.spaceBetween);

      if (a.watchSlidesVisibility || a.centeredSlides && a.autoHeight) {
        var d = -(r - o.swiperSlideOffset),
            p = d + t.slidesSizesGrid[n];
        (d >= 0 && d < t.size - 1 || p > 1 && p <= t.size || d <= 0 && p >= t.size) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(n), i.eq(n).addClass(a.slideVisibleClass));
      }

      o.progress = s ? -l : l;
    }

    t.visibleSlides = $(t.visibleSlides);
  }
}

function updateProgress(e) {
  var t = this;

  if (void 0 === e) {
    var a = t.rtlTranslate ? -1 : 1;
    e = t && t.translate && t.translate * a || 0;
  }

  var i = t.params,
      s = t.maxTranslate() - t.minTranslate(),
      r = t.progress,
      n = t.isBeginning,
      o = t.isEnd,
      l = n,
      d = o;
  0 === s ? (r = 0, n = !0, o = !0) : (n = (r = (e - t.minTranslate()) / s) <= 0, o = r >= 1), extend$1(t, {
    progress: r,
    isBeginning: n,
    isEnd: o
  }), (i.watchSlidesProgress || i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) && t.updateSlidesProgress(e), n && !l && t.emit("reachBeginning toEdge"), o && !d && t.emit("reachEnd toEdge"), (l && !n || d && !o) && t.emit("fromEdge"), t.emit("progress", r);
}

function updateSlidesClasses() {
  var e,
      t = this,
      a = t.slides,
      i = t.params,
      s = t.$wrapperEl,
      r = t.activeIndex,
      n = t.realIndex,
      o = t.virtual && i.virtual.enabled;
  a.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = o ? t.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : a.eq(r)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass));
  var l = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
  i.loop && 0 === l.length && (l = a.eq(0)).addClass(i.slideNextClass);
  var d = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
  i.loop && 0 === d.length && (d = a.eq(-1)).addClass(i.slidePrevClass), i.loop && (l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), d.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass)), t.emitSlidesClasses();
}

function updateActiveIndex(e) {
  var t,
      a = this,
      i = a.rtlTranslate ? a.translate : -a.translate,
      s = a.slidesGrid,
      r = a.snapGrid,
      n = a.params,
      o = a.activeIndex,
      l = a.realIndex,
      d = a.snapIndex,
      p = e;

  if (void 0 === p) {
    for (var u = 0; u < s.length; u += 1) {
      void 0 !== s[u + 1] ? i >= s[u] && i < s[u + 1] - (s[u + 1] - s[u]) / 2 ? p = u : i >= s[u] && i < s[u + 1] && (p = u + 1) : i >= s[u] && (p = u);
    }

    n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0);
  }

  if (r.indexOf(i) >= 0) t = r.indexOf(i);else {
    var c = Math.min(n.slidesPerGroupSkip, p);
    t = c + Math.floor((p - c) / n.slidesPerGroup);
  }

  if (t >= r.length && (t = r.length - 1), p !== o) {
    var h = parseInt(a.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
    extend$1(a, {
      snapIndex: t,
      realIndex: h,
      previousIndex: o,
      activeIndex: p
    }), a.emit("activeIndexChange"), a.emit("snapIndexChange"), l !== h && a.emit("realIndexChange"), (a.initialized || a.params.runCallbacksOnInit) && a.emit("slideChange");
  } else t !== d && (a.snapIndex = t, a.emit("snapIndexChange"));
}

function updateClickedSlide(e) {
  var t,
      a = this,
      i = a.params,
      s = $(e.target).closest("." + i.slideClass)[0],
      r = !1;
  if (s) for (var n = 0; n < a.slides.length; n += 1) {
    if (a.slides[n] === s) {
      r = !0, t = n;
      break;
    }
  }
  if (!s || !r) return a.clickedSlide = void 0, void (a.clickedIndex = void 0);
  a.clickedSlide = s, a.virtual && a.params.virtual.enabled ? a.clickedIndex = parseInt($(s).attr("data-swiper-slide-index"), 10) : a.clickedIndex = t, i.slideToClickedSlide && void 0 !== a.clickedIndex && a.clickedIndex !== a.activeIndex && a.slideToClickedSlide();
}

var update = {
  updateSize: updateSize,
  updateSlides: updateSlides,
  updateAutoHeight: updateAutoHeight,
  updateSlidesOffset: updateSlidesOffset,
  updateSlidesProgress: updateSlidesProgress,
  updateProgress: updateProgress,
  updateSlidesClasses: updateSlidesClasses,
  updateActiveIndex: updateActiveIndex,
  updateClickedSlide: updateClickedSlide
};

function getSwiperTranslate(e) {
  void 0 === e && (e = this.isHorizontal() ? "x" : "y");
  var t = this,
      a = t.params,
      i = t.rtlTranslate,
      s = t.translate,
      r = t.$wrapperEl;
  if (a.virtualTranslate) return i ? -s : s;
  if (a.cssMode) return s;
  var n = getTranslate(r[0], e);
  return i && (n = -n), n || 0;
}

function setTranslate(e, t) {
  var a = this,
      i = a.rtlTranslate,
      s = a.params,
      r = a.$wrapperEl,
      n = a.wrapperEl,
      o = a.progress,
      l = 0,
      d = 0;
  a.isHorizontal() ? l = i ? -e : e : d = e, s.roundLengths && (l = Math.floor(l), d = Math.floor(d)), s.cssMode ? n[a.isHorizontal() ? "scrollLeft" : "scrollTop"] = a.isHorizontal() ? -l : -d : s.virtualTranslate || r.transform("translate3d(" + l + "px, " + d + "px, 0px)"), a.previousTranslate = a.translate, a.translate = a.isHorizontal() ? l : d;
  var p = a.maxTranslate() - a.minTranslate();
  (0 === p ? 0 : (e - a.minTranslate()) / p) !== o && a.updateProgress(e), a.emit("setTranslate", a.translate, t);
}

function minTranslate() {
  return -this.snapGrid[0];
}

function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}

function translateTo(e, t, a, i, s) {
  void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0), void 0 === i && (i = !0);
  var r = this,
      n = r.params,
      o = r.wrapperEl;
  if (r.animating && n.preventInteractionOnTransition) return !1;
  var l,
      d = r.minTranslate(),
      p = r.maxTranslate();

  if (l = i && e > d ? d : i && e < p ? p : e, r.updateProgress(l), n.cssMode) {
    var u,
        c = r.isHorizontal();
    if (0 === t) o[c ? "scrollLeft" : "scrollTop"] = -l;else if (o.scrollTo) o.scrollTo(((u = {})[c ? "left" : "top"] = -l, u.behavior = "smooth", u));else o[c ? "scrollLeft" : "scrollTop"] = -l;
    return !0;
  }

  return 0 === t ? (r.setTransition(0), r.setTranslate(l), a && (r.emit("beforeTransitionStart", t, s), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(l), a && (r.emit("beforeTransitionStart", t, s), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (e) {
    r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, a && r.emit("transitionEnd"));
  }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0;
}

var translate = {
  getTranslate: getSwiperTranslate,
  setTranslate: setTranslate,
  minTranslate: minTranslate,
  maxTranslate: maxTranslate,
  translateTo: translateTo
};

function setTransition(e, t) {
  var a = this;
  a.params.cssMode || a.$wrapperEl.transition(e), a.emit("setTransition", e, t);
}

function transitionStart(e, t) {
  void 0 === e && (e = !0);
  var a = this,
      i = a.activeIndex,
      s = a.params,
      r = a.previousIndex;

  if (!s.cssMode) {
    s.autoHeight && a.updateAutoHeight();
    var n = t;

    if (n || (n = i > r ? "next" : i < r ? "prev" : "reset"), a.emit("transitionStart"), e && i !== r) {
      if ("reset" === n) return void a.emit("slideResetTransitionStart");
      a.emit("slideChangeTransitionStart"), "next" === n ? a.emit("slideNextTransitionStart") : a.emit("slidePrevTransitionStart");
    }
  }
}

function transitionEnd$1(e, t) {
  void 0 === e && (e = !0);
  var a = this,
      i = a.activeIndex,
      s = a.previousIndex,
      r = a.params;

  if (a.animating = !1, !r.cssMode) {
    a.setTransition(0);
    var n = t;

    if (n || (n = i > s ? "next" : i < s ? "prev" : "reset"), a.emit("transitionEnd"), e && i !== s) {
      if ("reset" === n) return void a.emit("slideResetTransitionEnd");
      a.emit("slideChangeTransitionEnd"), "next" === n ? a.emit("slideNextTransitionEnd") : a.emit("slidePrevTransitionEnd");
    }
  }
}

var transition$1 = {
  setTransition: setTransition,
  transitionStart: transitionStart,
  transitionEnd: transitionEnd$1
};

function slideTo(e, t, a, i) {
  if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0), "number" != typeof e && "string" != typeof e) throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + _typeof(e) + "] given.");

  if ("string" == typeof e) {
    var s = parseInt(e, 10);
    if (!isFinite(s)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + e + "] given.");
    e = s;
  }

  var r = this,
      n = e;
  n < 0 && (n = 0);
  var o = r.params,
      l = r.snapGrid,
      d = r.slidesGrid,
      p = r.previousIndex,
      u = r.activeIndex,
      c = r.rtlTranslate,
      h = r.wrapperEl;
  if (r.animating && o.preventInteractionOnTransition) return !1;
  var v = Math.min(r.params.slidesPerGroupSkip, n),
      f = v + Math.floor((n - v) / r.params.slidesPerGroup);
  f >= l.length && (f = l.length - 1), (u || o.initialSlide || 0) === (p || 0) && a && r.emit("beforeSlideChangeStart");
  var m,
      g = -l[f];
  if (r.updateProgress(g), o.normalizeSlideIndex) for (var w = 0; w < d.length; w += 1) {
    var b = -Math.floor(100 * g),
        y = Math.floor(100 * d[w]),
        x = Math.floor(100 * d[w + 1]);
    void 0 !== d[w + 1] ? b >= y && b < x - (x - y) / 2 ? n = w : b >= y && b < x && (n = w + 1) : b >= y && (n = w);
  }

  if (r.initialized && n !== u) {
    if (!r.allowSlideNext && g < r.translate && g < r.minTranslate()) return !1;
    if (!r.allowSlidePrev && g > r.translate && g > r.maxTranslate() && (u || 0) !== n) return !1;
  }

  if (m = n > u ? "next" : n < u ? "prev" : "reset", c && -g === r.translate || !c && g === r.translate) return r.updateActiveIndex(n), o.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== o.effect && r.setTranslate(g), "reset" !== m && (r.transitionStart(a, m), r.transitionEnd(a, m)), !1;

  if (o.cssMode) {
    var E,
        T = r.isHorizontal(),
        C = -g;
    if (c && (C = h.scrollWidth - h.offsetWidth - C), 0 === t) h[T ? "scrollLeft" : "scrollTop"] = C;else if (h.scrollTo) h.scrollTo(((E = {})[T ? "left" : "top"] = C, E.behavior = "smooth", E));else h[T ? "scrollLeft" : "scrollTop"] = C;
    return !0;
  }

  return 0 === t ? (r.setTransition(0), r.setTranslate(g), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, i), r.transitionStart(a, m), r.transitionEnd(a, m)) : (r.setTransition(t), r.setTranslate(g), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, i), r.transitionStart(a, m), r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
    r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(a, m));
  }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))), !0;
}

function slideToLoop(e, t, a, i) {
  void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
  var s = this,
      r = e;
  return s.params.loop && (r += s.loopedSlides), s.slideTo(r, t, a, i);
}

function slideNext(e, t, a) {
  void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
  var i = this,
      s = i.params,
      r = i.animating,
      n = i.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;

  if (s.loop) {
    if (r && s.loopPreventsSlide) return !1;
    i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft;
  }

  return i.slideTo(i.activeIndex + n, e, t, a);
}

function slidePrev(e, t, a) {
  void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
  var i = this,
      s = i.params,
      r = i.animating,
      n = i.snapGrid,
      o = i.slidesGrid,
      l = i.rtlTranslate;

  if (s.loop) {
    if (r && s.loopPreventsSlide) return !1;
    i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft;
  }

  function d(e) {
    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
  }

  var p = d(l ? i.translate : -i.translate),
      u = n.map(function (e) {
    return d(e);
  });
  n[u.indexOf(p)];
  var c,
      h = n[u.indexOf(p) - 1];
  return void 0 === h && s.cssMode && n.forEach(function (e) {
    !h && p >= e && (h = e);
  }), void 0 !== h && (c = o.indexOf(h)) < 0 && (c = i.activeIndex - 1), i.slideTo(c, e, t, a);
}

function slideReset(e, t, a) {
  void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
  return this.slideTo(this.activeIndex, e, t, a);
}

function slideToClosest(e, t, a, i) {
  void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === i && (i = .5);
  var s = this,
      r = s.activeIndex,
      n = Math.min(s.params.slidesPerGroupSkip, r),
      o = n + Math.floor((r - n) / s.params.slidesPerGroup),
      l = s.rtlTranslate ? s.translate : -s.translate;

  if (l >= s.snapGrid[o]) {
    var d = s.snapGrid[o];
    l - d > (s.snapGrid[o + 1] - d) * i && (r += s.params.slidesPerGroup);
  } else {
    var p = s.snapGrid[o - 1];
    l - p <= (s.snapGrid[o] - p) * i && (r -= s.params.slidesPerGroup);
  }

  return r = Math.max(r, 0), r = Math.min(r, s.slidesGrid.length - 1), s.slideTo(r, e, t, a);
}

function slideToClickedSlide() {
  var e,
      t = this,
      a = t.params,
      i = t.$wrapperEl,
      s = "auto" === a.slidesPerView ? t.slidesPerViewDynamic() : a.slidesPerView,
      r = t.clickedIndex;

  if (a.loop) {
    if (t.animating) return;
    e = parseInt($(t.clickedSlide).attr("data-swiper-slide-index"), 10), a.centeredSlides ? r < t.loopedSlides - s / 2 || r > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), nextTick(function () {
      t.slideTo(r);
    })) : t.slideTo(r) : r > t.slides.length - s ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), nextTick(function () {
      t.slideTo(r);
    })) : t.slideTo(r);
  } else t.slideTo(r);
}

var slide = {
  slideTo: slideTo,
  slideToLoop: slideToLoop,
  slideNext: slideNext,
  slidePrev: slidePrev,
  slideReset: slideReset,
  slideToClosest: slideToClosest,
  slideToClickedSlide: slideToClickedSlide
};

function loopCreate() {
  var e = this,
      t = getDocument(),
      a = e.params,
      i = e.$wrapperEl;
  i.children("." + a.slideClass + "." + a.slideDuplicateClass).remove();
  var s = i.children("." + a.slideClass);

  if (a.loopFillGroupWithBlank) {
    var r = a.slidesPerGroup - s.length % a.slidesPerGroup;

    if (r !== a.slidesPerGroup) {
      for (var n = 0; n < r; n += 1) {
        var o = $(t.createElement("div")).addClass(a.slideClass + " " + a.slideBlankClass);
        i.append(o);
      }

      s = i.children("." + a.slideClass);
    }
  }

  "auto" !== a.slidesPerView || a.loopedSlides || (a.loopedSlides = s.length), e.loopedSlides = Math.ceil(parseFloat(a.loopedSlides || a.slidesPerView, 10)), e.loopedSlides += a.loopAdditionalSlides, e.loopedSlides > s.length && (e.loopedSlides = s.length);
  var l = [],
      d = [];
  s.each(function (t, a) {
    var i = $(t);
    a < e.loopedSlides && d.push(t), a < s.length && a >= s.length - e.loopedSlides && l.push(t), i.attr("data-swiper-slide-index", a);
  });

  for (var p = 0; p < d.length; p += 1) {
    i.append($(d[p].cloneNode(!0)).addClass(a.slideDuplicateClass));
  }

  for (var u = l.length - 1; u >= 0; u -= 1) {
    i.prepend($(l[u].cloneNode(!0)).addClass(a.slideDuplicateClass));
  }
}

function loopFix() {
  var e = this;
  e.emit("beforeLoopFix");
  var t,
      a = e.activeIndex,
      i = e.slides,
      s = e.loopedSlides,
      r = e.allowSlidePrev,
      n = e.allowSlideNext,
      o = e.snapGrid,
      l = e.rtlTranslate;
  e.allowSlidePrev = !0, e.allowSlideNext = !0;
  var d = -o[a] - e.getTranslate();
  if (a < s) t = i.length - 3 * s + a, t += s, e.slideTo(t, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d);else if (a >= i.length - s) {
    t = -i.length + a + s, t += s, e.slideTo(t, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d);
  }
  e.allowSlidePrev = r, e.allowSlideNext = n, e.emit("loopFix");
}

function loopDestroy() {
  var e = this,
      t = e.$wrapperEl,
      a = e.params,
      i = e.slides;
  t.children("." + a.slideClass + "." + a.slideDuplicateClass + ",." + a.slideClass + "." + a.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index");
}

var loop = {
  loopCreate: loopCreate,
  loopFix: loopFix,
  loopDestroy: loopDestroy
};

function setGrabCursor(e) {
  var t = this;

  if (!(t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)) {
    var a = t.el;
    a.style.cursor = "move", a.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", a.style.cursor = e ? "-moz-grabbin" : "-moz-grab", a.style.cursor = e ? "grabbing" : "grab";
  }
}

function unsetGrabCursor() {
  var e = this;
  e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.el.style.cursor = "");
}

var grabCursor = {
  setGrabCursor: setGrabCursor,
  unsetGrabCursor: unsetGrabCursor
};

function appendSlide(e) {
  var t = this,
      a = t.$wrapperEl,
      i = t.params;
  if (i.loop && t.loopDestroy(), "object" == _typeof(e) && "length" in e) for (var s = 0; s < e.length; s += 1) {
    e[s] && a.append(e[s]);
  } else a.append(e);
  i.loop && t.loopCreate(), i.observer && t.support.observer || t.update();
}

function prependSlide(e) {
  var t = this,
      a = t.params,
      i = t.$wrapperEl,
      s = t.activeIndex;
  a.loop && t.loopDestroy();
  var r = s + 1;

  if ("object" == _typeof(e) && "length" in e) {
    for (var n = 0; n < e.length; n += 1) {
      e[n] && i.prepend(e[n]);
    }

    r = s + e.length;
  } else i.prepend(e);

  a.loop && t.loopCreate(), a.observer && t.support.observer || t.update(), t.slideTo(r, 0, !1);
}

function addSlide(e, t) {
  var a = this,
      i = a.$wrapperEl,
      s = a.params,
      r = a.activeIndex;
  s.loop && (r -= a.loopedSlides, a.loopDestroy(), a.slides = i.children("." + s.slideClass));
  var n = a.slides.length;
  if (e <= 0) a.prependSlide(t);else if (e >= n) a.appendSlide(t);else {
    for (var o = r > e ? r + 1 : r, l = [], d = n - 1; d >= e; d -= 1) {
      var p = a.slides.eq(d);
      p.remove(), l.unshift(p);
    }

    if ("object" == _typeof(t) && "length" in t) {
      for (var u = 0; u < t.length; u += 1) {
        t[u] && i.append(t[u]);
      }

      o = r > e ? r + t.length : r;
    } else i.append(t);

    for (var c = 0; c < l.length; c += 1) {
      i.append(l[c]);
    }

    s.loop && a.loopCreate(), s.observer && a.support.observer || a.update(), s.loop ? a.slideTo(o + a.loopedSlides, 0, !1) : a.slideTo(o, 0, !1);
  }
}

function removeSlide(e) {
  var t = this,
      a = t.params,
      i = t.$wrapperEl,
      s = t.activeIndex;
  a.loop && (s -= t.loopedSlides, t.loopDestroy(), t.slides = i.children("." + a.slideClass));
  var r,
      n = s;

  if ("object" == _typeof(e) && "length" in e) {
    for (var o = 0; o < e.length; o += 1) {
      r = e[o], t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1);
    }

    n = Math.max(n, 0);
  } else r = e, t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1), n = Math.max(n, 0);

  a.loop && t.loopCreate(), a.observer && t.support.observer || t.update(), a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1);
}

function removeAllSlides() {
  for (var e = [], t = 0; t < this.slides.length; t += 1) {
    e.push(t);
  }

  this.removeSlide(e);
}

var manipulation = {
  appendSlide: appendSlide,
  prependSlide: prependSlide,
  addSlide: addSlide,
  removeSlide: removeSlide,
  removeAllSlides: removeAllSlides
};

function onTouchStart(e) {
  var t = this,
      a = getDocument(),
      i = getWindow(),
      s = t.touchEventsData,
      r = t.params,
      n = t.touches;

  if (!t.animating || !r.preventInteractionOnTransition) {
    var o = e;
    o.originalEvent && (o = o.originalEvent);
    var l = $(o.target);
    if ("wrapper" !== r.touchEventsTarget || l.closest(t.wrapperEl).length) if (s.isTouchEvent = "touchstart" === o.type, s.isTouchEvent || !("which" in o) || 3 !== o.which) if (!(!s.isTouchEvent && "button" in o && o.button > 0)) if (!s.isTouched || !s.isMoved) if (!!r.noSwipingClass && "" !== r.noSwipingClass && o.target && o.target.shadowRoot && e.path && e.path[0] && (l = $(e.path[0])), r.noSwiping && l.closest(r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass)[0]) t.allowClick = !0;else if (!r.swipeHandler || l.closest(r.swipeHandler)[0]) {
      n.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, n.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
      var d = n.currentX,
          p = n.currentY,
          u = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
          c = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;

      if (u && (d <= c || d >= i.innerWidth - c)) {
        if ("prevent" !== u) return;
        e.preventDefault();
      }

      if (extend$1(s, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0
      }), n.startX = d, n.startY = p, s.touchStartTime = now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, r.threshold > 0 && (s.allowThresholdMove = !1), "touchstart" !== o.type) {
        var h = !0;
        l.is(s.formElements) && (h = !1), a.activeElement && $(a.activeElement).is(s.formElements) && a.activeElement !== l[0] && a.activeElement.blur();
        var v = h && t.allowTouchMove && r.touchStartPreventDefault;
        !r.touchStartForcePreventDefault && !v || l[0].isContentEditable || o.preventDefault();
      }

      t.emit("touchStart", o);
    }
  }
}

function onTouchMove(e) {
  var t = getDocument(),
      a = this,
      i = a.touchEventsData,
      s = a.params,
      r = a.touches,
      n = a.rtlTranslate,
      o = e;

  if (o.originalEvent && (o = o.originalEvent), i.isTouched) {
    if (!i.isTouchEvent || "touchmove" === o.type) {
      var l = "touchmove" === o.type && o.targetTouches && (o.targetTouches[0] || o.changedTouches[0]),
          d = "touchmove" === o.type ? l.pageX : o.pageX,
          p = "touchmove" === o.type ? l.pageY : o.pageY;
      if (o.preventedByNestedSwiper) return r.startX = d, void (r.startY = p);
      if (!a.allowTouchMove) return a.allowClick = !1, void (i.isTouched && (extend$1(r, {
        startX: d,
        startY: p,
        currentX: d,
        currentY: p
      }), i.touchStartTime = now()));
      if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop) if (a.isVertical()) {
        if (p < r.startY && a.translate <= a.maxTranslate() || p > r.startY && a.translate >= a.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
      } else if (d < r.startX && a.translate <= a.maxTranslate() || d > r.startX && a.translate >= a.minTranslate()) return;
      if (i.isTouchEvent && t.activeElement && o.target === t.activeElement && $(o.target).is(i.formElements)) return i.isMoved = !0, void (a.allowClick = !1);

      if (i.allowTouchCallbacks && a.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) {
        r.currentX = d, r.currentY = p;
        var u = r.currentX - r.startX,
            c = r.currentY - r.startY;

        if (!(a.params.threshold && Math.sqrt(Math.pow(u, 2) + Math.pow(c, 2)) < a.params.threshold)) {
          var h;
          if (void 0 === i.isScrolling) a.isHorizontal() && r.currentY === r.startY || a.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : u * u + c * c >= 25 && (h = 180 * Math.atan2(Math.abs(c), Math.abs(u)) / Math.PI, i.isScrolling = a.isHorizontal() ? h > s.touchAngle : 90 - h > s.touchAngle);
          if (i.isScrolling && a.emit("touchMoveOpposite", o), void 0 === i.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;else if (i.startMoving) {
            a.allowClick = !1, !s.cssMode && o.cancelable && o.preventDefault(), s.touchMoveStopPropagation && !s.nested && o.stopPropagation(), i.isMoved || (s.loop && a.loopFix(), i.startTranslate = a.getTranslate(), a.setTransition(0), a.animating && a.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !s.grabCursor || !0 !== a.allowSlideNext && !0 !== a.allowSlidePrev || a.setGrabCursor(!0), a.emit("sliderFirstMove", o)), a.emit("sliderMove", o), i.isMoved = !0;
            var v = a.isHorizontal() ? u : c;
            r.diff = v, v *= s.touchRatio, n && (v = -v), a.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
            var f = !0,
                m = s.resistanceRatio;

            if (s.touchReleaseOnEdges && (m = 0), v > 0 && i.currentTranslate > a.minTranslate() ? (f = !1, s.resistance && (i.currentTranslate = a.minTranslate() - 1 + Math.pow(-a.minTranslate() + i.startTranslate + v, m))) : v < 0 && i.currentTranslate < a.maxTranslate() && (f = !1, s.resistance && (i.currentTranslate = a.maxTranslate() + 1 - Math.pow(a.maxTranslate() - i.startTranslate - v, m))), f && (o.preventedByNestedSwiper = !0), !a.allowSlideNext && "next" === a.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !a.allowSlidePrev && "prev" === a.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), a.allowSlidePrev || a.allowSlideNext || (i.currentTranslate = i.startTranslate), s.threshold > 0) {
              if (!(Math.abs(v) > s.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
              if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void (r.diff = a.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY);
            }

            s.followFinger && !s.cssMode && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (a.updateActiveIndex(), a.updateSlidesClasses()), s.freeMode && (0 === i.velocities.length && i.velocities.push({
              position: r[a.isHorizontal() ? "startX" : "startY"],
              time: i.touchStartTime
            }), i.velocities.push({
              position: r[a.isHorizontal() ? "currentX" : "currentY"],
              time: now()
            })), a.updateProgress(i.currentTranslate), a.setTranslate(i.currentTranslate));
          }
        }
      }
    }
  } else i.startMoving && i.isScrolling && a.emit("touchMoveOpposite", o);
}

function onTouchEnd(e) {
  var t = this,
      a = t.touchEventsData,
      i = t.params,
      s = t.touches,
      r = t.rtlTranslate,
      n = t.$wrapperEl,
      o = t.slidesGrid,
      l = t.snapGrid,
      d = e;
  if (d.originalEvent && (d = d.originalEvent), a.allowTouchCallbacks && t.emit("touchEnd", d), a.allowTouchCallbacks = !1, !a.isTouched) return a.isMoved && i.grabCursor && t.setGrabCursor(!1), a.isMoved = !1, void (a.startMoving = !1);
  i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
  var p,
      u = now(),
      c = u - a.touchStartTime;
  if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap click", d), c < 300 && u - a.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)), a.lastClickTime = now(), nextTick(function () {
    t.destroyed || (t.allowClick = !0);
  }), !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate) return a.isTouched = !1, a.isMoved = !1, void (a.startMoving = !1);
  if (a.isTouched = !1, a.isMoved = !1, a.startMoving = !1, p = i.followFinger ? r ? t.translate : -t.translate : -a.currentTranslate, !i.cssMode) if (i.freeMode) {
    if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
    if (p > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));

    if (i.freeModeMomentum) {
      if (a.velocities.length > 1) {
        var h = a.velocities.pop(),
            v = a.velocities.pop(),
            f = h.position - v.position,
            m = h.time - v.time;
        t.velocity = f / m, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (m > 150 || now() - h.time > 300) && (t.velocity = 0);
      } else t.velocity = 0;

      t.velocity *= i.freeModeMomentumVelocityRatio, a.velocities.length = 0;
      var g = 1e3 * i.freeModeMomentumRatio,
          w = t.velocity * g,
          b = t.translate + w;
      r && (b = -b);
      var y,
          x,
          E = !1,
          T = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
      if (b < t.maxTranslate()) i.freeModeMomentumBounce ? (b + t.maxTranslate() < -T && (b = t.maxTranslate() - T), y = t.maxTranslate(), E = !0, a.allowMomentumBounce = !0) : b = t.maxTranslate(), i.loop && i.centeredSlides && (x = !0);else if (b > t.minTranslate()) i.freeModeMomentumBounce ? (b - t.minTranslate() > T && (b = t.minTranslate() + T), y = t.minTranslate(), E = !0, a.allowMomentumBounce = !0) : b = t.minTranslate(), i.loop && i.centeredSlides && (x = !0);else if (i.freeModeSticky) {
        for (var C, S = 0; S < l.length; S += 1) {
          if (l[S] > -b) {
            C = S;
            break;
          }
        }

        b = -(b = Math.abs(l[C] - b) < Math.abs(l[C - 1] - b) || "next" === t.swipeDirection ? l[C] : l[C - 1]);
      }

      if (x && t.once("transitionEnd", function () {
        t.loopFix();
      }), 0 !== t.velocity) {
        if (g = r ? Math.abs((-b - t.translate) / t.velocity) : Math.abs((b - t.translate) / t.velocity), i.freeModeSticky) {
          var M = Math.abs((r ? -b : b) - t.translate),
              $ = t.slidesSizesGrid[t.activeIndex];
          g = M < $ ? i.speed : M < 2 * $ ? 1.5 * i.speed : 2.5 * i.speed;
        }
      } else if (i.freeModeSticky) return void t.slideToClosest();

      i.freeModeMomentumBounce && E ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(b), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function () {
        t && !t.destroyed && a.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), setTimeout(function () {
          t.setTranslate(y), n.transitionEnd(function () {
            t && !t.destroyed && t.transitionEnd();
          });
        }, 0));
      })) : t.velocity ? (t.updateProgress(b), t.setTransition(g), t.setTranslate(b), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function () {
        t && !t.destroyed && t.transitionEnd();
      }))) : (t.emit("_freeModeNoMomentumRelease"), t.updateProgress(b)), t.updateActiveIndex(), t.updateSlidesClasses();
    } else {
      if (i.freeModeSticky) return void t.slideToClosest();
      i.freeMode && t.emit("_freeModeNoMomentumRelease");
    }

    (!i.freeModeMomentum || c >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
  } else {
    for (var z = 0, P = t.slidesSizesGrid[0], k = 0; k < o.length; k += k < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
      var L = k < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
      void 0 !== o[k + L] ? p >= o[k] && p < o[k + L] && (z = k, P = o[k + L] - o[k]) : p >= o[k] && (z = k, P = o[o.length - 1] - o[o.length - 2]);
    }

    var O = (p - o[z]) / P,
        I = z < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;

    if (c > i.longSwipesMs) {
      if (!i.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection && (O >= i.longSwipesRatio ? t.slideTo(z + I) : t.slideTo(z)), "prev" === t.swipeDirection && (O > 1 - i.longSwipesRatio ? t.slideTo(z + I) : t.slideTo(z));
    } else {
      if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation && (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl) ? d.target === t.navigation.nextEl ? t.slideTo(z + I) : t.slideTo(z) : ("next" === t.swipeDirection && t.slideTo(z + I), "prev" === t.swipeDirection && t.slideTo(z));
    }
  }
}

function onResize() {
  var e = this,
      t = e.params,
      a = e.el;

  if (!a || 0 !== a.offsetWidth) {
    t.breakpoints && e.setBreakpoint();
    var i = e.allowSlideNext,
        s = e.allowSlidePrev,
        r = e.snapGrid;
    e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = s, e.allowSlideNext = i, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
  }
}

function onClick(e) {
  var t = this;
  t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
}

function onScroll() {
  var e = this,
      t = e.wrapperEl,
      a = e.rtlTranslate;
  e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = a ? t.scrollWidth - t.offsetWidth - t.scrollLeft : -t.scrollLeft : e.translate = -t.scrollTop, -0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
  var i = e.maxTranslate() - e.minTranslate();
  (0 === i ? 0 : (e.translate - e.minTranslate()) / i) !== e.progress && e.updateProgress(a ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
}

var dummyEventAttached = !1;

function dummyEventListener() {}

function attachEvents() {
  var e = this,
      t = getDocument(),
      a = e.params,
      i = e.touchEvents,
      s = e.el,
      r = e.wrapperEl,
      n = e.device,
      o = e.support;
  e.onTouchStart = onTouchStart.bind(e), e.onTouchMove = onTouchMove.bind(e), e.onTouchEnd = onTouchEnd.bind(e), a.cssMode && (e.onScroll = onScroll.bind(e)), e.onClick = onClick.bind(e);
  var l = !!a.nested;
  if (!o.touch && o.pointerEvents) s.addEventListener(i.start, e.onTouchStart, !1), t.addEventListener(i.move, e.onTouchMove, l), t.addEventListener(i.end, e.onTouchEnd, !1);else {
    if (o.touch) {
      var d = !("touchstart" !== i.start || !o.passiveListener || !a.passiveListeners) && {
        passive: !0,
        capture: !1
      };
      s.addEventListener(i.start, e.onTouchStart, d), s.addEventListener(i.move, e.onTouchMove, o.passiveListener ? {
        passive: !1,
        capture: l
      } : l), s.addEventListener(i.end, e.onTouchEnd, d), i.cancel && s.addEventListener(i.cancel, e.onTouchEnd, d), dummyEventAttached || (t.addEventListener("touchstart", dummyEventListener), dummyEventAttached = !0);
    }

    (a.simulateTouch && !n.ios && !n.android || a.simulateTouch && !o.touch && n.ios) && (s.addEventListener("mousedown", e.onTouchStart, !1), t.addEventListener("mousemove", e.onTouchMove, l), t.addEventListener("mouseup", e.onTouchEnd, !1));
  }
  (a.preventClicks || a.preventClicksPropagation) && s.addEventListener("click", e.onClick, !0), a.cssMode && r.addEventListener("scroll", e.onScroll), a.updateOnWindowResize ? e.on(n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, !0) : e.on("observerUpdate", onResize, !0);
}

function detachEvents() {
  var e = this,
      t = getDocument(),
      a = e.params,
      i = e.touchEvents,
      s = e.el,
      r = e.wrapperEl,
      n = e.device,
      o = e.support,
      l = !!a.nested;
  if (!o.touch && o.pointerEvents) s.removeEventListener(i.start, e.onTouchStart, !1), t.removeEventListener(i.move, e.onTouchMove, l), t.removeEventListener(i.end, e.onTouchEnd, !1);else {
    if (o.touch) {
      var d = !("onTouchStart" !== i.start || !o.passiveListener || !a.passiveListeners) && {
        passive: !0,
        capture: !1
      };
      s.removeEventListener(i.start, e.onTouchStart, d), s.removeEventListener(i.move, e.onTouchMove, l), s.removeEventListener(i.end, e.onTouchEnd, d), i.cancel && s.removeEventListener(i.cancel, e.onTouchEnd, d);
    }

    (a.simulateTouch && !n.ios && !n.android || a.simulateTouch && !o.touch && n.ios) && (s.removeEventListener("mousedown", e.onTouchStart, !1), t.removeEventListener("mousemove", e.onTouchMove, l), t.removeEventListener("mouseup", e.onTouchEnd, !1));
  }
  (a.preventClicks || a.preventClicksPropagation) && s.removeEventListener("click", e.onClick, !0), a.cssMode && r.removeEventListener("scroll", e.onScroll), e.off(n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize);
}

var events = {
  attachEvents: attachEvents,
  detachEvents: detachEvents
};

function setBreakpoint() {
  var e = this,
      t = e.activeIndex,
      a = e.initialized,
      i = e.loopedSlides,
      s = void 0 === i ? 0 : i,
      r = e.params,
      n = e.$el,
      o = r.breakpoints;

  if (o && (!o || 0 !== Object.keys(o).length)) {
    var l = e.getBreakpoint(o, e.params.breakpointsBase, e.el);

    if (l && e.currentBreakpoint !== l) {
      var d = l in o ? o[l] : void 0;
      d && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function (e) {
        var t = d[e];
        void 0 !== t && (d[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto");
      });
      var p = d || e.originalParams,
          u = r.slidesPerColumn > 1,
          c = p.slidesPerColumn > 1;
      u && !c ? (n.removeClass(r.containerModifierClass + "multirow " + r.containerModifierClass + "multirow-column"), e.emitContainerClasses()) : !u && c && (n.addClass(r.containerModifierClass + "multirow"), "column" === p.slidesPerColumnFill && n.addClass(r.containerModifierClass + "multirow-column"), e.emitContainerClasses());
      var h = p.direction && p.direction !== r.direction,
          v = r.loop && (p.slidesPerView !== r.slidesPerView || h);
      h && a && e.changeDirection(), extend$1(e.params, p), extend$1(e, {
        allowTouchMove: e.params.allowTouchMove,
        allowSlideNext: e.params.allowSlideNext,
        allowSlidePrev: e.params.allowSlidePrev
      }), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", p), v && a && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - s + e.loopedSlides, 0, !1)), e.emit("breakpoint", p);
    }
  }
}

function getBreakpoint(e, t, a) {
  if (void 0 === t && (t = "window"), e && ("container" !== t || a)) {
    var i = !1,
        s = getWindow(),
        r = "window" === t ? s.innerWidth : a.clientWidth,
        n = "window" === t ? s.innerHeight : a.clientHeight,
        o = Object.keys(e).map(function (e) {
      if ("string" == typeof e && 0 === e.indexOf("@")) {
        var t = parseFloat(e.substr(1));
        return {
          value: n * t,
          point: e
        };
      }

      return {
        value: e,
        point: e
      };
    });
    o.sort(function (e, t) {
      return parseInt(e.value, 10) - parseInt(t.value, 10);
    });

    for (var l = 0; l < o.length; l += 1) {
      var d = o[l],
          p = d.point;
      d.value <= r && (i = p);
    }

    return i || "max";
  }
}

var breakpoints = {
  setBreakpoint: setBreakpoint,
  getBreakpoint: getBreakpoint
};

function prepareClasses(e, t) {
  var a = [];
  return e.forEach(function (e) {
    "object" == _typeof(e) ? Object.entries(e).forEach(function (e) {
      var i = e[0];
      e[1] && a.push(t + i);
    }) : "string" == typeof e && a.push(t + e);
  }), a;
}

function addClasses() {
  var e = this,
      t = e.classNames,
      a = e.params,
      i = e.rtl,
      s = e.$el,
      r = e.device,
      n = e.support,
      o = prepareClasses(["initialized", a.direction, {
    "pointer-events": n.pointerEvents && !n.touch
  }, {
    "free-mode": a.freeMode
  }, {
    autoheight: a.autoHeight
  }, {
    rtl: i
  }, {
    multirow: a.slidesPerColumn > 1
  }, {
    "multirow-column": a.slidesPerColumn > 1 && "column" === a.slidesPerColumnFill
  }, {
    android: r.android
  }, {
    ios: r.ios
  }, {
    "css-mode": a.cssMode
  }], a.containerModifierClass);
  t.push.apply(t, o), s.addClass([].concat(t).join(" ")), e.emitContainerClasses();
}

function removeClasses() {
  var e = this,
      t = e.$el,
      a = e.classNames;
  t.removeClass(a.join(" ")), e.emitContainerClasses();
}

var classes = {
  addClasses: addClasses,
  removeClasses: removeClasses
};

function loadImage(e, t, a, i, s, r) {
  var n,
      o = getWindow();

  function l() {
    r && r();
  }

  $(e).parent("picture")[0] || e.complete && s ? l() : t ? ((n = new o.Image()).onload = l, n.onerror = l, i && (n.sizes = i), a && (n.srcset = a), t && (n.src = t)) : l();
}

function preloadImages() {
  var e = this;

  function t() {
    null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
  }

  e.imagesToLoad = e.$el.find("img");

  for (var a = 0; a < e.imagesToLoad.length; a += 1) {
    var i = e.imagesToLoad[a];
    e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t);
  }
}

var images = {
  loadImage: loadImage,
  preloadImages: preloadImages
};

function checkOverflow() {
  var e = this,
      t = e.params,
      a = e.isLocked,
      i = e.slides.length > 0 && t.slidesOffsetBefore + t.spaceBetween * (e.slides.length - 1) + e.slides[0].offsetWidth * e.slides.length;
  t.slidesOffsetBefore && t.slidesOffsetAfter && i ? e.isLocked = i <= e.size : e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, a !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), a && a !== e.isLocked && (e.isEnd = !1, e.navigation && e.navigation.update());
}

var checkOverflow$1 = {
  checkOverflow: checkOverflow
},
    defaults = {
  init: !0,
  direction: "horizontal",
  touchEventsTarget: "container",
  initialSlide: 0,
  speed: 300,
  cssMode: !1,
  updateOnWindowResize: !0,
  resizeObserver: !1,
  nested: !1,
  width: null,
  height: null,
  preventInteractionOnTransition: !1,
  userAgent: null,
  url: null,
  edgeSwipeDetection: !1,
  edgeSwipeThreshold: 20,
  freeMode: !1,
  freeModeMomentum: !0,
  freeModeMomentumRatio: 1,
  freeModeMomentumBounce: !0,
  freeModeMomentumBounceRatio: 1,
  freeModeMomentumVelocityRatio: 1,
  freeModeSticky: !1,
  freeModeMinimumVelocity: .02,
  autoHeight: !1,
  setWrapperSize: !1,
  virtualTranslate: !1,
  effect: "slide",
  breakpoints: void 0,
  breakpointsBase: "window",
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerColumn: 1,
  slidesPerColumnFill: "column",
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  centeredSlides: !1,
  centeredSlidesBounds: !1,
  slidesOffsetBefore: 0,
  slidesOffsetAfter: 0,
  normalizeSlideIndex: !0,
  centerInsufficientSlides: !1,
  watchOverflow: !1,
  roundLengths: !1,
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: !0,
  shortSwipes: !0,
  longSwipes: !0,
  longSwipesRatio: .5,
  longSwipesMs: 300,
  followFinger: !0,
  allowTouchMove: !0,
  threshold: 0,
  touchMoveStopPropagation: !1,
  touchStartPreventDefault: !0,
  touchStartForcePreventDefault: !1,
  touchReleaseOnEdges: !1,
  uniqueNavElements: !0,
  resistance: !0,
  resistanceRatio: .85,
  watchSlidesProgress: !1,
  watchSlidesVisibility: !1,
  grabCursor: !1,
  preventClicks: !0,
  preventClicksPropagation: !0,
  slideToClickedSlide: !1,
  preloadImages: !0,
  updateOnImagesReady: !0,
  loop: !1,
  loopAdditionalSlides: 0,
  loopedSlides: null,
  loopFillGroupWithBlank: !1,
  loopPreventsSlide: !0,
  allowSlidePrev: !0,
  allowSlideNext: !0,
  swipeHandler: null,
  noSwiping: !0,
  noSwipingClass: "swiper-no-swiping",
  noSwipingSelector: null,
  passiveListeners: !0,
  containerModifierClass: "swiper-container-",
  slideClass: "swiper-slide",
  slideBlankClass: "swiper-slide-invisible-blank",
  slideActiveClass: "swiper-slide-active",
  slideDuplicateActiveClass: "swiper-slide-duplicate-active",
  slideVisibleClass: "swiper-slide-visible",
  slideDuplicateClass: "swiper-slide-duplicate",
  slideNextClass: "swiper-slide-next",
  slideDuplicateNextClass: "swiper-slide-duplicate-next",
  slidePrevClass: "swiper-slide-prev",
  slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
  wrapperClass: "swiper-wrapper",
  runCallbacksOnInit: !0,
  _emitClasses: !1
},
    prototypes = {
  modular: modular,
  eventsEmitter: eventsEmitter,
  update: update,
  translate: translate,
  transition: transition$1,
  slide: slide,
  loop: loop,
  grabCursor: grabCursor,
  manipulation: manipulation,
  events: events,
  breakpoints: breakpoints,
  checkOverflow: checkOverflow$1,
  classes: classes,
  images: images
},
    extendedDefaults = {},
    Swiper = function () {
  function e() {
    for (var t, a, i = arguments.length, s = new Array(i), r = 0; r < i; r++) {
      s[r] = arguments[r];
    }

    if (1 === s.length && s[0].constructor && s[0].constructor === Object ? a = s[0] : (t = s[0], a = s[1]), a || (a = {}), a = extend$1({}, a), t && !a.el && (a.el = t), a.el && $(a.el).length > 1) {
      var n = [];
      return $(a.el).each(function (t) {
        var i = extend$1({}, a, {
          el: t
        });
        n.push(new e(i));
      }), n;
    }

    var o = this;
    o.support = getSupport(), o.device = getDevice({
      userAgent: a.userAgent
    }), o.browser = getBrowser(), o.eventsListeners = {}, o.eventsAnyListeners = [], void 0 === o.modules && (o.modules = {}), Object.keys(o.modules).forEach(function (e) {
      var t = o.modules[e];

      if (t.params) {
        var i = Object.keys(t.params)[0],
            s = t.params[i];
        if ("object" != _typeof(s) || null === s) return;
        if (!(i in a) || !("enabled" in s)) return;
        !0 === a[i] && (a[i] = {
          enabled: !0
        }), "object" != _typeof(a[i]) || "enabled" in a[i] || (a[i].enabled = !0), a[i] || (a[i] = {
          enabled: !1
        });
      }
    });
    var l,
        d,
        p = extend$1({}, defaults);
    return o.useParams(p), o.params = extend$1({}, p, extendedDefaults, a), o.originalParams = extend$1({}, o.params), o.passedParams = extend$1({}, a), o.params && o.params.on && Object.keys(o.params.on).forEach(function (e) {
      o.on(e, o.params.on[e]);
    }), o.params && o.params.onAny && o.onAny(o.params.onAny), o.$ = $, extend$1(o, {
      el: t,
      classNames: [],
      slides: $(),
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      isHorizontal: function isHorizontal() {
        return "horizontal" === o.params.direction;
      },
      isVertical: function isVertical() {
        return "vertical" === o.params.direction;
      },
      activeIndex: 0,
      realIndex: 0,
      isBeginning: !0,
      isEnd: !1,
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: !1,
      allowSlideNext: o.params.allowSlideNext,
      allowSlidePrev: o.params.allowSlidePrev,
      touchEvents: (l = ["touchstart", "touchmove", "touchend", "touchcancel"], d = ["mousedown", "mousemove", "mouseup"], o.support.pointerEvents && (d = ["pointerdown", "pointermove", "pointerup"]), o.touchEventsTouch = {
        start: l[0],
        move: l[1],
        end: l[2],
        cancel: l[3]
      }, o.touchEventsDesktop = {
        start: d[0],
        move: d[1],
        end: d[2]
      }, o.support.touch || !o.params.simulateTouch ? o.touchEventsTouch : o.touchEventsDesktop),
      touchEventsData: {
        isTouched: void 0,
        isMoved: void 0,
        allowTouchCallbacks: void 0,
        touchStartTime: void 0,
        isScrolling: void 0,
        currentTranslate: void 0,
        startTranslate: void 0,
        allowThresholdMove: void 0,
        formElements: "input, select, option, textarea, button, video, label",
        lastClickTime: now(),
        clickTimeout: void 0,
        velocities: [],
        allowMomentumBounce: void 0,
        isTouchEvent: void 0,
        startMoving: void 0
      },
      allowClick: !0,
      allowTouchMove: o.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      imagesToLoad: [],
      imagesLoaded: 0
    }), o.useModules(), o.emit("_swiper"), o.params.init && o.init(), o;
  }

  var t = e.prototype;
  return t.emitContainerClasses = function () {
    var e = this;

    if (e.params._emitClasses && e.el) {
      var t = e.el.className.split(" ").filter(function (t) {
        return 0 === t.indexOf("swiper-container") || 0 === t.indexOf(e.params.containerModifierClass);
      });
      e.emit("_containerClasses", t.join(" "));
    }
  }, t.getSlideClasses = function (e) {
    var t = this;
    return e.className.split(" ").filter(function (e) {
      return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass);
    }).join(" ");
  }, t.emitSlidesClasses = function () {
    var e = this;

    if (e.params._emitClasses && e.el) {
      var t = [];
      e.slides.each(function (a) {
        var i = e.getSlideClasses(a);
        t.push({
          slideEl: a,
          classNames: i
        }), e.emit("_slideClass", a, i);
      }), e.emit("_slideClasses", t);
    }
  }, t.slidesPerViewDynamic = function () {
    var e = this,
        t = e.params,
        a = e.slides,
        i = e.slidesGrid,
        s = e.size,
        r = e.activeIndex,
        n = 1;

    if (t.centeredSlides) {
      for (var o, l = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1) {
        a[d] && !o && (n += 1, (l += a[d].swiperSlideSize) > s && (o = !0));
      }

      for (var p = r - 1; p >= 0; p -= 1) {
        a[p] && !o && (n += 1, (l += a[p].swiperSlideSize) > s && (o = !0));
      }
    } else for (var u = r + 1; u < a.length; u += 1) {
      i[u] - i[r] < s && (n += 1);
    }

    return n;
  }, t.update = function () {
    var e = this;

    if (e && !e.destroyed) {
      var t = e.snapGrid,
          a = e.params;
      a.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (i(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || i(), a.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
    }

    function i() {
      var t = e.rtlTranslate ? -1 * e.translate : e.translate,
          a = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
      e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses();
    }
  }, t.changeDirection = function (e, t) {
    void 0 === t && (t = !0);
    var a = this,
        i = a.params.direction;
    return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (a.$el.removeClass("" + a.params.containerModifierClass + i).addClass("" + a.params.containerModifierClass + e), a.emitContainerClasses(), a.params.direction = e, a.slides.each(function (t) {
      "vertical" === e ? t.style.width = "" : t.style.height = "";
    }), a.emit("changeDirection"), t && a.update()), a;
  }, t.mount = function (e) {
    var t = this;
    if (t.mounted) return !0;
    var a,
        i = $(e || t.params.el);
    return !!(e = i[0]) && (e.swiper = t, e && e.shadowRoot && e.shadowRoot.querySelector ? (a = $(e.shadowRoot.querySelector("." + t.params.wrapperClass))).children = function (e) {
      return i.children(e);
    } : a = i.children("." + t.params.wrapperClass), extend$1(t, {
      $el: i,
      el: e,
      $wrapperEl: a,
      wrapperEl: a[0],
      mounted: !0,
      rtl: "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
      rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction")),
      wrongRTL: "-webkit-box" === a.css("display")
    }), !0);
  }, t.init = function (e) {
    var t = this;
    return t.initialized || !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t;
  }, t.destroy = function (e, t) {
    void 0 === e && (e = !0), void 0 === t && (t = !0);
    var a = this,
        i = a.params,
        s = a.$el,
        r = a.$wrapperEl,
        n = a.slides;
    return void 0 === a.params || a.destroyed || (a.emit("beforeDestroy"), a.initialized = !1, a.detachEvents(), i.loop && a.loopDestroy(), t && (a.removeClasses(), s.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), a.emit("destroy"), Object.keys(a.eventsListeners).forEach(function (e) {
      a.off(e);
    }), !1 !== e && (a.$el[0].swiper = null, deleteProps(a)), a.destroyed = !0), null;
  }, e.extendDefaults = function (e) {
    extend$1(extendedDefaults, e);
  }, e.installModule = function (t) {
    e.prototype.modules || (e.prototype.modules = {});
    var a = t.name || Object.keys(e.prototype.modules).length + "_" + now();
    e.prototype.modules[a] = t;
  }, e.use = function (t) {
    return Array.isArray(t) ? (t.forEach(function (t) {
      return e.installModule(t);
    }), e) : (e.installModule(t), e);
  }, _createClass(e, null, [{
    key: "extendedDefaults",
    get: function get() {
      return extendedDefaults;
    }
  }, {
    key: "defaults",
    get: function get() {
      return defaults;
    }
  }]), e;
}();

Object.keys(prototypes).forEach(function (e) {
  Object.keys(prototypes[e]).forEach(function (t) {
    Swiper.prototype[t] = prototypes[e][t];
  });
}), Swiper.use([Resize, Observer$1]);
var Virtual = {
  update: function update(e) {
    var t = this,
        a = t.params,
        i = a.slidesPerView,
        s = a.slidesPerGroup,
        r = a.centeredSlides,
        n = t.params.virtual,
        o = n.addSlidesBefore,
        l = n.addSlidesAfter,
        d = t.virtual,
        p = d.from,
        u = d.to,
        c = d.slides,
        h = d.slidesGrid,
        v = d.renderSlide,
        f = d.offset;
    t.updateActiveIndex();
    var m,
        g,
        w,
        b = t.activeIndex || 0;
    m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (g = Math.floor(i / 2) + s + l, w = Math.floor(i / 2) + s + o) : (g = i + (s - 1) + l, w = s + o);
    var y = Math.max((b || 0) - w, 0),
        x = Math.min((b || 0) + g, c.length - 1),
        E = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);

    function T() {
      t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load();
    }

    if (extend$1(t.virtual, {
      from: y,
      to: x,
      offset: E,
      slidesGrid: t.slidesGrid
    }), p === y && u === x && !e) return t.slidesGrid !== h && E !== f && t.slides.css(m, E + "px"), void t.updateProgress();
    if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
      offset: E,
      from: y,
      to: x,
      slides: function () {
        for (var e = [], t = y; t <= x; t += 1) {
          e.push(c[t]);
        }

        return e;
      }()
    }), void (t.params.virtual.renderExternalUpdate && T());
    var C = [],
        S = [];
    if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();else for (var M = p; M <= u; M += 1) {
      (M < y || M > x) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + M + '"]').remove();
    }

    for (var $ = 0; $ < c.length; $ += 1) {
      $ >= y && $ <= x && (void 0 === u || e ? S.push($) : ($ > u && S.push($), $ < p && C.push($)));
    }

    S.forEach(function (e) {
      t.$wrapperEl.append(v(c[e], e));
    }), C.sort(function (e, t) {
      return t - e;
    }).forEach(function (e) {
      t.$wrapperEl.prepend(v(c[e], e));
    }), t.$wrapperEl.children(".swiper-slide").css(m, E + "px"), T();
  },
  renderSlide: function renderSlide(e, t) {
    var a = this,
        i = a.params.virtual;
    if (i.cache && a.virtual.cache[t]) return a.virtual.cache[t];
    var s = i.renderSlide ? $(i.renderSlide.call(a, e, t)) : $('<div class="' + a.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
    return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (a.virtual.cache[t] = s), s;
  },
  appendSlide: function appendSlide(e) {
    var t = this;
    if ("object" == _typeof(e) && "length" in e) for (var a = 0; a < e.length; a += 1) {
      e[a] && t.virtual.slides.push(e[a]);
    } else t.virtual.slides.push(e);
    t.virtual.update(!0);
  },
  prependSlide: function prependSlide(e) {
    var t = this,
        a = t.activeIndex,
        i = a + 1,
        s = 1;

    if (Array.isArray(e)) {
      for (var r = 0; r < e.length; r += 1) {
        e[r] && t.virtual.slides.unshift(e[r]);
      }

      i = a + e.length, s = e.length;
    } else t.virtual.slides.unshift(e);

    if (t.params.virtual.cache) {
      var n = t.virtual.cache,
          o = {};
      Object.keys(n).forEach(function (e) {
        var t = n[e],
            a = t.attr("data-swiper-slide-index");
        a && t.attr("data-swiper-slide-index", parseInt(a, 10) + 1), o[parseInt(e, 10) + s] = t;
      }), t.virtual.cache = o;
    }

    t.virtual.update(!0), t.slideTo(i, 0);
  },
  removeSlide: function removeSlide(e) {
    var t = this;

    if (null != e) {
      var a = t.activeIndex;
      if (Array.isArray(e)) for (var i = e.length - 1; i >= 0; i -= 1) {
        t.virtual.slides.splice(e[i], 1), t.params.virtual.cache && delete t.virtual.cache[e[i]], e[i] < a && (a -= 1), a = Math.max(a, 0);
      } else t.virtual.slides.splice(e, 1), t.params.virtual.cache && delete t.virtual.cache[e], e < a && (a -= 1), a = Math.max(a, 0);
      t.virtual.update(!0), t.slideTo(a, 0);
    }
  },
  removeAllSlides: function removeAllSlides() {
    var e = this;
    e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), e.virtual.update(!0), e.slideTo(0, 0);
  }
},
    Virtual$1 = {
  name: "virtual",
  params: {
    virtual: {
      enabled: !1,
      slides: [],
      cache: !0,
      renderSlide: null,
      renderExternal: null,
      renderExternalUpdate: !0,
      addSlidesBefore: 0,
      addSlidesAfter: 0
    }
  },
  create: function create() {
    bindModuleMethods(this, {
      virtual: _extends({}, Virtual, {
        slides: this.params.virtual.slides,
        cache: {}
      })
    });
  },
  on: {
    beforeInit: function beforeInit(e) {
      if (e.params.virtual.enabled) {
        e.classNames.push(e.params.containerModifierClass + "virtual");
        var t = {
          watchSlidesProgress: !0
        };
        extend$1(e.params, t), extend$1(e.originalParams, t), e.params.initialSlide || e.virtual.update();
      }
    },
    setTranslate: function setTranslate(e) {
      e.params.virtual.enabled && e.virtual.update();
    }
  }
},
    Keyboard = {
  handle: function handle(e) {
    var t = this,
        a = getWindow(),
        i = getDocument(),
        s = t.rtlTranslate,
        r = e;
    r.originalEvent && (r = r.originalEvent);
    var n = r.keyCode || r.charCode,
        o = t.params.keyboard.pageUpDown,
        l = o && 33 === n,
        d = o && 34 === n,
        p = 37 === n,
        u = 39 === n,
        c = 38 === n,
        h = 40 === n;
    if (!t.allowSlideNext && (t.isHorizontal() && u || t.isVertical() && h || d)) return !1;
    if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() && c || l)) return !1;

    if (!(r.shiftKey || r.altKey || r.ctrlKey || r.metaKey || i.activeElement && i.activeElement.nodeName && ("input" === i.activeElement.nodeName.toLowerCase() || "textarea" === i.activeElement.nodeName.toLowerCase()))) {
      if (t.params.keyboard.onlyInViewport && (l || d || p || u || c || h)) {
        var v = !1;
        if (t.$el.parents("." + t.params.slideClass).length > 0 && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
        var f = a.innerWidth,
            m = a.innerHeight,
            g = t.$el.offset();
        s && (g.left -= t.$el[0].scrollLeft);

        for (var w = [[g.left, g.top], [g.left + t.width, g.top], [g.left, g.top + t.height], [g.left + t.width, g.top + t.height]], b = 0; b < w.length; b += 1) {
          var y = w[b];

          if (y[0] >= 0 && y[0] <= f && y[1] >= 0 && y[1] <= m) {
            if (0 === y[0] && 0 === y[1]) continue;
            v = !0;
          }
        }

        if (!v) return;
      }

      t.isHorizontal() ? ((l || d || p || u) && (r.preventDefault ? r.preventDefault() : r.returnValue = !1), ((d || u) && !s || (l || p) && s) && t.slideNext(), ((l || p) && !s || (d || u) && s) && t.slidePrev()) : ((l || d || c || h) && (r.preventDefault ? r.preventDefault() : r.returnValue = !1), (d || h) && t.slideNext(), (l || c) && t.slidePrev()), t.emit("keyPress", n);
    }
  },
  enable: function enable() {
    var e = this,
        t = getDocument();
    e.keyboard.enabled || ($(t).on("keydown", e.keyboard.handle), e.keyboard.enabled = !0);
  },
  disable: function disable() {
    var e = this,
        t = getDocument();
    e.keyboard.enabled && ($(t).off("keydown", e.keyboard.handle), e.keyboard.enabled = !1);
  }
},
    Keyboard$1 = {
  name: "keyboard",
  params: {
    keyboard: {
      enabled: !1,
      onlyInViewport: !0,
      pageUpDown: !0
    }
  },
  create: function create() {
    bindModuleMethods(this, {
      keyboard: _extends({
        enabled: !1
      }, Keyboard)
    });
  },
  on: {
    init: function init(e) {
      e.params.keyboard.enabled && e.keyboard.enable();
    },
    destroy: function destroy(e) {
      e.keyboard.enabled && e.keyboard.disable();
    }
  }
};

function isEventSupported() {
  var e = getDocument(),
      t = "onwheel",
      a = (t in e);

  if (!a) {
    var i = e.createElement("div");
    i.setAttribute(t, "return;"), a = "function" == typeof i.onwheel;
  }

  return !a && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (a = e.implementation.hasFeature("Events.wheel", "3.0")), a;
}

var Mousewheel = {
  lastScrollTime: now(),
  lastEventBeforeSnap: void 0,
  recentWheelEvents: [],
  event: function event() {
    return getWindow().navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : isEventSupported() ? "wheel" : "mousewheel";
  },
  normalize: function normalize(e) {
    var t = 0,
        a = 0,
        i = 0,
        s = 0;
    return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0), i = 10 * t, s = 10 * a, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (i = e.deltaX), e.shiftKey && !i && (i = s, s = 0), (i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, s *= 40) : (i *= 800, s *= 800)), i && !t && (t = i < 1 ? -1 : 1), s && !a && (a = s < 1 ? -1 : 1), {
      spinX: t,
      spinY: a,
      pixelX: i,
      pixelY: s
    };
  },
  handleMouseEnter: function handleMouseEnter() {
    this.mouseEntered = !0;
  },
  handleMouseLeave: function handleMouseLeave() {
    this.mouseEntered = !1;
  },
  handle: function handle(e) {
    var t = e,
        a = this,
        i = a.params.mousewheel;
    a.params.cssMode && t.preventDefault();
    var s = a.$el;
    if ("container" !== a.params.mousewheel.eventsTarget && (s = $(a.params.mousewheel.eventsTarget)), !a.mouseEntered && !s[0].contains(t.target) && !i.releaseOnEdges) return !0;
    t.originalEvent && (t = t.originalEvent);
    var r = 0,
        n = a.rtlTranslate ? -1 : 1,
        o = Mousewheel.normalize(t);
    if (i.forceToAxis) {
      if (a.isHorizontal()) {
        if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
        r = -o.pixelX * n;
      } else {
        if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
        r = -o.pixelY;
      }
    } else r = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * n : -o.pixelY;
    if (0 === r) return !0;
    i.invert && (r = -r);
    var l = a.getTranslate() + r * i.sensitivity;

    if (l >= a.minTranslate() && (l = a.minTranslate()), l <= a.maxTranslate() && (l = a.maxTranslate()), (!!a.params.loop || !(l === a.minTranslate() || l === a.maxTranslate())) && a.params.nested && t.stopPropagation(), a.params.freeMode) {
      var d = {
        time: now(),
        delta: Math.abs(r),
        direction: Math.sign(r)
      },
          p = a.mousewheel.lastEventBeforeSnap,
          u = p && d.time < p.time + 500 && d.delta <= p.delta && d.direction === p.direction;

      if (!u) {
        a.mousewheel.lastEventBeforeSnap = void 0, a.params.loop && a.loopFix();
        var c = a.getTranslate() + r * i.sensitivity,
            h = a.isBeginning,
            v = a.isEnd;

        if (c >= a.minTranslate() && (c = a.minTranslate()), c <= a.maxTranslate() && (c = a.maxTranslate()), a.setTransition(0), a.setTranslate(c), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses(), (!h && a.isBeginning || !v && a.isEnd) && a.updateSlidesClasses(), a.params.freeModeSticky) {
          clearTimeout(a.mousewheel.timeout), a.mousewheel.timeout = void 0;
          var f = a.mousewheel.recentWheelEvents;
          f.length >= 15 && f.shift();
          var m = f.length ? f[f.length - 1] : void 0,
              g = f[0];
          if (f.push(d), m && (d.delta > m.delta || d.direction !== m.direction)) f.splice(0);else if (f.length >= 15 && d.time - g.time < 500 && g.delta - d.delta >= 1 && d.delta <= 6) {
            var w = r > 0 ? .8 : .2;
            a.mousewheel.lastEventBeforeSnap = d, f.splice(0), a.mousewheel.timeout = nextTick(function () {
              a.slideToClosest(a.params.speed, !0, void 0, w);
            }, 0);
          }
          a.mousewheel.timeout || (a.mousewheel.timeout = nextTick(function () {
            a.mousewheel.lastEventBeforeSnap = d, f.splice(0), a.slideToClosest(a.params.speed, !0, void 0, .5);
          }, 500));
        }

        if (u || a.emit("scroll", t), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(), c === a.minTranslate() || c === a.maxTranslate()) return !0;
      }
    } else {
      var b = {
        time: now(),
        delta: Math.abs(r),
        direction: Math.sign(r),
        raw: e
      },
          y = a.mousewheel.recentWheelEvents;
      y.length >= 2 && y.shift();
      var x = y.length ? y[y.length - 1] : void 0;
      if (y.push(b), x ? (b.direction !== x.direction || b.delta > x.delta || b.time > x.time + 150) && a.mousewheel.animateSlider(b) : a.mousewheel.animateSlider(b), a.mousewheel.releaseScroll(b)) return !0;
    }

    return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1;
  },
  animateSlider: function animateSlider(e) {
    var t = this,
        a = getWindow();
    return !(this.params.mousewheel.thresholdDelta && e.delta < this.params.mousewheel.thresholdDelta) && !(this.params.mousewheel.thresholdTime && now() - t.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime) && (e.delta >= 6 && now() - t.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), t.emit("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), t.emit("scroll", e.raw)), t.mousewheel.lastScrollTime = new a.Date().getTime(), !1));
  },
  releaseScroll: function releaseScroll(e) {
    var t = this,
        a = t.params.mousewheel;

    if (e.direction < 0) {
      if (t.isEnd && !t.params.loop && a.releaseOnEdges) return !0;
    } else if (t.isBeginning && !t.params.loop && a.releaseOnEdges) return !0;

    return !1;
  },
  enable: function enable() {
    var e = this,
        t = Mousewheel.event();
    if (e.params.cssMode) return e.wrapperEl.removeEventListener(t, e.mousewheel.handle), !0;
    if (!t) return !1;
    if (e.mousewheel.enabled) return !1;
    var a = e.$el;
    return "container" !== e.params.mousewheel.eventsTarget && (a = $(e.params.mousewheel.eventsTarget)), a.on("mouseenter", e.mousewheel.handleMouseEnter), a.on("mouseleave", e.mousewheel.handleMouseLeave), a.on(t, e.mousewheel.handle), e.mousewheel.enabled = !0, !0;
  },
  disable: function disable() {
    var e = this,
        t = Mousewheel.event();
    if (e.params.cssMode) return e.wrapperEl.addEventListener(t, e.mousewheel.handle), !0;
    if (!t) return !1;
    if (!e.mousewheel.enabled) return !1;
    var a = e.$el;
    return "container" !== e.params.mousewheel.eventsTarget && (a = $(e.params.mousewheel.eventsTarget)), a.off(t, e.mousewheel.handle), e.mousewheel.enabled = !1, !0;
  }
},
    Mousewheel$1 = {
  name: "mousewheel",
  params: {
    mousewheel: {
      enabled: !1,
      releaseOnEdges: !1,
      invert: !1,
      forceToAxis: !1,
      sensitivity: 1,
      eventsTarget: "container",
      thresholdDelta: null,
      thresholdTime: null
    }
  },
  create: function create() {
    bindModuleMethods(this, {
      mousewheel: {
        enabled: !1,
        lastScrollTime: now(),
        lastEventBeforeSnap: void 0,
        recentWheelEvents: [],
        enable: Mousewheel.enable,
        disable: Mousewheel.disable,
        handle: Mousewheel.handle,
        handleMouseEnter: Mousewheel.handleMouseEnter,
        handleMouseLeave: Mousewheel.handleMouseLeave,
        animateSlider: Mousewheel.animateSlider,
        releaseScroll: Mousewheel.releaseScroll
      }
    });
  },
  on: {
    init: function init(e) {
      !e.params.mousewheel.enabled && e.params.cssMode && e.mousewheel.disable(), e.params.mousewheel.enabled && e.mousewheel.enable();
    },
    destroy: function destroy(e) {
      e.params.cssMode && e.mousewheel.enable(), e.mousewheel.enabled && e.mousewheel.disable();
    }
  }
},
    Navigation = {
  update: function update() {
    var e = this,
        t = e.params.navigation;

    if (!e.params.loop) {
      var a = e.navigation,
          i = a.$nextEl,
          s = a.$prevEl;
      s && s.length > 0 && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), i && i.length > 0 && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass));
    }
  },
  onPrevClick: function onPrevClick(e) {
    var t = this;
    e.preventDefault(), t.isBeginning && !t.params.loop || t.slidePrev();
  },
  onNextClick: function onNextClick(e) {
    var t = this;
    e.preventDefault(), t.isEnd && !t.params.loop || t.slideNext();
  },
  init: function init() {
    var e,
        t,
        a = this,
        i = a.params.navigation;
    (i.nextEl || i.prevEl) && (i.nextEl && (e = $(i.nextEl), a.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === a.$el.find(i.nextEl).length && (e = a.$el.find(i.nextEl))), i.prevEl && (t = $(i.prevEl), a.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === a.$el.find(i.prevEl).length && (t = a.$el.find(i.prevEl))), e && e.length > 0 && e.on("click", a.navigation.onNextClick), t && t.length > 0 && t.on("click", a.navigation.onPrevClick), extend$1(a.navigation, {
      $nextEl: e,
      nextEl: e && e[0],
      $prevEl: t,
      prevEl: t && t[0]
    }));
  },
  destroy: function destroy() {
    var e = this,
        t = e.navigation,
        a = t.$nextEl,
        i = t.$prevEl;
    a && a.length && (a.off("click", e.navigation.onNextClick), a.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click", e.navigation.onPrevClick), i.removeClass(e.params.navigation.disabledClass));
  }
},
    Navigation$1 = {
  name: "navigation",
  params: {
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock"
    }
  },
  create: function create() {
    bindModuleMethods(this, {
      navigation: _extends({}, Navigation)
    });
  },
  on: {
    init: function init(e) {
      e.navigation.init(), e.navigation.update();
    },
    toEdge: function toEdge(e) {
      e.navigation.update();
    },
    fromEdge: function fromEdge(e) {
      e.navigation.update();
    },
    destroy: function destroy(e) {
      e.navigation.destroy();
    },
    click: function click(e, t) {
      var a = e.navigation,
          i = a.$nextEl,
          s = a.$prevEl,
          r = t.target;

      if (e.params.navigation.hideOnClick && !$(r).is(s) && !$(r).is(i)) {
        if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === r || e.pagination.el.contains(r))) return;
        var n;
        i ? n = i.hasClass(e.params.navigation.hiddenClass) : s && (n = s.hasClass(e.params.navigation.hiddenClass)), !0 === n ? e.emit("navigationShow") : e.emit("navigationHide"), i && i.toggleClass(e.params.navigation.hiddenClass), s && s.toggleClass(e.params.navigation.hiddenClass);
      }
    }
  }
},
    Pagination = {
  update: function update() {
    var e = this,
        t = e.rtl,
        a = e.params.pagination;

    if (a.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
      var i,
          s = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
          r = e.pagination.$el,
          n = e.params.loop ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;

      if (e.params.loop ? ((i = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > s - 1 - 2 * e.loopedSlides && (i -= s - 2 * e.loopedSlides), i > n - 1 && (i -= n), i < 0 && "bullets" !== e.params.paginationType && (i = n + i)) : i = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === a.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
        var o,
            l,
            d,
            p = e.pagination.bullets;
        if (a.dynamicBullets && (e.pagination.bulletSize = p.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (a.dynamicMainBullets + 4) + "px"), a.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += i - e.previousIndex, e.pagination.dynamicBulletIndex > a.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = a.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), o = i - e.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(p.length, a.dynamicMainBullets) - 1)) + o) / 2), p.removeClass(a.bulletActiveClass + " " + a.bulletActiveClass + "-next " + a.bulletActiveClass + "-next-next " + a.bulletActiveClass + "-prev " + a.bulletActiveClass + "-prev-prev " + a.bulletActiveClass + "-main"), r.length > 1) p.each(function (e) {
          var t = $(e),
              s = t.index();
          s === i && t.addClass(a.bulletActiveClass), a.dynamicBullets && (s >= o && s <= l && t.addClass(a.bulletActiveClass + "-main"), s === o && t.prev().addClass(a.bulletActiveClass + "-prev").prev().addClass(a.bulletActiveClass + "-prev-prev"), s === l && t.next().addClass(a.bulletActiveClass + "-next").next().addClass(a.bulletActiveClass + "-next-next"));
        });else {
          var u = p.eq(i),
              c = u.index();

          if (u.addClass(a.bulletActiveClass), a.dynamicBullets) {
            for (var h = p.eq(o), v = p.eq(l), f = o; f <= l; f += 1) {
              p.eq(f).addClass(a.bulletActiveClass + "-main");
            }

            if (e.params.loop) {
              if (c >= p.length - a.dynamicMainBullets) {
                for (var m = a.dynamicMainBullets; m >= 0; m -= 1) {
                  p.eq(p.length - m).addClass(a.bulletActiveClass + "-main");
                }

                p.eq(p.length - a.dynamicMainBullets - 1).addClass(a.bulletActiveClass + "-prev");
              } else h.prev().addClass(a.bulletActiveClass + "-prev").prev().addClass(a.bulletActiveClass + "-prev-prev"), v.next().addClass(a.bulletActiveClass + "-next").next().addClass(a.bulletActiveClass + "-next-next");
            } else h.prev().addClass(a.bulletActiveClass + "-prev").prev().addClass(a.bulletActiveClass + "-prev-prev"), v.next().addClass(a.bulletActiveClass + "-next").next().addClass(a.bulletActiveClass + "-next-next");
          }
        }

        if (a.dynamicBullets) {
          var g = Math.min(p.length, a.dynamicMainBullets + 4),
              w = (e.pagination.bulletSize * g - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize,
              b = t ? "right" : "left";
          p.css(e.isHorizontal() ? b : "top", w + "px");
        }
      }

      if ("fraction" === a.type && (r.find("." + a.currentClass).text(a.formatFractionCurrent(i + 1)), r.find("." + a.totalClass).text(a.formatFractionTotal(n))), "progressbar" === a.type) {
        var y;
        y = a.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
        var x = (i + 1) / n,
            E = 1,
            T = 1;
        "horizontal" === y ? E = x : T = x, r.find("." + a.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + E + ") scaleY(" + T + ")").transition(e.params.speed);
      }

      "custom" === a.type && a.renderCustom ? (r.html(a.renderCustom(e, i + 1, n)), e.emit("paginationRender", r[0])) : e.emit("paginationUpdate", r[0]), r[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](a.lockClass);
    }
  },
  render: function render() {
    var e = this,
        t = e.params.pagination;

    if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
      var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
          i = e.pagination.$el,
          s = "";

      if ("bullets" === t.type) {
        var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
        e.params.freeMode && !e.params.loop && r > a && (r = a);

        for (var n = 0; n < r; n += 1) {
          t.renderBullet ? s += t.renderBullet.call(e, n, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
        }

        i.html(s), e.pagination.bullets = i.find("." + t.bulletClass.replace(/ /g, "."));
      }

      "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(s)), "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(s)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0]);
    }
  },
  init: function init() {
    var e = this,
        t = e.params.pagination;

    if (t.el) {
      var a = $(t.el);
      0 !== a.length && (e.params.uniqueNavElements && "string" == typeof t.el && a.length > 1 && (a = e.$el.find(t.el)), "bullets" === t.type && t.clickable && a.addClass(t.clickableClass), a.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (a.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && a.addClass(t.progressbarOppositeClass), t.clickable && a.on("click", "." + t.bulletClass.replace(/ /g, "."), function (t) {
        t.preventDefault();
        var a = $(this).index() * e.params.slidesPerGroup;
        e.params.loop && (a += e.loopedSlides), e.slideTo(a);
      }), extend$1(e.pagination, {
        $el: a,
        el: a[0]
      }));
    }
  },
  destroy: function destroy() {
    var e = this,
        t = e.params.pagination;

    if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
      var a = e.pagination.$el;
      a.removeClass(t.hiddenClass), a.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && a.off("click", "." + t.bulletClass.replace(/ /g, "."));
    }
  }
},
    Pagination$1 = {
  name: "pagination",
  params: {
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: function formatFractionCurrent(e) {
        return e;
      },
      formatFractionTotal: function formatFractionTotal(e) {
        return e;
      },
      bulletClass: "swiper-pagination-bullet",
      bulletActiveClass: "swiper-pagination-bullet-active",
      modifierClass: "swiper-pagination-",
      currentClass: "swiper-pagination-current",
      totalClass: "swiper-pagination-total",
      hiddenClass: "swiper-pagination-hidden",
      progressbarFillClass: "swiper-pagination-progressbar-fill",
      progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
      clickableClass: "swiper-pagination-clickable",
      lockClass: "swiper-pagination-lock"
    }
  },
  create: function create() {
    bindModuleMethods(this, {
      pagination: _extends({
        dynamicBulletIndex: 0
      }, Pagination)
    });
  },
  on: {
    init: function init(e) {
      e.pagination.init(), e.pagination.render(), e.pagination.update();
    },
    activeIndexChange: function activeIndexChange(e) {
      (e.params.loop || void 0 === e.snapIndex) && e.pagination.update();
    },
    snapIndexChange: function snapIndexChange(e) {
      e.params.loop || e.pagination.update();
    },
    slidesLengthChange: function slidesLengthChange(e) {
      e.params.loop && (e.pagination.render(), e.pagination.update());
    },
    snapGridLengthChange: function snapGridLengthChange(e) {
      e.params.loop || (e.pagination.render(), e.pagination.update());
    },
    destroy: function destroy(e) {
      e.pagination.destroy();
    },
    click: function click(e, t) {
      var a = t.target;

      if (e.params.pagination.el && e.params.pagination.hideOnClick && e.pagination.$el.length > 0 && !$(a).hasClass(e.params.pagination.bulletClass)) {
        if (e.navigation && (e.navigation.nextEl && a === e.navigation.nextEl || e.navigation.prevEl && a === e.navigation.prevEl)) return;
        !0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass) ? e.emit("paginationShow") : e.emit("paginationHide"), e.pagination.$el.toggleClass(e.params.pagination.hiddenClass);
      }
    }
  }
},
    Scrollbar = {
  setTranslate: function setTranslate() {
    var e = this;

    if (e.params.scrollbar.el && e.scrollbar.el) {
      var t = e.scrollbar,
          a = e.rtlTranslate,
          i = e.progress,
          s = t.dragSize,
          r = t.trackSize,
          n = t.$dragEl,
          o = t.$el,
          l = e.params.scrollbar,
          d = s,
          p = (r - s) * i;
      a ? (p = -p) > 0 ? (d = s - p, p = 0) : -p + s > r && (d = r + p) : p < 0 ? (d = s + p, p = 0) : p + s > r && (d = r - p), e.isHorizontal() ? (n.transform("translate3d(" + p + "px, 0, 0)"), n[0].style.width = d + "px") : (n.transform("translate3d(0px, " + p + "px, 0)"), n[0].style.height = d + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function () {
        o[0].style.opacity = 0, o.transition(400);
      }, 1e3));
    }
  },
  setTransition: function setTransition(e) {
    var t = this;
    t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e);
  },
  updateSize: function updateSize() {
    var e = this;

    if (e.params.scrollbar.el && e.scrollbar.el) {
      var t = e.scrollbar,
          a = t.$dragEl,
          i = t.$el;
      a[0].style.width = "", a[0].style.height = "";
      var s,
          r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
          n = e.size / e.virtualSize,
          o = n * (r / e.size);
      s = "auto" === e.params.scrollbar.dragSize ? r * n : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? a[0].style.width = s + "px" : a[0].style.height = s + "px", i[0].style.display = n >= 1 ? "none" : "", e.params.scrollbar.hide && (i[0].style.opacity = 0), extend$1(t, {
        trackSize: r,
        divider: n,
        moveDivider: o,
        dragSize: s
      }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass);
    }
  },
  getPointerPosition: function getPointerPosition(e) {
    return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY;
  },
  setDragPosition: function setDragPosition(e) {
    var t,
        a = this,
        i = a.scrollbar,
        s = a.rtlTranslate,
        r = i.$el,
        n = i.dragSize,
        o = i.trackSize,
        l = i.dragStartPos;
    t = (i.getPointerPosition(e) - r.offset()[a.isHorizontal() ? "left" : "top"] - (null !== l ? l : n / 2)) / (o - n), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
    var d = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
    a.updateProgress(d), a.setTranslate(d), a.updateActiveIndex(), a.updateSlidesClasses();
  },
  onDragStart: function onDragStart(e) {
    var t = this,
        a = t.params.scrollbar,
        i = t.scrollbar,
        s = t.$wrapperEl,
        r = i.$el,
        n = i.$dragEl;
    t.scrollbar.isTouched = !0, t.scrollbar.dragStartPos = e.target === n[0] || e.target === n ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), s.transition(100), n.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), r.transition(0), a.hide && r.css("opacity", 1), t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), t.emit("scrollbarDragStart", e);
  },
  onDragMove: function onDragMove(e) {
    var t = this,
        a = t.scrollbar,
        i = t.$wrapperEl,
        s = a.$el,
        r = a.$dragEl;
    t.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, a.setDragPosition(e), i.transition(0), s.transition(0), r.transition(0), t.emit("scrollbarDragMove", e));
  },
  onDragEnd: function onDragEnd(e) {
    var t = this,
        a = t.params.scrollbar,
        i = t.scrollbar,
        s = t.$wrapperEl,
        r = i.$el;
    t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), s.transition("")), a.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = nextTick(function () {
      r.css("opacity", 0), r.transition(400);
    }, 1e3)), t.emit("scrollbarDragEnd", e), a.snapOnRelease && t.slideToClosest());
  },
  enableDraggable: function enableDraggable() {
    var e = this;

    if (e.params.scrollbar.el) {
      var t = getDocument(),
          a = e.scrollbar,
          i = e.touchEventsTouch,
          s = e.touchEventsDesktop,
          r = e.params,
          n = e.support,
          o = a.$el[0],
          l = !(!n.passiveListener || !r.passiveListeners) && {
        passive: !1,
        capture: !1
      },
          d = !(!n.passiveListener || !r.passiveListeners) && {
        passive: !0,
        capture: !1
      };
      o && (n.touch ? (o.addEventListener(i.start, e.scrollbar.onDragStart, l), o.addEventListener(i.move, e.scrollbar.onDragMove, l), o.addEventListener(i.end, e.scrollbar.onDragEnd, d)) : (o.addEventListener(s.start, e.scrollbar.onDragStart, l), t.addEventListener(s.move, e.scrollbar.onDragMove, l), t.addEventListener(s.end, e.scrollbar.onDragEnd, d)));
    }
  },
  disableDraggable: function disableDraggable() {
    var e = this;

    if (e.params.scrollbar.el) {
      var t = getDocument(),
          a = e.scrollbar,
          i = e.touchEventsTouch,
          s = e.touchEventsDesktop,
          r = e.params,
          n = e.support,
          o = a.$el[0],
          l = !(!n.passiveListener || !r.passiveListeners) && {
        passive: !1,
        capture: !1
      },
          d = !(!n.passiveListener || !r.passiveListeners) && {
        passive: !0,
        capture: !1
      };
      o && (n.touch ? (o.removeEventListener(i.start, e.scrollbar.onDragStart, l), o.removeEventListener(i.move, e.scrollbar.onDragMove, l), o.removeEventListener(i.end, e.scrollbar.onDragEnd, d)) : (o.removeEventListener(s.start, e.scrollbar.onDragStart, l), t.removeEventListener(s.move, e.scrollbar.onDragMove, l), t.removeEventListener(s.end, e.scrollbar.onDragEnd, d)));
    }
  },
  init: function init() {
    var e = this;

    if (e.params.scrollbar.el) {
      var t = e.scrollbar,
          a = e.$el,
          i = e.params.scrollbar,
          s = $(i.el);
      e.params.uniqueNavElements && "string" == typeof i.el && s.length > 1 && 1 === a.find(i.el).length && (s = a.find(i.el));
      var r = s.find("." + e.params.scrollbar.dragClass);
      0 === r.length && (r = $('<div class="' + e.params.scrollbar.dragClass + '"></div>'), s.append(r)), extend$1(t, {
        $el: s,
        el: s[0],
        $dragEl: r,
        dragEl: r[0]
      }), i.draggable && t.enableDraggable();
    }
  },
  destroy: function destroy() {
    this.scrollbar.disableDraggable();
  }
},
    Scrollbar$1 = {
  name: "scrollbar",
  params: {
    scrollbar: {
      el: null,
      dragSize: "auto",
      hide: !1,
      draggable: !1,
      snapOnRelease: !0,
      lockClass: "swiper-scrollbar-lock",
      dragClass: "swiper-scrollbar-drag"
    }
  },
  create: function create() {
    bindModuleMethods(this, {
      scrollbar: _extends({
        isTouched: !1,
        timeout: null,
        dragTimeout: null
      }, Scrollbar)
    });
  },
  on: {
    init: function init(e) {
      e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate();
    },
    update: function update(e) {
      e.scrollbar.updateSize();
    },
    resize: function resize(e) {
      e.scrollbar.updateSize();
    },
    observerUpdate: function observerUpdate(e) {
      e.scrollbar.updateSize();
    },
    setTranslate: function setTranslate(e) {
      e.scrollbar.setTranslate();
    },
    setTransition: function setTransition(e, t) {
      e.scrollbar.setTransition(t);
    },
    destroy: function destroy(e) {
      e.scrollbar.destroy();
    }
  }
},
    Parallax = {
  setTransform: function setTransform(e, t) {
    var a = this.rtl,
        i = $(e),
        s = a ? -1 : 1,
        r = i.attr("data-swiper-parallax") || "0",
        n = i.attr("data-swiper-parallax-x"),
        o = i.attr("data-swiper-parallax-y"),
        l = i.attr("data-swiper-parallax-scale"),
        d = i.attr("data-swiper-parallax-opacity");

    if (n || o ? (n = n || "0", o = o || "0") : this.isHorizontal() ? (n = r, o = "0") : (o = r, n = "0"), n = n.indexOf("%") >= 0 ? parseInt(n, 10) * t * s + "%" : n * t * s + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t + "%" : o * t + "px", null != d) {
      var p = d - (d - 1) * (1 - Math.abs(t));
      i[0].style.opacity = p;
    }

    if (null == l) i.transform("translate3d(" + n + ", " + o + ", 0px)");else {
      var u = l - (l - 1) * (1 - Math.abs(t));
      i.transform("translate3d(" + n + ", " + o + ", 0px) scale(" + u + ")");
    }
  },
  setTranslate: function setTranslate() {
    var e = this,
        t = e.$el,
        a = e.slides,
        i = e.progress,
        s = e.snapGrid;
    t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
      e.parallax.setTransform(t, i);
    }), a.each(function (t, a) {
      var r = t.progress;
      e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (r += Math.ceil(a / 2) - i * (s.length - 1)), r = Math.min(Math.max(r, -1), 1), $(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
        e.parallax.setTransform(t, r);
      });
    });
  },
  setTransition: function setTransition(e) {
    void 0 === e && (e = this.params.speed);
    this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
      var a = $(t),
          i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
      0 === e && (i = 0), a.transition(i);
    });
  }
},
    Parallax$1 = {
  name: "parallax",
  params: {
    parallax: {
      enabled: !1
    }
  },
  create: function create() {
    bindModuleMethods(this, {
      parallax: _extends({}, Parallax)
    });
  },
  on: {
    beforeInit: function beforeInit(e) {
      e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
    },
    init: function init(e) {
      e.params.parallax.enabled && e.parallax.setTranslate();
    },
    setTranslate: function setTranslate(e) {
      e.params.parallax.enabled && e.parallax.setTranslate();
    },
    setTransition: function setTransition(e, t) {
      e.params.parallax.enabled && e.parallax.setTransition(t);
    }
  }
},
    Zoom = {
  getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
    if (e.targetTouches.length < 2) return 1;
    var t = e.targetTouches[0].pageX,
        a = e.targetTouches[0].pageY,
        i = e.targetTouches[1].pageX,
        s = e.targetTouches[1].pageY;
    return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2));
  },
  onGestureStart: function onGestureStart(e) {
    var t = this,
        a = t.support,
        i = t.params.zoom,
        s = t.zoom,
        r = s.gesture;

    if (s.fakeGestureTouched = !1, s.fakeGestureMoved = !1, !a.gestures) {
      if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
      s.fakeGestureTouched = !0, r.scaleStart = Zoom.getDistanceBetweenTouches(e);
    }

    r.$slideEl && r.$slideEl.length || (r.$slideEl = $(e.target).closest("." + t.params.slideClass), 0 === r.$slideEl.length && (r.$slideEl = t.slides.eq(t.activeIndex)), r.$imageEl = r.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass), r.maxRatio = r.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== r.$imageWrapEl.length) ? (r.$imageEl && r.$imageEl.transition(0), t.zoom.isScaling = !0) : r.$imageEl = void 0;
  },
  onGestureChange: function onGestureChange(e) {
    var t = this,
        a = t.support,
        i = t.params.zoom,
        s = t.zoom,
        r = s.gesture;

    if (!a.gestures) {
      if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
      s.fakeGestureMoved = !0, r.scaleMove = Zoom.getDistanceBetweenTouches(e);
    }

    r.$imageEl && 0 !== r.$imageEl.length ? (a.gestures ? s.scale = e.scale * s.currentScale : s.scale = r.scaleMove / r.scaleStart * s.currentScale, s.scale > r.maxRatio && (s.scale = r.maxRatio - 1 + Math.pow(s.scale - r.maxRatio + 1, .5)), s.scale < i.minRatio && (s.scale = i.minRatio + 1 - Math.pow(i.minRatio - s.scale + 1, .5)), r.$imageEl.transform("translate3d(0,0,0) scale(" + s.scale + ")")) : "gesturechange" === e.type && s.onGestureStart(e);
  },
  onGestureEnd: function onGestureEnd(e) {
    var t = this,
        a = t.device,
        i = t.support,
        s = t.params.zoom,
        r = t.zoom,
        n = r.gesture;

    if (!i.gestures) {
      if (!r.fakeGestureTouched || !r.fakeGestureMoved) return;
      if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !a.android) return;
      r.fakeGestureTouched = !1, r.fakeGestureMoved = !1;
    }

    n.$imageEl && 0 !== n.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, n.maxRatio), s.minRatio), n.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale(" + r.scale + ")"), r.currentScale = r.scale, r.isScaling = !1, 1 === r.scale && (n.$slideEl = void 0));
  },
  onTouchStart: function onTouchStart(e) {
    var t = this.device,
        a = this.zoom,
        i = a.gesture,
        s = a.image;
    i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (t.android && e.cancelable && e.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
  },
  onTouchMove: function onTouchMove(e) {
    var t = this,
        a = t.zoom,
        i = a.gesture,
        s = a.image,
        r = a.velocity;

    if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, s.isTouched && i.$slideEl)) {
      s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (s.startX = -s.startX, s.startY = -s.startY));
      var n = s.width * a.scale,
          o = s.height * a.scale;

      if (!(n < i.slideWidth && o < i.slideHeight)) {
        if (s.minX = Math.min(i.slideWidth / 2 - n / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !a.isScaling) {
          if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);
          if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1);
        }

        e.cancelable && e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = s.touchesCurrent.x, r.prevPositionY = s.touchesCurrent.y, r.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)");
      }
    }
  },
  onTouchEnd: function onTouchEnd() {
    var e = this.zoom,
        t = e.gesture,
        a = e.image,
        i = e.velocity;

    if (t.$imageEl && 0 !== t.$imageEl.length) {
      if (!a.isTouched || !a.isMoved) return a.isTouched = !1, void (a.isMoved = !1);
      a.isTouched = !1, a.isMoved = !1;
      var s = 300,
          r = 300,
          n = i.x * s,
          o = a.currentX + n,
          l = i.y * r,
          d = a.currentY + l;
      0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)), 0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
      var p = Math.max(s, r);
      a.currentX = o, a.currentY = d;
      var u = a.width * e.scale,
          c = a.height * e.scale;
      a.minX = Math.min(t.slideWidth / 2 - u / 2, 0), a.maxX = -a.minX, a.minY = Math.min(t.slideHeight / 2 - c / 2, 0), a.maxY = -a.minY, a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX), a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY), t.$imageWrapEl.transition(p).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)");
    }
  },
  onTransitionEnd: function onTransitionEnd() {
    var e = this,
        t = e.zoom,
        a = t.gesture;
    a.$slideEl && e.previousIndex !== e.activeIndex && (a.$imageEl && a.$imageEl.transform("translate3d(0,0,0) scale(1)"), a.$imageWrapEl && a.$imageWrapEl.transform("translate3d(0,0,0)"), t.scale = 1, t.currentScale = 1, a.$slideEl = void 0, a.$imageEl = void 0, a.$imageWrapEl = void 0);
  },
  toggle: function toggle(e) {
    var t = this.zoom;
    t.scale && 1 !== t.scale ? t.out() : t.in(e);
  },
  in: function _in(e) {
    var t,
        a,
        i,
        s,
        r,
        n,
        o,
        l,
        d,
        p,
        u,
        c,
        h,
        v,
        f,
        m,
        g = this,
        w = getWindow(),
        b = g.zoom,
        y = g.params.zoom,
        x = b.gesture,
        E = b.image;
    (x.$slideEl || (g.params.virtual && g.params.virtual.enabled && g.virtual ? x.$slideEl = g.$wrapperEl.children("." + g.params.slideActiveClass) : x.$slideEl = g.slides.eq(g.activeIndex), x.$imageEl = x.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), x.$imageWrapEl = x.$imageEl.parent("." + y.containerClass)), x.$imageEl && 0 !== x.$imageEl.length) && (x.$slideEl.addClass("" + y.zoomedSlideClass), void 0 === E.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, a = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = E.touchesStart.x, a = E.touchesStart.y), b.scale = x.$imageWrapEl.attr("data-swiper-zoom") || y.maxRatio, b.currentScale = x.$imageWrapEl.attr("data-swiper-zoom") || y.maxRatio, e ? (f = x.$slideEl[0].offsetWidth, m = x.$slideEl[0].offsetHeight, i = x.$slideEl.offset().left + w.scrollX + f / 2 - t, s = x.$slideEl.offset().top + w.scrollY + m / 2 - a, o = x.$imageEl[0].offsetWidth, l = x.$imageEl[0].offsetHeight, d = o * b.scale, p = l * b.scale, h = -(u = Math.min(f / 2 - d / 2, 0)), v = -(c = Math.min(m / 2 - p / 2, 0)), (r = i * b.scale) < u && (r = u), r > h && (r = h), (n = s * b.scale) < c && (n = c), n > v && (n = v)) : (r = 0, n = 0), x.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), x.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"));
  },
  out: function out() {
    var e = this,
        t = e.zoom,
        a = e.params.zoom,
        i = t.gesture;
    i.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? i.$slideEl = e.$wrapperEl.children("." + e.params.slideActiveClass) : i.$slideEl = e.slides.eq(e.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + a.zoomedSlideClass), i.$slideEl = void 0);
  },
  toggleGestures: function toggleGestures(e) {
    var t = this,
        a = t.zoom,
        i = a.slideSelector,
        s = a.passiveListener;
    t.$wrapperEl[e]("gesturestart", i, a.onGestureStart, s), t.$wrapperEl[e]("gesturechange", i, a.onGestureChange, s), t.$wrapperEl[e]("gestureend", i, a.onGestureEnd, s);
  },
  enableGestures: function enableGestures() {
    this.zoom.gesturesEnabled || (this.zoom.gesturesEnabled = !0, this.zoom.toggleGestures("on"));
  },
  disableGestures: function disableGestures() {
    this.zoom.gesturesEnabled && (this.zoom.gesturesEnabled = !1, this.zoom.toggleGestures("off"));
  },
  enable: function enable() {
    var e = this,
        t = e.support,
        a = e.zoom;

    if (!a.enabled) {
      a.enabled = !0;
      var i = !("touchstart" !== e.touchEvents.start || !t.passiveListener || !e.params.passiveListeners) && {
        passive: !0,
        capture: !1
      },
          s = !t.passiveListener || {
        passive: !1,
        capture: !0
      },
          r = "." + e.params.slideClass;
      e.zoom.passiveListener = i, e.zoom.slideSelector = r, t.gestures ? (e.$wrapperEl.on(e.touchEvents.start, e.zoom.enableGestures, i), e.$wrapperEl.on(e.touchEvents.end, e.zoom.disableGestures, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, r, a.onGestureStart, i), e.$wrapperEl.on(e.touchEvents.move, r, a.onGestureChange, s), e.$wrapperEl.on(e.touchEvents.end, r, a.onGestureEnd, i), e.touchEvents.cancel && e.$wrapperEl.on(e.touchEvents.cancel, r, a.onGestureEnd, i)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, a.onTouchMove, s);
    }
  },
  disable: function disable() {
    var e = this,
        t = e.zoom;

    if (t.enabled) {
      var a = e.support;
      e.zoom.enabled = !1;
      var i = !("touchstart" !== e.touchEvents.start || !a.passiveListener || !e.params.passiveListeners) && {
        passive: !0,
        capture: !1
      },
          s = !a.passiveListener || {
        passive: !1,
        capture: !0
      },
          r = "." + e.params.slideClass;
      a.gestures ? (e.$wrapperEl.off(e.touchEvents.start, e.zoom.enableGestures, i), e.$wrapperEl.off(e.touchEvents.end, e.zoom.disableGestures, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, r, t.onGestureStart, i), e.$wrapperEl.off(e.touchEvents.move, r, t.onGestureChange, s), e.$wrapperEl.off(e.touchEvents.end, r, t.onGestureEnd, i), e.touchEvents.cancel && e.$wrapperEl.off(e.touchEvents.cancel, r, t.onGestureEnd, i)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove, s);
    }
  }
},
    Zoom$1 = {
  name: "zoom",
  params: {
    zoom: {
      enabled: !1,
      maxRatio: 3,
      minRatio: 1,
      toggle: !0,
      containerClass: "swiper-zoom-container",
      zoomedSlideClass: "swiper-slide-zoomed"
    }
  },
  create: function create() {
    var e = this;
    bindModuleMethods(e, {
      zoom: _extends({
        enabled: !1,
        scale: 1,
        currentScale: 1,
        isScaling: !1,
        gesture: {
          $slideEl: void 0,
          slideWidth: void 0,
          slideHeight: void 0,
          $imageEl: void 0,
          $imageWrapEl: void 0,
          maxRatio: 3
        },
        image: {
          isTouched: void 0,
          isMoved: void 0,
          currentX: void 0,
          currentY: void 0,
          minX: void 0,
          minY: void 0,
          maxX: void 0,
          maxY: void 0,
          width: void 0,
          height: void 0,
          startX: void 0,
          startY: void 0,
          touchesStart: {},
          touchesCurrent: {}
        },
        velocity: {
          x: void 0,
          y: void 0,
          prevPositionX: void 0,
          prevPositionY: void 0,
          prevTime: void 0
        }
      }, Zoom)
    });
    var t = 1;
    Object.defineProperty(e.zoom, "scale", {
      get: function get() {
        return t;
      },
      set: function set(a) {
        if (t !== a) {
          var i = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
              s = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
          e.emit("zoomChange", a, i, s);
        }

        t = a;
      }
    });
  },
  on: {
    init: function init(e) {
      e.params.zoom.enabled && e.zoom.enable();
    },
    destroy: function destroy(e) {
      e.zoom.disable();
    },
    touchStart: function touchStart(e, t) {
      e.zoom.enabled && e.zoom.onTouchStart(t);
    },
    touchEnd: function touchEnd(e, t) {
      e.zoom.enabled && e.zoom.onTouchEnd(t);
    },
    doubleTap: function doubleTap(e, t) {
      !e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && e.zoom.toggle(t);
    },
    transitionEnd: function transitionEnd(e) {
      e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd();
    },
    slideChange: function slideChange(e) {
      e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && e.zoom.onTransitionEnd();
    }
  }
},
    Lazy = {
  loadInSlide: function loadInSlide(e, t) {
    void 0 === t && (t = !0);
    var a = this,
        i = a.params.lazy;

    if (void 0 !== e && 0 !== a.slides.length) {
      var s = a.virtual && a.params.virtual.enabled ? a.$wrapperEl.children("." + a.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : a.slides.eq(e),
          r = s.find("." + i.elementClass + ":not(." + i.loadedClass + "):not(." + i.loadingClass + ")");
      !s.hasClass(i.elementClass) || s.hasClass(i.loadedClass) || s.hasClass(i.loadingClass) || r.push(s[0]), 0 !== r.length && r.each(function (e) {
        var r = $(e);
        r.addClass(i.loadingClass);
        var n = r.attr("data-background"),
            o = r.attr("data-src"),
            l = r.attr("data-srcset"),
            d = r.attr("data-sizes"),
            p = r.parent("picture");
        a.loadImage(r[0], o || n, l, d, !1, function () {
          if (null != a && a && (!a || a.params) && !a.destroyed) {
            if (n ? (r.css("background-image", 'url("' + n + '")'), r.removeAttr("data-background")) : (l && (r.attr("srcset", l), r.removeAttr("data-srcset")), d && (r.attr("sizes", d), r.removeAttr("data-sizes")), p.length && p.children("source").each(function (e) {
              var t = $(e);
              t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"));
            }), o && (r.attr("src", o), r.removeAttr("data-src"))), r.addClass(i.loadedClass).removeClass(i.loadingClass), s.find("." + i.preloaderClass).remove(), a.params.loop && t) {
              var e = s.attr("data-swiper-slide-index");

              if (s.hasClass(a.params.slideDuplicateClass)) {
                var u = a.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + a.params.slideDuplicateClass + ")");
                a.lazy.loadInSlide(u.index(), !1);
              } else {
                var c = a.$wrapperEl.children("." + a.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                a.lazy.loadInSlide(c.index(), !1);
              }
            }

            a.emit("lazyImageReady", s[0], r[0]), a.params.autoHeight && a.updateAutoHeight();
          }
        }), a.emit("lazyImageLoad", s[0], r[0]);
      });
    }
  },
  load: function load() {
    var e = this,
        t = e.$wrapperEl,
        a = e.params,
        i = e.slides,
        s = e.activeIndex,
        r = e.virtual && a.virtual.enabled,
        n = a.lazy,
        o = a.slidesPerView;

    function l(e) {
      if (r) {
        if (t.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
      } else if (i[e]) return !0;

      return !1;
    }

    function d(e) {
      return r ? $(e).attr("data-swiper-slide-index") : $(e).index();
    }

    if ("auto" === o && (o = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + a.slideVisibleClass).each(function (t) {
      var a = r ? $(t).attr("data-swiper-slide-index") : $(t).index();
      e.lazy.loadInSlide(a);
    });else if (o > 1) for (var p = s; p < s + o; p += 1) {
      l(p) && e.lazy.loadInSlide(p);
    } else e.lazy.loadInSlide(s);
    if (n.loadPrevNext) if (o > 1 || n.loadPrevNextAmount && n.loadPrevNextAmount > 1) {
      for (var u = n.loadPrevNextAmount, c = o, h = Math.min(s + c + Math.max(u, c), i.length), v = Math.max(s - Math.max(c, u), 0), f = s + o; f < h; f += 1) {
        l(f) && e.lazy.loadInSlide(f);
      }

      for (var m = v; m < s; m += 1) {
        l(m) && e.lazy.loadInSlide(m);
      }
    } else {
      var g = t.children("." + a.slideNextClass);
      g.length > 0 && e.lazy.loadInSlide(d(g));
      var w = t.children("." + a.slidePrevClass);
      w.length > 0 && e.lazy.loadInSlide(d(w));
    }
  },
  checkInViewOnLoad: function checkInViewOnLoad() {
    var e = getWindow(),
        t = this;

    if (t && !t.destroyed) {
      var a = t.params.lazy.scrollingElement ? $(t.params.lazy.scrollingElement) : $(e),
          i = a[0] === e,
          s = i ? e.innerWidth : a[0].offsetWidth,
          r = i ? e.innerHeight : a[0].offsetHeight,
          n = t.$el.offset(),
          o = !1;
      t.rtlTranslate && (n.left -= t.$el[0].scrollLeft);

      for (var l = [[n.left, n.top], [n.left + t.width, n.top], [n.left, n.top + t.height], [n.left + t.width, n.top + t.height]], d = 0; d < l.length; d += 1) {
        var p = l[d];

        if (p[0] >= 0 && p[0] <= s && p[1] >= 0 && p[1] <= r) {
          if (0 === p[0] && 0 === p[1]) continue;
          o = !0;
        }
      }

      o ? (t.lazy.load(), a.off("scroll", t.lazy.checkInViewOnLoad)) : t.lazy.scrollHandlerAttached || (t.lazy.scrollHandlerAttached = !0, a.on("scroll", t.lazy.checkInViewOnLoad));
    }
  }
},
    Lazy$1 = {
  name: "lazy",
  params: {
    lazy: {
      checkInView: !1,
      enabled: !1,
      loadPrevNext: !1,
      loadPrevNextAmount: 1,
      loadOnTransitionStart: !1,
      scrollingElement: "",
      elementClass: "swiper-lazy",
      loadingClass: "swiper-lazy-loading",
      loadedClass: "swiper-lazy-loaded",
      preloaderClass: "swiper-lazy-preloader"
    }
  },
  create: function create() {
    bindModuleMethods(this, {
      lazy: _extends({
        initialImageLoaded: !1
      }, Lazy)
    });
  },
  on: {
    beforeInit: function beforeInit(e) {
      e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1);
    },
    init: function init(e) {
      e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && (e.params.lazy.checkInView ? e.lazy.checkInViewOnLoad() : e.lazy.load());
    },
    scroll: function scroll(e) {
      e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
    },
    "scrollbarDragMove resize _freeModeNoMomentumRelease": function scrollbarDragMoveResize_freeModeNoMomentumRelease(e) {
      e.params.lazy.enabled && e.lazy.load();
    },
    transitionStart: function transitionStart(e) {
      e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load();
    },
    transitionEnd: function transitionEnd(e) {
      e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load();
    },
    slideChange: function slideChange(e) {
      e.params.lazy.enabled && e.params.cssMode && e.lazy.load();
    }
  }
},
    Controller = {
  LinearSpline: function LinearSpline(e, t) {
    var a,
        i,
        s,
        r,
        n,
        o = function o(e, t) {
      for (i = -1, a = e.length; a - i > 1;) {
        e[s = a + i >> 1] <= t ? i = s : a = s;
      }

      return a;
    };

    return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
      return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0;
    }, this;
  },
  getInterpolateFunction: function getInterpolateFunction(e) {
    var t = this;
    t.controller.spline || (t.controller.spline = t.params.loop ? new Controller.LinearSpline(t.slidesGrid, e.slidesGrid) : new Controller.LinearSpline(t.snapGrid, e.snapGrid));
  },
  setTranslate: function setTranslate(e, t) {
    var a,
        i,
        s = this,
        r = s.controller.control,
        n = s.constructor;

    function o(e) {
      var t = s.rtlTranslate ? -s.translate : s.translate;
      "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), i = -s.controller.spline.interpolate(-t)), i && "container" !== s.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()), i = (t - s.minTranslate()) * a + e.minTranslate()), s.params.controller.inverse && (i = e.maxTranslate() - i), e.updateProgress(i), e.setTranslate(i, s), e.updateActiveIndex(), e.updateSlidesClasses();
    }

    if (Array.isArray(r)) for (var l = 0; l < r.length; l += 1) {
      r[l] !== t && r[l] instanceof n && o(r[l]);
    } else r instanceof n && t !== r && o(r);
  },
  setTransition: function setTransition(e, t) {
    var a,
        i = this,
        s = i.constructor,
        r = i.controller.control;

    function n(t) {
      t.setTransition(e, i), 0 !== e && (t.transitionStart(), t.params.autoHeight && nextTick(function () {
        t.updateAutoHeight();
      }), t.$wrapperEl.transitionEnd(function () {
        r && (t.params.loop && "slide" === i.params.controller.by && t.loopFix(), t.transitionEnd());
      }));
    }

    if (Array.isArray(r)) for (a = 0; a < r.length; a += 1) {
      r[a] !== t && r[a] instanceof s && n(r[a]);
    } else r instanceof s && t !== r && n(r);
  }
},
    Controller$1 = {
  name: "controller",
  params: {
    controller: {
      control: void 0,
      inverse: !1,
      by: "slide"
    }
  },
  create: function create() {
    bindModuleMethods(this, {
      controller: _extends({
        control: this.params.controller.control
      }, Controller)
    });
  },
  on: {
    update: function update(e) {
      e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
    },
    resize: function resize(e) {
      e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
    },
    observerUpdate: function observerUpdate(e) {
      e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
    },
    setTranslate: function setTranslate(e, t, a) {
      e.controller.control && e.controller.setTranslate(t, a);
    },
    setTransition: function setTransition(e, t, a) {
      e.controller.control && e.controller.setTransition(t, a);
    }
  }
},
    A11y = {
  getRandomNumber: function getRandomNumber(e) {
    void 0 === e && (e = 16);
    return "x".repeat(e).replace(/x/g, function () {
      return Math.round(16 * Math.random()).toString(16);
    });
  },
  makeElFocusable: function makeElFocusable(e) {
    return e.attr("tabIndex", "0"), e;
  },
  makeElNotFocusable: function makeElNotFocusable(e) {
    return e.attr("tabIndex", "-1"), e;
  },
  addElRole: function addElRole(e, t) {
    return e.attr("role", t), e;
  },
  addElRoleDescription: function addElRoleDescription(e, t) {
    return e.attr("aria-role-description", t), e;
  },
  addElControls: function addElControls(e, t) {
    return e.attr("aria-controls", t), e;
  },
  addElLabel: function addElLabel(e, t) {
    return e.attr("aria-label", t), e;
  },
  addElId: function addElId(e, t) {
    return e.attr("id", t), e;
  },
  addElLive: function addElLive(e, t) {
    return e.attr("aria-live", t), e;
  },
  disableEl: function disableEl(e) {
    return e.attr("aria-disabled", !0), e;
  },
  enableEl: function enableEl(e) {
    return e.attr("aria-disabled", !1), e;
  },
  onEnterOrSpaceKey: function onEnterOrSpaceKey(e) {
    if (13 === e.keyCode || 32 === e.keyCode) {
      var t = this,
          a = t.params.a11y,
          i = $(e.target);
      t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(a.lastSlideMessage) : t.a11y.notify(a.nextSlideMessage)), t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(a.firstSlideMessage) : t.a11y.notify(a.prevSlideMessage)), t.pagination && i.is("." + t.params.pagination.bulletClass.replace(/ /g, ".")) && i[0].click();
    }
  },
  notify: function notify(e) {
    var t = this.a11y.liveRegion;
    0 !== t.length && (t.html(""), t.html(e));
  },
  updateNavigation: function updateNavigation() {
    var e = this;

    if (!e.params.loop && e.navigation) {
      var t = e.navigation,
          a = t.$nextEl,
          i = t.$prevEl;
      i && i.length > 0 && (e.isBeginning ? (e.a11y.disableEl(i), e.a11y.makeElNotFocusable(i)) : (e.a11y.enableEl(i), e.a11y.makeElFocusable(i))), a && a.length > 0 && (e.isEnd ? (e.a11y.disableEl(a), e.a11y.makeElNotFocusable(a)) : (e.a11y.enableEl(a), e.a11y.makeElFocusable(a)));
    }
  },
  updatePagination: function updatePagination() {
    var e = this,
        t = e.params.a11y;
    e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function (a) {
      var i = $(a);
      e.a11y.makeElFocusable(i), e.params.pagination.renderBullet || (e.a11y.addElRole(i, "button"), e.a11y.addElLabel(i, t.paginationBulletMessage.replace(/\{\{index\}\}/, i.index() + 1)));
    });
  },
  init: function init() {
    var e = this,
        t = e.params.a11y;
    e.$el.append(e.a11y.liveRegion);
    var a = e.$el;
    t.containerRoleDescriptionMessage && e.a11y.addElRoleDescription(a, t.containerRoleDescriptionMessage), t.containerMessage && e.a11y.addElLabel(a, t.containerMessage);
    var i,
        s,
        r,
        n = e.$wrapperEl,
        o = n.attr("id") || "swiper-wrapper-" + e.a11y.getRandomNumber(16);
    e.a11y.addElId(n, o), i = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite", e.a11y.addElLive(n, i), t.itemRoleDescriptionMessage && e.a11y.addElRoleDescription($(e.slides), t.itemRoleDescriptionMessage), e.a11y.addElRole($(e.slides), "group"), e.slides.each(function (t) {
      var a = $(t);
      e.a11y.addElLabel(a, a.index() + 1 + " / " + e.slides.length);
    }), e.navigation && e.navigation.$nextEl && (s = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (r = e.navigation.$prevEl), s && s.length && (e.a11y.makeElFocusable(s), "BUTTON" !== s[0].tagName && (e.a11y.addElRole(s, "button"), s.on("keydown", e.a11y.onEnterOrSpaceKey)), e.a11y.addElLabel(s, t.nextSlideMessage), e.a11y.addElControls(s, o)), r && r.length && (e.a11y.makeElFocusable(r), "BUTTON" !== r[0].tagName && (e.a11y.addElRole(r, "button"), r.on("keydown", e.a11y.onEnterOrSpaceKey)), e.a11y.addElLabel(r, t.prevSlideMessage), e.a11y.addElControls(r, o)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass.replace(/ /g, "."), e.a11y.onEnterOrSpaceKey);
  },
  destroy: function destroy() {
    var e,
        t,
        a = this;
    a.a11y.liveRegion && a.a11y.liveRegion.length > 0 && a.a11y.liveRegion.remove(), a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl), a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl), e && e.off("keydown", a.a11y.onEnterOrSpaceKey), t && t.off("keydown", a.a11y.onEnterOrSpaceKey), a.pagination && a.params.pagination.clickable && a.pagination.bullets && a.pagination.bullets.length && a.pagination.$el.off("keydown", "." + a.params.pagination.bulletClass.replace(/ /g, "."), a.a11y.onEnterOrSpaceKey);
  }
},
    A11y$1 = {
  name: "a11y",
  params: {
    a11y: {
      enabled: !0,
      notificationClass: "swiper-notification",
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
      firstSlideMessage: "This is the first slide",
      lastSlideMessage: "This is the last slide",
      paginationBulletMessage: "Go to slide {{index}}",
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      itemRoleDescriptionMessage: null
    }
  },
  create: function create() {
    bindModuleMethods(this, {
      a11y: _extends({}, A11y, {
        liveRegion: $('<span class="' + this.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
      })
    });
  },
  on: {
    afterInit: function afterInit(e) {
      e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation());
    },
    toEdge: function toEdge(e) {
      e.params.a11y.enabled && e.a11y.updateNavigation();
    },
    fromEdge: function fromEdge(e) {
      e.params.a11y.enabled && e.a11y.updateNavigation();
    },
    paginationUpdate: function paginationUpdate(e) {
      e.params.a11y.enabled && e.a11y.updatePagination();
    },
    destroy: function destroy(e) {
      e.params.a11y.enabled && e.a11y.destroy();
    }
  }
},
    History = {
  init: function init() {
    var e = this,
        t = getWindow();

    if (e.params.history) {
      if (!t.history || !t.history.pushState) return e.params.history.enabled = !1, void (e.params.hashNavigation.enabled = !0);
      var a = e.history;
      a.initialized = !0, a.paths = History.getPathValues(e.params.url), (a.paths.key || a.paths.value) && (a.scrollToSlide(0, a.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || t.addEventListener("popstate", e.history.setHistoryPopState));
    }
  },
  destroy: function destroy() {
    var e = getWindow();
    this.params.history.replaceState || e.removeEventListener("popstate", this.history.setHistoryPopState);
  },
  setHistoryPopState: function setHistoryPopState() {
    var e = this;
    e.history.paths = History.getPathValues(e.params.url), e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1);
  },
  getPathValues: function getPathValues(e) {
    var t = getWindow(),
        a = (e ? new URL(e) : t.location).pathname.slice(1).split("/").filter(function (e) {
      return "" !== e;
    }),
        i = a.length;
    return {
      key: a[i - 2],
      value: a[i - 1]
    };
  },
  setHistory: function setHistory(e, t) {
    var a = this,
        i = getWindow();

    if (a.history.initialized && a.params.history.enabled) {
      var s;
      s = a.params.url ? new URL(a.params.url) : i.location;
      var r = a.slides.eq(t),
          n = History.slugify(r.attr("data-history"));
      s.pathname.includes(e) || (n = e + "/" + n);
      var o = i.history.state;
      o && o.value === n || (a.params.history.replaceState ? i.history.replaceState({
        value: n
      }, null, n) : i.history.pushState({
        value: n
      }, null, n));
    }
  },
  slugify: function slugify(e) {
    return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
  },
  scrollToSlide: function scrollToSlide(e, t, a) {
    var i = this;
    if (t) for (var s = 0, r = i.slides.length; s < r; s += 1) {
      var n = i.slides.eq(s);

      if (History.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) {
        var o = n.index();
        i.slideTo(o, e, a);
      }
    } else i.slideTo(0, e, a);
  }
},
    History$1 = {
  name: "history",
  params: {
    history: {
      enabled: !1,
      replaceState: !1,
      key: "slides"
    }
  },
  create: function create() {
    bindModuleMethods(this, {
      history: _extends({}, History)
    });
  },
  on: {
    init: function init(e) {
      e.params.history.enabled && e.history.init();
    },
    destroy: function destroy(e) {
      e.params.history.enabled && e.history.destroy();
    },
    transitionEnd: function transitionEnd(e) {
      e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex);
    },
    slideChange: function slideChange(e) {
      e.history.initialized && e.params.cssMode && e.history.setHistory(e.params.history.key, e.activeIndex);
    }
  }
},
    HashNavigation = {
  onHashCange: function onHashCange() {
    var e = this,
        t = getDocument();
    e.emit("hashChange");
    var a = t.location.hash.replace("#", "");

    if (a !== e.slides.eq(e.activeIndex).attr("data-hash")) {
      var i = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + a + '"]').index();
      if (void 0 === i) return;
      e.slideTo(i);
    }
  },
  setHash: function setHash() {
    var e = this,
        t = getWindow(),
        a = getDocument();
    if (e.hashNavigation.initialized && e.params.hashNavigation.enabled) if (e.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || false), e.emit("hashSet");else {
      var i = e.slides.eq(e.activeIndex),
          s = i.attr("data-hash") || i.attr("data-history");
      a.location.hash = s || "", e.emit("hashSet");
    }
  },
  init: function init() {
    var e = this,
        t = getDocument(),
        a = getWindow();

    if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
      e.hashNavigation.initialized = !0;
      var i = t.location.hash.replace("#", "");
      if (i) for (var s = 0, r = e.slides.length; s < r; s += 1) {
        var n = e.slides.eq(s);

        if ((n.attr("data-hash") || n.attr("data-history")) === i && !n.hasClass(e.params.slideDuplicateClass)) {
          var o = n.index();
          e.slideTo(o, 0, e.params.runCallbacksOnInit, !0);
        }
      }
      e.params.hashNavigation.watchState && $(a).on("hashchange", e.hashNavigation.onHashCange);
    }
  },
  destroy: function destroy() {
    var e = getWindow();
    this.params.hashNavigation.watchState && $(e).off("hashchange", this.hashNavigation.onHashCange);
  }
},
    HashNavigation$1 = {
  name: "hash-navigation",
  params: {
    hashNavigation: {
      enabled: !1,
      replaceState: !1,
      watchState: !1
    }
  },
  create: function create() {
    bindModuleMethods(this, {
      hashNavigation: _extends({
        initialized: !1
      }, HashNavigation)
    });
  },
  on: {
    init: function init(e) {
      e.params.hashNavigation.enabled && e.hashNavigation.init();
    },
    destroy: function destroy(e) {
      e.params.hashNavigation.enabled && e.hashNavigation.destroy();
    },
    transitionEnd: function transitionEnd(e) {
      e.hashNavigation.initialized && e.hashNavigation.setHash();
    },
    slideChange: function slideChange(e) {
      e.hashNavigation.initialized && e.params.cssMode && e.hashNavigation.setHash();
    }
  }
},
    Autoplay = {
  run: function run() {
    var e = this,
        t = e.slides.eq(e.activeIndex),
        a = e.params.autoplay.delay;
    t.attr("data-swiper-autoplay") && (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = nextTick(function () {
      var t;
      e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), t = e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (t = e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), t = e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (t = e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (t = e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), (e.params.cssMode && e.autoplay.running || !1 === t) && e.autoplay.run();
    }, a);
  },
  start: function start() {
    var e = this;
    return void 0 === e.autoplay.timeout && !e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0);
  },
  stop: function stop() {
    var e = this;
    return !!e.autoplay.running && void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0);
  },
  pause: function pause(e) {
    var t = this;
    t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())));
  },
  onVisibilityChange: function onVisibilityChange() {
    var e = this,
        t = getDocument();
    "hidden" === t.visibilityState && e.autoplay.running && e.autoplay.pause(), "visible" === t.visibilityState && e.autoplay.paused && (e.autoplay.run(), e.autoplay.paused = !1);
  },
  onTransitionEnd: function onTransitionEnd(e) {
    var t = this;
    t && !t.destroyed && t.$wrapperEl && e.target === t.$wrapperEl[0] && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
  }
},
    Autoplay$1 = {
  name: "autoplay",
  params: {
    autoplay: {
      enabled: !1,
      delay: 3e3,
      waitForTransition: !0,
      disableOnInteraction: !0,
      stopOnLastSlide: !1,
      reverseDirection: !1
    }
  },
  create: function create() {
    bindModuleMethods(this, {
      autoplay: _extends({}, Autoplay, {
        running: !1,
        paused: !1
      })
    });
  },
  on: {
    init: function init(e) {
      e.params.autoplay.enabled && (e.autoplay.start(), getDocument().addEventListener("visibilitychange", e.autoplay.onVisibilityChange));
    },
    beforeTransitionStart: function beforeTransitionStart(e, t, a) {
      e.autoplay.running && (a || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(t) : e.autoplay.stop());
    },
    sliderFirstMove: function sliderFirstMove(e) {
      e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause());
    },
    touchEnd: function touchEnd(e) {
      e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run();
    },
    destroy: function destroy(e) {
      e.autoplay.running && e.autoplay.stop(), getDocument().removeEventListener("visibilitychange", e.autoplay.onVisibilityChange);
    }
  }
},
    Fade = {
  setTranslate: function setTranslate() {
    for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
      var i = e.slides.eq(a),
          s = -i[0].swiperSlideOffset;
      e.params.virtualTranslate || (s -= e.translate);
      var r = 0;
      e.isHorizontal() || (r = s, s = 0);
      var n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
      i.css({
        opacity: n
      }).transform("translate3d(" + s + "px, " + r + "px, 0px)");
    }
  },
  setTransition: function setTransition(e) {
    var t = this,
        a = t.slides,
        i = t.$wrapperEl;

    if (a.transition(e), t.params.virtualTranslate && 0 !== e) {
      var s = !1;
      a.transitionEnd(function () {
        if (!s && t && !t.destroyed) {
          s = !0, t.animating = !1;

          for (var e = ["webkitTransitionEnd", "transitionend"], a = 0; a < e.length; a += 1) {
            i.trigger(e[a]);
          }
        }
      });
    }
  }
},
    EffectFade = {
  name: "effect-fade",
  params: {
    fadeEffect: {
      crossFade: !1
    }
  },
  create: function create() {
    bindModuleMethods(this, {
      fadeEffect: _extends({}, Fade)
    });
  },
  on: {
    beforeInit: function beforeInit(e) {
      if ("fade" === e.params.effect) {
        e.classNames.push(e.params.containerModifierClass + "fade");
        var t = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !0
        };
        extend$1(e.params, t), extend$1(e.originalParams, t);
      }
    },
    setTranslate: function setTranslate(e) {
      "fade" === e.params.effect && e.fadeEffect.setTranslate();
    },
    setTransition: function setTransition(e, t) {
      "fade" === e.params.effect && e.fadeEffect.setTransition(t);
    }
  }
},
    Cube = {
  setTranslate: function setTranslate() {
    var e,
        t = this,
        a = t.$el,
        i = t.$wrapperEl,
        s = t.slides,
        r = t.width,
        n = t.height,
        o = t.rtlTranslate,
        l = t.size,
        d = t.browser,
        p = t.params.cubeEffect,
        u = t.isHorizontal(),
        c = t.virtual && t.params.virtual.enabled,
        h = 0;
    p.shadow && (u ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = $('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
      height: r + "px"
    })) : 0 === (e = a.find(".swiper-cube-shadow")).length && (e = $('<div class="swiper-cube-shadow"></div>'), a.append(e)));

    for (var v = 0; v < s.length; v += 1) {
      var f = s.eq(v),
          m = v;
      c && (m = parseInt(f.attr("data-swiper-slide-index"), 10));
      var g = 90 * m,
          w = Math.floor(g / 360);
      o && (g = -g, w = Math.floor(-g / 360));
      var b = Math.max(Math.min(f[0].progress, 1), -1),
          y = 0,
          x = 0,
          E = 0;
      m % 4 == 0 ? (y = 4 * -w * l, E = 0) : (m - 1) % 4 == 0 ? (y = 0, E = 4 * -w * l) : (m - 2) % 4 == 0 ? (y = l + 4 * w * l, E = l) : (m - 3) % 4 == 0 && (y = -l, E = 3 * l + 4 * l * w), o && (y = -y), u || (x = y, y = 0);
      var T = "rotateX(" + (u ? 0 : -g) + "deg) rotateY(" + (u ? g : 0) + "deg) translate3d(" + y + "px, " + x + "px, " + E + "px)";

      if (b <= 1 && b > -1 && (h = 90 * m + 90 * b, o && (h = 90 * -m - 90 * b)), f.transform(T), p.slideShadows) {
        var C = u ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
            S = u ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
        0 === C.length && (C = $('<div class="swiper-slide-shadow-' + (u ? "left" : "top") + '"></div>'), f.append(C)), 0 === S.length && (S = $('<div class="swiper-slide-shadow-' + (u ? "right" : "bottom") + '"></div>'), f.append(S)), C.length && (C[0].style.opacity = Math.max(-b, 0)), S.length && (S[0].style.opacity = Math.max(b, 0));
      }
    }

    if (i.css({
      "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
      "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
      "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
      "transform-origin": "50% 50% -" + l / 2 + "px"
    }), p.shadow) if (u) e.transform("translate3d(0px, " + (r / 2 + p.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + p.shadowScale + ")");else {
      var M = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
          z = 1.5 - (Math.sin(2 * M * Math.PI / 360) / 2 + Math.cos(2 * M * Math.PI / 360) / 2),
          P = p.shadowScale,
          k = p.shadowScale / z,
          L = p.shadowOffset;
      e.transform("scale3d(" + P + ", 1, " + k + ") translate3d(0px, " + (n / 2 + L) + "px, " + -n / 2 / k + "px) rotateX(-90deg)");
    }
    var O = d.isSafari || d.isWebView ? -l / 2 : 0;
    i.transform("translate3d(0px,0," + O + "px) rotateX(" + (t.isHorizontal() ? 0 : h) + "deg) rotateY(" + (t.isHorizontal() ? -h : 0) + "deg)");
  },
  setTransition: function setTransition(e) {
    var t = this,
        a = t.$el;
    t.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && a.find(".swiper-cube-shadow").transition(e);
  }
},
    EffectCube = {
  name: "effect-cube",
  params: {
    cubeEffect: {
      slideShadows: !0,
      shadow: !0,
      shadowOffset: 20,
      shadowScale: .94
    }
  },
  create: function create() {
    bindModuleMethods(this, {
      cubeEffect: _extends({}, Cube)
    });
  },
  on: {
    beforeInit: function beforeInit(e) {
      if ("cube" === e.params.effect) {
        e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
        var t = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: !1,
          virtualTranslate: !0
        };
        extend$1(e.params, t), extend$1(e.originalParams, t);
      }
    },
    setTranslate: function setTranslate(e) {
      "cube" === e.params.effect && e.cubeEffect.setTranslate();
    },
    setTransition: function setTransition(e, t) {
      "cube" === e.params.effect && e.cubeEffect.setTransition(t);
    }
  }
},
    Flip = {
  setTranslate: function setTranslate() {
    for (var e = this, t = e.slides, a = e.rtlTranslate, i = 0; i < t.length; i += 1) {
      var s = t.eq(i),
          r = s[0].progress;
      e.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
      var n = -180 * r,
          o = 0,
          l = -s[0].swiperSlideOffset,
          d = 0;

      if (e.isHorizontal() ? a && (n = -n) : (d = l, l = 0, o = -n, n = 0), s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length, e.params.flipEffect.slideShadows) {
        var p = e.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
            u = e.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
        0 === p.length && (p = $('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'), s.append(p)), 0 === u.length && (u = $('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(u)), p.length && (p[0].style.opacity = Math.max(-r, 0)), u.length && (u[0].style.opacity = Math.max(r, 0));
      }

      s.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)");
    }
  },
  setTransition: function setTransition(e) {
    var t = this,
        a = t.slides,
        i = t.activeIndex,
        s = t.$wrapperEl;

    if (a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
      var r = !1;
      a.eq(i).transitionEnd(function () {
        if (!r && t && !t.destroyed) {
          r = !0, t.animating = !1;

          for (var e = ["webkitTransitionEnd", "transitionend"], a = 0; a < e.length; a += 1) {
            s.trigger(e[a]);
          }
        }
      });
    }
  }
},
    EffectFlip = {
  name: "effect-flip",
  params: {
    flipEffect: {
      slideShadows: !0,
      limitRotation: !0
    }
  },
  create: function create() {
    bindModuleMethods(this, {
      flipEffect: _extends({}, Flip)
    });
  },
  on: {
    beforeInit: function beforeInit(e) {
      if ("flip" === e.params.effect) {
        e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
        var t = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !0
        };
        extend$1(e.params, t), extend$1(e.originalParams, t);
      }
    },
    setTranslate: function setTranslate(e) {
      "flip" === e.params.effect && e.flipEffect.setTranslate();
    },
    setTransition: function setTransition(e, t) {
      "flip" === e.params.effect && e.flipEffect.setTransition(t);
    }
  }
},
    Coverflow = {
  setTranslate: function setTranslate() {
    for (var e = this, t = e.width, a = e.height, i = e.slides, s = e.slidesSizesGrid, r = e.params.coverflowEffect, n = e.isHorizontal(), o = e.translate, l = n ? t / 2 - o : a / 2 - o, d = n ? r.rotate : -r.rotate, p = r.depth, u = 0, c = i.length; u < c; u += 1) {
      var h = i.eq(u),
          v = s[u],
          f = (l - h[0].swiperSlideOffset - v / 2) / v * r.modifier,
          m = n ? d * f : 0,
          g = n ? 0 : d * f,
          w = -p * Math.abs(f),
          b = r.stretch;
      "string" == typeof b && -1 !== b.indexOf("%") && (b = parseFloat(r.stretch) / 100 * v);
      var y = n ? 0 : b * f,
          x = n ? b * f : 0,
          E = 1 - (1 - r.scale) * Math.abs(f);
      Math.abs(x) < .001 && (x = 0), Math.abs(y) < .001 && (y = 0), Math.abs(w) < .001 && (w = 0), Math.abs(m) < .001 && (m = 0), Math.abs(g) < .001 && (g = 0), Math.abs(E) < .001 && (E = 0);
      var T = "translate3d(" + x + "px," + y + "px," + w + "px)  rotateX(" + g + "deg) rotateY(" + m + "deg) scale(" + E + ")";

      if (h.transform(T), h[0].style.zIndex = 1 - Math.abs(Math.round(f)), r.slideShadows) {
        var C = n ? h.find(".swiper-slide-shadow-left") : h.find(".swiper-slide-shadow-top"),
            S = n ? h.find(".swiper-slide-shadow-right") : h.find(".swiper-slide-shadow-bottom");
        0 === C.length && (C = $('<div class="swiper-slide-shadow-' + (n ? "left" : "top") + '"></div>'), h.append(C)), 0 === S.length && (S = $('<div class="swiper-slide-shadow-' + (n ? "right" : "bottom") + '"></div>'), h.append(S)), C.length && (C[0].style.opacity = f > 0 ? f : 0), S.length && (S[0].style.opacity = -f > 0 ? -f : 0);
      }
    }
  },
  setTransition: function setTransition(e) {
    this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
  }
},
    EffectCoverflow = {
  name: "effect-coverflow",
  params: {
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: !0
    }
  },
  create: function create() {
    bindModuleMethods(this, {
      coverflowEffect: _extends({}, Coverflow)
    });
  },
  on: {
    beforeInit: function beforeInit(e) {
      "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
    },
    setTranslate: function setTranslate(e) {
      "coverflow" === e.params.effect && e.coverflowEffect.setTranslate();
    },
    setTransition: function setTransition(e, t) {
      "coverflow" === e.params.effect && e.coverflowEffect.setTransition(t);
    }
  }
},
    Thumbs = {
  init: function init() {
    var e = this,
        t = e.params.thumbs;
    if (e.thumbs.initialized) return !1;
    e.thumbs.initialized = !0;
    var a = e.constructor;
    return t.swiper instanceof a ? (e.thumbs.swiper = t.swiper, extend$1(e.thumbs.swiper.originalParams, {
      watchSlidesProgress: !0,
      slideToClickedSlide: !1
    }), extend$1(e.thumbs.swiper.params, {
      watchSlidesProgress: !0,
      slideToClickedSlide: !1
    })) : isObject$1(t.swiper) && (e.thumbs.swiper = new a(extend$1({}, t.swiper, {
      watchSlidesVisibility: !0,
      watchSlidesProgress: !0,
      slideToClickedSlide: !1
    })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick), !0;
  },
  onThumbClick: function onThumbClick() {
    var e = this,
        t = e.thumbs.swiper;

    if (t) {
      var a = t.clickedIndex,
          i = t.clickedSlide;

      if (!(i && $(i).hasClass(e.params.thumbs.slideThumbActiveClass) || null == a)) {
        var s;

        if (s = t.params.loop ? parseInt($(t.clickedSlide).attr("data-swiper-slide-index"), 10) : a, e.params.loop) {
          var r = e.activeIndex;
          e.slides.eq(r).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, r = e.activeIndex);
          var n = e.slides.eq(r).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index(),
              o = e.slides.eq(r).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
          s = void 0 === n ? o : void 0 === o ? n : o - r < r - n ? o : n;
        }

        e.slideTo(s);
      }
    }
  },
  update: function update(e) {
    var t = this,
        a = t.thumbs.swiper;

    if (a) {
      var i = "auto" === a.params.slidesPerView ? a.slidesPerViewDynamic() : a.params.slidesPerView,
          s = t.params.thumbs.autoScrollOffset,
          r = s && !a.params.loop;

      if (t.realIndex !== a.realIndex || r) {
        var n,
            o,
            l = a.activeIndex;

        if (a.params.loop) {
          a.slides.eq(l).hasClass(a.params.slideDuplicateClass) && (a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft, l = a.activeIndex);
          var d = a.slides.eq(l).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(),
              p = a.slides.eq(l).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
          n = void 0 === d ? p : void 0 === p ? d : p - l == l - d ? l : p - l < l - d ? p : d, o = t.activeIndex > t.previousIndex ? "next" : "prev";
        } else o = (n = t.realIndex) > t.previousIndex ? "next" : "prev";

        r && (n += "next" === o ? s : -1 * s), a.visibleSlidesIndexes && a.visibleSlidesIndexes.indexOf(n) < 0 && (a.params.centeredSlides ? n = n > l ? n - Math.floor(i / 2) + 1 : n + Math.floor(i / 2) - 1 : n > l && (n = n - i + 1), a.slideTo(n, e ? 0 : void 0));
      }

      var u = 1,
          c = t.params.thumbs.slideThumbActiveClass;
      if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (u = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (u = 1), u = Math.floor(u), a.slides.removeClass(c), a.params.loop || a.params.virtual && a.params.virtual.enabled) for (var h = 0; h < u; h += 1) {
        a.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + h) + '"]').addClass(c);
      } else for (var v = 0; v < u; v += 1) {
        a.slides.eq(t.realIndex + v).addClass(c);
      }
    }
  }
},
    Thumbs$1 = {
  name: "thumbs",
  params: {
    thumbs: {
      swiper: null,
      multipleActiveThumbs: !0,
      autoScrollOffset: 0,
      slideThumbActiveClass: "swiper-slide-thumb-active",
      thumbsContainerClass: "swiper-container-thumbs"
    }
  },
  create: function create() {
    bindModuleMethods(this, {
      thumbs: _extends({
        swiper: null,
        initialized: !1
      }, Thumbs)
    });
  },
  on: {
    beforeInit: function beforeInit(e) {
      var t = e.params.thumbs;
      t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0));
    },
    slideChange: function slideChange(e) {
      e.thumbs.swiper && e.thumbs.update();
    },
    update: function update(e) {
      e.thumbs.swiper && e.thumbs.update();
    },
    resize: function resize(e) {
      e.thumbs.swiper && e.thumbs.update();
    },
    observerUpdate: function observerUpdate(e) {
      e.thumbs.swiper && e.thumbs.update();
    },
    setTransition: function setTransition(e, t) {
      var a = e.thumbs.swiper;
      a && a.setTransition(t);
    },
    beforeDestroy: function beforeDestroy(e) {
      var t = e.thumbs.swiper;
      t && e.thumbs.swiperCreated && t && t.destroy();
    }
  }
},
    components = [Virtual$1, Keyboard$1, Mousewheel$1, Navigation$1, Pagination$1, Scrollbar$1, Parallax$1, Zoom$1, Lazy$1, Controller$1, A11y$1, History$1, HashNavigation$1, Autoplay$1, EffectFade, EffectCube, EffectFlip, EffectCoverflow, Thumbs$1];
Swiper.use(components);
/* harmony default export */ __webpack_exports__["default"] = (Swiper);


/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map