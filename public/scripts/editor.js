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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/edit-post */ \"@wordpress/edit-post\");\n/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/dom-ready */ \"@wordpress/dom-ready\");\n/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ \"@wordpress/blocks\");\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _wp$data = wp.data,\n    subscribe = _wp$data.subscribe,\n    select = _wp$data.select;\n\n\n_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default()(function () {\n  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.unregisterBlockStyle)('core/image', 'rounded'); // registerBlockStyle('core/button', {\n  //   name: 'outline',\n  //   label: 'Outline',\n  // });\n  // See https://wordpress.stackexchange.com/questions/388015/gutenberg-how-to-register-a-custom-block-style-for-specific-post-type-only\n\n  var unsubscribe = subscribe(function () {\n    var postType = select('core/editor').getCurrentPostType();\n\n    if (postType) {\n      unsubscribe();\n\n      if ('project' === postType) {\n        // See https://wordpress.stackexchange.com/questions/339436/removing-panels-meta-boxes-in-the-block-editor for list of meta boxes\n        wp.data.dispatch('core/edit-post').removeEditorPanel('post-excerpt');\n        wp.data.dispatch('core/edit-post').removeEditorPanel('featured-image');\n      }\n    }\n  });\n  window.addEventListener('load', function () {\n    setTimeout(function () {\n      var excerpt = document.querySelector('.wp-block-post-excerpt div.block-editor-rich-text__editable');\n\n      if (excerpt && excerpt.innerText == 'No post excerpt found') {\n        excerpt.innerText = '...';\n      }\n    }, 500);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc2NyaXB0cy9lZGl0b3IuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0EsZUFBOEJFLEVBQUUsQ0FBaEM7QUFBQSxJQUFRRixTQUFSO0FBQUEsSUFBbUJDLE1BQW5CO0FBQ0E7QUFDQTtBQUVBRSwyREFBUSxDQUFDLFlBQU07QUFDYkMsRUFBQUEsdUVBQW9CLGVBRFAsU0FDTyxDQUFwQkEsQ0FEYSxDQUdiO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHTCxTQUFTLENBQUMsWUFBTTtBQUNsQyxRQUFNTSxRQUFRLEdBQUdMLE1BQU0sQ0FBTkEsYUFBTSxDQUFOQSxDQUFqQixrQkFBaUJBLEVBQWpCOztBQUNBLGtCQUFjO0FBQ1pJLE1BQUFBLFdBQVc7O0FBQ1gsVUFBSSxjQUFKLFVBQTRCO0FBQzFCO0FBQ0FILFFBQUFBLEVBQUUsQ0FBRkEsSUFBQUEsQ0FBQUEsUUFBQUEsQ0FBQUEsZ0JBQUFBLEVBQUFBLGlCQUFBQSxDQUFBQSxjQUFBQTtBQUNBQSxRQUFBQSxFQUFFLENBQUZBLElBQUFBLENBQUFBLFFBQUFBLENBQUFBLGdCQUFBQSxFQUFBQSxpQkFBQUEsQ0FBQUEsZ0JBQUFBO0FBQ0Q7QUFDRjtBQVRILEdBQTZCLENBQTdCO0FBWUFLLEVBQUFBLE1BQU0sQ0FBTkEsZ0JBQUFBLENBQUFBLE1BQUFBLEVBQWdDLFlBQU07QUFDcENDLElBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2YsVUFBSUMsT0FBTyxHQUFHQyxRQUFRLENBQVJBLGFBQUFBLENBQWQsNkRBQWNBLENBQWQ7O0FBR0EsVUFBSUQsT0FBTyxJQUFJQSxPQUFPLENBQVBBLFNBQUFBLElBQWYseUJBQTZEO0FBQzNEQSxRQUFBQSxPQUFPLENBQVBBLFNBQUFBLEdBQUFBLEtBQUFBO0FBQ0Q7QUFOTyxPQUFWRCxHQUFVLENBQVZBO0FBREZELEdBQUFBO0FBckJGSixDQUFRLENBQVJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NjcmlwdHMvZWRpdG9yLmpzP2YxZTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAd29yZHByZXNzL2VkaXQtcG9zdCc7XG5jb25zdCB7IHN1YnNjcmliZSwgc2VsZWN0IH0gPSB3cC5kYXRhO1xuaW1wb3J0IGRvbVJlYWR5IGZyb20gJ0B3b3JkcHJlc3MvZG9tLXJlYWR5JztcbmltcG9ydCB7IHVucmVnaXN0ZXJCbG9ja1N0eWxlIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9ja3MnO1xuXG5kb21SZWFkeSgoKSA9PiB7XG4gIHVucmVnaXN0ZXJCbG9ja1N0eWxlKCdjb3JlL2ltYWdlJywgJ3JvdW5kZWQnKTtcblxuICAvLyByZWdpc3RlckJsb2NrU3R5bGUoJ2NvcmUvYnV0dG9uJywge1xuICAvLyAgIG5hbWU6ICdvdXRsaW5lJyxcbiAgLy8gICBsYWJlbDogJ091dGxpbmUnLFxuICAvLyB9KTtcblxuICAvLyBTZWUgaHR0cHM6Ly93b3JkcHJlc3Muc3RhY2tleGNoYW5nZS5jb20vcXVlc3Rpb25zLzM4ODAxNS9ndXRlbmJlcmctaG93LXRvLXJlZ2lzdGVyLWEtY3VzdG9tLWJsb2NrLXN0eWxlLWZvci1zcGVjaWZpYy1wb3N0LXR5cGUtb25seVxuICBjb25zdCB1bnN1YnNjcmliZSA9IHN1YnNjcmliZSgoKSA9PiB7XG4gICAgY29uc3QgcG9zdFR5cGUgPSBzZWxlY3QoJ2NvcmUvZWRpdG9yJykuZ2V0Q3VycmVudFBvc3RUeXBlKCk7XG4gICAgaWYgKHBvc3RUeXBlKSB7XG4gICAgICB1bnN1YnNjcmliZSgpO1xuICAgICAgaWYgKCdwcm9qZWN0JyA9PT0gcG9zdFR5cGUpIHtcbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vd29yZHByZXNzLnN0YWNrZXhjaGFuZ2UuY29tL3F1ZXN0aW9ucy8zMzk0MzYvcmVtb3ZpbmctcGFuZWxzLW1ldGEtYm94ZXMtaW4tdGhlLWJsb2NrLWVkaXRvciBmb3IgbGlzdCBvZiBtZXRhIGJveGVzXG4gICAgICAgIHdwLmRhdGEuZGlzcGF0Y2goJ2NvcmUvZWRpdC1wb3N0JykucmVtb3ZlRWRpdG9yUGFuZWwoJ3Bvc3QtZXhjZXJwdCcpO1xuICAgICAgICB3cC5kYXRhLmRpc3BhdGNoKCdjb3JlL2VkaXQtcG9zdCcpLnJlbW92ZUVkaXRvclBhbmVsKCdmZWF0dXJlZC1pbWFnZScpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsZXQgZXhjZXJwdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICcud3AtYmxvY2stcG9zdC1leGNlcnB0IGRpdi5ibG9jay1lZGl0b3ItcmljaC10ZXh0X19lZGl0YWJsZSdcbiAgICAgICk7XG4gICAgICBpZiAoZXhjZXJwdCAmJiBleGNlcnB0LmlubmVyVGV4dCA9PSAnTm8gcG9zdCBleGNlcnB0IGZvdW5kJykge1xuICAgICAgICBleGNlcnB0LmlubmVyVGV4dCA9ICcuLi4nO1xuICAgICAgfVxuICAgIH0sIDUwMCk7XG4gIH0pO1xufSk7XG4iXSwibmFtZXMiOlsic3Vic2NyaWJlIiwic2VsZWN0Iiwid3AiLCJkb21SZWFkeSIsInVucmVnaXN0ZXJCbG9ja1N0eWxlIiwidW5zdWJzY3JpYmUiLCJwb3N0VHlwZSIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJleGNlcnB0IiwiZG9jdW1lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/scripts/editor.js\n");

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