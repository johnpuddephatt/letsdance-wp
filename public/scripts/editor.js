"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["/scripts/editor"],{

/***/ "./resources/scripts/editor.js":
/*!*************************************!*\
  !*** ./resources/scripts/editor.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/edit-post */ \"@wordpress/edit-post\");\n/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/dom-ready */ \"@wordpress/dom-ready\");\n/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ \"@wordpress/blocks\");\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _wp$data = wp.data,\n    subscribe = _wp$data.subscribe,\n    select = _wp$data.select;\n\n\n_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default()(function () {\n  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.unregisterBlockStyle)(\"core/image\", \"rounded\"); // registerBlockStyle('core/button', {\n  //   name: 'outline',\n  //   label: 'Outline',\n  // });\n  // See https://wordpress.stackexchange.com/questions/388015/gutenberg-how-to-register-a-custom-block-style-for-specific-post-type-only\n\n  var unsubscribe = subscribe(function () {\n    var postType = select(\"core/editor\").getCurrentPostType();\n\n    if (postType) {\n      unsubscribe();\n\n      if (\"project\" === postType) {\n        // See https://wordpress.stackexchange.com/questions/339436/removing-panels-meta-boxes-in-the-block-editor for list of meta boxes\n        wp.data.dispatch(\"core/edit-post\").removeEditorPanel(\"post-excerpt\"); // wp.data.dispatch('core/edit-post').removeEditorPanel('featured-image');\n      }\n    }\n  });\n  window.addEventListener(\"load\", function () {\n    setTimeout(function () {\n      var excerpt = document.querySelector(\".wp-block-post-excerpt div.block-editor-rich-text__editable\");\n\n      if (excerpt && excerpt.innerText == \"No post excerpt found\") {\n        excerpt.innerText = \"...\";\n      }\n    }, 500);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc2NyaXB0cy9lZGl0b3IuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0EsZUFBOEJFLEVBQUUsQ0FBaEM7QUFBQSxJQUFRRixTQUFSO0FBQUEsSUFBbUJDLE1BQW5CO0FBQ0E7QUFDQTtBQUVBRSwyREFBUSxDQUFDLFlBQU07QUFDYkMsRUFBQUEsdUVBQW9CLGVBRFAsU0FDTyxDQUFwQkEsQ0FEYSxDQUdiO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHTCxTQUFTLENBQUMsWUFBTTtBQUNsQyxRQUFNTSxRQUFRLEdBQUdMLE1BQU0sQ0FBTkEsYUFBTSxDQUFOQSxDQUFqQixrQkFBaUJBLEVBQWpCOztBQUNBLGtCQUFjO0FBQ1pJLE1BQUFBLFdBQVc7O0FBQ1gsVUFBSSxjQUFKLFVBQTRCO0FBQzFCO0FBQ0FILFFBQUFBLEVBQUUsQ0FBRkEsSUFBQUEsQ0FBQUEsUUFBQUEsQ0FBQUEsZ0JBQUFBLEVBQUFBLGlCQUFBQSxDQUYwQixjQUUxQkEsRUFGMEIsQ0FHMUI7QUFDRDtBQUNGO0FBVEgsR0FBNkIsQ0FBN0I7QUFZQUssRUFBQUEsTUFBTSxDQUFOQSxnQkFBQUEsQ0FBQUEsTUFBQUEsRUFBZ0MsWUFBTTtBQUNwQ0MsSUFBQUEsVUFBVSxDQUFDLFlBQU07QUFDZixVQUFJQyxPQUFPLEdBQUdDLFFBQVEsQ0FBUkEsYUFBQUEsQ0FBZCw2REFBY0EsQ0FBZDs7QUFHQSxVQUFJRCxPQUFPLElBQUlBLE9BQU8sQ0FBUEEsU0FBQUEsSUFBZix5QkFBNkQ7QUFDM0RBLFFBQUFBLE9BQU8sQ0FBUEEsU0FBQUEsR0FBQUEsS0FBQUE7QUFDRDtBQU5PLE9BQVZELEdBQVUsQ0FBVkE7QUFERkQsR0FBQUE7QUFyQkZKLENBQVEsQ0FBUkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2NyaXB0cy9lZGl0b3IuanM/ZjFlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAd29yZHByZXNzL2VkaXQtcG9zdFwiO1xuY29uc3QgeyBzdWJzY3JpYmUsIHNlbGVjdCB9ID0gd3AuZGF0YTtcbmltcG9ydCBkb21SZWFkeSBmcm9tIFwiQHdvcmRwcmVzcy9kb20tcmVhZHlcIjtcbmltcG9ydCB7IHVucmVnaXN0ZXJCbG9ja1N0eWxlIH0gZnJvbSBcIkB3b3JkcHJlc3MvYmxvY2tzXCI7XG5cbmRvbVJlYWR5KCgpID0+IHtcbiAgdW5yZWdpc3RlckJsb2NrU3R5bGUoXCJjb3JlL2ltYWdlXCIsIFwicm91bmRlZFwiKTtcblxuICAvLyByZWdpc3RlckJsb2NrU3R5bGUoJ2NvcmUvYnV0dG9uJywge1xuICAvLyAgIG5hbWU6ICdvdXRsaW5lJyxcbiAgLy8gICBsYWJlbDogJ091dGxpbmUnLFxuICAvLyB9KTtcblxuICAvLyBTZWUgaHR0cHM6Ly93b3JkcHJlc3Muc3RhY2tleGNoYW5nZS5jb20vcXVlc3Rpb25zLzM4ODAxNS9ndXRlbmJlcmctaG93LXRvLXJlZ2lzdGVyLWEtY3VzdG9tLWJsb2NrLXN0eWxlLWZvci1zcGVjaWZpYy1wb3N0LXR5cGUtb25seVxuICBjb25zdCB1bnN1YnNjcmliZSA9IHN1YnNjcmliZSgoKSA9PiB7XG4gICAgY29uc3QgcG9zdFR5cGUgPSBzZWxlY3QoXCJjb3JlL2VkaXRvclwiKS5nZXRDdXJyZW50UG9zdFR5cGUoKTtcbiAgICBpZiAocG9zdFR5cGUpIHtcbiAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICBpZiAoXCJwcm9qZWN0XCIgPT09IHBvc3RUeXBlKSB7XG4gICAgICAgIC8vIFNlZSBodHRwczovL3dvcmRwcmVzcy5zdGFja2V4Y2hhbmdlLmNvbS9xdWVzdGlvbnMvMzM5NDM2L3JlbW92aW5nLXBhbmVscy1tZXRhLWJveGVzLWluLXRoZS1ibG9jay1lZGl0b3IgZm9yIGxpc3Qgb2YgbWV0YSBib3hlc1xuICAgICAgICB3cC5kYXRhLmRpc3BhdGNoKFwiY29yZS9lZGl0LXBvc3RcIikucmVtb3ZlRWRpdG9yUGFuZWwoXCJwb3N0LWV4Y2VycHRcIik7XG4gICAgICAgIC8vIHdwLmRhdGEuZGlzcGF0Y2goJ2NvcmUvZWRpdC1wb3N0JykucmVtb3ZlRWRpdG9yUGFuZWwoJ2ZlYXR1cmVkLWltYWdlJyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbGV0IGV4Y2VycHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi53cC1ibG9jay1wb3N0LWV4Y2VycHQgZGl2LmJsb2NrLWVkaXRvci1yaWNoLXRleHRfX2VkaXRhYmxlXCJcbiAgICAgICk7XG4gICAgICBpZiAoZXhjZXJwdCAmJiBleGNlcnB0LmlubmVyVGV4dCA9PSBcIk5vIHBvc3QgZXhjZXJwdCBmb3VuZFwiKSB7XG4gICAgICAgIGV4Y2VycHQuaW5uZXJUZXh0ID0gXCIuLi5cIjtcbiAgICAgIH1cbiAgICB9LCA1MDApO1xuICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbInN1YnNjcmliZSIsInNlbGVjdCIsIndwIiwiZG9tUmVhZHkiLCJ1bnJlZ2lzdGVyQmxvY2tTdHlsZSIsInVuc3Vic2NyaWJlIiwicG9zdFR5cGUiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiZXhjZXJwdCIsImRvY3VtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/scripts/editor.js\n");

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["domReady"];

/***/ }),

/***/ "@wordpress/edit-post":
/*!**********************************!*\
  !*** external ["wp","editPost"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["editPost"];

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./resources/scripts/editor.js"));
/******/ }
]);