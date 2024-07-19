/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/_modal.js":
/*!**********************!*\
  !*** ./js/_modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "modal": () => (/* binding */ modal)
/* harmony export */ });
function modal() {
  var modals = [document.getElementById('js-modal-01'), document.getElementById('js-modal-02'), document.getElementById('js-modal-03'), document.getElementById('js-modal-04'), document.getElementById('js-modal-05')];
  var buttonsOpen = [document.querySelectorAll('.js-modal_01'), document.querySelectorAll('.js-modal_02'), document.querySelectorAll('.js-modal_03'), document.querySelectorAll('.js-modal_04'), document.querySelectorAll('.js-modal_05')];
  var buttonClose = document.querySelectorAll('.js-modal_close');
  var buttonCloseBtns = document.querySelectorAll('.js-modal_close_btn');
  var modalMusk = document.getElementById('js-modal_musk');
  buttonsOpen.forEach(function (buttons, index) {
    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        return modalOpen(index);
      });
    });
  });
  function modalOpen(index) {
    modals[index].classList.add('is-active');
    modalMusk.classList.add('is-active');
    buttonCloseBtns.forEach(function (btn) {
      return btn.classList.add('is-active');
    });
  }
  buttonClose.forEach(function (button) {
    button.addEventListener('click', modalClose);
  });
  function modalClose() {
    modals.forEach(function (modal) {
      return modal.classList.remove('is-active');
    });
    modalMusk.classList.remove('is-active');
    buttonCloseBtns.forEach(function (btn) {
      return btn.classList.remove('is-active');
    });
  }
}

/***/ }),

/***/ "./js/_test.js":
/*!*********************!*\
  !*** ./js/_test.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "test": () => (/* binding */ test)
/* harmony export */ });
function test() {
  console.log("表示テスト");
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_modal */ "./js/_modal.js");
/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_test */ "./js/_test.js");
// import { common } from "./_common";



// common();
(0,_modal__WEBPACK_IMPORTED_MODULE_0__.modal)();
(0,_test__WEBPACK_IMPORTED_MODULE_1__.test)();
})();

/******/ })()
;
//# sourceMappingURL=script.js.map