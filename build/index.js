(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("framer"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["framer", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("framer"), require("react")) : factory(root["Framer"], root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		try { modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); } catch (error) { module.exports = { error } }
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
/******/ 	// asset url
/******/ 	var __module_i = eval("typeof module !== 'undefined' ? module.i : ''");
/******/ 	var __framer_package = (/(node_modules\/.*)\/(?:build|dist)\/index\.js$/.exec(__module_i) || [])[1];
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./entry.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./code sync recursive .(t|j)s(x?)|.css$":
/*!*************************************!*\
  !*** ./code sync .(t|j)s(x?)|.css$ ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./App.tsx": "./code/App.tsx",
	"./Examples.tsx": "./code/Examples.tsx",
	"./canvas.tsx": "./code/canvas.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./code sync recursive .(t|j)s(x?)|.css$";

/***/ }),

/***/ "./code/App.tsx":
/*!**********************!*\
  !*** ./code/App.tsx ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9BcHAudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQXVDO0FBRXZDLE1BQU0sUUFBUSxHQUFHLGFBQUksQ0FBQztJQUNsQixVQUFVLEVBQUUsYUFBYTtJQUV6QixhQUFhLEVBQUUsYUFBYTtDQUMvQixDQUFDLENBQUE7QUFFRixTQUFnQixVQUFVOztJQUN0QixPQUFPO1FBQ0gsYUFBYSxFQUFFLEtBQUssQ0FBQyxFQUFFOztZQUNuQiw4QkFBOEI7WUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtZQUNqQyw0QkFBNEI7WUFDNUIsaUNBQWlDO1lBQ2pDLFdBQVc7WUFDWCxrQ0FBa0M7WUFDbEMsSUFBSTtZQUVKLHdCQUF3QjtZQUN4Qiw0QkFBNEI7WUFDNUIsOEJBQThCO1lBQzlCLDhCQUE4QjtZQUU5Qiw0QkFBNEI7WUFDNUIsMENBQTBDO1lBQzFDLElBQUk7WUFDSiwyREFBMkQ7WUFDM0QsSUFBSTtZQUNKLDBDQUEwQztZQUMxQyxJQUFJO1lBQ0osU0FBUztZQUNULHlEQUF5RDtZQUN6RCxJQUFJO1lBRUosUUFBUSxDQUFDLFVBQVU7Z0JBQ2YsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDO29CQUNkLENBQUMsQ0FBQyxhQUFhO29CQUNmLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLDBDQUEwQzt3QkFDNUYsQ0FBQyxDQUFDLGNBQWM7d0JBQ2hCLENBQUMsQ0FBQyxFQUFFLENBQUEsQ0FBQyxtQkFBbUI7U0FDbkM7S0FDSixDQUFBO0NBQ0o7QUFuQ0QsZ0NBbUNDO0FBRUQsU0FBZ0IsVUFBVTs7SUFDdEIsTUFBTSxZQUFZLEdBQUc7UUFDakIsV0FBVyxFQUFFLDBCQUEwQjtRQUN2QyxZQUFZLEVBQUUscUJBQXFCO0tBQ3RDLENBQUE7SUFDRCxPQUFPO1FBQ0gsT0FBTyxFQUFFLFFBQVEsQ0FBQyxVQUFVLElBQUksRUFBRTtRQUNsQyxJQUFJLEVBQUUsWUFBWSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7S0FDMUMsQ0FBQTtDQUNKO0FBVEQsZ0NBU0M7QUFFRCxTQUFnQixhQUFhOztJQUN6QixPQUFPO1FBQ0gsYUFBYSxFQUFFLEtBQUssQ0FBQyxFQUFFOztZQUNuQiw4QkFBOEI7WUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtZQUNqQyw0QkFBNEI7WUFDNUIsaUNBQWlDO1lBQ2pDLFdBQVc7WUFDWCxrQ0FBa0M7WUFDbEMsSUFBSTtZQUVKLFFBQVEsQ0FBQyxhQUFhO2dCQUNsQixLQUFLLENBQUMsTUFBTSxLQUFLLENBQUM7b0JBQ2QsQ0FBQyxDQUFDLGFBQWE7b0JBQ2YsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLDBDQUEwQzt3QkFDN0QsQ0FBQyxDQUFDLGNBQWM7d0JBQ2hCLENBQUMsQ0FBQyxFQUFFLENBQUE7U0FDZjtLQUNKLENBQUE7Q0FDSjtBQW5CRCxzQ0FtQkM7QUFFRCxTQUFnQixhQUFhOztJQUN6QixNQUFNLGFBQWEsR0FBRztRQUNsQixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFlBQVksRUFBRSw0QkFBNEI7S0FDN0MsQ0FBQTtJQUNELE9BQU87UUFDSCxPQUFPLEVBQUUsUUFBUSxDQUFDLGFBQWEsSUFBSSxFQUFFO1FBQ3JDLElBQUksRUFBRSxhQUFhLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQztLQUM5QyxDQUFBO0NBQ0o7QUFURCxzQ0FTQztBQUVELFNBQWdCLGNBQWM7O0lBQzFCLE9BQU87UUFDSCxRQUFRLEVBQUUsUUFBUSxDQUFDLFVBQVUsSUFBSSxRQUFRLENBQUMsYUFBYTtLQUMxRCxDQUFBO0NBQ0o7QUFKRCx3Q0FJQyJ9

Object.defineProperty(exports, "__esModule", { value: true });
const framer_1 = __webpack_require__(/*! framer */ "framer");
const appState = framer_1.Data({
    emailError: "BLANK_INPUT",
    passwordError: "BLANK_INPUT",
});
function EmailInput() {
    window["__checkBudget__"]();
    return {
        onValueChange: value => {
            window["__checkBudget__"]();
            //pass in value to the console
            console.log(!value.includes("@"));
            // if (value.length === 0) {
            //     appState.emailError = true
            // } else {
            //     appState.emailError = false
            // }
            // appState.emailError =
            //     value.length === 0 ||
            //     !value.includes("@") ||
            //     !value.includes(".com")
            // if (value.length === 0) {
            //     appState.emailError = "BLANK_STATE"
            // }
            // else if (!value.includes("@") || !value.include(".com"))
            // {
            //     appState.emailError = "WORNG_ERROR"
            // }
            // else {
            //     appState.emailError = ""  // empty string is false
            // }
            appState.emailError =
                value.length === 0
                    ? "BLANK_INPUT"
                    : !value.includes("@") || !value.includes(".com") // is value.length === ), ? = then, : = or
                        ? "WRONG_FORMAT"
                        : ""; // turnary operator
        },
    };
}
exports.EmailInput = EmailInput;
function EmailError() {
    window["__checkBudget__"]();
    const errorMessage = {
        BLANK_INPUT: "Enter your email address",
        WRONG_FORMAT: "Enter a valid email",
    };
    return {
        visible: appState.emailError != "",
        text: errorMessage[appState.emailError],
    };
}
exports.EmailError = EmailError;
function PasswordInput() {
    window["__checkBudget__"]();
    return {
        onValueChange: value => {
            window["__checkBudget__"]();
            //pass in value to the console
            console.log(!value.includes("@"));
            // if (value.length === 0) {
            //     appState.emailError = true
            // } else {
            //     appState.emailError = false
            // }
            appState.passwordError =
                value.length === 0
                    ? "BLANK_INPUT"
                    : value.length < 5 // is value.length === ), ? = then, : = or
                        ? "WRONG_FORMAT"
                        : "";
        },
    };
}
exports.PasswordInput = PasswordInput;
function PasswordError() {
    window["__checkBudget__"]();
    const errorMessages = {
        BLANK_INPUT: "Enter a valid password",
        WRONG_FORMAT: "Your password is too short",
    };
    return {
        visible: appState.passwordError != "",
        text: errorMessages[appState.passwordError],
    };
}
exports.PasswordError = PasswordError;
function ContinueButton() {
    window["__checkBudget__"]();
    return {
        disabled: appState.emailError || appState.passwordError,
    };
}
exports.ContinueButton = ContinueButton;
exports.__info__ = [{ name: "EmailInput", type: "override" }, { name: "EmailError", type: "override" }, { name: "PasswordInput", type: "override" }, { name: "PasswordError", type: "override" }, { name: "ContinueButton", type: "override" }];


/***/ }),

/***/ "./code/Examples.tsx":
/*!***************************!*\
  !*** ./code/Examples.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhhbXBsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0V4YW1wbGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUF1QztBQUV2QyxNQUFNLElBQUksR0FBRyxhQUFJLENBQUM7SUFDZCxNQUFNLEVBQUUsQ0FBQztJQUNULE9BQU8sRUFBRSxDQUFDO0lBQ1YsTUFBTSxFQUFFLElBQUk7Q0FDZixDQUFDLENBQUE7QUFFRixTQUFnQixLQUFLOztJQUNqQixPQUFPO1FBQ0gsVUFBVSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtLQUM3QixDQUFBO0NBQ0o7QUFKRCxzQkFJQztBQUVELFNBQWdCLFNBQVM7O0lBQ3JCLE9BQU87UUFDSCxJQUFJLEVBQUUsSUFBSTtLQUNiLENBQUE7Q0FDSjtBQUpELDhCQUlDO0FBRUQsU0FBZ0IsTUFBTTs7SUFDbEIsT0FBTztRQUNILE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ2hDLEtBQUs7O1lBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQTtTQUNqQztLQUNKLENBQUE7Q0FDSjtBQVBELHdCQU9DO0FBRUQsU0FBZ0IsU0FBUzs7SUFDckIsT0FBTztRQUNILEtBQUs7O1lBQ0QsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQTtZQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQTtTQUN4QjtLQUNKLENBQUE7Q0FDSjtBQVJELDhCQVFDO0FBRUQsU0FBZ0IsVUFBVTs7SUFDdEIsT0FBTztRQUNILE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFO0tBQ3JDLENBQUE7Q0FDSjtBQUpELGdDQUlDIn0=

Object.defineProperty(exports, "__esModule", { value: true });
const framer_1 = __webpack_require__(/*! framer */ "framer");
const data = framer_1.Data({
    rotate: 0,
    rotateY: 0,
    toggle: true,
});
function Hover() {
    window["__checkBudget__"]();
    return {
        whileHover: { scale: 0.8 },
    };
}
exports.Hover = Hover;
function Draggable() {
    window["__checkBudget__"]();
    return {
        drag: true,
    };
}
exports.Draggable = Draggable;
function Rotate() {
    window["__checkBudget__"]();
    return {
        animate: { rotate: data.rotate },
        onTap() {
            window["__checkBudget__"]();
            data.rotate = data.rotate + 90;
        },
    };
}
exports.Rotate = Rotate;
function FlipInput() {
    window["__checkBudget__"]();
    return {
        onTap() {
            window["__checkBudget__"]();
            const toggle = data.toggle;
            data.rotateY = toggle ? 180 : 0;
            data.toggle = !toggle;
        },
    };
}
exports.FlipInput = FlipInput;
function FlipOutput() {
    window["__checkBudget__"]();
    return {
        animate: { rotateY: data.rotateY },
    };
}
exports.FlipOutput = FlipOutput;
exports.__info__ = [{ name: "Hover", type: "override" }, { name: "Draggable", type: "override" }, { name: "Rotate", type: "override" }, { name: "FlipInput", type: "override" }, { name: "FlipOutput", type: "override" }];


/***/ }),

/***/ "./code/canvas.tsx":
/*!*************************!*\
  !*** ./code/canvas.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// WARNING: this file is auto generated, any changes will be lost
const framer_1 = __webpack_require__(/*! framer */ "framer");
const canvas = framer_1.CanvasStore.shared({"children":[]});


/***/ }),

/***/ "./entry.js":
/*!******************!*\
  !*** ./entry.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const packageInfo = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

try {
    // This is a special webpack thing that watches the whole directory
    // https://github.com/webpack/docs/wiki/context
    const ctx = __webpack_require__("./code sync recursive .(t|j)s(x?)|.css$")

    ctx.keys().forEach(key => {
        packageInfo.sourceModules[key] = () => ctx(key)
    })
} catch (e) {
    // Handle when the code directory is missing
    // See issue #8178 for more information
}

const packages = {}

// The packages are passed in through a template

                packages["framer"] = () => {
                    var packageInfo = {}
                    var designJson
                    try {
                        packageInfo = __webpack_require__(/*! framer */ "framer")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["framer"]
                    } catch (e) {
                        console.log(e)
                    }
                    packageInfo.__framer__ = packageInfo.__framer__ || {}
                    packageInfo.__framer__.packageJson = {"name":"framer","version":"1.1.5","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --coverage","test":"jest","watch":"jest --watch"},"devDependencies":{"@emotion/is-prop-valid":"^0.8.2","@microsoft/api-extractor":"^7.3.4","@testing-library/react":"^8.0.1","@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/enzyme-adapter-react-16":"^1.0.3","@types/google.fonts":"^1.0.2","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/jest-matcher-utils":"^21.0.1","@types/node":"^10.12.9","@types/promise-queue":"^2.2.0","@types/react":"16.8.4","@types/react-dom":"^16.8","@types/webfontloader":"^1.6.29","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.10.4","enzyme":"^3.9.0","enzyme-adapter-react-16":"^1.9.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","framer-motion":"^1.6.7","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^23.1.0","jest-diff":"^23.6.0","jest-dom":"^3.1.3","jest-junit":"^5.2.0","modclean":"^3.0.0-beta.1","progress-bar-webpack-plugin":"^1.11.0","promise-queue":"^2.2.5","raf":"^3.4.0","react":"^16.8","react-dev-utils":"^5.0.1","react-dom":"^16.8","react-hooks-testing-library":"^0.5.1","react-testing-library":"^6.0.0","resize-observer-polyfill":"^1.5.1","semver":"^5.6.0","style-value-types":"^3.1.4","ts-jest":"^23.10.5","ts-loader":"^4.1.0","tslint":"^5.12.1","tslint-react-hooks":"^1.1.0","typescript":"^3.5.3","watch":"^1.0.2","webfontloader":"^1.6.28","webpack":"^4.4.1","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.8.2","react-dom":"^16.8.2"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]}}
                    packageInfo.__framer__.packageJson.design = designJson
                    return packageInfo
                }

                packages["@framer/framer.base"] = () => {
                    var packageInfo = {}
                    var designJson
                    try {
                        packageInfo = __webpack_require__(/*! framer-package-loader!@framer/framer.base */ "framer-package-loader.js!./node_modules/@framer/framer.base/dist/index.js")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["@framer/framer.base"]
                    } catch (e) {
                        console.log(e)
                    }
                    packageInfo.__framer__ = packageInfo.__framer__ || {}
                    packageInfo.__framer__.packageJson = {"main":"dist/index.js","license":"MIT","devDependencies":{"@types/react":"^16.8"},"peerDependencies":{"framer":"^1.0","react":"^16.8"},"framer":{"id":"67d882cc-9fb2-4593-ba0d-d906b94d3d5d","displayName":"Framer Base Kit"},"name":"@framer/framer.base","version":"1.0.0","author":"Framer Team","dependencies":{"polished":"^3.4.1","react-feather":"^2.0.3","styled-components":"^4.3.2"}}
                    packageInfo.__framer__.packageJson.design = designJson
                    return packageInfo
                }

packageInfo.dependencies = packages

exports.__framer__ = packageInfo


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, devDependencies, peerDependencies, framer, author, dependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"main\":\"dist/index.js\",\"license\":\"MIT\",\"devDependencies\":{\"@types/react\":\"^16.8\"},\"peerDependencies\":{\"framer\":\"^1.0\",\"react\":\"^16.8\"},\"framer\":{\"id\":\"eaf7698e-c6e1-4530-bf56-21af0ac7732a\"},\"author\":\"Ming Yuk John Ma\",\"dependencies\":{\"@framer/framer.base\":\"^1.0.0\"}}");

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});