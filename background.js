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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app/background.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/background.ts":
/*!*******************************!*\
  !*** ./src/app/background.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __webpack_require__(/*! ./util */ "./src/app/util.ts");
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    switch (message.action) {
        case "click":
            util_1.clickLocation({
                x: message.x,
                y: message.y,
            }, sender.tab.id);
    }
});


/***/ }),

/***/ "./src/app/util.ts":
/*!*************************!*\
  !*** ./src/app/util.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.clickLocation = exports.coordinatesInViewport = void 0;
exports.coordinatesInViewport = ({ top, bottom, }) => {
    if (top >= 0 && bottom <= window.innerHeight) {
        return true;
    }
    return false;
};
exports.clickLocation = (location, tabId, button = "left", clickCount = 1) => {
    const target = { tabId };
    const clickArgs = Object.assign(Object.assign({}, location), { type: "mousePressed", button,
        clickCount });
    const movedArgs = Object.assign(Object.assign({}, location), { type: "mouseMoved" });
    chrome.debugger.attach(target, "1.2", () => {
        chrome.debugger.sendCommand(target, "Input.dispatchMouseEvent", Object.assign(Object.assign({}, location), { type: "mouseMoved" }), () => {
            chrome.debugger.sendCommand(target, "Input.dispatchMouseEvent", clickArgs, () => {
                clickArgs.type = "mouseReleased";
                chrome.debugger.sendCommand(target, "Input.dispatchMouseEvent", clickArgs, () => chrome.debugger.detach(target));
            });
        });
    });
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9iYWNrZ3JvdW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsc0VBQXVDO0FBRXZDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEVBQUU7SUFDckUsUUFBUSxPQUFPLENBQUMsTUFBTSxFQUFFO1FBQ3RCLEtBQUssT0FBTztZQUNWLG9CQUFhLENBQ1g7Z0JBQ0UsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUNaLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQzthQUNiLEVBQ0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQ2QsQ0FBQztLQUNMO0FBQ0gsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiVSw2QkFBcUIsR0FBRyxDQUFDLEVBQ3BDLEdBQUcsRUFDSCxNQUFNLEdBQzBCLEVBQUUsRUFBRTtJQUNwQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxXQUFXLEVBQUU7UUFDNUMsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyxDQUFDO0FBRVcscUJBQWEsR0FBRyxDQUMzQixRQUFrQyxFQUNsQyxLQUFhLEVBQ2IsTUFBTSxHQUFHLE1BQU0sRUFDZixVQUFVLEdBQUcsQ0FBQyxFQUNkLEVBQUU7SUFDRixNQUFNLE1BQU0sR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDO0lBQ3pCLE1BQU0sU0FBUyxtQ0FDVixRQUFRLEtBQ1gsSUFBSSxFQUFFLGNBQWMsRUFDcEIsTUFBTTtRQUNOLFVBQVUsR0FDWCxDQUFDO0lBRUYsTUFBTSxTQUFTLG1DQUFRLFFBQVEsS0FBRSxJQUFJLEVBQUUsWUFBWSxHQUFFLENBQUM7SUFFdEQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7UUFDekMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQ3pCLE1BQU0sRUFDTiwwQkFBMEIsa0NBQ3JCLFFBQVEsS0FBRSxJQUFJLEVBQUUsWUFBWSxLQUNqQyxHQUFHLEVBQUU7WUFDSCxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FDekIsTUFBTSxFQUNOLDBCQUEwQixFQUMxQixTQUFTLEVBQ1QsR0FBRyxFQUFFO2dCQUNILFNBQVMsQ0FBQyxJQUFJLEdBQUcsZUFBZSxDQUFDO2dCQUNqQyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FDekIsTUFBTSxFQUNOLDBCQUEwQixFQUMxQixTQUFTLEVBQ1QsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQ3JDLENBQUM7WUFDSixDQUFDLENBQ0YsQ0FBQztRQUNKLENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMiLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FwcC9iYWNrZ3JvdW5kLnRzXCIpO1xuIiwiaW1wb3J0IHsgY2xpY2tMb2NhdGlvbiB9IGZyb20gXCIuL3V0aWxcIjtcblxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICBzd2l0Y2ggKG1lc3NhZ2UuYWN0aW9uKSB7XG4gICAgY2FzZSBcImNsaWNrXCI6XG4gICAgICBjbGlja0xvY2F0aW9uKFxuICAgICAgICB7XG4gICAgICAgICAgeDogbWVzc2FnZS54LFxuICAgICAgICAgIHk6IG1lc3NhZ2UueSxcbiAgICAgICAgfSxcbiAgICAgICAgc2VuZGVyLnRhYi5pZFxuICAgICAgKTtcbiAgfVxufSk7XG4iLCJleHBvcnQgY29uc3QgY29vcmRpbmF0ZXNJblZpZXdwb3J0ID0gKHtcclxuICB0b3AsXHJcbiAgYm90dG9tLFxyXG59OiBQaWNrPERPTVJlY3QsIFwidG9wXCIgfCBcImJvdHRvbVwiPikgPT4ge1xyXG4gIGlmICh0b3AgPj0gMCAmJiBib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0KSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNsaWNrTG9jYXRpb24gPSAoXHJcbiAgbG9jYXRpb246IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSxcclxuICB0YWJJZDogbnVtYmVyLFxyXG4gIGJ1dHRvbiA9IFwibGVmdFwiLFxyXG4gIGNsaWNrQ291bnQgPSAxXHJcbikgPT4ge1xyXG4gIGNvbnN0IHRhcmdldCA9IHsgdGFiSWQgfTtcclxuICBjb25zdCBjbGlja0FyZ3MgPSB7XHJcbiAgICAuLi5sb2NhdGlvbixcclxuICAgIHR5cGU6IFwibW91c2VQcmVzc2VkXCIsXHJcbiAgICBidXR0b24sXHJcbiAgICBjbGlja0NvdW50LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG1vdmVkQXJncyA9IHsgLi4ubG9jYXRpb24sIHR5cGU6IFwibW91c2VNb3ZlZFwiIH07XHJcblxyXG4gIGNocm9tZS5kZWJ1Z2dlci5hdHRhY2godGFyZ2V0LCBcIjEuMlwiLCAoKSA9PiB7XHJcbiAgICBjaHJvbWUuZGVidWdnZXIuc2VuZENvbW1hbmQoXHJcbiAgICAgIHRhcmdldCxcclxuICAgICAgXCJJbnB1dC5kaXNwYXRjaE1vdXNlRXZlbnRcIixcclxuICAgICAgeyAuLi5sb2NhdGlvbiwgdHlwZTogXCJtb3VzZU1vdmVkXCIgfSxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIGNocm9tZS5kZWJ1Z2dlci5zZW5kQ29tbWFuZChcclxuICAgICAgICAgIHRhcmdldCxcclxuICAgICAgICAgIFwiSW5wdXQuZGlzcGF0Y2hNb3VzZUV2ZW50XCIsXHJcbiAgICAgICAgICBjbGlja0FyZ3MsXHJcbiAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNsaWNrQXJncy50eXBlID0gXCJtb3VzZVJlbGVhc2VkXCI7XHJcbiAgICAgICAgICAgIGNocm9tZS5kZWJ1Z2dlci5zZW5kQ29tbWFuZChcclxuICAgICAgICAgICAgICB0YXJnZXQsXHJcbiAgICAgICAgICAgICAgXCJJbnB1dC5kaXNwYXRjaE1vdXNlRXZlbnRcIixcclxuICAgICAgICAgICAgICBjbGlja0FyZ3MsXHJcbiAgICAgICAgICAgICAgKCkgPT4gY2hyb21lLmRlYnVnZ2VyLmRldGFjaCh0YXJnZXQpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9KTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==