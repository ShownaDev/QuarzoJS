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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_ResponsiveNavbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ResponsiveNavbar */ \"./src/modules/ResponsiveNavbar.js\");\n\r\n\r\nconst mainMenu = new _modules_ResponsiveNavbar__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n    elementId: 'navbar',\r\n    fixed: true,\r\n    height: '60px',\r\n    color: 'green',\r\n    links: [\r\n        {name: 'Inicio', url: '#'},\r\n        {name: 'Sobre Nosotros', url: '#'}\r\n    ]\r\n});\r\n\r\nmainMenu.createContainer();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXNwb25zaXZlTmF2YmFyIGZyb20gJy4vbW9kdWxlcy9SZXNwb25zaXZlTmF2YmFyJztcclxuXHJcbmNvbnN0IG1haW5NZW51ID0gbmV3IFJlc3BvbnNpdmVOYXZiYXIoe1xyXG4gICAgZWxlbWVudElkOiAnbmF2YmFyJyxcclxuICAgIGZpeGVkOiB0cnVlLFxyXG4gICAgaGVpZ2h0OiAnNjBweCcsXHJcbiAgICBjb2xvcjogJ2dyZWVuJyxcclxuICAgIGxpbmtzOiBbXHJcbiAgICAgICAge25hbWU6ICdJbmljaW8nLCB1cmw6ICcjJ30sXHJcbiAgICAgICAge25hbWU6ICdTb2JyZSBOb3NvdHJvcycsIHVybDogJyMnfVxyXG4gICAgXVxyXG59KTtcclxuXHJcbm1haW5NZW51LmNyZWF0ZUNvbnRhaW5lcigpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ }),

/***/ "./src/modules/Element.js":
/*!********************************!*\
  !*** ./src/modules/Element.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return QuarzoElement; });\nclass QuarzoElement{\r\n    setStyle(elem, propertyObject){\r\n        for (var property in propertyObject){\r\n            elem.style[property] = propertyObject[property];\r\n        }\r\n    }\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9FbGVtZW50LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvRWxlbWVudC5qcz9mZDg1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1YXJ6b0VsZW1lbnR7XHJcbiAgICBzZXRTdHlsZShlbGVtLCBwcm9wZXJ0eU9iamVjdCl7XHJcbiAgICAgICAgZm9yICh2YXIgcHJvcGVydHkgaW4gcHJvcGVydHlPYmplY3Qpe1xyXG4gICAgICAgICAgICBlbGVtLnN0eWxlW3Byb3BlcnR5XSA9IHByb3BlcnR5T2JqZWN0W3Byb3BlcnR5XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/Element.js\n");

/***/ }),

/***/ "./src/modules/ResponsiveNavbar.js":
/*!*****************************************!*\
  !*** ./src/modules/ResponsiveNavbar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ResponsiveNavbar; });\n/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Element */ \"./src/modules/Element.js\");\n\r\n\r\nclass ResponsiveNavbar extends _Element__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n    constructor(element){\r\n        super();\r\n        this.element = element;\r\n    }\r\n\r\n    createContainer() {\r\n        const navbarContainer = document.getElementById(this.element.elementId);\r\n\r\n        var fixedOrNot = (this.element.fixed) ? 'fixed' : 'relative';\r\n\r\n        const styles = {\r\n            'position': fixedOrNot,\r\n            'display' : 'flex',\r\n            'justifyContent': 'flex-end',\r\n            'backgroundColor': this.element.color,\r\n            'width' : '100%',\r\n            'height' : this.element.height\r\n        }\r\n\r\n        this.setStyle(navbarContainer, styles);\r\n        this.setPagesLinks(navbarContainer);\r\n    }\r\n\r\n    setPagesLinks(container){\r\n        var pagesLinks = this.element.links;\r\n\r\n        pagesLinks.forEach(link => {\r\n            var linkTag = document.createElement(\"a\");\r\n\r\n            linkTag.innerHTML = link.name;\r\n\r\n            linkTag.setAttribute('href', link.url);\r\n\r\n            container.appendChild(linkTag);\r\n        });\r\n\r\n    }\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9SZXNwb25zaXZlTmF2YmFyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvUmVzcG9uc2l2ZU5hdmJhci5qcz9iMjNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFbGVtZW50IGZyb20gJy4vRWxlbWVudCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNwb25zaXZlTmF2YmFyIGV4dGVuZHMgRWxlbWVudHtcclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVDb250YWluZXIoKSB7XHJcbiAgICAgICAgY29uc3QgbmF2YmFyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50LmVsZW1lbnRJZCk7XHJcblxyXG4gICAgICAgIHZhciBmaXhlZE9yTm90ID0gKHRoaXMuZWxlbWVudC5maXhlZCkgPyAnZml4ZWQnIDogJ3JlbGF0aXZlJztcclxuXHJcbiAgICAgICAgY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgICAgICAgICAncG9zaXRpb24nOiBmaXhlZE9yTm90LFxyXG4gICAgICAgICAgICAnZGlzcGxheScgOiAnZmxleCcsXHJcbiAgICAgICAgICAgICdqdXN0aWZ5Q29udGVudCc6ICdmbGV4LWVuZCcsXHJcbiAgICAgICAgICAgICdiYWNrZ3JvdW5kQ29sb3InOiB0aGlzLmVsZW1lbnQuY29sb3IsXHJcbiAgICAgICAgICAgICd3aWR0aCcgOiAnMTAwJScsXHJcbiAgICAgICAgICAgICdoZWlnaHQnIDogdGhpcy5lbGVtZW50LmhlaWdodFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdHlsZShuYXZiYXJDb250YWluZXIsIHN0eWxlcyk7XHJcbiAgICAgICAgdGhpcy5zZXRQYWdlc0xpbmtzKG5hdmJhckNvbnRhaW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGFnZXNMaW5rcyhjb250YWluZXIpe1xyXG4gICAgICAgIHZhciBwYWdlc0xpbmtzID0gdGhpcy5lbGVtZW50LmxpbmtzO1xyXG5cclxuICAgICAgICBwYWdlc0xpbmtzLmZvckVhY2gobGluayA9PiB7XHJcbiAgICAgICAgICAgIHZhciBsaW5rVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcblxyXG4gICAgICAgICAgICBsaW5rVGFnLmlubmVySFRNTCA9IGxpbmsubmFtZTtcclxuXHJcbiAgICAgICAgICAgIGxpbmtUYWcuc2V0QXR0cmlidXRlKCdocmVmJywgbGluay51cmwpO1xyXG5cclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxpbmtUYWcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/ResponsiveNavbar.js\n");

/***/ })

/******/ });