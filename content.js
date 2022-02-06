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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app/content.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/content.ts":
/*!****************************!*\
  !*** ./src/app/content.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const list_heart_clicker_1 = __webpack_require__(/*! ./list-heart-clicker */ "./src/app/list-heart-clicker.js");
const util_1 = __webpack_require__(/*! ./util */ "./src/app/util.ts");
const random = (min, max) => Math.random() * (max - min) + min;
chrome.runtime.sendMessage({ action: "init" }, () => {
    var checkReady = setInterval(() => {
        if (document.readyState === "complete") {
            clearInterval(checkReady);
            list_heart_clicker_1.executeScript((el) => __awaiter(void 0, void 0, void 0, function* () {
                const { top, right, bottom, left } = el.getBoundingClientRect();
                if (!util_1.coordinatesInViewport({ top, bottom })) {
                    return;
                }
                const x = random(left, right);
                const y = random(top, bottom);
                console.log({ el, x, y });
                chrome.runtime.sendMessage({
                    action: "click",
                    x,
                    y,
                });
            }));
        }
    });
});


/***/ }),

/***/ "./src/app/list-heart-clicker.js":
/*!***************************************!*\
  !*** ./src/app/list-heart-clicker.js ***!
  \***************************************/
/*! exports provided: executeScript */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "executeScript", function() { return executeScript; });
const executeScript = (clickElement) => {
  'use strict';
  setTimeout(() => {
    // UI elements
    const arrowSvgString = '<svg viewBox="0 0 24 24"><g><path d="M12 4.656l8.72 8.72c.293.293.768.293 1.06 0s.294-.768 0-1.06l-9.25-9.25c-.292-.294-.767-.294-1.06 0l-9.25 9.25c-.146.145-.22.337-.22.53s.073.383.22.53c.293.292.768.292 1.06 0L12 4.656z"></path><path d="M12 12.465l8.72 8.72c.293.293.768.293 1.06 0s.294-.768 0-1.06l-9.25-9.25c-.292-.294-.767-.294-1.06 0l-9.25 9.25c-.146.145-.22.337-.22.53s.073.383.22.53c.293.292.768.292 1.06 0l8.72-8.72z"></path></g></svg>';
    const likeSvgString = '<svg viewBox="0 0 24 24"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path></g></svg>';

    const developerSvgString = '<svg viewBox="0 0 24 24"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path></g></svg>';

    // Utilities
    const random = (min, max) => Math.random() * (max - min) + min;

    const createFromHTML = (htmlString) => {
      var div = document.createElement('div');
      div.innerHTML = htmlString.trim();

      // Change this to div.childNodes to support multiple top-level nodes
      return div.firstChild;
    }

    // Get elements Utilites

    const arrowSvg = createFromHTML(arrowSvgString);
    const heartSvg = createFromHTML(likeSvgString);
    const developerSvg = createFromHTML(developerSvgString);
    const blueColor = 'rgba(29,161,242,1.00)';

    arrowSvg.setAttribute("style", "transform: rotate(180deg);");
    const getNav = () => document.querySelector('nav[role="navigation"]');
    const getHearts = () => Array.from(document.querySelectorAll('main [d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"]'))
    const getTweets = (current) => {
      const all = Array.from(document.querySelectorAll('article'));
      return all.slice(all.indexOf(current) + 1);
    }

    // Setup settings
    const reloadStorageKey = 'heart-clicker-last-reload';
    const lastReloadStr = Number(localStorage.getItem(reloadStorageKey));
    const lastReload = !isNaN(lastReloadStr) ? new Date(lastReloadStr) : null;
    const getStorageKey = (key) => `t-${key}-${location.pathname}`
    const getLocalSettings = () => ({
      scroll: !!localStorage.getItem(getStorageKey('scroll')),
      like: !!localStorage.getItem(getStorageKey('like')),
    })

    let settings = getLocalSettings();

    // Setup loops
    let tweets = [];
    let currentIndex = 0;
    let reloads = 0;
    const rndReloads = random(10, 20);

    const startInterval = (callback, ms) => {
      callback();
      return setInterval(callback, ms);
    }

    const mainInterval = () => startInterval(() => {
      settings.like && getHearts().forEach((h, i) => setTimeout(() => settings.like && clickElement(h), 50 * (i + 1)));

      if (settings.developer) {
        window.location.href = "https://twitter.com/codermert";
      }
  
      if (settings.scroll) {
        if(!settings.like) {
          // Liking is turned off, just scroll to each tweet
          let tweet = tweets[currentIndex++];
          if (!tweet) {
            tweets = getTweets(tweets[currentIndex - 2]);
            currentIndex = 0;
            tweet = tweets[currentIndex++];
            reloads++;
          }
          if (tweet) tweet.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          // Liking is turned on, scroll to heart icons
          setTimeout(()=> {
            let tweet = tweets[currentIndex++];
            if (!tweet) {
              tweets = getHearts();
              currentIndex = 0;
              tweet = tweets[currentIndex++];
              if (!tweet) {
                if (reloads > rndReloads) {
                  localStorage.setItem(reloadStorageKey, new Date().getTime());
                  window.location.reload();
                  return;
                }
                // If last reload was in the last 30 mins just chill and wait
                if(lastReload && lastReload < new Date().getTime() - 60000 * 30) {
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    left: 0,
                    behavior: 'smooth'
                  });
                }
                reloads++;
              }
            }
            if (tweet) tweet.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 2000);// wait this long so all the likes will fire properly
        }
      }
    }, 3000);

    let intervalKey = mainInterval();

    // Setup UX
    const uiContainer = getNav();

    const createNavElement = (newIcon, text, clickHandler) => {
      const newElement = uiContainer.lastChild.cloneNode(true);
      const oldIcon = newElement.querySelector('svg');

      newIcon.className.baseVal = oldIcon.className.baseVal;

      oldIcon.parentElement.appendChild(newIcon);
      oldIcon.parentElement.removeChild(oldIcon);

      const textSpan = newElement.querySelector('span');
      if (textSpan) {
        textSpan.innerHTML = text;
      }

      newElement.addEventListener('click', (e) => {
        clickHandler(e);
        e.preventDefault && e.preventDefault();
        return false;
      });

      return newElement;
    }

    const doButtonStyle = (button, activate) => {
      const svg = button.querySelector('svg');
      const text = button.querySelector('span');

      button.style.color = activate ? blueColor : null;

      if (svg) {
        svg.style.fill = activate ? blueColor : null
      }

      if (text) {
        text.style.color = activate ? blueColor : null;
      }
    }

    const handleClick = (settingKey) => ({ target }) => {
      const button = target.matches('[role="button"]') ? target : target.closest('[role="button"]');
      if (settings[settingKey] = !settings[settingKey]) {
        localStorage.setItem(getStorageKey(settingKey), '1');
        doButtonStyle(button, true);
      } else {
        localStorage.setItem(getStorageKey(settingKey), '');
        doButtonStyle(button, false);
      }
    };

    const scrollButton = createNavElement(arrowSvg, 'Auto Kaydırma', handleClick('scroll'));
    if (settings.scroll) doButtonStyle(scrollButton, true);

    const likeButton = createNavElement(heartSvg, 'Auto Beğeni', handleClick('like'));
    if (settings.like) doButtonStyle(likeButton, true);

    const developerButton = createNavElement(developerSvg, 'Geliştirici', handleClick('developer'));
    if (settings.developer) doButtonStyle(developerButton, true);

    uiContainer.prepend(likeButton);
    uiContainer.prepend(scrollButton);
    uiContainer.prepend(developerButton);

    const getButton = (key) => ({
      scroll: scrollButton,
      like: likeButton,
    })[key];


    // Polling for client side navigation and tab inactivity
    let wasHidden = false;
    let { href } = window.location;
    setInterval(() => {
      if (href !== window.location.href) {
        href = window.location.href;
        settings = getLocalSettings();

        Object.entries(settings).forEach(([key, value]) => {
          const button = getButton(key);
          doButtonStyle(button, value);
        });
      }
      if (document.hidden) {
        if (!wasHidden) {
          wasHidden = true;
          clearInterval(intervalKey);
        }
      } else if (wasHidden) {
        wasHidden = false;
        intervalKey = mainInterval();
      }
    }, 50);
  }, 3000);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb250ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbGlzdC1oZWFydC1jbGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsZ0hBQXFEO0FBQ3JELHNFQUErQztBQUUvQyxNQUFNLE1BQU0sR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7QUFFL0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEVB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dC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FwcC9jb250ZW50LnRzXCIpO1xuIiwiaW1wb3J0IHsgZXhlY3V0ZVNjcmlwdCB9IGZyb20gXCIuL2xpc3QtaGVhcnQtY2xpY2tlclwiO1xuaW1wb3J0IHsgY29vcmRpbmF0ZXNJblZpZXdwb3J0IH0gZnJvbSBcIi4vdXRpbFwiO1xuXG5jb25zdCByYW5kb20gPSAobWluLCBtYXgpID0+IE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcblxuY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBhY3Rpb246IFwiaW5pdFwiIH0sICgpID0+IHtcbiAgdmFyIGNoZWNrUmVhZHkgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIikge1xuICAgICAgY2xlYXJJbnRlcnZhbChjaGVja1JlYWR5KTtcblxuICAgICAgZXhlY3V0ZVNjcmlwdChhc3luYyAoZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgeyB0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQgfSA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIGlmICghY29vcmRpbmF0ZXNJblZpZXdwb3J0KHsgdG9wLCBib3R0b20gfSkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB4ID0gcmFuZG9tKGxlZnQsIHJpZ2h0KTtcbiAgICAgICAgY29uc3QgeSA9IHJhbmRvbSh0b3AsIGJvdHRvbSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coeyBlbCwgeCwgeSB9KTtcblxuICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICAgICAgYWN0aW9uOiBcImNsaWNrXCIsXG4gICAgICAgICAgeCxcbiAgICAgICAgICB5LFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59KTtcbiIsImV4cG9ydCBjb25zdCBleGVjdXRlU2NyaXB0ID0gKGNsaWNrRWxlbWVudCkgPT4ge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIC8vIFVJIGVsZW1lbnRzXHJcbiAgICBjb25zdCBhcnJvd1N2Z1N0cmluZyA9ICc8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48Zz48cGF0aCBkPVwiTTEyIDQuNjU2bDguNzIgOC43MmMuMjkzLjI5My43NjguMjkzIDEuMDYgMHMuMjk0LS43NjggMC0xLjA2bC05LjI1LTkuMjVjLS4yOTItLjI5NC0uNzY3LS4yOTQtMS4wNiAwbC05LjI1IDkuMjVjLS4xNDYuMTQ1LS4yMi4zMzctLjIyLjUzcy4wNzMuMzgzLjIyLjUzYy4yOTMuMjkyLjc2OC4yOTIgMS4wNiAwTDEyIDQuNjU2elwiPjwvcGF0aD48cGF0aCBkPVwiTTEyIDEyLjQ2NWw4LjcyIDguNzJjLjI5My4yOTMuNzY4LjI5MyAxLjA2IDBzLjI5NC0uNzY4IDAtMS4wNmwtOS4yNS05LjI1Yy0uMjkyLS4yOTQtLjc2Ny0uMjk0LTEuMDYgMGwtOS4yNSA5LjI1Yy0uMTQ2LjE0NS0uMjIuMzM3LS4yMi41M3MuMDczLjM4My4yMi41M2MuMjkzLjI5Mi43NjguMjkyIDEuMDYgMGw4LjcyLTguNzJ6XCI+PC9wYXRoPjwvZz48L3N2Zz4nO1xyXG4gICAgY29uc3QgbGlrZVN2Z1N0cmluZyA9ICc8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48Zz48cGF0aCBkPVwiTTEyIDIxLjYzOGgtLjAxNEM5LjQwMyAyMS41OSAxLjk1IDE0Ljg1NiAxLjk1IDguNDc4YzAtMy4wNjQgMi41MjUtNS43NTQgNS40MDMtNS43NTQgMi4yOSAwIDMuODMgMS41OCA0LjY0NiAyLjczLjgxNC0xLjE0OCAyLjM1NC0yLjczIDQuNjQ1LTIuNzMgMi44OCAwIDUuNDA0IDIuNjkgNS40MDQgNS43NTUgMCA2LjM3Ni03LjQ1NCAxMy4xMS0xMC4wMzcgMTMuMTU3SDEyek03LjM1NCA0LjIyNWMtMi4wOCAwLTMuOTAzIDEuOTg4LTMuOTAzIDQuMjU1IDAgNS43NCA3LjAzNCAxMS41OTYgOC41NSAxMS42NTggMS41MTgtLjA2MiA4LjU1LTUuOTE3IDguNTUtMTEuNjU4IDAtMi4yNjctMS44MjMtNC4yNTUtMy45MDMtNC4yNTUtMi41MjggMC0zLjk0IDIuOTM2LTMuOTUyIDIuOTY1LS4yMy41NjItMS4xNTYuNTYyLTEuMzg3IDAtLjAxNC0uMDMtMS40MjUtMi45NjUtMy45NTQtMi45NjV6XCI+PC9wYXRoPjwvZz48L3N2Zz4nO1xyXG5cclxuICAgIC8vIFV0aWxpdGllc1xyXG4gICAgY29uc3QgcmFuZG9tID0gKG1pbiwgbWF4KSA9PiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XHJcblxyXG4gICAgY29uc3QgY3JlYXRlRnJvbUhUTUwgPSAoaHRtbFN0cmluZykgPT4ge1xyXG4gICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGRpdi5pbm5lckhUTUwgPSBodG1sU3RyaW5nLnRyaW0oKTtcclxuXHJcbiAgICAgIC8vIENoYW5nZSB0aGlzIHRvIGRpdi5jaGlsZE5vZGVzIHRvIHN1cHBvcnQgbXVsdGlwbGUgdG9wLWxldmVsIG5vZGVzXHJcbiAgICAgIHJldHVybiBkaXYuZmlyc3RDaGlsZDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgZWxlbWVudHMgVXRpbGl0ZXNcclxuXHJcbiAgICBjb25zdCBhcnJvd1N2ZyA9IGNyZWF0ZUZyb21IVE1MKGFycm93U3ZnU3RyaW5nKTtcclxuICAgIGNvbnN0IGhlYXJ0U3ZnID0gY3JlYXRlRnJvbUhUTUwobGlrZVN2Z1N0cmluZyk7XHJcbiAgICBjb25zdCBibHVlQ29sb3IgPSAncmdiYSgyOSwxNjEsMjQyLDEuMDApJztcclxuXHJcbiAgICBhcnJvd1N2Zy5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XCIpO1xyXG4gICAgY29uc3QgZ2V0TmF2ID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2W3JvbGU9XCJuYXZpZ2F0aW9uXCJdJyk7XHJcbiAgICBjb25zdCBnZXRIZWFydHMgPSAoKSA9PiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ21haW4gW2Q9XCJNMTIgMjEuNjM4aC0uMDE0QzkuNDAzIDIxLjU5IDEuOTUgMTQuODU2IDEuOTUgOC40NzhjMC0zLjA2NCAyLjUyNS01Ljc1NCA1LjQwMy01Ljc1NCAyLjI5IDAgMy44MyAxLjU4IDQuNjQ2IDIuNzMuODE0LTEuMTQ4IDIuMzU0LTIuNzMgNC42NDUtMi43MyAyLjg4IDAgNS40MDQgMi42OSA1LjQwNCA1Ljc1NSAwIDYuMzc2LTcuNDU0IDEzLjExLTEwLjAzNyAxMy4xNTdIMTJ6TTcuMzU0IDQuMjI1Yy0yLjA4IDAtMy45MDMgMS45ODgtMy45MDMgNC4yNTUgMCA1Ljc0IDcuMDM0IDExLjU5NiA4LjU1IDExLjY1OCAxLjUxOC0uMDYyIDguNTUtNS45MTcgOC41NS0xMS42NTggMC0yLjI2Ny0xLjgyMy00LjI1NS0zLjkwMy00LjI1NS0yLjUyOCAwLTMuOTQgMi45MzYtMy45NTIgMi45NjUtLjIzLjU2Mi0xLjE1Ni41NjItMS4zODcgMC0uMDE0LS4wMy0xLjQyNS0yLjk2NS0zLjk1NC0yLjk2NXpcIl0nKSlcclxuICAgIGNvbnN0IGdldFR3ZWV0cyA9IChjdXJyZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGFsbCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYXJ0aWNsZScpKTtcclxuICAgICAgcmV0dXJuIGFsbC5zbGljZShhbGwuaW5kZXhPZihjdXJyZW50KSArIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHVwIHNldHRpbmdzXHJcbiAgICBjb25zdCByZWxvYWRTdG9yYWdlS2V5ID0gJ2hlYXJ0LWNsaWNrZXItbGFzdC1yZWxvYWQnO1xyXG4gICAgY29uc3QgbGFzdFJlbG9hZFN0ciA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShyZWxvYWRTdG9yYWdlS2V5KSk7XHJcbiAgICBjb25zdCBsYXN0UmVsb2FkID0gIWlzTmFOKGxhc3RSZWxvYWRTdHIpID8gbmV3IERhdGUobGFzdFJlbG9hZFN0cikgOiBudWxsO1xyXG4gICAgY29uc3QgZ2V0U3RvcmFnZUtleSA9IChrZXkpID0+IGB0LSR7a2V5fS0ke2xvY2F0aW9uLnBhdGhuYW1lfWBcclxuICAgIGNvbnN0IGdldExvY2FsU2V0dGluZ3MgPSAoKSA9PiAoe1xyXG4gICAgICBzY3JvbGw6ICEhbG9jYWxTdG9yYWdlLmdldEl0ZW0oZ2V0U3RvcmFnZUtleSgnc2Nyb2xsJykpLFxyXG4gICAgICBsaWtlOiAhIWxvY2FsU3RvcmFnZS5nZXRJdGVtKGdldFN0b3JhZ2VLZXkoJ2xpa2UnKSksXHJcbiAgICB9KVxyXG5cclxuICAgIGxldCBzZXR0aW5ncyA9IGdldExvY2FsU2V0dGluZ3MoKTtcclxuXHJcbiAgICAvLyBTZXR1cCBsb29wc1xyXG4gICAgbGV0IHR3ZWV0cyA9IFtdO1xyXG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XHJcbiAgICBsZXQgcmVsb2FkcyA9IDA7XHJcbiAgICBjb25zdCBybmRSZWxvYWRzID0gcmFuZG9tKDEwLCAyMCk7XHJcblxyXG4gICAgY29uc3Qgc3RhcnRJbnRlcnZhbCA9IChjYWxsYmFjaywgbXMpID0+IHtcclxuICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgcmV0dXJuIHNldEludGVydmFsKGNhbGxiYWNrLCBtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWFpbkludGVydmFsID0gKCkgPT4gc3RhcnRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIHNldHRpbmdzLmxpa2UgJiYgZ2V0SGVhcnRzKCkuZm9yRWFjaCgoaCwgaSkgPT4gc2V0VGltZW91dCgoKSA9PiBzZXR0aW5ncy5saWtlICYmIGNsaWNrRWxlbWVudChoKSwgNTAgKiAoaSArIDEpKSk7XHJcbiAgXHJcbiAgICAgIGlmIChzZXR0aW5ncy5zY3JvbGwpIHtcclxuICAgICAgICBpZighc2V0dGluZ3MubGlrZSkge1xyXG4gICAgICAgICAgLy8gTGlraW5nIGlzIHR1cm5lZCBvZmYsIGp1c3Qgc2Nyb2xsIHRvIGVhY2ggdHdlZXRcclxuICAgICAgICAgIGxldCB0d2VldCA9IHR3ZWV0c1tjdXJyZW50SW5kZXgrK107XHJcbiAgICAgICAgICBpZiAoIXR3ZWV0KSB7XHJcbiAgICAgICAgICAgIHR3ZWV0cyA9IGdldFR3ZWV0cyh0d2VldHNbY3VycmVudEluZGV4IC0gMl0pO1xyXG4gICAgICAgICAgICBjdXJyZW50SW5kZXggPSAwO1xyXG4gICAgICAgICAgICB0d2VldCA9IHR3ZWV0c1tjdXJyZW50SW5kZXgrK107XHJcbiAgICAgICAgICAgIHJlbG9hZHMrKztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0d2VldCkgdHdlZXQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnY2VudGVyJyB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gTGlraW5nIGlzIHR1cm5lZCBvbiwgc2Nyb2xsIHRvIGhlYXJ0IGljb25zXHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgICAgICBsZXQgdHdlZXQgPSB0d2VldHNbY3VycmVudEluZGV4KytdO1xyXG4gICAgICAgICAgICBpZiAoIXR3ZWV0KSB7XHJcbiAgICAgICAgICAgICAgdHdlZXRzID0gZ2V0SGVhcnRzKCk7XHJcbiAgICAgICAgICAgICAgY3VycmVudEluZGV4ID0gMDtcclxuICAgICAgICAgICAgICB0d2VldCA9IHR3ZWV0c1tjdXJyZW50SW5kZXgrK107XHJcbiAgICAgICAgICAgICAgaWYgKCF0d2VldCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlbG9hZHMgPiBybmRSZWxvYWRzKSB7XHJcbiAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHJlbG9hZFN0b3JhZ2VLZXksIG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcclxuICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBJZiBsYXN0IHJlbG9hZCB3YXMgaW4gdGhlIGxhc3QgMzAgbWlucyBqdXN0IGNoaWxsIGFuZCB3YWl0XHJcbiAgICAgICAgICAgICAgICBpZihsYXN0UmVsb2FkICYmIGxhc3RSZWxvYWQgPCBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIDYwMDAwICogMzApIHtcclxuICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVsb2FkcysrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHdlZXQpIHR3ZWV0LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ2NlbnRlcicgfSk7XHJcbiAgICAgICAgICB9LCAyMDAwKTsvLyB3YWl0IHRoaXMgbG9uZyBzbyBhbGwgdGhlIGxpa2VzIHdpbGwgZmlyZSBwcm9wZXJseVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwgMzAwMCk7XHJcblxyXG4gICAgbGV0IGludGVydmFsS2V5ID0gbWFpbkludGVydmFsKCk7XHJcblxyXG4gICAgLy8gU2V0dXAgVVhcclxuICAgIGNvbnN0IHVpQ29udGFpbmVyID0gZ2V0TmF2KCk7XHJcblxyXG4gICAgY29uc3QgY3JlYXRlTmF2RWxlbWVudCA9IChuZXdJY29uLCB0ZXh0LCBjbGlja0hhbmRsZXIpID0+IHtcclxuICAgICAgY29uc3QgbmV3RWxlbWVudCA9IHVpQ29udGFpbmVyLmxhc3RDaGlsZC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgIGNvbnN0IG9sZEljb24gPSBuZXdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpO1xyXG5cclxuICAgICAgbmV3SWNvbi5jbGFzc05hbWUuYmFzZVZhbCA9IG9sZEljb24uY2xhc3NOYW1lLmJhc2VWYWw7XHJcblxyXG4gICAgICBvbGRJY29uLnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQobmV3SWNvbik7XHJcbiAgICAgIG9sZEljb24ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChvbGRJY29uKTtcclxuXHJcbiAgICAgIGNvbnN0IHRleHRTcGFuID0gbmV3RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XHJcbiAgICAgIGlmICh0ZXh0U3Bhbikge1xyXG4gICAgICAgIHRleHRTcGFuLmlubmVySFRNTCA9IHRleHQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG5ld0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNsaWNrSGFuZGxlcihlKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0ICYmIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIG5ld0VsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZG9CdXR0b25TdHlsZSA9IChidXR0b24sIGFjdGl2YXRlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHN2ZyA9IGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCdzdmcnKTtcclxuICAgICAgY29uc3QgdGV4dCA9IGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XHJcblxyXG4gICAgICBidXR0b24uc3R5bGUuY29sb3IgPSBhY3RpdmF0ZSA/IGJsdWVDb2xvciA6IG51bGw7XHJcblxyXG4gICAgICBpZiAoc3ZnKSB7XHJcbiAgICAgICAgc3ZnLnN0eWxlLmZpbGwgPSBhY3RpdmF0ZSA/IGJsdWVDb2xvciA6IG51bGxcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRleHQpIHtcclxuICAgICAgICB0ZXh0LnN0eWxlLmNvbG9yID0gYWN0aXZhdGUgPyBibHVlQ29sb3IgOiBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoc2V0dGluZ0tleSkgPT4gKHsgdGFyZ2V0IH0pID0+IHtcclxuICAgICAgY29uc3QgYnV0dG9uID0gdGFyZ2V0Lm1hdGNoZXMoJ1tyb2xlPVwiYnV0dG9uXCJdJykgPyB0YXJnZXQgOiB0YXJnZXQuY2xvc2VzdCgnW3JvbGU9XCJidXR0b25cIl0nKTtcclxuICAgICAgaWYgKHNldHRpbmdzW3NldHRpbmdLZXldID0gIXNldHRpbmdzW3NldHRpbmdLZXldKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oZ2V0U3RvcmFnZUtleShzZXR0aW5nS2V5KSwgJzEnKTtcclxuICAgICAgICBkb0J1dHRvblN0eWxlKGJ1dHRvbiwgdHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oZ2V0U3RvcmFnZUtleShzZXR0aW5nS2V5KSwgJycpO1xyXG4gICAgICAgIGRvQnV0dG9uU3R5bGUoYnV0dG9uLCBmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2Nyb2xsQnV0dG9uID0gY3JlYXRlTmF2RWxlbWVudChhcnJvd1N2ZywgJ0F1dG8gU2Nyb2xsJywgaGFuZGxlQ2xpY2soJ3Njcm9sbCcpKTtcclxuICAgIGlmIChzZXR0aW5ncy5zY3JvbGwpIGRvQnV0dG9uU3R5bGUoc2Nyb2xsQnV0dG9uLCB0cnVlKTtcclxuXHJcbiAgICBjb25zdCBsaWtlQnV0dG9uID0gY3JlYXRlTmF2RWxlbWVudChoZWFydFN2ZywgJ0F1dG8gTGlrZScsIGhhbmRsZUNsaWNrKCdsaWtlJykpO1xyXG4gICAgaWYgKHNldHRpbmdzLmxpa2UpIGRvQnV0dG9uU3R5bGUobGlrZUJ1dHRvbiwgdHJ1ZSk7XHJcblxyXG4gICAgdWlDb250YWluZXIucHJlcGVuZChsaWtlQnV0dG9uKTtcclxuICAgIHVpQ29udGFpbmVyLnByZXBlbmQoc2Nyb2xsQnV0dG9uKTtcclxuXHJcbiAgICBjb25zdCBnZXRCdXR0b24gPSAoa2V5KSA9PiAoe1xyXG4gICAgICBzY3JvbGw6IHNjcm9sbEJ1dHRvbixcclxuICAgICAgbGlrZTogbGlrZUJ1dHRvbixcclxuICAgIH0pW2tleV07XHJcblxyXG5cclxuICAgIC8vIFBvbGxpbmcgZm9yIGNsaWVudCBzaWRlIG5hdmlnYXRpb24gYW5kIHRhYiBpbmFjdGl2aXR5XHJcbiAgICBsZXQgd2FzSGlkZGVuID0gZmFsc2U7XHJcbiAgICBsZXQgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb247XHJcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGlmIChocmVmICE9PSB3aW5kb3cubG9jYXRpb24uaHJlZikge1xyXG4gICAgICAgIGhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgICAgICBzZXR0aW5ncyA9IGdldExvY2FsU2V0dGluZ3MoKTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoc2V0dGluZ3MpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgYnV0dG9uID0gZ2V0QnV0dG9uKGtleSk7XHJcbiAgICAgICAgICBkb0J1dHRvblN0eWxlKGJ1dHRvbiwgdmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChkb2N1bWVudC5oaWRkZW4pIHtcclxuICAgICAgICBpZiAoIXdhc0hpZGRlbikge1xyXG4gICAgICAgICAgd2FzSGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxLZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmICh3YXNIaWRkZW4pIHtcclxuICAgICAgICB3YXNIaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICBpbnRlcnZhbEtleSA9IG1haW5JbnRlcnZhbCgpO1xyXG4gICAgICB9XHJcbiAgICB9LCA1MCk7XHJcbiAgfSwgMzAwMCk7XHJcbn0iLCJleHBvcnQgY29uc3QgY29vcmRpbmF0ZXNJblZpZXdwb3J0ID0gKHtcclxuICB0b3AsXHJcbiAgYm90dG9tLFxyXG59OiBQaWNrPERPTVJlY3QsIFwidG9wXCIgfCBcImJvdHRvbVwiPikgPT4ge1xyXG4gIGlmICh0b3AgPj0gMCAmJiBib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0KSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNsaWNrTG9jYXRpb24gPSAoXHJcbiAgbG9jYXRpb246IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSxcclxuICB0YWJJZDogbnVtYmVyLFxyXG4gIGJ1dHRvbiA9IFwibGVmdFwiLFxyXG4gIGNsaWNrQ291bnQgPSAxXHJcbikgPT4ge1xyXG4gIGNvbnN0IHRhcmdldCA9IHsgdGFiSWQgfTtcclxuICBjb25zdCBjbGlja0FyZ3MgPSB7XHJcbiAgICAuLi5sb2NhdGlvbixcclxuICAgIHR5cGU6IFwibW91c2VQcmVzc2VkXCIsXHJcbiAgICBidXR0b24sXHJcbiAgICBjbGlja0NvdW50LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG1vdmVkQXJncyA9IHsgLi4ubG9jYXRpb24sIHR5cGU6IFwibW91c2VNb3ZlZFwiIH07XHJcblxyXG4gIGNocm9tZS5kZWJ1Z2dlci5hdHRhY2godGFyZ2V0LCBcIjEuMlwiLCAoKSA9PiB7XHJcbiAgICBjaHJvbWUuZGVidWdnZXIuc2VuZENvbW1hbmQoXHJcbiAgICAgIHRhcmdldCxcclxuICAgICAgXCJJbnB1dC5kaXNwYXRjaE1vdXNlRXZlbnRcIixcclxuICAgICAgeyAuLi5sb2NhdGlvbiwgdHlwZTogXCJtb3VzZU1vdmVkXCIgfSxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIGNocm9tZS5kZWJ1Z2dlci5zZW5kQ29tbWFuZChcclxuICAgICAgICAgIHRhcmdldCxcclxuICAgICAgICAgIFwiSW5wdXQuZGlzcGF0Y2hNb3VzZUV2ZW50XCIsXHJcbiAgICAgICAgICBjbGlja0FyZ3MsXHJcbiAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNsaWNrQXJncy50eXBlID0gXCJtb3VzZVJlbGVhc2VkXCI7XHJcbiAgICAgICAgICAgIGNocm9tZS5kZWJ1Z2dlci5zZW5kQ29tbWFuZChcclxuICAgICAgICAgICAgICB0YXJnZXQsXHJcbiAgICAgICAgICAgICAgXCJJbnB1dC5kaXNwYXRjaE1vdXNlRXZlbnRcIixcclxuICAgICAgICAgICAgICBjbGlja0FyZ3MsXHJcbiAgICAgICAgICAgICAgKCkgPT4gY2hyb21lLmRlYnVnZ2VyLmRldGFjaCh0YXJnZXQpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9KTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==