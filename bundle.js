/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/style.css":
/*!***************************!*\
  !*** ./src/app/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lesson-9-homework/./src/app/style.css?");

/***/ }),

/***/ "./src/app/getLocation.js":
/*!********************************!*\
  !*** ./src/app/getLocation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getLocation: () => (/* binding */ getLocation)\n/* harmony export */ });\nasync function getLocation() {\n  try {\n    const response = await fetch('https://ipinfo.io/json?token=7ce0407bb7be70');\n    const jsonResponse = await response.json();\n    let city;\n    let coordinates;\n    city = jsonResponse.city;\n    const splittedCoord = jsonResponse.loc.split(',');\n    coordinates = [splittedCoord[0], splittedCoord[1]];\n    return { city, coordinates };\n  } catch {\n    return null;\n  }\n}\n\n\n//# sourceURL=webpack://lesson-9-homework/./src/app/getLocation.js?");

/***/ }),

/***/ "./src/app/index.js":
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addLinks: () => (/* binding */ addLinks),\n/* harmony export */   addWeather: () => (/* binding */ addWeather),\n/* harmony export */   addWeatherTemplate: () => (/* binding */ addWeatherTemplate),\n/* harmony export */   inputCity: () => (/* binding */ inputCity),\n/* harmony export */   loadHistoryList: () => (/* binding */ loadHistoryList),\n/* harmony export */   setFirstLocation: () => (/* binding */ setFirstLocation),\n/* harmony export */   updateHistoryList: () => (/* binding */ updateHistoryList),\n/* harmony export */   updateWeather: () => (/* binding */ updateWeather)\n/* harmony export */ });\n/* harmony import */ var _initPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initPage.js */ \"./src/app/initPage.js\");\n/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather.js */ \"./src/app/weather.js\");\n/* harmony import */ var _localstorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localstorage.js */ \"./src/app/localstorage.js\");\n/* harmony import */ var _getLocation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getLocation.js */ \"./src/app/getLocation.js\");\n/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map.js */ \"./src/app/map.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ \"./src/app/style.css\");\n\n\n\n\n\n\nfunction inputCity(input) {\n  const cityKey = 'citylist';\n  const historyCity = (0,_localstorage_js__WEBPACK_IMPORTED_MODULE_2__.getLocalStorageItem)(cityKey);\n  input = document.querySelector('.inputCity');\n  input.addEventListener('keypress', function (event) {\n    if (event.key === 'Enter' && input.value != '') {\n      const city = input.value;\n      input.value = '';\n      if (historyCity != null) {\n        (0,_localstorage_js__WEBPACK_IMPORTED_MODULE_2__.addCity)(historyCity, city);\n      }\n      (0,_localstorage_js__WEBPACK_IMPORTED_MODULE_2__.setLocalStorageItem)(cityKey, historyCity);\n      updateWeather(city);\n      updateHistoryList(city, document);\n    }\n  });\n}\n\nfunction updateHistoryList(city, el) {\n  if (el.querySelectorAll('.liHistory').length == 10) {\n    el.querySelectorAll('.liHistory')[9].remove();\n  }\n  const li = document.createElement('li');\n  li.innerHTML = city;\n  li.className = 'liHistory';\n  el.querySelector('.historyCity').prepend(li);\n}\n\nfunction addLinks() {\n  document.querySelector('.historyCity').addEventListener('click', (ev) => {\n    if (ev.target.tagName === 'LI') {\n      const city = ev.target.innerHTML;\n      updateWeather(city);\n    }\n  });\n}\n\nfunction loadHistoryList() {\n  const key = 'citylist';\n  const result = (0,_localstorage_js__WEBPACK_IMPORTED_MODULE_2__.getLocalStorageItem)(key);\n  if (result) {\n    result.forEach((element) => {\n      if (element != null) {\n        const li = document.createElement('li');\n        li.className = 'liHistory';\n        li.innerHTML = element;\n        document.querySelector('.historyCity').appendChild(li);\n      } else {\n        return null;\n      }\n    });\n  }\n}\n\nfunction addWeatherTemplate(template, object) {\n  const pattern = /\\{\\{(\\w+)}}/gm;\n  template = template.replace(pattern, (match, key) => {\n    if (key in object) {\n      return object[key];\n    } else {\n      return '';\n    }\n  });\n  return template;\n}\n\nfunction addWeather(objectWeather) {\n  const template = document.querySelector('.layer3').innerHTML;\n  // if (object) {\n  // document.querySelector('.InfoCity').innerText = `${weather.city}`;\n  // document.querySelector('.InfoTemp').innerText = `${weather.temperature}`;\n  // document.querySelector('.iconWeather').innerHTML =\n  //   `<img src=\"https://openweathermap.org/img/wn/` +\n  //   weather.icon +\n  //   `@2x.png\">`;\n  const updatedTemplate = addWeatherTemplate(template, objectWeather);\n  return updatedTemplate;\n  // }\n}\n\nasync function updateWeather(city) {\n  try {\n    const weather = await (0,_weather_js__WEBPACK_IMPORTED_MODULE_1__.getWeather)(city);\n    if (weather) {\n      addWeather(weather);\n      (0,_map_js__WEBPACK_IMPORTED_MODULE_4__.updateMap)(weather.coordinates, document.querySelector('.fakePosition'));\n    }\n  } catch {\n    console.log('Wrong city name');\n  }\n}\n\nasync function setFirstLocation() {\n  const currentLocation = await (0,_getLocation_js__WEBPACK_IMPORTED_MODULE_3__.getLocation)();\n  const firstCity = currentLocation.city;\n  const firstCityCoord = currentLocation.coordinates;\n  updateWeather(firstCity);\n  (0,_map_js__WEBPACK_IMPORTED_MODULE_4__.updateMap)(firstCityCoord, document.querySelector('.fakePosition'));\n}\n\ndocument.addEventListener('DOMContentLoaded', async (ev) => {\n  ev = document.querySelector('.mainContainer');\n  (0,_initPage_js__WEBPACK_IMPORTED_MODULE_0__.initPage)(ev);\n  loadHistoryList();\n  inputCity();\n  addLinks();\n  setFirstLocation();\n});\n\n\n//# sourceURL=webpack://lesson-9-homework/./src/app/index.js?");

/***/ }),

/***/ "./src/app/initPage.js":
/*!*****************************!*\
  !*** ./src/app/initPage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initPage: () => (/* binding */ initPage)\n/* harmony export */ });\nfunction initPage(el) {\n  el.innerHTML = `\n    <div class=\"layer1\">\n            <div class=\"layer2\">\n                <label for=\"search\">Enter a city name and press enter</label>\n                <input class=\"inputCity\" id = \"search\" type=\"text\">\n                <img class=\"fakePosition\" src=''/>\n            </div>\n            <div class=\"layer3\">\n                <p class=\"showWeather\">Weather info</p>\n                <ul class=infoWeather>\n                <li class=\"InfoCity\">{{city}}</li>\n                <li class=\"InfoTemp\">{{temperature}}</li>\n                </ul>\n                <div class = \"iconWeather\"><img src=\"https://openweathermap.org/img/wn/{{icon}}@2x.png\">\n                </div>\n            </div>\n            <div class=\"layer4\">\n                <p class=\"showWeather\">History</p>\n                <ul class=\"historyCity\">\n                </ul>\n            </div>\n        </div>`;\n}\n\n\n//# sourceURL=webpack://lesson-9-homework/./src/app/initPage.js?");

/***/ }),

/***/ "./src/app/localstorage.js":
/*!*********************************!*\
  !*** ./src/app/localstorage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addCity: () => (/* binding */ addCity),\n/* harmony export */   getLocalStorageItem: () => (/* binding */ getLocalStorageItem),\n/* harmony export */   setLocalStorageItem: () => (/* binding */ setLocalStorageItem)\n/* harmony export */ });\nfunction setLocalStorageItem(key, value) {\n  const cityValue = JSON.stringify(value);\n  return localStorage.setItem(key, cityValue);\n}\n\nfunction getLocalStorageItem(key) {\n  let result;\n  try {\n    result = JSON.parse(localStorage.getItem(key));\n  } catch (err) {\n    result = null;\n  }\n  return result;\n}\n\nfunction addCity(arr, city) {\n  if (arr.includes(city) === true) {\n    arr.splice(arr.indexOf(city), 1);\n    arr.unshift(city);\n    return arr;\n  } else {\n    if (arr.length === 10) {\n      arr.pop();\n      arr.unshift(city);\n      return arr;\n    } else {\n      arr.unshift(city);\n      return arr;\n    }\n  }\n}\n\n\n//# sourceURL=webpack://lesson-9-homework/./src/app/localstorage.js?");

/***/ }),

/***/ "./src/app/map.js":
/*!************************!*\
  !*** ./src/app/map.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateMap: () => (/* binding */ updateMap)\n/* harmony export */ });\nfunction updateMap(coordinates, srcURL) {\n  const URL =\n    'https://static-maps.yandex.ru/v1?lang=ru_RU&ll=' +\n    `${coordinates}` +\n    '&spn=0.3,0.3&size=400,400&apikey=e091f93b-1d71-4a7d-ae59-8369de3754d8';\n  srcURL.src = URL;\n}\n\n\n//# sourceURL=webpack://lesson-9-homework/./src/app/map.js?");

/***/ }),

/***/ "./src/app/weather.js":
/*!****************************!*\
  !*** ./src/app/weather.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWeather: () => (/* binding */ getWeather)\n/* harmony export */ });\nasync function getWeather(cityName) {\n  const response = await fetch(\n    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=50e9562e52bdc95310309ebf4c74c77c&units=metric&lang=en`,\n  );\n  const data = await response.json();\n  let city;\n  let temperature;\n  let icon;\n  let coordinates;\n  if (data.cod === 200) {\n    city = data.name;\n    temperature = Math.round(data.main.temp);\n    icon = data.weather[0].icon;\n    coordinates = [data.coord.lon, data.coord.lat];\n  } else {\n    return null;\n  }\n  return { city, temperature, icon, coordinates };\n}\n\n\n//# sourceURL=webpack://lesson-9-homework/./src/app/weather.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app/index.js");
/******/ 	
/******/ })()
;