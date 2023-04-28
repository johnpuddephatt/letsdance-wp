/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["/scripts/customizer"],{

/***/ "./resources/scripts/customizer.js":
/*!*****************************************!*\
  !*** ./resources/scripts/customizer.js ***!
  \*****************************************/
/***/ (function() {

eval("/**\n * This file allows you to add functionality to the Theme Customizer\n * live preview. jQuery is readily available.\n *\n * {@link https://codex.wordpress.org/Theme_Customization_API}\n */\n\n/**\n * Change the blog name value.\n *\n * @param {string} value\n */\nwp.customize('blogname', function (value) {\n  value.bind(function (to) {\n    return $('.brand').text(to);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2NyaXB0cy9jdXN0b21pemVyLmpzPzg0ODMiXSwibmFtZXMiOlsid3AiLCJ2YWx1ZSIsIiQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLEVBQUUsQ0FBRkEsU0FBQUEsQ0FBQUEsVUFBQUEsRUFBeUIsVUFBQSxLQUFBLEVBQVM7QUFDaENDLEVBQUFBLEtBQUssQ0FBTEEsSUFBQUEsQ0FBVyxVQUFBLEVBQUEsRUFBRTtBQUFBLFdBQUlDLENBQUMsQ0FBREEsUUFBQyxDQUFEQSxDQUFBQSxJQUFBQSxDQUFKLEVBQUlBLENBQUo7QUFBYkQsR0FBQUE7QUFERkQsQ0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgZmlsZSBhbGxvd3MgeW91IHRvIGFkZCBmdW5jdGlvbmFsaXR5IHRvIHRoZSBUaGVtZSBDdXN0b21pemVyXG4gKiBsaXZlIHByZXZpZXcuIGpRdWVyeSBpcyByZWFkaWx5IGF2YWlsYWJsZS5cbiAqXG4gKiB7QGxpbmsgaHR0cHM6Ly9jb2RleC53b3JkcHJlc3Mub3JnL1RoZW1lX0N1c3RvbWl6YXRpb25fQVBJfVxuICovXG5cbi8qKlxuICogQ2hhbmdlIHRoZSBibG9nIG5hbWUgdmFsdWUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKi9cbndwLmN1c3RvbWl6ZSgnYmxvZ25hbWUnLCB2YWx1ZSA9PiB7XG4gIHZhbHVlLmJpbmQodG8gPT4gJCgnLmJyYW5kJykudGV4dCh0bykpO1xufSk7XG4iXSwiZmlsZSI6Ii4vcmVzb3VyY2VzL3NjcmlwdHMvY3VzdG9taXplci5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/scripts/customizer.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./resources/scripts/customizer.js"));
/******/ }
]);