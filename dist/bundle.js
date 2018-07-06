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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/Awong/Documents/Web Projects/Code Wars/node_modules/axios/index.js'");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/css/style.scss":
/*!***********************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/css/style.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vidContainer {\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n  bottom: 0;\n  overflow: hidden; }\n\n#backgroundVid {\n  position: fixed;\n  min-width: 100vw;\n  min-height: 100vh;\n  overflow: hidden;\n  bottom: 0;\n  right: 0; }\n\n.vidContainer:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  z-index: 2;\n  animation-name: overlay;\n  animation-duration: 2s;\n  animation-delay: 2s;\n  animation-fill-mode: forwards; }\n\n@keyframes overlay {\n  0% {\n    background-color: rgba(0, 0, 0, 0); }\n  100% {\n    background-color: rgba(0, 0, 0, 0.6); } }\n\n.overlayText {\n  list-style: none;\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  text-align: center;\n  font-size: 70px;\n  width: 100%;\n  font-weight: bold;\n  color: white;\n  z-index: 20; }\n\n.overlayText li {\n  display: inline-block;\n  opacity: 0; }\n\n.overlayTextTitle {\n  margin-top: 80px; }\n\n.overlayTextName li:nth-child(7) {\n  margin-right: 30px; }\n\n.overlayTextName li:last-child {\n  margin-right: 0; }\n\n.overlayTextName li:nth-child(1) {\n  animation: 1.6s linear 3s first;\n  animation-fill-mode: forwards; }\n\n.overlayTextName li:nth-child(2) {\n  animation: 1.6s linear 3.2s sec;\n  animation-fill-mode: forwards; }\n\n.overlayTextName li:nth-child(3) {\n  animation: 1.6s linear 3.4s third;\n  animation-fill-mode: forwards; }\n\n.overlayTextName li:nth-child(4) {\n  animation: 1.6s linear 3.6s fourth;\n  animation-fill-mode: forwards; }\n\n.overlayTextName li:nth-child(5) {\n  animation: 1.6s linear 3.8s fifth;\n  animation-fill-mode: forwards; }\n\n.overlayTextName li:nth-child(6) {\n  animation: 1.6s linear 4s sixth;\n  animation-fill-mode: forwards; }\n\n.overlayTextName li:nth-child(7) {\n  animation: 1.6s linear 4.2s seventh;\n  animation-fill-mode: forwards;\n  margin-right: 30px; }\n\n.overlayTextName li:nth-child(8) {\n  animation: 1.6s linear 4.4s eighth;\n  animation-fill-mode: forwards; }\n\n.overlayTextName li:nth-child(9) {\n  animation: 1.6s linear 4.6s ninth;\n  animation-fill-mode: forwards; }\n\n.overlayTextName li:nth-child(10) {\n  animation: 1.6s linear 4.8s tenth;\n  animation-fill-mode: forwards; }\n\n.overlayTextName li:nth-child(11) {\n  animation: 1.6s linear 5s eleventh;\n  animation-fill-mode: forwards; }\n\n.overlayTextTitle li:nth-child(1) {\n  animation: 1s linear 3s firstT;\n  animation-fill-mode: forwards; }\n\n.overlayTextTitle li:nth-child(2) {\n  animation: 1s linear 3.2s secT;\n  animation-fill-mode: forwards; }\n\n.overlayTextTitle li:nth-child(3) {\n  animation: 1s linear 3.4s thirdT;\n  animation-fill-mode: forwards; }\n\n.overlayTextTitle li:nth-child(4) {\n  animation: 1s linear 3.6s fourthT;\n  animation-fill-mode: forwards; }\n\n.overlayTextTitle li:nth-child(5) {\n  animation: 1s linear 3.8s fifthT;\n  animation-fill-mode: forwards;\n  margin-right: 30px; }\n\n.overlayTextTitle li:nth-child(6) {\n  animation: 1s linear 4s sixthT;\n  animation-fill-mode: forwards; }\n\n.overlayTextTitle li:nth-child(7) {\n  animation: 1s linear 4.2s seventhT;\n  animation-fill-mode: forwards; }\n\n.overlayTextTitle li:nth-child(8) {\n  animation: 1s linear 4.4s eighthT;\n  animation-fill-mode: forwards;\n  margin-right: 30px; }\n\n.overlayTextTitle li:nth-child(9) {\n  animation: 1s linear 4.6s ninthT;\n  animation-fill-mode: forwards; }\n\n.overlayTextTitle li:nth-child(10) {\n  animation: 1s linear 4.8s tenthT;\n  animation-fill-mode: forwards; }\n\n.overlayTextTitle li:nth-child(11) {\n  animation: 1s linear 5s eleventhT;\n  animation-fill-mode: forwards; }\n\n.overlayTextTitle li:nth-child(12) {\n  animation: 1s linear 5.2s twelvethT;\n  animation-fill-mode: forwards; }\n\n.overlayTextTitle li:nth-child(13) {\n  animation: 1s linear 5.4s thirteenthT;\n  animation-fill-mode: forwards; }\n\n.overlayTextTitle li:nth-child(14) {\n  animation: 1s linear 5.6s fourteenthT;\n  animation-fill-mode: forwards; }\n\n.overlayTextTitle li:nth-child(15) {\n  animation: 1s linear 5.8s fifteenthT;\n  animation-fill-mode: forwards; }\n\n.overlayTextTitle li:nth-child(16) {\n  animation: 1s linear 6s sixteenthT;\n  animation-fill-mode: forwards; }\n\n.overlayTextTitle li:nth-child(17) {\n  animation: 1s linear 6.2s seventeenthT;\n  animation-fill-mode: forwards; }\n\n@keyframes first {\n  from {\n    transform: translate(0, 200%); }\n  to {\n    opacity: 1; } }\n\n@keyframes sec {\n  from {\n    transform: translate(-200%, 0%); }\n  to {\n    opacity: 1; } }\n\n@keyframes third {\n  from {\n    transform: translate(-300%, 2%); }\n  to {\n    opacity: 1; } }\n\n@keyframes fourth {\n  from {\n    transform: translate(-200%, -500%); }\n  to {\n    opacity: 1; } }\n\n@keyframes fifth {\n  from {\n    transform: translate(-300%, -200%); }\n  to {\n    opacity: 1; } }\n\n@keyframes sixth {\n  from {\n    transform: translate(20%, -100%); }\n  to {\n    opacity: 1; } }\n\n@keyframes seventh {\n  from {\n    transform: translate(-300%, -200%); }\n  to {\n    opacity: 1; } }\n\n@keyframes eighth {\n  from {\n    transform: translate(700%, -200%); }\n  to {\n    opacity: 1; } }\n\n@keyframes ninth {\n  from {\n    transform: translate(600%, -400%); }\n  to {\n    opacity: 1; } }\n\n@keyframes tenth {\n  from {\n    transform: translate(300%, -200%); }\n  to {\n    opacity: 1; } }\n\n@keyframes eleventh {\n  from {\n    transform: translate(300%, -800%); }\n  to {\n    opacity: 1; } }\n\n@keyframes firstT {\n  from {\n    transform: translate(-300%, 800%); }\n  to {\n    opacity: 1; } }\n\n@keyframes secT {\n  from {\n    transform: translate(-600%, -600%); }\n  to {\n    opacity: 1; } }\n\n@keyframes thirdT {\n  from {\n    transform: translate(200%, 200%); }\n  to {\n    opacity: 1; } }\n\n@keyframes fourthT {\n  from {\n    transform: translate(600%, -20%); }\n  to {\n    opacity: 1; } }\n\n@keyframes fifthT {\n  from {\n    transform: translate(-200%, -800%); }\n  to {\n    opacity: 1; } }\n\n@keyframes sixthT {\n  from {\n    transform: translate(-300%, -800%); }\n  to {\n    opacity: 1; } }\n\n@keyframes seventhT {\n  from {\n    transform: translate(-100%, -100%); }\n  to {\n    opacity: 1; } }\n\n@keyframes eighthT {\n  from {\n    transform: translate(-200%, 100%); }\n  to {\n    opacity: 1; } }\n\n@keyframes ninthT {\n  from {\n    transform: translate(-500%, 500%); }\n  to {\n    opacity: 1; } }\n\n@keyframes tenthT {\n  from {\n    transform: translate(90%, -90%); }\n  to {\n    opacity: 1; } }\n\n@keyframes eleventhT {\n  from {\n    transform: translate(100%, 100%); }\n  to {\n    opacity: 1; } }\n\n@keyframes twelvethT {\n  from {\n    transform: translate(-200%, 200%); }\n  to {\n    opacity: 1; } }\n\n@keyframes thirteenthT {\n  from {\n    transform: translate(250%, 250%); }\n  to {\n    opacity: 1; } }\n\n@keyframes fourteenthT {\n  from {\n    transform: translate(700%, 700%); }\n  to {\n    opacity: 1; } }\n\n@keyframes fifteenthT {\n  from {\n    transform: translate(-500%, -500%); }\n  to {\n    opacity: 1; } }\n\n@keyframes sixteenthT {\n  from {\n    transform: translate(300%, 300%); }\n  to {\n    opacity: 1; } }\n\n@keyframes seventeenthT {\n  from {\n    transform: translate(-200%, -200%); }\n  to {\n    opacity: 1; } }\n\n.bioPage {\n  background-image: url(" + escape(__webpack_require__(/*! ./../assets/images/OceanBeachPier.jpg */ "./src/assets/images/OceanBeachPier.jpg")) + ");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n  width: 100vw;\n  height: 100vh; }\n\n.bioHeader {\n  z-index: 20; }\n\n.bioPage:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.6);\n  z-index: 10; }\n\n.bioRow {\n  background-color: rgba(255, 255, 255, 0.5);\n  z-index: 15;\n  border-radius: 100px;\n  border-left: solid white 4px;\n  border-top: solid white 4px;\n  border-bottom: solid white 4px;\n  z-index: 15; }\n\n.profilePicDiv {\n  padding: 0; }\n\n.profilePic {\n  position: relative;\n  float: none;\n  text-align: right;\n  background-image: url(" + escape(__webpack_require__(/*! ./../assets/images/mainProfileImage.png */ "./src/assets/images/mainProfileImage.png")) + ");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  display: block;\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n  background-color: rgba(255, 255, 255, 0.2);\n  border-radius: 100px; }\n\n.profilePic:before {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 200;\n  background: white; }\n\n.bioText {\n  margin-top: 1.5em;\n  text-indent: 2em;\n  letter-spacing: 1px;\n  font-size: 1em;\n  text-align: center;\n  line-height: 1.6;\n  color: white;\n  z-index: 100; }\n\n.bioRow {\n  margin-bottom: 4rem; }\n\n.resumeBtnDiv {\n  z-index: 20; }\n\n.resumeBtn {\n  float: none;\n  border-radius: 8px;\n  color: white;\n  background-color: #3a3af2;\n  height: 3.5em;\n  width: 300px;\n  z-index: 20; }\n\n.projectsPage {\n  background-image: url(" + escape(__webpack_require__(/*! ./../assets/images/BalboaPark.jpg */ "./src/assets/images/BalboaPark.jpg")) + ");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n  width: 100vw;\n  height: 100vh; }\n\n.projectsPage:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.6);\n  z-index: 10; }\n\n#infoDiv {\n  background-color: rgba(255, 255, 255, 0.5);\n  position: relative;\n  color: white;\n  text-align: center;\n  height: 100%;\n  width: 100%;\n  z-index: 20;\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0s, opacity .5s linear; }\n\n.projectsHeader {\n  z-index: 20; }\n\n#changeCalcImage {\n  background-image: url(" + escape(__webpack_require__(/*! ./../assets/images/ChangeCalc.jpg */ "./src/assets/images/ChangeCalc.jpg")) + ");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n  display: block;\n  width: 500px;\n  height: 300px;\n  margin-right: auto;\n  margin-left: auto;\n  z-index: 20;\n  -webkit-animation-name: moveRight;\n  -webkit-animation-duration: 2s;\n  -webkit-animation-timing-function: ease-in-out;\n  -webkit-animation-fill-mode: forwards;\n  animation-name: moveRight;\n  animation-duration: 2s;\n  animation-timing-function: ease-in-out;\n  animation-fill-mode: forwards;\n  animation-play-state: paused; }\n\n@keyframes moveRight {\n  0% {\n    margin-right: 50%; }\n  100% {\n    margin-right: 0; } }\n\n#changeCalcImage:hover {\n  animation-play-state: running; }\n\nheader {\n  color: white;\n  text-align: left;\n  border-bottom: 1px solid white;\n  margin-bottom: 2em; }\n\n.changeInputLabel {\n  color: black;\n  font-size: 1em;\n  text-decoration: bold; }\n\n.ChangeOutputLabels {\n  text-align: center;\n  font-size: 1.25em;\n  text-decoration: bold;\n  background-color: lightgrey;\n  width: 22.5%;\n  height: 10em;\n  margin: 8px;\n  border-radius: 8px; }\n\n.changeLabels {\n  font-size: 1em;\n  text-decoration: bold;\n  vertical-align: middle;\n  line-height: 70px; }\n\n.changeOutputs {\n  text-decoration: bold;\n  color: black;\n  margin-top: -1.5em; }\n\n.changeOutcome {\n  text-align: center;\n  height: 4%;\n  width: 100%; }\n\n/******** Full Site Grid *********/\nhtml, body {\n  margin: 0;\n  height: 100%; }\n\nbody {\n  font-family: \"Open Sans\", sans-serif; }\n\n.fullPage {\n  position: relative;\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column; }\n\n.title {\n  margin-top: 4rem;\n  margin-bottom: 4rem;\n  text-align: center;\n  font-size: 4rem;\n  font-weight: bold;\n  color: white;\n  background-color: rgba(255, 255, 255, 0.3);\n  border-bottom: 4px solid rgba(255, 255, 255, 0.5);\n  border-radius: 120px; }\n\n.page {\n  border: solid #e9e7e7;\n  background-color: #e9e7e7;\n  border-radius: 8px;\n  margin-top: 6rem;\n  margin-left: 15rem;\n  margin-right: 15rem; }\n\n#loginForm {\n  margin-top: 8rem;\n  margin-bottom: 8rem; }\n\n#loginName {\n  margin-bottom: 4rem; }\n\n#loginName li {\n  font-size: 50px;\n  color: #838383; }\n\n.inputs {\n  width: 100%;\n  float: none;\n  margin: auto; }\n\n#username, #password {\n  width: 400px;\n  margin: auto;\n  float: none; }\n\n.loginBtn {\n  width: 400px;\n  margin: auto;\n  float: none; }\n\n#blogHeader {\n  padding-top: 2rem;\n  margin-bottom: 2rem;\n  color: black;\n  height: 7rem; }\n\n.blogText {\n  height: 10rem;\n  text-decoration-color: white; }\n\nform.blogText textarea {\n  color: white; }\n\n.submitBtn, .cancelBtn {\n  width: 10rem; }\n\n.modalBtn {\n  width: 10rem; }\n\n.textModal {\n  padding-bottom: 2rem; }\n\n#userList li li {\n  display: block;\n  float: left; }\n\n.userListLine {\n  height: 50px; }\n\n#userList li li.userListName {\n  width: 300px;\n  display: inline-block; }\n\n#userList li li.userListType {\n  width: 100px;\n  display: inline-block; }\n\n#userList li li.userListDate {\n  width: 200px;\n  display: inline-block; }\n\n#userList li button.expandBtn {\n  width: 200px;\n  display: inline-block; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/Awong/Documents/Web Projects/Code Wars/node_modules/css-loader/lib/css-base.js'");

/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/Awong/Documents/Web Projects/Code Wars/node_modules/css-loader/lib/url/escape.js'");

/***/ }),

/***/ "./node_modules/history/es/index.js":
/*!******************************************!*\
  !*** ./node_modules/history/es/index.js ***!
  \******************************************/
/*! exports provided: createBrowserHistory, createHashHistory, createMemoryHistory, createLocation, locationsAreEqual, parsePath, createPath */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/Awong/Documents/Web Projects/Code Wars/node_modules/history/es/index.js'");

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!*****************************************!*\
  !*** ./node_modules/react-dom/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/Awong/Documents/Web Projects/Code Wars/node_modules/react-dom/index.js'");

/***/ }),

/***/ "./node_modules/react-modal/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/react-modal/lib/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/Awong/Documents/Web Projects/Code Wars/node_modules/react-modal/lib/index.js'");

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-redux/es/index.js ***!
  \**********************************************/
/*! exports provided: Provider, createProvider, connectAdvanced, connect */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/Awong/Documents/Web Projects/Code Wars/node_modules/react-redux/es/index.js'");

/***/ }),

/***/ "./node_modules/react-router-dom/es/index.js":
/*!***************************************************!*\
  !*** ./node_modules/react-router-dom/es/index.js ***!
  \***************************************************/
/*! exports provided: BrowserRouter, HashRouter, Link, MemoryRouter, NavLink, Prompt, Redirect, Route, Router, StaticRouter, Switch, generatePath, matchPath, withRouter */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/Awong/Documents/Web Projects/Code Wars/node_modules/react-router-dom/es/index.js'");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/Awong/Documents/Web Projects/Code Wars/node_modules/react/index.js'");

/***/ }),

/***/ "./node_modules/redux-logger/dist/redux-logger.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-logger/dist/redux-logger.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/Awong/Documents/Web Projects/Code Wars/node_modules/redux-logger/dist/redux-logger.js'");

/***/ }),

/***/ "./node_modules/redux-promise-middleware/dist/es/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/redux-promise-middleware/dist/es/index.js ***!
  \****************************************************************/
/*! exports provided: PENDING, FULFILLED, REJECTED, default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/Awong/Documents/Web Projects/Code Wars/node_modules/redux-promise-middleware/dist/es/index.js'");

/***/ }),

/***/ "./node_modules/redux-thunk/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/redux-thunk/es/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/Awong/Documents/Web Projects/Code Wars/node_modules/redux-thunk/es/index.js'");

/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/*! exports provided: createStore, combineReducers, bindActionCreators, applyMiddleware, compose, __DO_NOT_USE__ActionTypes */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/Awong/Documents/Web Projects/Code Wars/node_modules/redux/es/redux.js'");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/Awong/Documents/Web Projects/Code Wars/node_modules/style-loader/lib/addStyles.js'");

/***/ }),

/***/ "./src/assets/images/BalboaPark.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/BalboaPark.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "db79fb91674f5b2b25582ca61c182bf6.jpg";

/***/ }),

/***/ "./src/assets/images/ChangeCalc.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/ChangeCalc.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "53917135cffa72417552b90519af6ede.jpg";

/***/ }),

/***/ "./src/assets/images/OceanBeachPier.jpg":
/*!**********************************************!*\
  !*** ./src/assets/images/OceanBeachPier.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ed73e6fc3f9d6191562a796358c8b6f6.jpg";

/***/ }),

/***/ "./src/assets/images/mainProfileImage.png":
/*!************************************************!*\
  !*** ./src/assets/images/mainProfileImage.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "397d57e6a5df13a08df753429fde84e6.png";

/***/ }),

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./style.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/css/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/js/App.jsx":
/*!************************!*\
  !*** ./src/js/App.jsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

__webpack_require__(/*! ../css/style.scss */ "./src/css/style.scss");

var _Router = __webpack_require__(/*! ./Router */ "./src/js/Router.jsx");

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Router2.default, null);
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;
;

/***/ }),

/***/ "./src/js/Router.jsx":
/*!***************************!*\
  !*** ./src/js/Router.jsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _HomePage = __webpack_require__(/*! ./components/HomePage/HomePage */ "./src/js/components/HomePage/HomePage.jsx");

var _HomePage2 = _interopRequireDefault(_HomePage);

var _PageBlog = __webpack_require__(/*! ./components/PageBlog */ "./src/js/components/PageBlog/index.js");

var _PageBlog2 = _interopRequireDefault(_PageBlog);

var _SignUp = __webpack_require__(/*! ./components/SignUp/SignUp */ "./src/js/components/SignUp/SignUp.jsx");

var _SignUp2 = _interopRequireDefault(_SignUp);

var _Login = __webpack_require__(/*! ./components/Login */ "./src/js/components/Login/index.js");

var _Login2 = _interopRequireDefault(_Login);

var _EnsureLoggedIn = __webpack_require__(/*! ./components/EnsureLoggedIn */ "./src/js/components/EnsureLoggedIn.jsx");

var _EnsureLoggedIn2 = _interopRequireDefault(_EnsureLoggedIn);

var _Profile = __webpack_require__(/*! ./components/Profile */ "./src/js/components/Profile/index.js");

var _Profile2 = _interopRequireDefault(_Profile);

var _ListEdit = __webpack_require__(/*! ./components/ListEdit */ "./src/js/components/ListEdit/index.js");

var _ListEdit2 = _interopRequireDefault(_ListEdit);

var _BlogSplashPage = __webpack_require__(/*! ./components/BlogSplashPage */ "./src/js/components/BlogSplashPage.jsx");

var _BlogSplashPage2 = _interopRequireDefault(_BlogSplashPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppRouter = function (_Component) {
  _inherits(AppRouter, _Component);

  function AppRouter() {
    _classCallCheck(this, AppRouter);

    return _possibleConstructorReturn(this, (AppRouter.__proto__ || Object.getPrototypeOf(AppRouter)).apply(this, arguments));
  }

  _createClass(AppRouter, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          _reactRouterDom.Switch,
          null,
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/", component: _HomePage2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: "/profile", component: _Profile2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: "/blogpost", component: _PageBlog2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: "/blogsplash", component: _BlogSplashPage2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: "/codewars/:id", component: _ListEdit2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: "/signup", component: _SignUp2.default }),
          _react2.default.createElement(_EnsureLoggedIn2.default, null),
          _react2.default.createElement(_reactRouterDom.Route, { path: "/login", component: _Login2.default })
        )
      );
    }
  }]);

  return AppRouter;
}(_react.Component);

exports.default = AppRouter;

/***/ }),

/***/ "./src/js/components/BlogSplashPage.jsx":
/*!**********************************************!*\
  !*** ./src/js/components/BlogSplashPage.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BlogSplashPage = function (_Component) {
  _inherits(BlogSplashPage, _Component);

  function BlogSplashPage() {
    _classCallCheck(this, BlogSplashPage);

    return _possibleConstructorReturn(this, (BlogSplashPage.__proto__ || Object.getPrototypeOf(BlogSplashPage)).apply(this, arguments));
  }

  _createClass(BlogSplashPage, [{
    key: "render",
    value: function render() {
      var blog = this.props.blog;
      var isLoggedIn = this.props.isLoggedIn;

      var kyu = blog.blog;
      return _react2.default.createElement(
        "div",
        { className: "container text-center" },
        isLoggedIn !== true && _react2.default.createElement(_reactRouterDom.Redirect, { from: "/blogsplash", to: "/login" }),
        _react2.default.createElement(
          "div",
          { className: "row" },
          _react2.default.createElement(
            "div",
            { className: "col-12" },
            _react2.default.createElement(
              "h2",
              null,
              "You have Posted Your Kyu"
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "row" },
          _react2.default.createElement(
            "div",
            { className: "col-12" },
            _react2.default.createElement(
              "h4",
              null,
              "Kyu"
            ),
            _react2.default.createElement(
              "h5",
              null,
              kyu.kyuType
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "row" },
          _react2.default.createElement(
            "div",
            { className: "col-12" },
            _react2.default.createElement(
              "h4",
              null,
              "Name"
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "row" },
          _react2.default.createElement(
            "div",
            { className: "col-12" },
            _react2.default.createElement(
              "h5",
              null,
              kyu.name
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "row" },
          _react2.default.createElement(
            "div",
            { className: "col-12" },
            _react2.default.createElement(
              "h4",
              null,
              " Instructions "
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "row" },
          _react2.default.createElement(
            "div",
            { className: "col-12" },
            _react2.default.createElement(
              "h5",
              null,
              " ",
              kyu.instructions,
              " "
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "row" },
          _react2.default.createElement(
            "div",
            { className: "col-12" },
            _react2.default.createElement(
              "h4",
              null,
              " Thinking "
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "row" },
          _react2.default.createElement(
            "div",
            { className: "col-12" },
            _react2.default.createElement(
              "h5",
              null,
              " ",
              kyu.thinking,
              " "
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "row" },
          _react2.default.createElement(
            "div",
            { className: "col-12" },
            _react2.default.createElement(
              "h4",
              null,
              " Answer "
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "row" },
          _react2.default.createElement(
            "div",
            { className: "col-12" },
            _react2.default.createElement(
              "h5",
              null,
              " ",
              kyu.answer,
              " "
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "row" },
          _react2.default.createElement(
            "div",
            { className: "col-12 pull-right" },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: "/profile" },
              _react2.default.createElement(
                "button",
                { className: "btn btn-primary" },
                "Next"
              )
            )
          )
        )
      );
    }
  }]);

  return BlogSplashPage;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    blog: state.blog,
    user: state.user,
    isLoggedIn: state.userLogin.isLoggedIn
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(BlogSplashPage);

/***/ }),

/***/ "./src/js/components/Date.js":
/*!***********************************!*\
  !*** ./src/js/components/Date.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDate = getDate;
function getDate() {
  var d = new Date();
  var month = new Array();
  month[0] = "Jan";month[1] = "Feb";month[2] = "Mar";month[3] = "April";month[4] = "May";month[5] = "June";month[6] = "Jul";month[7] = "Aug";month[8] = "Sep";month[9] = "Oct";month[10] = "Nov";month[11] = "Dec";
  var y = d.getFullYear();
  var m = month[d.getMonth()];
  var day = d.getDate();
  var h = d.getHours();
  var min = d.getMinutes();
  var sec = d.getSeconds();
  if (day < 10) day = "0" + day;
  if (h < 10) h = "0" + h;
  if (min < 10) min = "0" + min;
  var date = m + " " + day + " " + y + " " + h + ":" + min + ":" + sec;
  return date;
}

/***/ }),

/***/ "./src/js/components/EnsureLoggedIn.jsx":
/*!**********************************************!*\
  !*** ./src/js/components/EnsureLoggedIn.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Login = __webpack_require__(/*! ./Login */ "./src/js/components/Login/index.js");

var _Login2 = _interopRequireDefault(_Login);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EnsureLoggedIn = function (_Component) {
  _inherits(EnsureLoggedIn, _Component);

  function EnsureLoggedIn(props) {
    _classCallCheck(this, EnsureLoggedIn);

    var _this = _possibleConstructorReturn(this, (EnsureLoggedIn.__proto__ || Object.getPrototypeOf(EnsureLoggedIn)).call(this, props));

    _this.renderProfile = _this.renderProfile.bind(_this);
    _this.renderLogin = _this.renderLogin.bind(_this);
    return _this;
  }

  _createClass(EnsureLoggedIn, [{
    key: "renderProfile",
    value: function renderProfile() {
      return _react2.default.createElement(_reactRouterDom.Redirect, { from: "/login", to: "/profile" });
    }
  }, {
    key: "renderLogin",
    value: function renderLogin() {
      return _react2.default.createElement(_reactRouterDom.Route, { path: "/login", component: _Login2.default });
    }
  }, {
    key: "render",
    value: function render() {
      var isLoggedIn = this.props.isLoggedIn;


      if (isLoggedIn === true) {
        return this.renderProfile();
      } else {
        return this.renderLogin();
      }
      // return (<Login/>)
    }
  }]);

  return EnsureLoggedIn;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    isLoggedIn: state.user.userLogin.isLoggedIn
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(EnsureLoggedIn);

/***/ }),

/***/ "./src/js/components/HomePage/Bio.jsx":
/*!********************************************!*\
  !*** ./src/js/components/HomePage/Bio.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bio = function (_Component) {
  _inherits(Bio, _Component);

  function Bio() {
    _classCallCheck(this, Bio);

    return _possibleConstructorReturn(this, (Bio.__proto__ || Object.getPrototypeOf(Bio)).apply(this, arguments));
  }

  _createClass(Bio, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "bioPage", refs: "bioPage" },
        _react2.default.createElement(
          "div",
          { className: "row" },
          _react2.default.createElement(
            "div",
            { className: "col-12 bioHeader" },
            _react2.default.createElement(
              "div",
              { className: "title" },
              "Bio"
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "container bioContainer" },
          _react2.default.createElement(
            "div",
            { className: "row bioRow" },
            _react2.default.createElement(
              "div",
              { className: "col-6 bioText" },
              _react2.default.createElement(
                "p",
                null,
                "My name is ",
                _react2.default.createElement(
                  "b",
                  null,
                  "Alfonso Wong"
                ),
                ". I graduated from Cal State Dominguez Hills with a bachelors in Digital Media with an emphasis in Audio Recording. After working as an Audio Engineer in San Diego, I found that I could use my love for creating and developing media and applying it to Web Design. After receiving my certification from Origin Code Academy, I have focused my time and energy into building Web Applications with the React framework."
              ),
              _react2.default.createElement(
                "p",
                null,
                " This site is built with just that. I have added React and Redux to this site because it is much more then just a static web page. This site is also hosted on AWS, which gives me flexability with my application. I have basic CRUD operations on the backend that allow me to communicate via Mongoose to MongoDB. These CRUD operations allow me to login, post, edit and delete a Blog that I have created for my solutions of Code Wars that I have completed. I hope you enjoy my page."
              ),
              _react2.default.createElement(
                "p",
                null,
                "-Alfonso "
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "col-6 profilePicDiv" },
              _react2.default.createElement("div", { className: "profilePic" })
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "row" },
            _react2.default.createElement(
              "div",
              { className: "col-12 text-center resumeBtnDiv" },
              _react2.default.createElement(
                "a",
                { href: "/files/AlfonsoWongResume.pdf", download: true },
                _react2.default.createElement(
                  "button",
                  { className: "btn btn-default resumeBtn" },
                  "Download Resume"
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Bio;
}(_react.Component);

exports.default = Bio;

/***/ }),

/***/ "./src/js/components/HomePage/HomePage.jsx":
/*!*************************************************!*\
  !*** ./src/js/components/HomePage/HomePage.jsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Splash = __webpack_require__(/*! ./Splash */ "./src/js/components/HomePage/Splash.jsx");

var _Splash2 = _interopRequireDefault(_Splash);

var _Bio = __webpack_require__(/*! ./Bio */ "./src/js/components/HomePage/Bio.jsx");

var _Bio2 = _interopRequireDefault(_Bio);

var _Projects = __webpack_require__(/*! ./Projects */ "./src/js/components/HomePage/Projects.jsx");

var _Projects2 = _interopRequireDefault(_Projects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Component) {
  _inherits(_class, _Component);

  function _class(props) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

    _this.state = {
      transform: ""
    };
    _this.handleScroll = _this.handleScroll.bind(_this);
    return _this;
  }

  _createClass(_class, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: "handleScroll",
    value: function handleScroll(event) {
      var scrollTop = event.srcElement.body.scrollTop,
          itemTranslate = Math.min(0, scrollTop / 3 - 60);

      this.setState({
        transform: itemTranslate
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "fullSite" },
        _react2.default.createElement(_Splash2.default, null),
        _react2.default.createElement(_Bio2.default, null),
        _react2.default.createElement(_Projects2.default, null)
      );
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;

/***/ }),

/***/ "./src/js/components/HomePage/Projects.jsx":
/*!*************************************************!*\
  !*** ./src/js/components/HomePage/Projects.jsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ChangeCalc = __webpack_require__(/*! ./projects/ChangeCalc */ "./src/js/components/HomePage/projects/ChangeCalc.jsx");

var _ChangeCalc2 = _interopRequireDefault(_ChangeCalc);

var _reactModal = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");

var _reactModal2 = _interopRequireDefault(_reactModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Projects = function (_Component) {
  _inherits(Projects, _Component);

  function Projects(props) {
    _classCallCheck(this, Projects);

    return _possibleConstructorReturn(this, (Projects.__proto__ || Object.getPrototypeOf(Projects)).call(this, props));
  }

  _createClass(Projects, [{
    key: "listenScrollEvent",
    value: function listenScrollEvent() {
      console.log('Scroll event detected!');
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "projectsPage" },
        _react2.default.createElement("div", { className: "row" }),
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "div",
            { className: "col-12 projectsHeader" },
            _react2.default.createElement(
              "div",
              { className: "title" },
              "Projects"
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "row", id: "calcContainer" },
            _react2.default.createElement(
              "div",
              { className: "infoDiv", id: "infoDiv" },
              _react2.default.createElement(
                "p",
                null,
                "This is a simple React form that allos you to enter the total amount of an item and also enter the amount the person used to pay for that amount. This is not a form that is meant to be used for online shopping due to the fact that exact totals are usually charged, this is though meant to be used as a cash register form where amounts such as a whole Dollars can be accepted to pay for the item."
              )
            ),
            _react2.default.createElement("div", { id: "changeCalcImage", className: "projectImages", onFocus: this.listenScrollEvent.bind(this) })
          )
        )
      );
    }
  }]);

  return Projects;
}(_react.Component);

exports.default = Projects;

/***/ }),

/***/ "./src/js/components/HomePage/Splash.jsx":
/*!***********************************************!*\
  !*** ./src/js/components/HomePage/Splash.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import backgroundVid from "./../../../assets/video/backgroundVideo.mp4"

var Splash = function Splash() {
  return _react2.default.createElement(
    "div",
    { className: "vidContainer" },
    _react2.default.createElement(
      "video",
      { id: "backgroundVid", loop: true, autoPlay: true, muted: true },
      _react2.default.createElement("source", { src: backgroundVid, type: "video/mp4" })
    ),
    _react2.default.createElement(
      "div",
      { className: "overlay" },
      _react2.default.createElement(
        "ul",
        { className: "overlayText overlayTextName" },
        _react2.default.createElement(
          "li",
          null,
          "A"
        ),
        _react2.default.createElement(
          "li",
          null,
          "L"
        ),
        _react2.default.createElement(
          "li",
          null,
          "F"
        ),
        _react2.default.createElement(
          "li",
          null,
          "O"
        ),
        _react2.default.createElement(
          "li",
          null,
          "N"
        ),
        _react2.default.createElement(
          "li",
          null,
          "S"
        ),
        _react2.default.createElement(
          "li",
          null,
          "O "
        ),
        _react2.default.createElement(
          "li",
          null,
          "W"
        ),
        _react2.default.createElement(
          "li",
          null,
          "O"
        ),
        _react2.default.createElement(
          "li",
          null,
          "N"
        ),
        _react2.default.createElement(
          "li",
          null,
          "G"
        )
      ),
      _react2.default.createElement(
        "ul",
        { className: "overlayText overlayTextTitle" },
        _react2.default.createElement(
          "li",
          null,
          "F"
        ),
        _react2.default.createElement(
          "li",
          null,
          "R"
        ),
        _react2.default.createElement(
          "li",
          null,
          "O"
        ),
        _react2.default.createElement(
          "li",
          null,
          "N"
        ),
        _react2.default.createElement(
          "li",
          null,
          "T"
        ),
        _react2.default.createElement(
          "li",
          null,
          "E"
        ),
        _react2.default.createElement(
          "li",
          null,
          "N"
        ),
        _react2.default.createElement(
          "li",
          null,
          "D"
        ),
        _react2.default.createElement(
          "li",
          null,
          "D"
        ),
        _react2.default.createElement(
          "li",
          null,
          "E"
        ),
        _react2.default.createElement(
          "li",
          null,
          "V"
        ),
        _react2.default.createElement(
          "li",
          null,
          "E"
        ),
        _react2.default.createElement(
          "li",
          null,
          "L"
        ),
        _react2.default.createElement(
          "li",
          null,
          "O"
        ),
        _react2.default.createElement(
          "li",
          null,
          "P"
        ),
        _react2.default.createElement(
          "li",
          null,
          "E"
        ),
        _react2.default.createElement(
          "li",
          null,
          "R"
        )
      )
    )
  );
};

exports.default = Splash;

/***/ }),

/***/ "./src/js/components/HomePage/projects/ChangeCalc.jsx":
/*!************************************************************!*\
  !*** ./src/js/components/HomePage/projects/ChangeCalc.jsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChangeCalc = function (_Component) {
  _inherits(ChangeCalc, _Component);

  function ChangeCalc() {
    _classCallCheck(this, ChangeCalc);

    var _this = _possibleConstructorReturn(this, (ChangeCalc.__proto__ || Object.getPrototypeOf(ChangeCalc)).call(this));

    _this.state = {
      amountDue: "",
      amountRec: "",
      twenties: "0",
      tens: "0",
      fives: "0",
      ones: "0",
      quarters: "0",
      dimes: "0",
      nickels: "0",
      pennies: "0",
      output: "0"
    };
    _this.handleDue = _this.handleDue.bind(_this);
    _this.handleRec = _this.handleRec.bind(_this);
    _this.calculate = _this.calculate.bind(_this);
    return _this;
  }

  _createClass(ChangeCalc, [{
    key: "handleDue",
    value: function handleDue(event) {
      var amountDue = event.target.validity.valid ? event.target.value : this.state.amountDue;
      this.setState({ amountDue: amountDue });
    }
  }, {
    key: "handleRec",
    value: function handleRec(event) {
      var amountRec = event.target.validity.valid ? event.target.value : this.state.amountRec;

      this.setState({ amountRec: amountRec });
    }
  }, {
    key: "calculate",
    value: function calculate(e) {
      e.preventDefault();
      var amountDue = this.state.amountDue;
      amountDue = parseFloat(amountDue);
      amountDue = amountDue * 100;
      var amountRec = this.state.amountRec;
      amountRec = parseFloat(amountRec);
      amountRec = amountRec * 100;
      var amountLeft = amountRec - amountDue;
      var amountRet2 = amountRec - amountDue;
      amountRet2 = amountRet2 / 100;
      amountRet2 = amountRet2.toFixed(2);

      var twenties = void 0,
          tens = void 0,
          fives = void 0,
          ones = void 0,
          quarters = void 0,
          dimes = void 0,
          nickels = void 0,
          pennies = void 0;

      if (amountLeft > 1999) {
        amountLeft = amountLeft % 2000;
        twenties = amountLeft / 2000;
        twenties = Math.floor(twenties);
        twenties = twenties.toFixed();
      } else {
        twenties = 0;
      }
      if (amountLeft > 999) {
        tens = amountLeft / 1000;
        tens = Math.floor(tens);
        tens = tens.toFixed();
        amountLeft = amountLeft % 1000;
      } else {
        tens = 0;
      }
      if (amountLeft > 499) {
        fives = amountLeft / 500;
        fives = Math.floor(fives);
        fives = fives.toFixed();
        amountLeft = amountLeft % 500;
      } else {
        fives = 0;
      }
      if (amountLeft > 99) {
        ones = amountLeft / 100;
        ones = Math.floor(ones);
        ones = ones.toFixed();
        amountLeft = amountLeft % 100;
      } else {
        ones = 0;
      }
      if (amountLeft > 24) {
        quarters = amountLeft / 25;
        quarters = Math.floor(quarters);
        quarters = quarters.toFixed();
        amountLeft = amountLeft % 25;
      } else {
        quarters = 0;
      }
      if (amountLeft > 9) {
        dimes = amountLeft / 10;
        dimes = Math.floor(dimes);
        dimes = dimes.toFixed();
        amountLeft = amountLeft % 10;
      } else {
        dimes = 0;
      }
      if (amountLeft > 4) {
        nickels = amountLeft / 5;
        nickels = Math.floor(nickels);
        nickels = nickels.toFixed();
        amountLeft = amountLeft % 5;
      } else {
        nickels = 0;
      }
      if (amountLeft > .99) {
        pennies = amountLeft;
        pennies = Math.floor(pennies);
      } else {
        pennies = 0;
      }
      this.setState({
        twenties: twenties,
        tens: tens,
        fives: fives,
        ones: ones,
        quarters: quarters,
        dimes: dimes,
        nickels: nickels,
        pennies: pennies,
        output: amountRet2
      });
      console.log(this.state.twenties);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "container" },
        _react2.default.createElement(
          "header",
          null,
          _react2.default.createElement(
            "h1",
            null,
            "Change Calculator"
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "row" },
          _react2.default.createElement(
            "div",
            { className: "col-lg-4" },
            _react2.default.createElement(
              "div",
              { className: "panel panel-default" },
              _react2.default.createElement(
                "div",
                { className: "panel-heading" },
                "Enter Information"
              ),
              _react2.default.createElement(
                "div",
                { className: "panel-body" },
                _react2.default.createElement(
                  "label",
                  { className: "changeInputLabel",
                    htmlFor: "amountDue" },
                  "How much is due?"
                ),
                _react2.default.createElement("input", { name: "amountDue",
                  className: "form-control",
                  type: "text",
                  pattern: "^[0-9]*(\\.[0-9]*)?$",
                  value: this.state.amountDue,
                  onChange: this.handleDue,
                  id: "amountDue"
                }),
                _react2.default.createElement(
                  "label",
                  { className: "changeInputLabel",
                    htmlFor: "received" },
                  "How much was received?"
                ),
                _react2.default.createElement("input", { name: "amountReceived",
                  className: "form-control",
                  type: "text",
                  pattern: "^[0-9]*(\\.[0-9]*)?$",
                  value: this.state.amountRec,
                  onChange: this.handleRec,
                  id: "received" })
              ),
              _react2.default.createElement(
                "div",
                { className: "panel-footer" },
                _react2.default.createElement(
                  "div",
                  { className: "form-group" },
                  _react2.default.createElement(
                    "button",
                    { className: "btn btn-primary form-control",
                      type: "submit",
                      onClick: this.calculate },
                    "Calculate"
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "col-lg-8" },
            _react2.default.createElement(
              "div",
              { className: "panel" },
              _react2.default.createElement(
                "div",
                { className: "panel-body" },
                _react2.default.createElement(
                  "div",
                  { className: "row" },
                  _react2.default.createElement(
                    "div",
                    { className: "alert alert-success changeOutcome" },
                    "The total change due is $",
                    this.state.output
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "row" },
                  _react2.default.createElement(
                    "div",
                    { className: "form-group well col-md-2 ChangeOutputLabels alert alert-success" },
                    _react2.default.createElement(
                      "h1",
                      { className: "changeLabels" },
                      "Twenties"
                    ),
                    _react2.default.createElement(
                      "p",
                      { className: "lead changeOutputs" },
                      this.state.twenties
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "form-group well col-md-2 ChangeOutputLabels alert alert-success" },
                    _react2.default.createElement(
                      "h1",
                      { className: "changeLabels" },
                      "Tens"
                    ),
                    _react2.default.createElement(
                      "p",
                      { className: "lead changeOutputs" },
                      this.state.tens
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "form-group well col-md-2 ChangeOutputLabels alert alert-success" },
                    _react2.default.createElement(
                      "h1",
                      { className: "changeLabels" },
                      "Fives"
                    ),
                    _react2.default.createElement(
                      "p",
                      { className: "lead changeOutputs" },
                      this.state.fives
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "form-group well col-md-2 ChangeOutputLabels alert alert-success" },
                    _react2.default.createElement(
                      "h1",
                      { className: "changeLabels" },
                      "Ones"
                    ),
                    _react2.default.createElement(
                      "p",
                      { className: "lead changeOutputs" },
                      this.state.ones
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "row" },
                  _react2.default.createElement(
                    "div",
                    { className: "form-group well col-md-2 ChangeOutputLabels alert alert-success" },
                    _react2.default.createElement(
                      "h1",
                      { className: "changeLabels" },
                      "Quarters"
                    ),
                    _react2.default.createElement(
                      "p",
                      { className: "lead changeOutputs" },
                      this.state.quarters
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "form-group well col-md-2 ChangeOutputLabels alert alert-success" },
                    _react2.default.createElement(
                      "h1",
                      { className: "changeLabels" },
                      "Dimes"
                    ),
                    _react2.default.createElement(
                      "p",
                      { className: "lead changeOutputs" },
                      this.state.dimes
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "form-group well col-md-2 ChangeOutputLabels alert alert-success" },
                    _react2.default.createElement(
                      "h1",
                      { className: "changeLabels" },
                      "Nickels"
                    ),
                    _react2.default.createElement(
                      "p",
                      { className: "lead changeOutputs" },
                      this.state.nickels
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "form-group well col-md-2 ChangeOutputLabels alert alert-success" },
                    _react2.default.createElement(
                      "h1",
                      { className: "changeLabels" },
                      "Pennies"
                    ),
                    _react2.default.createElement(
                      "p",
                      { className: "lead changeOutputs" },
                      this.state.pennies
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return ChangeCalc;
}(_react.Component);

exports.default = ChangeCalc;

/***/ }),

/***/ "./src/js/components/List.jsx":
/*!************************************!*\
  !*** ./src/js/components/List.jsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_Component) {
  _inherits(List, _Component);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
  }

  _createClass(List, [{
    key: "closedList",
    value: function closedList(kyu, i) {
      var _this2 = this;

      return _react2.default.createElement(
        "li",
        { className: "list-group-item list-group-item-action userListLine", key: i },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: "/codewars/" + kyu._id },
          _react2.default.createElement(
            "div",
            { className: "col-12" },
            _react2.default.createElement(
              "span",
              { className: "userListName"
              },
              kyu.name
            ),
            _react2.default.createElement(
              "span",
              { className: "userListType"
              },
              kyu.kyuType
            ),
            _react2.default.createElement(
              "span",
              { className: "userListDate"
              },
              kyu.created
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "col-4" },
          _react2.default.createElement(
            "button",
            { className: "btn btn-default expandBtn", onClick: function onClick() {
                return _this2.props.expand(i);
              } },
            "Expand"
          )
        )
      );
    }
  }, {
    key: "expandedList",
    value: function expandedList(kyu, i) {
      var _this3 = this;

      return _react2.default.createElement(
        "div",
        { key: i },
        _react2.default.createElement(
          "button",
          { className: "btn btn-default", onClick: function onClick() {
              return _this3.props.close(i);
            } },
          "Hello"
        )
      );
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var challenges = this.props.challenges;

      return _react2.default.createElement(
        "ul",
        { className: "list-group col-8", id: "userList" },
        challenges.map(function (kyu, i) {
          return kyu.expand ? _this4.expandedList(kyu, i) : _this4.closedList(kyu, i);
        })
      );
    }
  }]);

  return List;
}(_react.Component);

exports.default = List;

/***/ }),

/***/ "./src/js/components/ListEdit/ListEdit.jsx":
/*!*************************************************!*\
  !*** ./src/js/components/ListEdit/ListEdit.jsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListEdit = function (_Component) {
  _inherits(ListEdit, _Component);

  function ListEdit() {
    _classCallCheck(this, ListEdit);

    return _possibleConstructorReturn(this, (ListEdit.__proto__ || Object.getPrototypeOf(ListEdit)).apply(this, arguments));
  }

  _createClass(ListEdit, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", null);
    }
  }]);

  return ListEdit;
}(_react.Component);

exports.default = ListEdit;

/***/ }),

/***/ "./src/js/components/ListEdit/ListEditReducer.js":
/*!*******************************************************!*\
  !*** ./src/js/components/ListEdit/ListEditReducer.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ListEditReducer;
var defaultState = {};

function ListEditReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];
  var payload = action.payload,
      type = action.type;

  switch (type) {
    case "EDIT_LIST_PENDING":
      {
        return {};
      }
    case "EDIT_LIST_FULFILLED":
      {
        return {};
      }
    case "EDIT_LIST_REJECTED":
      {
        return {};
      }
    default:
      return state;
  }
}

/***/ }),

/***/ "./src/js/components/ListEdit/index.js":
/*!*********************************************!*\
  !*** ./src/js/components/ListEdit/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _ListEdit = __webpack_require__(/*! ./ListEdit */ "./src/js/components/ListEdit/ListEdit.jsx");

var _ListEdit2 = _interopRequireDefault(_ListEdit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user,
    isLoggedIn: state.userLogin.isLoggedIn
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(_ListEdit2.default);

/***/ }),

/***/ "./src/js/components/Login/Login.jsx":
/*!*******************************************!*\
  !*** ./src/js/components/Login/Login.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _LoginActions = __webpack_require__(/*! ./LoginActions */ "./src/js/components/Login/LoginActions.js");

var _Date = __webpack_require__(/*! ../Date */ "./src/js/components/Date.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_Component) {
  _inherits(Login, _Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.state = {
      username: "",
      password: ""
    };
    _this.handleInput = _this.handleInput.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(Login, [{
    key: "handleInput",
    value: function handleInput(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var username = this.state.username;
      var password = this.state.password;
      var dispatch = this.props.dispatch;

      var date = (0, _Date.getDate)();
      dispatch((0, _LoginActions.authenticateUser)(username, password, date));
    }
  }, {
    key: "submitButton",
    value: function submitButton() {
      var pw = this.state.password;
      var config = this.state.passwordConf;
      var un = this.state.username;
      if (pw.length === 0 || un.length === 0) {
        return _react2.default.createElement(
          "button",
          {
            type: "submit",
            className: "btn btn-danger form-control loginBtn",
            disabled: true },
          "Submit"
        );
      } else {
        return _react2.default.createElement(
          "button",
          {
            type: "submit",
            className: "btn btn-success form-control loginBtn" },
          "Submit"
        );
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "container" },
        _react2.default.createElement(
          "div",
          { className: "page" },
          _react2.default.createElement(
            "form",
            { onSubmit: this.handleSubmit, id: "loginForm" },
            _react2.default.createElement(
              "div",
              { className: "row" },
              _react2.default.createElement(
                "div",
                { className: "col-12 text-center", id: "loginName" },
                _react2.default.createElement(
                  "span",
                  null,
                  "Log-In"
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "row" },
              _react2.default.createElement(
                "div",
                { className: "col-8 inputs" },
                _react2.default.createElement(
                  "div",
                  { className: "form-group" },
                  _react2.default.createElement("input", { type: "text",
                    onChange: this.handleInput,
                    name: "username",
                    placeholder: "Username",
                    value: this.state.username,
                    id: "username",
                    className: "form-control" })
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "row" },
              _react2.default.createElement(
                "div",
                { className: "col-8 inputs " },
                _react2.default.createElement(
                  "div",
                  { className: "form-group has-feedback" },
                  _react2.default.createElement("input", { type: "password",
                    onChange: this.handleInput,
                    name: "password",
                    id: "password",
                    placeholder: "Password",
                    value: this.state.password,
                    className: "form-control" })
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "row text-center" },
              _react2.default.createElement(
                "div",
                { className: "col-8 inputs" },
                _react2.default.createElement(
                  "div",
                  { className: "form-group" },
                  this.submitButton()
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Login;
}(_react.Component);

exports.default = Login;

/***/ }),

/***/ "./src/js/components/Login/LoginActions.js":
/*!*************************************************!*\
  !*** ./src/js/components/Login/LoginActions.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUser = exports.authenticateUser = undefined;

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _history = __webpack_require__(/*! ./../../history */ "./src/js/history.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var authenticateUser = exports.authenticateUser = function authenticateUser(username, password, date) {
  var getAuth = _axios2.default.post("/api/users/login", { username: username, password: password, date: date });
  return function (dispatch) {
    dispatch({
      type: "AUTH_USER",
      payload: getAuth.then(function (res) {
        return res;
      })
    });
  };
};

var createUser = exports.createUser = function createUser(username, password, date) {
  var createLogin = _axios2.default.post("/api/users/signup", {
    username: username,
    password: password,
    date: date
  });
  return function (dispatch) {
    dispatch({
      type: "CREATE_USER",
      payload: createLogin.then(function (res) {
        return res.data;
      })
    });
  };
};

/***/ }),

/***/ "./src/js/components/Login/LoginReducer.js":
/*!*************************************************!*\
  !*** ./src/js/components/Login/LoginReducer.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = LoginReducer;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var defaultState = {
  response: "",
  username: "",
  id: "",
  isLoggedIn: false
};

function LoginReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];
  var type = action.type,
      payload = action.payload;


  switch (type) {
    case "AUTH_USER_PENDING":
      {
        return {};
      }
    case "AUTH_USER_FULFILLED":
      {
        return _extends({}, state, { username: payload.data.username, id: payload.data._id, isLoggedIn: true });
      }
    case "AUTH_USER_REJECTED":
      {

        return _extends({}, state, { response: payload });
      }
    case "CREATE_USER_PENDING":
      {
        return {};
      }
    case "CREATE_USER_FULFILLED":
      {
        return Object.assign.apply(Object, [{}].concat(_toConsumableArray(state), [{ username: payload.data.username, id: payload.data._id, isLoggedIn: true }]));
      }
    case "CREATE_USER_REJECTED":
      {
        return { response: payload };
      }
    default:
      {
        return state;
      }
  }
}

/***/ }),

/***/ "./src/js/components/Login/index.js":
/*!******************************************!*\
  !*** ./src/js/components/Login/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Login = __webpack_require__(/*! ./Login */ "./src/js/components/Login/Login.jsx");

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    userLogin: state.user.userLogin
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(_Login2.default);

/***/ }),

/***/ "./src/js/components/PageBlog/PageBlog.jsx":
/*!*************************************************!*\
  !*** ./src/js/components/PageBlog/PageBlog.jsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactModal = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");

var _reactModal2 = _interopRequireDefault(_reactModal);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _PageBlogActions = __webpack_require__(/*! ./PageBlogActions */ "./src/js/components/PageBlog/PageBlogActions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var customStyles = {
  content: {
    backgroundColor: "lightGrey",
    fontWeight: "bold",
    fontSize: "20px",
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

var PageBlog = function (_Component) {
  _inherits(PageBlog, _Component);

  function PageBlog(props) {
    _classCallCheck(this, PageBlog);

    var _this = _possibleConstructorReturn(this, (PageBlog.__proto__ || Object.getPrototypeOf(PageBlog)).call(this, props));

    _this.state = {
      type: "",
      name: "",
      instructions: "",
      process: "",
      answer: "",
      response: [],
      modalIsOpen: false
    };
    _this.handleInput = _this.handleInput.bind(_this);
    _this.submitForm = _this.submitForm.bind(_this);
    _this.openModal = _this.openModal.bind(_this);
    _this.closeModal = _this.closeModal.bind(_this);
    _this.afterModalIsOpen = _this.afterModalIsOpen.bind(_this);
    return _this;
  }

  _createClass(PageBlog, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {}
  }, {
    key: "handleInput",
    value: function handleInput(e) {
      e.preventDefault();
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: "openModal",
    value: function openModal() {
      this.setState({ modalIsOpen: true });
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this.setState({ modalIsOpen: false });
    }
  }, {
    key: "afterModalIsOpen",
    value: function afterModalIsOpen() {
      this.subtitle.style.color = '#f00';
    }
  }, {
    key: "submitForm",
    value: function submitForm(e) {
      e.preventDefault();
      var _props = this.props,
          dispatch = _props.dispatch,
          user = _props.user;

      console.log(user);
      var type = this.state.type;
      var name = this.state.name;
      var instructions = this.state.instructions;
      var thinking = this.state.process;
      var answer = this.state.answer;
      var username = user.username;
      dispatch((0, _PageBlogActions.postBlog)(type, name, instructions, thinking, answer, username));
    }
  }, {
    key: "render",
    value: function render() {
      var isLoggedIn = this.props.isLoggedIn;
      var blog = this.props.blog;

      return _react2.default.createElement(
        "div",
        { className: "container bioBody" },
        isLoggedIn !== true && _react2.default.createElement(_reactRouterDom.Redirect, { from: "/blogpage", to: "/login" }),
        blog.responseCode === 201 && _react2.default.createElement(_reactRouterDom.Redirect, { from: "/blogpage", to: "/blogsplash" }),
        _react2.default.createElement(
          "div",
          { className: "row" },
          _react2.default.createElement(
            "div",
            { className: "col-12 text-center", id: "blogHeader" },
            _react2.default.createElement(
              "h2",
              null,
              "Post Your Kyu Here!"
            ),
            _react2.default.createElement("hr", null)
          )
        ),
        _react2.default.createElement(
          "form",
          { onSubmit: this.submitForm },
          _react2.default.createElement(
            "div",
            { className: "row" },
            _react2.default.createElement(
              "div",
              { className: "form-group col-md-6" },
              _react2.default.createElement(
                "label",
                { htmlFor: "kyuSelect" },
                "Kyu"
              ),
              _react2.default.createElement(
                "select",
                { className: "form-control", id: "kyuSelect", name: "type", onChange: this.handleInput },
                _react2.default.createElement(
                  "option",
                  { hidden: true },
                  "Select Kyu"
                ),
                _react2.default.createElement(
                  "option",
                  null,
                  "8 Kyu"
                ),
                _react2.default.createElement(
                  "option",
                  null,
                  "7 Kyu"
                ),
                _react2.default.createElement(
                  "option",
                  null,
                  "6 Kyu"
                ),
                _react2.default.createElement(
                  "option",
                  null,
                  "5 Kyu"
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "form-group col-md-6" },
              _react2.default.createElement(
                "label",
                { className: "label", htmlFor: "kyuName" },
                "Kyu Name"
              ),
              _react2.default.createElement("input", { className: "form-control", placeholder: "Enter Kyu Name", id: "kyuName", name: "name", onChange: this.handleInput })
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "row" },
            _react2.default.createElement(
              "div",
              { className: "form-group col-12" },
              _react2.default.createElement(
                "label",
                { className: "label", htmlFor: "instructions" },
                "Enter Instructions of Kyu"
              ),
              _react2.default.createElement("textarea", { className: "form-control blogText", name: "instructions", id: "instructions", onChange: this.handleInput, placeholder: "type instructions here" })
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "row" },
            _react2.default.createElement(
              "div",
              { className: "form-group col-12" },
              _react2.default.createElement(
                "label",
                { className: "label", htmlFor: "process" },
                "Enter your thought process"
              ),
              _react2.default.createElement("textarea", { onChange: this.handleInput, id: "process", name: "process", placeholder: "enter your process here", className: "form-control blogText" })
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "row" },
            _react2.default.createElement(
              "div",
              { className: "form-group col-12" },
              _react2.default.createElement(
                "label",
                { className: "label", htmlFor: "answer" },
                "Enter your answer"
              ),
              _react2.default.createElement("textarea", { onChange: this.handleInput, id: "answer", name: "answer", placeholder: "enter your answer here", className: "form-control blogText" })
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "row" },
            _react2.default.createElement(
              "div",
              { className: "form-group col-12" },
              _react2.default.createElement(
                "div",
                { className: "col-8 float-right" },
                _react2.default.createElement(
                  "button",
                  { type: "button", className: "btn btn-warning  cancelBtn", onClick: this.openModal },
                  "Cancel"
                ),
                _react2.default.createElement(
                  "button",
                  { type: "submit", className: "btn btn-success  submitBtn" },
                  "Submit"
                )
              )
            ),
            _react2.default.createElement(
              _reactModal2.default,
              {
                isOpen: this.state.modalIsOpen,
                onAfterOpen: this.afterOpenModal,
                onRequestClose: this.closeModal,
                style: customStyles,
                ariaHideApp: false,
                contentLabel: "Example Modal"
              },
              _react2.default.createElement(
                "div",
                { className: "blogModal" },
                _react2.default.createElement(
                  "div",
                  { className: "row textModal" },
                  _react2.default.createElement(
                    "div",
                    { className: "col-12 text-center" },
                    _react2.default.createElement(
                      "span",
                      null,
                      " Are You Sure You Want To Cancel?"
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "col-12 form-group" },
                  _react2.default.createElement(
                    "button",
                    { className: "btn btn-danger modalBtn", onClick: this.closeModal },
                    "No"
                  ),
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: "/profile" },
                    _react2.default.createElement(
                      "button",
                      { className: "btn btn-success modalBtn", onClick: this.closeModal },
                      "Yes"
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "row" },
            _react2.default.createElement(
              "div",
              { className: "has-success col-12 text-center" },
              _react2.default.createElement("div", { className: "form-control" })
            )
          )
        )
      );
    }
  }]);

  return PageBlog;
}(_react.Component);

// const mapStateToProps = (state) => {
//   return {
//     user: state.user,
//     isLoggedIn: state.user.isLoggedIn,
//     blog: state.blog
//   }
// }

// export default connect(mapStateToProps)(BlogPage);


exports.default = PageBlog;

/***/ }),

/***/ "./src/js/components/PageBlog/PageBlogActions.js":
/*!*******************************************************!*\
  !*** ./src/js/components/PageBlog/PageBlogActions.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postBlog = undefined;

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var postBlog = exports.postBlog = function postBlog(type, name, instructions, thinking, answer, username) {

  var postChallenge = _axios2.default.post("/api/kyus", { type: type, name: name, instructions: instructions, thinking: thinking, answer: answer, username: username });
  return function (dispatch, state) {
    dispatch({
      type: "POST_BLOG",
      payload: postChallenge.then(function (res) {
        console.log(res);
        return res;
      })
    });
  };
};

/***/ }),

/***/ "./src/js/components/PageBlog/PageBlogReducer.js":
/*!*******************************************************!*\
  !*** ./src/js/components/PageBlog/PageBlogReducer.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PageBlogReducer;
var defaultState = {
  blog: [],
  rejectResponse: "",
  responseCode: ""
};

function PageBlogReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];
  var type = action.type,
      payload = action.payload;


  switch (type) {
    case "POST_BLOG_PENDING":
      {
        return { loading: true };
      }
    case "POST_BLOG_FULFILLED":
      {
        return Object.assign({}, state, { blog: payload.data, loading: false, responseCode: payload.status });
      }
    case "POST_BLOG_REJECTED":
      {
        return Object.assign({}, { loading: false, rejectedResponse: payload });
      }
    default:
      {
        return state;
      }
  }
}

/***/ }),

/***/ "./src/js/components/PageBlog/index.js":
/*!*********************************************!*\
  !*** ./src/js/components/PageBlog/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _PageBlog = __webpack_require__(/*! ./PageBlog */ "./src/js/components/PageBlog/PageBlog.jsx");

var _PageBlog2 = _interopRequireDefault(_PageBlog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStoreToProps(state) {
  return {
    isLoggedIn: state.userLogin.isLoggedIn,
    user: state.user,
    blog: state.blog
  };
}

exports.default = (0, _reactRedux.connect)(mapStoreToProps)(_PageBlog2.default);

/***/ }),

/***/ "./src/js/components/Profile/Profile.jsx":
/*!***********************************************!*\
  !*** ./src/js/components/Profile/Profile.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _ProfileActions = __webpack_require__(/*! ./ProfileActions */ "./src/js/components/Profile/ProfileActions.js");

var _List = __webpack_require__(/*! ../List */ "./src/js/components/List.jsx");

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Profile = function (_Component) {
  _inherits(Profile, _Component);

  function Profile(props) {
    _classCallCheck(this, Profile);

    var _this = _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, props));

    _this.state = {
      challenges: []
    };
    _this.expandList = _this.expandList.bind(_this);
    _this.closeList = _this.closeList.bind(_this);
    return _this;
  }

  _createClass(Profile, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props = this.props,
          userLogin = _props.userLogin,
          dispatch = _props.dispatch;

      dispatch((0, _ProfileActions.getUserInfo)(userLogin.id));
    }
  }, {
    key: "expandList",
    value: function expandList(i) {
      var newList = this.state.challenges;
      newList[i].expand = true;

      this.setState({ challenges: newList });
    }
  }, {
    key: "closeList",
    value: function closeList(i) {}
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          isLoggedIn = _props2.isLoggedIn,
          user = _props2.user;

      return _react2.default.createElement(
        "div",
        { className: "container" },
        isLoggedIn !== true && _react2.default.createElement(_reactRouterDom.Redirect, { from: "/profile", to: "/login" }),
        _react2.default.createElement(
          "div",
          { className: "row" },
          _react2.default.createElement(
            "h2",
            null,
            "Welcome "
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "row" },
          _react2.default.createElement(
            "div",
            { className: "col-8" },
            _react2.default.createElement(
              "h3",
              null,
              "Past Posts"
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "col-4" },
            _react2.default.createElement(
              "h3",
              null,
              " Tool Bar "
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: "/blogpost" },
              _react2.default.createElement(
                "button",
                { className: "btn" },
                "Post A new Blog"
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "row" },
          user.profile.blogs.length > 0 && _react2.default.createElement(_List2.default, {
            challenges: user.profile.blogs,
            expand: this.expandList,
            close: this.closeList
          })
        )
      );
    }
  }]);

  return Profile;
}(_react.Component);

exports.default = Profile;

/***/ }),

/***/ "./src/js/components/Profile/ProfileActions.js":
/*!*****************************************************!*\
  !*** ./src/js/components/Profile/ProfileActions.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserInfo = undefined;

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getUserInfo = exports.getUserInfo = function getUserInfo(id) {
  var blogs = [];
  var getAllBlogs = _axios2.default.get("/api/kyus/" + id);
  return function (dispatch) {
    dispatch({
      type: "GET_ALL_BLOGS",
      payload: getAllBlogs.then(function (res) {
        if (res.status === 201) {
          return res.data;
        }
        return res;
      })
    });
  };
};

/***/ }),

/***/ "./src/js/components/Profile/ProfileReducer.js":
/*!*****************************************************!*\
  !*** ./src/js/components/Profile/ProfileReducer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = ProfileReducer;
var defaultState = {
  blogs: [],
  loading: true,
  response: ""
};

function ProfileReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];
  var payload = action.payload,
      type = action.type;

  switch (type) {
    case "GET_ALL_BLOGS_PENDING":
      {
        return _extends({}, state, { loading: true });
      }
    case "GET_ALL_BLOGS_FULFILLED":
      {
        return _extends({}, state, { blogs: payload, loading: false });
      }
    case "GET_ALL_BLOGS_REJECTED":
      {
        return _extends({}, state, { response: payload });
      }
    default:
      {
        return state;
      }
  }
}

/***/ }),

/***/ "./src/js/components/Profile/index.js":
/*!********************************************!*\
  !*** ./src/js/components/Profile/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Profile = __webpack_require__(/*! ./Profile */ "./src/js/components/Profile/Profile.jsx");

var _Profile2 = _interopRequireDefault(_Profile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    userLogin: state.user.userLogin,
    isLoggedIn: state.user.userLogin.isLoggedIn,
    user: state.user
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(_Profile2.default);

/***/ }),

/***/ "./src/js/components/SignUp/SignUp.jsx":
/*!*********************************************!*\
  !*** ./src/js/components/SignUp/SignUp.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _LoginActions = __webpack_require__(/*! ../Login/LoginActions */ "./src/js/components/Login/LoginActions.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _Date = __webpack_require__(/*! ../Date */ "./src/js/components/Date.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignUp = function (_Component) {
  _inherits(SignUp, _Component);

  function SignUp(props) {
    _classCallCheck(this, SignUp);

    var _this = _possibleConstructorReturn(this, (SignUp.__proto__ || Object.getPrototypeOf(SignUp)).call(this, props));

    _this.state = {
      username: "",
      password: "",
      passwordConf: "",
      redirect: false,
      response: []
    };
    _this.handleInput = _this.handleInput.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(SignUp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.props);
    }
  }, {
    key: "handleInput",
    value: function handleInput(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var date = (0, _Date.getDate)();
      var dispatch = this.props.dispatch;

      dispatch((0, _LoginActions.createUser)(this.state.username, this.state.password, date));
    }
  }, {
    key: "submitButton",
    value: function submitButton() {
      var pw = this.state.password;
      var config = this.state.passwordConf;
      var un = this.state.username;
      if (pw.length === 0 || config.length === 0 || pw !== config || un.length === 0) {
        return _react2.default.createElement(
          "button",
          { type: "submit",
            className: "btn btn-danger float-right",
            disabled: true },
          "Submit"
        );
      } else {
        return _react2.default.createElement(
          "button",
          { type: "submit",
            className: "btn btn-success float-right" },
          "Submit"
        );
      }
    }
  }, {
    key: "render",
    value: function render() {
      var user = this.props.user;

      console.log(user);
      var isLoggedIn = user.isLoggedIn;
      return _react2.default.createElement(
        "div",
        { className: "container" },
        isLoggedIn === true && _react2.default.createElement(_reactRouterDom.Redirect, { from: "/signup", to: "/profile" }),
        _react2.default.createElement(
          "div",
          { className: "row" },
          _react2.default.createElement(
            "div",
            { className: "col-12 text-center" },
            _react2.default.createElement(
              "h2",
              null,
              "User Sign Up"
            )
          )
        ),
        _react2.default.createElement(
          "form",
          { onSubmit: this.handleSubmit },
          _react2.default.createElement(
            "div",
            { className: "row" },
            _react2.default.createElement(
              "div",
              { className: "form-group col-12" },
              _react2.default.createElement(
                "label",
                { htmlFor: "username",
                  className: "control-label" },
                "Username"
              ),
              _react2.default.createElement("input", { type: "text",
                onChange: this.handleInput,
                name: "username",
                value: this.state.username,
                id: "username",
                className: "" })
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "row" },
            _react2.default.createElement(
              "div",
              { className: "form-group has-feedback col-12" },
              _react2.default.createElement(
                "label",
                { htmlFor: "password",
                  className: "control-label" },
                "Password"
              ),
              _react2.default.createElement("input", { type: "password",
                onChange: this.handleInput,
                name: "password",
                value: this.state.password })
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "row" },
            _react2.default.createElement(
              "div",
              { className: "form-group has-feedback col-12" },
              _react2.default.createElement(
                "label",
                { htmlFor: "passwordConf",
                  className: "control-label" },
                "Retype Password"
              ),
              _react2.default.createElement("input", { type: "passwordConf",
                onChange: this.handleInput,
                name: "passwordConf",
                value: this.state.passwordConf })
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "row" },
            _react2.default.createElement(
              "div",
              { className: "form-group has-feedback col-12" },
              this.submitButton()
            )
          )
        )
      );
    }
  }]);

  return SignUp;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(SignUp);

/***/ }),

/***/ "./src/js/history.js":
/*!***************************!*\
  !*** ./src/js/history.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.history = undefined;

var _history = __webpack_require__(/*! history */ "./node_modules/history/es/index.js");

var history = exports.history = (0, _history.createBrowserHistory)();

/***/ }),

/***/ "./src/js/index.jsx":
/*!**************************!*\
  !*** ./src/js/index.jsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _App = __webpack_require__(/*! ./App */ "./src/js/App.jsx");

var _App2 = _interopRequireDefault(_App);

var _rootStore = __webpack_require__(/*! ./rootStore */ "./src/js/rootStore.js");

var _rootStore2 = _interopRequireDefault(_rootStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: _rootStore2.default },
  _react2.default.createElement(_App2.default, null)
), document.getElementById("app"));

/***/ }),

/***/ "./src/js/rootReducer.js":
/*!*******************************!*\
  !*** ./src/js/rootReducer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _userReducer = __webpack_require__(/*! ./userReducer */ "./src/js/userReducer.js");

var _userReducer2 = _interopRequireDefault(_userReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  user: _userReducer2.default
});

exports.default = rootReducer;

/***/ }),

/***/ "./src/js/rootStore.js":
/*!*****************************!*\
  !*** ./src/js/rootStore.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _reduxPromiseMiddleware = __webpack_require__(/*! redux-promise-middleware */ "./node_modules/redux-promise-middleware/dist/es/index.js");

var _reduxPromiseMiddleware2 = _interopRequireDefault(_reduxPromiseMiddleware);

var _rootReducer = __webpack_require__(/*! ./rootReducer */ "./src/js/rootReducer.js");

var _rootReducer2 = _interopRequireDefault(_rootReducer);

var _reduxThunk = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
var rootStore = (0, _redux.createStore)(_rootReducer2.default, composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reduxPromiseMiddleware2.default)())));

exports.default = rootStore;

/***/ }),

/***/ "./src/js/userReducer.js":
/*!*******************************!*\
  !*** ./src/js/userReducer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _LoginReducer = __webpack_require__(/*! ./components/Login/LoginReducer */ "./src/js/components/Login/LoginReducer.js");

var _LoginReducer2 = _interopRequireDefault(_LoginReducer);

var _PageBlogReducer = __webpack_require__(/*! ./components/PageBlog/PageBlogReducer */ "./src/js/components/PageBlog/PageBlogReducer.js");

var _PageBlogReducer2 = _interopRequireDefault(_PageBlogReducer);

var _ProfileReducer = __webpack_require__(/*! ./components/Profile/ProfileReducer */ "./src/js/components/Profile/ProfileReducer.js");

var _ProfileReducer2 = _interopRequireDefault(_ProfileReducer);

var _ListEditReducer = __webpack_require__(/*! ./components/ListEdit/ListEditReducer */ "./src/js/components/ListEdit/ListEditReducer.js");

var _ListEditReducer2 = _interopRequireDefault(_ListEditReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userReducer = (0, _redux.combineReducers)({
  userLogin: _LoginReducer2.default,
  profile: _ProfileReducer2.default,
  blog: _PageBlogReducer2.default,
  editUser: _ListEditReducer2.default
});

exports.default = userReducer;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map