/******/ (function(modules) { // webpackBootstrap
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
/******/ 			if(installedChunks[chunkId]) {
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
/******/ 		"oneapp": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "_bundles/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
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
/******/ 	deferredModules.push(["./app/application.module.js","vendors~oneapp"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/app-config-compileProvider.js":
/*!*******************************************!*\
  !*** ./app/app-config-compileProvider.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var jtdFrotas = angular.module('jtdFrotas');

jtdFrotas.config(['$compileProvider', function ($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
}]);

/***/ }),

/***/ "./app/app-config-provide.js":
/*!***********************************!*\
  !*** ./app/app-config-provide.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./app/app-config-routes.js":
/*!**********************************!*\
  !*** ./app/app-config-routes.js ***!
  \**********************************/
/*! exports provided: layout, home, companyFutureState, testeFutureState, guestFutureState, travelFutureState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return layout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "home", function() { return home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "companyFutureState", function() { return companyFutureState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testeFutureState", function() { return testeFutureState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guestFutureState", function() { return guestFutureState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "travelFutureState", function() { return travelFutureState; });
var viewCrudTemplate = '<div ui-view="viewList"></div><div ui-view="viewDetail"></div>';

function localUrl() {

    var local = location.pathname;

    if (local.toUpperCase().indexOf("CALLBACK") !== -1) {
        local = window.appHotelOneSettings.urls.urlApplicationPath;
    }

    if (local.substr(local.length - 1) !== "/") {
        local += "/";

    }
    return local;
};

const layout = {
    name: 'app',
    "abstract": true,
    templateUrl: localUrl() + "app/views/shared/_layout.html",
    data: {
        requireLogin: false
    }
};

const home = {
    parent: 'app',
    name: 'home',
    url: "/home",
    sticky: true,
    views: {
        "viewDash": {
            templateUrl: localUrl() + "app/views/home/home.html"
        }
    },
    lazyLoad: function (transition) {
        const $ocLazyLoad = transition.injector().get('$ocLazyLoad');
        return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ./modules/main/main.module */ "./app/modules/main/main.module.js")).then(mod => $ocLazyLoad.load(mod.MAIN_MODULE));
    }
};

const companyFutureState = {
    parent: 'app',
    name: 'companies.**',
    url: '/companies',
    sticky: true,
    views: {
        'viewCompany': {
            template: '<div ui-view="viewList"></div><div ui-view="viewDetail"></div>'
        }
    },
    lazyLoad: function (transition) {
        const $ocLazyLoad = transition.injector().get('$ocLazyLoad');
        return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./modules/company/company.module */ "./app/modules/company/company.module.js")).then(mod => $ocLazyLoad.load(mod.COMPANY_MODULE));
    }
};

const testeFutureState = {
    parent: 'app',
    name: 'testes.**',
    url: '/testes',
    sticky: true,
    views: {
        'viewTeste': {
            template: '<div ui-view="viewT"></div>'
        }
    },
    lazyLoad: function (transition) {
        const $ocLazyLoad = transition.injector().get('$ocLazyLoad');
        return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./modules/teste/teste.module */ "./app/modules/teste/teste.module.js")).then(mod => $ocLazyLoad.load(mod.TESTE_MODULE));
    }
};

const guestFutureState = {
    parent: 'app',
    name: 'guests.**',
    url: '/guests',
    views: {
        'viewGuest': {
            template: '<div ui-view="viewList"></div><div ui-view="viewDetail"></div>'
        }
    },
    lazyLoad: (transition) => {
        const $ocLazyLoad = transition.injector().get('$ocLazyLoad');
        return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./modules/guest/guest.module */ "./app/modules/guest/guest.module.js")).then(mod => $ocLazyLoad.load(mod.GUEST_MODULE));
    }
}

const travelFutureState = {
    parent: 'app',
    name: 'travels.**',
    url: '/travels',
    views: {
        'viewTravel': {
            template: viewCrudTemplate
        }
    },
    lazyLoad: (transition) => {
        const $ocLazyLoad = transition.injector().get('$ocLazyLoad');
        return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ./modules/travel/travel.module */ "./app/modules/travel/travel.module.js")).then(mod => $ocLazyLoad.load(mod.TRAVEL_MODULE));
    }
}

/***/ }),

/***/ "./app/app-config.js":
/*!***************************!*\
  !*** ./app/app-config.js ***!
  \***************************/
/*! exports provided: setHtml5Mode, blockUIConfig, exceptionConfig, Interceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHtml5Mode", function() { return setHtml5Mode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockUIConfig", function() { return blockUIConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exceptionConfig", function() { return exceptionConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interceptor", function() { return Interceptor; });
const setHtml5Mode = ($locationProvider) => $locationProvider.html5Mode(true);

blockUIConfig.$inject = ['blockUIConfig'];
function blockUIConfig(blockUiConfig) {
    // Change the default overlay message
    blockUiConfig.message = '';

    // Change the default delay to 100ms before the blocking is visible
    blockUiConfig.delay = 500;

    blockUiConfig.requestFilter = function (config) {
        switch (config.method) {
            case 'GET':
                window.EasyLoading.show({
                    text: "Getting...",
                    type: window.EasyLoading.TYPE.BALL_SCALE_MULTIPLE,
                    button: null
                });
                break;
            case 'POST':
                console.log("POST");
                break;

            case 'DELETE':
                console.log("DELETE");
                break;

            case 'PUT':
                console.log("PUT");
                break;

            default:
                console.log("EUEM");
        };
    };
};

exceptionConfig.$inject = ['$provide'];
function exceptionConfig($provide) {
    window.t = $provide;
    $provide.decorator('$exceptionHandler', ['$log', '$delegate', '$injector', function ($log, $delegate, $injector) {
        return function (exception, cause) {
            $log.debug('Default exception handler.');
            $delegate(exception, cause);
        }
    }]);
};

Interceptor.$inject = ['$httpProvider'];
function Interceptor($httpProvider) {
    $httpProvider.useApplyAsync(true);
    $httpProvider.interceptors.push(() => {
        return {
            'response': (data) => {
                window.EasyLoading.hide();
                return data;
            },
            'request': (config) => {
                window.EasyLoading.show({
                    text: "Loading...",
                    type: window.EasyLoading.TYPE.BALL_SCALE_MULTIPLE,
                    button: null
                });
                config.headers.token = "JKOHFSUIOFHIOASFNOPSM";
                return config;
            },
            'requestError': (err) => {
                window.EasyLoading.hide();
                window.Swal.fire({
                    title: 'Oops... Algo deu errado!',
                    text: err.data.Message,
                    icon: 'error',
                });
                throw err;
            },
            'responseError': (err) => {
                window.EasyLoading.hide();
                window.Swal.fire({
                    title: 'Oops... Algo deu errado!',
                    text: err.data.Message,
                    icon: 'error',
                });
                throw err;
            }
        }
    });
}

/***/ }),

/***/ "./app/app.js":
/*!********************!*\
  !*** ./app/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _uirouter_angularjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uirouter/angularjs */ "./node_modules/@uirouter/angularjs/lib-esm/index.js");
/* harmony import */ var _uirouter_sticky_states__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uirouter/sticky-states */ "./node_modules/@uirouter/sticky-states/lib-esm/index.js");
/* harmony import */ var _modules_main_mainController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/main/mainController */ "./app/modules/main/mainController.js");
/* harmony import */ var oclazyload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! oclazyload */ "./node_modules/oclazyload/dist/ocLazyLoad.js");
/* harmony import */ var oclazyload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(oclazyload__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _uirouter_dsr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @uirouter/dsr */ "./node_modules/@uirouter/dsr/lib/index.js");
/* harmony import */ var _uirouter_dsr__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_uirouter_dsr__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_config_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-config-routes */ "./app/app-config-routes.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-config */ "./app/app-config.js");










__webpack_require__(/*! angular-block-ui */ "./node_modules/angular-block-ui/dist/angular-block-ui.js");
//require("$q");
__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var jtdFrotas = angular__WEBPACK_IMPORTED_MODULE_0__["module"]('jtdFrotas', ['blockUI', oclazyload__WEBPACK_IMPORTED_MODULE_4___default.a, _uirouter_angularjs__WEBPACK_IMPORTED_MODULE_1__["default"]]);


jtdFrotas.config(_app_config__WEBPACK_IMPORTED_MODULE_7__["blockUIConfig"]);
jtdFrotas.config(['$httpProvider', _app_config__WEBPACK_IMPORTED_MODULE_7__["Interceptor"]]);
jtdFrotas.config(['$provide', _app_config__WEBPACK_IMPORTED_MODULE_7__["exceptionConfig"]]);

jtdFrotas.config(['$uiRouterProvider', '$locationProvider', ($uiRouter, $locationProvider) => {
    $uiRouter.plugin(_uirouter_dsr__WEBPACK_IMPORTED_MODULE_5__["DSRPlugin"]);

    $locationProvider.hashPrefix('');

    const $urlService = $uiRouter.urlService;
    $urlService.rules.otherwise({ state: 'home' });

    const $stateRegistry = $uiRouter.stateRegistry;

    $stateRegistry.register(_app_config_routes__WEBPACK_IMPORTED_MODULE_6__["layout"]);
    $stateRegistry.register(_app_config_routes__WEBPACK_IMPORTED_MODULE_6__["home"]);
    $stateRegistry.register(_app_config_routes__WEBPACK_IMPORTED_MODULE_6__["testeFutureState"]);
    $stateRegistry.register(_app_config_routes__WEBPACK_IMPORTED_MODULE_6__["companyFutureState"]);
    $stateRegistry.register(_app_config_routes__WEBPACK_IMPORTED_MODULE_6__["guestFutureState"]);
    $stateRegistry.register(_app_config_routes__WEBPACK_IMPORTED_MODULE_6__["travelFutureState"]);
}]);
jtdFrotas.controller("mainController", _modules_main_mainController__WEBPACK_IMPORTED_MODULE_3__["default"]);
window.jtd = jtdFrotas;

/***/ }),

/***/ "./app/application.module.js":
/*!***********************************!*\
  !*** ./app/application.module.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./app/app.js");
/* harmony import */ var _app_config_provide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-config-provide */ "./app/app-config-provide.js");
/* harmony import */ var _app_config_provide__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_config_provide__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_config_compileProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-config-compileProvider */ "./app/app-config-compileProvider.js");
/* harmony import */ var _app_config_compileProvider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_config_compileProvider__WEBPACK_IMPORTED_MODULE_2__);
﻿//import "./global.module";


// import "./app-run";



/***/ }),

/***/ "./app/modules/main/mainController.js":
/*!********************************************!*\
  !*** ./app/modules/main/mainController.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(jQuery) {//'use strict';
function mainControler($scope, $injector, $uiRouter) {

    var $deepStateRedirect = $uiRouter._plugins["deep-state-redirect"];
    var $state = $injector.get("$state");
    var $http = $injector.get("$http");
    var $timeout = $injector.get("$timeout");

    var router = $uiRouter.getPlugin('sticky-states');

    // var $compile = $injector.get("$compile");
    // var blockUi = $injector.get("blockUI");
    // var authService = $injector.get("authService");
    // var $authsusceptor = $injector.get("$authsusceptor");
    // var userService = $injector.get("userService");
    // var localStorageService = $injector.get("localStorageService");
    // var menuService = $injector.get("menuService");
    // var $filter = $injector.get("$filter");
    // var tmhDynamicLocale = $injector.get("tmhDynamicLocale");
    // var hubService = $injector.get("hubService");
    // var oneTranslateFact = $injector.get("oneTranslateFact");
    // var localSettings = window.appHotelOneSettings;
    // var $uibModal = $injector.get("$uibModal");
    // var $rootScope = $injector.get("$rootScope");
    // var notificationService = $injector.get("notificationService");
    // var localeService = $injector.get("localeService");
    // var wizardService = $injector.get("wizardService");
    // var modalBrands = $injector.get("modalBrands");
    // var messaging = $injector.get("Messaging");

    var userProperties;

    $scope.h = 'HELLO WORLD';

    //console.log($scope);

    // var localUrl = localSettings.urls.urlApplicationPath;
    // $scope.appVersion = window.appVersion + window.branchVersion;

    // $rootScope.getEventHubs = {
    //     TimeLineEvent: null,
    //     FolioEvent: null,
    //     FolioWindowEvent: null,
    //     PropertEvent: null,
    //     AvailabilityEvent: null
    // };

    // var hubBrand;

    // tmhDynamicLocale.set(localStorageService.get(window.appHotelOneSettings.selectecLanguageStorageName));

    // $scope.tabs = {};
    // $scope.recentTabs = {};

    // var openWizardModal = function (wizard) {
    //     $uibModal.open({
    //         animation: true,
    //         component: "wizardModal",
    //         size: "lg",
    //         backdrop: 'static',
    //         resolve: {
    //             wizard: function () {
    //                 return wizard;
    //             }
    //         }
    //     });
    // };

    // var showWizard = function (idProperty) {

    //     wizardService.checkShow(idProperty).then(function (response) {
    //         var data = response.data;
    //         if (!data) {
    //             openWizardModal(null);
    //             return;
    //         }

    //         if (data.Show) {
    //             openWizardModal(data);
    //         }

    //     }, function (error) { throw error; }).finally(function () {
    //         blockUi.stop();
    //     });
    // };

    // var fillMenu = function (idProperty) {
    //     $scope.filterMenu = [];
    //     blockUi.start(oneTranslateFact.translate("msgGettingMenusOfTheApplication"));

    //     menuService.getMenus().then(
    //         function (response) {

    //             blockUi.start(oneTranslateFact.translate("msgGettingMenusOfTheApplication"));

    //             menuService.setMenus(response.data);

    //             $scope.tabs = menuService.getTabs();

    //             var configMenuObj = menuService.getConfigMenu();
    //             $scope.configMenu = configMenuObj.inArray;
    //             $scope.configMenuHtml = configMenuObj.inHtml;

    //             var opMenuObj = menuService.getOperationMenu();
    //             $scope.opMenu = opMenuObj.inArray;
    //             $scope.opMenuHtml = opMenuObj.inHtml;

    //             var filterMenu;
    //             for (var i = 0; i < $scope.configMenu.length; i++) {
    //                 for (var j = 0; j < $scope.configMenu[i].Sub.length; j++) {
    //                     filterMenu = { Code: $scope.configMenu[i].Sub[j].Code, Name: $scope.configMenu[i].Sub[j].Name, Parent: $scope.configMenu[i].Name };
    //                     $scope.filterMenu.push(filterMenu);
    //                 }
    //             }

    //             for (var k = 0; k < $scope.opMenu.length; k++) {
    //                 if (angular.isObject($scope.opMenu[k])) {
    //                     for (var l = 0; l < $scope.opMenu[k].Sub.length; l++) {
    //                         filterMenu = { Code: $scope.opMenu[k].Sub[l].Code, Name: $scope.opMenu[k].Sub[l].Name, Parent: $scope.opMenu[k].Name };
    //                         $scope.filterMenu.push(filterMenu);
    //                     }
    //                 }
    //             }

    //             $scope.$broadcast('fillUserDashboard');
    //             blockUi.stop();
    //             showWizard(idProperty);
    //         },
    //         function (error) {
    //             blockUi.stop();
    //             $scope.logout();
    //             throw error;
    //         }
    //     ).finally(function () {
    //         blockUi.stop();
    //     });

    // };

    // var $logoffTimeOut;


    // $scope.logout = function () {
    //     blockUi.start(oneTranslateFact.translate('msgWaiting'));
    //     $scope.closeAllTabs();

    //     $logoffTimeOut = $timeout(function () {
    //         authService.removeAuthData();
    //         $scope.user = {};
    //         $scope.configMenu = [];
    //         $scope.defMenu = [];
    //         userProperties = [];
    //         window.appHotelOneSettings.currentSelectedHotelCode = "0";

    //         if (hubBrand) {
    //             hubBrand.stop();
    //         }

    //         if (hubBrand) {
    //             hubBrand = null;
    //         }
    //         $authsusceptor.Logoff();
    //     }, 500);
    // };

    // $scope.changePassword = function () {
    //     var serverUrl = window.appHotelOneSettings.urls.serverAuthUrl;
    //     var url = serverUrl + '/Manage/ChangePassword';
    //     window.open(url, '_blank');
    // };

    // $scope.$on('logoutListener', function () {
    //     $scope.logout();
    // });

    // $scope.setHome = function () {
    //     $scope.currentTab = 'home';
    // };

    // $scope.unstickyState = function (sticky) {

    //     if (sticky.indexOf('reservations') > -1) {
    //         messaging.ClearToastr();
    //     }

    //     var stickySplit = sticky.split(".");
    //     var tab = stickySplit[0];

    //     var owlTabs = $("#owl-tabs").data('owlCarousel');

    //     //if the tab is active, hide and show home
    //     //hide tab
    //     $(".tab." + tab).parent().remove();
    //     owlTabs.reinit();

    //     $scope.tabs[tab][3] = false;
    //     delete $scope.recentTabs[tab];

    //     if (window.currentTab === tab) {
    //         //hide div
    //         $('#' + window.currentTab).hide();
    //         //show home div
    //         $('#home').show();
    //         window.currentTab = 'home';
    //         //set home tab active
    //         $('#chooseDash').addClass('active');
    //         $("#menu-op").find("li").removeClass("active");

    //         $state.go("home").then(function () {
    //             router.exitSticky(sticky);
    //             $deepStateRedirect.reset(sticky);

    //             router.exitSticky(tab);
    //             $deepStateRedirect.reset(tab);
    //         });

    //         //set home tab active
    //         $('.home').addClass('active');
    //         $("#dash").show();

    //     } else {
    //         router.exitSticky(sticky);
    //         $deepStateRedirect.reset(sticky);

    //         router.exitSticky(tab);
    //         $deepStateRedirect.reset(tab);

    //         $('#' + sticky).hide();
    //     }

    //     var tabExists = 0;
    //     angular.forEach($scope.tabs, function (value) {
    //         if (angular.isDefinedAndNotNull(value[3]) && value[3] === true) {
    //             tabExists++;
    //         }
    //     });

    //     if (tabExists === 0) {
    //         $scope.closeAllTabs();
    //     }

    //     $scope.currentTab = 'home';
    //     $scope.withoutFlapsRecent = tabExists;
    // };

    // $scope.$on('fillLoginDataListener', function () {

    //     $scope.fillLoginData();
    // });

    // // var fctBrand = function (event, poperty) {
    // //     var props = propertyService.getUserProperties();
    // //     var prop;

    // //     var data = JSON.parse(poperty);

    // //     if (event === 'PU') {
    // //         prop = $filter('filter')(props, { IdProperty: data.Id }, true);
    // //         if (prop.length > 0) {
    // //             prop[0].Name = data.N;
    // //             prop[0].IdBrand = data.B;
    // //             prop[0].BrandName = data.Bn;
    // //             prop[0].IdChain = data.C;
    // //             prop[0].ChainName = data.Cn;
    // //         }
    // //     } else {
    // //         prop = {
    // //             IdProperty: data.Id,
    // //             Name: data.N,
    // //             IdBrand: data.B,
    // //             BrandName: data.Bn,
    // //             IdChain: data.C,
    // //             ChainName: data.Cn
    // //         };
    // //         props.push(prop);
    // //     }
    // // };

    // $scope.listMessages = [];
    // var loadNotifications = function () {

    //     notificationService.getRestful().then(
    //         function (response) {

    //             $scope.listMessages = response.data;
    //         },
    //         function (error) {
    //             throw error;
    //         }).finally(function () {

    //         });
    // };

    // var fctNotificationEvent = function (event, data) {
    //     if (data !== null && data !== undefined && parseInt(data.Id) === parseInt($scope.user.userId)) {
    //         loadNotifications();
    //     }
    // };

    // var initHub = function () {

    //     $scope.getEventHubs.PropertEvent = fctBrand;
    //     $scope.getEventHubs.NotificationEvent = fctNotificationEvent;

    //     var host = window.appHotelOneSettings.urls.hostApp;
    //     // ReSharper disable once InconsistentNaming
    //     hubBrand = new hubService('BrandHub', 'brand=' + host + "_" + $scope.user.Brands, $scope.getEventHubs);
    // };

    // // var changeProperty = function (item) {
    // //     if (authService.isAuth() && angular.isDefinedAndNotNull(item)) {
    // //         $scope.closeAllTabs();
    // //         window.appHotelOneSettings.currentSelectedHotelCode = item.IdProperty;
    // //         window.appHotelOneSettings.currentSelectedHotelPicture = item.Picture;
    // //         $http.defaults.headers.common["X-API-PROPERTY-CODE"] = item.IdProperty;
    // //         localStorageService.set(window.appHotelOneSettings.currentSelectedHotelTimeZone, item.Utc);
    // //         localStorageService.set(window.appHotelOneSettings.currentSelectedHotelCodeStorageName, item.IdProperty);

    // //         propertyService.selectedProperty = item;
    // //         if (item.Picture === "" || item.Picture === "no-img?") {
    // //             item.Picture = "img.png?" + new Date().getTime();
    // //         }

    // //         localeService.changeCulture().then(function (response) {
    // //             window._translations = response;

    // //             var lang = window.Translate("Language").toLowerCase();

    // //             $http.defaults.headers.common['X-API-LANGUAGE-CODE'] = lang;
    // //             tmhDynamicLocale.set(lang);
    // //             localStorageService.set(window.appHotelOneSettings.selectecLanguageStorageName, lang);
    // //             moment.locale(lang);

    // //             fillMenu(item.IdProperty);
    // //             loadNotifications();
    // //         }, function (err) {
    // //             $timeout(function () {
    // //                 $authsusceptor.Logoff();
    // //             }, 2000);
    // //             throw err;
    // //         }).finally(function () {
    // //             blockUi.stop();
    // //         });
    // //     }
    // // };

    // // var fillPropertyData = function () {

    // //     if (authService.isAuth()) {

    // //         $http.defaults.headers.common['X-API-APPLICATION-CODE'] = window.appHotelOneSettings.applicationCode;
    // //         $http.defaults.headers.common["X-API-PROPERTY-CODE"] = 0;
    // //         $http.defaults.headers.common['X-API-VERSION'] = window.appHotelOneSettings.currentAppVersion;
    // //         localStorageService.set(window.appHotelOneSettings.currentSelectedHotelCodeStorageName, 0);

    // //         userProperties = [];

    // //         if (!$scope.user.Brands) {
    // //             return;
    // //         }

    // //         if ($scope.user.PropertyObj) {
    // //             $scope.userPropertySelect = $scope.user.PropertyObj;
    // //             changeProperty($scope.userPropertySelect);
    // //         }

    // //         userService.getProperties($scope.user.userId, $scope.user.Brands).then(function (response) {
    // //             if (response.data.length === 0) {
    // //                 messaging.Error(oneTranslateFact.translate("msgUserWithoutProperty"));
    // //                 $scope.logout();
    // //                 return;
    // //             };
    // //             userProperties = response.data;
    // //             propertyService.setUserProperties(response.data);

    // //             if (!$scope.user.PropertyObj) {

    // //                 $scope.userPropertySelect = userProperties[0];

    // //                 if ($scope.user.DefaultProperty > 0) {
    // //                     for (var i = 0; i < userProperties.length; i++) {
    // //                         if (userProperties[i].IdProperty === $scope.user.DefaultProperty) {
    // //                             $scope.userPropertySelect = userProperties[i];
    // //                             break;
    // //                         }
    // //                     }
    // //                 }
    // //                 changeProperty($scope.userPropertySelect);
    // //             }
    // //         }, function (error) {
    // //             throw error;
    // //         });
    // //     }
    // // };

    // $scope.fillLoginData = function () {

    //     if (hubBrand) {
    //         hubBrand.stop();

    //         hubBrand = null;
    //     }

    //     if (authService.isAuth()) {
    //         $scope.user = localStorageService.get(window.appHotelOneSettings.authorizationDataStorageName);
    //         $scope.user.first = $scope.user.userName.split(',')[1].trim();
    //         $scope.user.last = $scope.user.userName.split(',')[0].trim();
    //         $scope.user.UserAvatar = $scope.user.picture || new Date().getTime();

    //         fillPropertyData();
    //         initHub();
    //     }
    // };

    // $scope.releaseNotesShow = function () {
    //     $scope.addTabs("releaseNotes", "releaseNotes");
    // };

    // $scope.linkSupport = function () {
    //     window.open('https://appsistemas.movidesk.com/kb/pt-br', '_blank');
    // };

    // $scope.linkTraining = function () {
    //     window.open('https://www.appensina.com.br/', '_blank');
    // };

    // $scope.enableSupport = function () {
    //     $uibModal.open({
    //         animation: true,
    //         component: "enableSupportComponent",
    //         size: 'lg select-property'
    //     });

    //     if (!$('#navHelpMenu').is(':hidden')) {
    //         $('#navHelpMenu').toggle();
    //         $('.overlay-nav').hide();
    //     }
    // };

    // $scope.viewFolios = function () {
    //     $scope.addTabs("folios.list", "folios", { showExpiredCheckouts: true });
    // };

    // $scope.viewReservation = function () {
    //     $scope.addTabs("reservations.list", "reservations", { showBlocksToExpire: true });
    // };

    // $scope.viewNegotiationsNinety = function () {
    //     $scope.addTabs("ratePlans.negotiated", "ratePlans", { showNegotiationNinety: true });
    // };
    // $scope.addTabs = function (action, tab, parameters) {

    //     //#hack for saved home profile
    //     if (angular.isObject(action)) {
    //         tab = action.name;
    //         action = action.route;
    //     }

    //     if (authService.isAuth()) {

    //         if ($scope.tabs[tab][3]) {
    //             if (action === "backofficeIntegration") {
    //                 let url = "http://" + window.appHotelOneSettings.urls.hostApp + "-bo.hitspms.net/";
    //                 window.open(url);
    //                 return;
    //             }
    //         }

    //         //hide current div
    //         $('#' + window.currentTab).hide();

    //         if ((angular.isDefinedAndNotNull($scope.tabs[tab])) && (!angular.isDefinedAndNotNull($scope.tabs[tab][3]) || !$scope.tabs[tab][3])) {
    //             var tabHtml = '';

    //             tabHtml += '<div class="tab ' + tab + '">';
    //             tabHtml += '  <a id="tab' + tab + '" class="show-tab" tab="' + tab + '" href="#/' + action + '">' + $scope.tabs[tab][0] + ' ' + $scope.tabs[tab][1] + '</a>';
    //             tabHtml += '  <a id="closeTab' + tab + '" href="Javascript: void(0);" class="close-tab material-icons" tab="' + tab + '" ng-click="unstickyState(\'' + action + '\')">close</a>';
    //             tabHtml += '</div>';

    //             var tabHtmlCompiled = $compile(tabHtml)($scope);

    //             var owlTabs = $("#owl-tabs").data('owlCarousel');

    //             owlTabs.addItem(tabHtmlCompiled, 0);
    //             $scope.tabs[tab][3] = true;
    //             $scope.recentTabs[tab] = $scope.tabs[tab];
    //         }

    //         //scroll to top
    //         $('body').animate({ scrollTop: 0 }, 0);
    //         //set tab active
    //         if (window.currentTab === 'home') {
    //             $('.home').removeClass('active');
    //             $("#dash").hide();
    //         } else {
    //             $('.tab.' + window.currentTab).removeClass('active');
    //         }

    //         $('.tab.' + tab).addClass('active');

    //         //store new current tab
    //         window.currentTab = tab;
    //         $scope.currentTab = $scope.tabs[tab][0];
    //         $scope.withoutFlapsRecent = $scope.tabs[tab][3];

    //         $state.go(action, parameters).then(function () {
    //             $('#' + tab).show();
    //         });

    //         if (!$('#navSearchMenu').is(':hidden')) {
    //             $('#navSearchMenu').toggle();
    //             $('.overlay-nav').hide();
    //             $scope.searchModel.search = "";
    //         }

    //         if (!$('#navOptionsRecents').is(':hidden')) {
    //             $('#navOptionsRecents').toggle();
    //             $('.overlay-nav').hide();
    //         }

    //         if (!$('#navHelpMenu').is(':hidden')) {
    //             $('#navHelpMenu').toggle();
    //             $('.overlay-nav').hide();
    //         }
    //     }
    // };

    // var $timeOutShowSearch = null;
    // $scope.checkShowSearch = function () {

    //     $timeOutShowSearch = $timeout(function () {
    //         if ($('#navSearchMenu').is(":visible")) {
    //             document.getElementById('allMenusSearchInput').focus();
    //         }

    //         if ($timeOutShowSearch) {
    //             $timeout.cancel($timeOutShowSearch);
    //         }
    //     });

    // };

    // $scope.closeAllTabs = function () {

    //     $timeout(function () {
    //         $state.go("home");
    //         $('#home').show();

    //         $timeout(function () {

    //             for (var key in $scope.tabs) {

    //                 if ($scope.tabs.hasOwnProperty(key)) {
    //                     if ($scope.tabs[key][3] === true) {
    //                         router.exitSticky(key);
    //                         $deepStateRedirect.reset(key);
    //                     }
    //                     $scope.tabs[key][3] = false;
    //                 }
    //             }
    //         }, 100);

    //     }, 100);

    //     $("#owl-tabs").find(".owl-item").each(function () {
    //         $(this).remove();
    //     });
    //     var owlTabs = $("#owl-tabs").data('owlCarousel');

    //     if (owlTabs)
    //         owlTabs.reinit();

    //     $('#' + window.currentTab).hide();

    //     window.currentTab = 'home';

    //     //set home tab active
    //     $('.home').addClass('active');
    //     $("#dash").show();

    //     if (!$('#navOptionsRecents').is(':hidden')) {
    //         $('#navOptionsRecents').toggle();
    //         $('.overlay-nav').hide();
    //     }

    //     if (!$('#navHelpMenu').is(':hidden')) {
    //         $('#navHelpMenu').toggle();
    //         $('.overlay-nav').hide();
    //     }

    //     $scope.withoutFlapsRecent = 0;
    // };

    // $scope.customSearchOptions = {
    //     onSelect: function (item) {
    //         $scope.addTabs(item.Code, item.Code);
    //     }
    // };

    // $scope.$on('$destroy', function () {
    //     if (hubBrand) {
    //         hubBrand.stop();
    //     }

    //     if (hubBrand) {
    //         hubBrand = null;
    //     }

    //     if ($logoffTimeOut) {
    //         $timeout.cancel($logoffTimeOut);
    //     }

    // });

    // var selectProperty = function (sc) {

    //     $scope.user = localStorageService.get(localSettings.authorizationDataStorageName);
    //     $scope.user.Brands = sc.IdBrand;
    //     $scope.user.DefaultProperty = sc.IdProperty;
    //     $scope.user.PropertyObj = sc.PropertyObj;
    //     localStorageService.set(localSettings.authorizationDataStorageName, $scope.user);
    //     $scope.goHome();

    //     var model = {};
    //     model.IdUser = $scope.user.userId;
    //     model.IdProperty = $scope.user.DefaultProperty;
    //     model.IsSelected = sc.SetPropDefault;

    //     $http.defaults.headers.common["X-API-PROPERTY-CODE"] = $scope.user.DefaultProperty;
    //     localStorageService.set(window.appHotelOneSettings.currentSelectedHotelCodeStorageName, $scope.user.DefaultProperty);
    //     localStorageService.set(window.appHotelOneSettings.currentSelectedHotelTimeZone, sc.Utc);
    //     window.appHotelOneSettings.currentSelectedHotelCode = $scope.user.DefaultProperty;
    //     userService.setDefaultPropertyOnLogin(model);
    // };

    // var openBrandModal = function () {
    //     modalBrands.OpenBrands($scope.brandsButtons).result.then(function (selectedItem) {
    //         if (selectedItem === null || selectedItem === undefined) {
    //             return;
    //         }
    //         selectProperty(selectedItem);
    //     });
    // };

    // $scope.chooseBrand = function () {
    //     $scope.message = "";
    //     $scope.user = localStorageService.get(localSettings.authorizationDataStorageName);
    //     blockUi.start(window.Translate('msgWaiting'));
    //     userService.getUserBrands($scope.user.userId).then(
    //         function (responseSc) {

    //             $scope.brandsButtons = responseSc.data;
    //             openBrandModal();
    //         },
    //         function (error) {
    //             throw error;
    //         }).finally(function () {
    //             blockUi.stop();
    //         });
    // };

    // $scope.goHome = function () {
    //     $state.go("home");
    //     $scope.$emit('fillLoginDataListener');
    // };

    // $scope.goAllComponents = function () {
    //     $uibModal.open({
    //         animation: true,
    //         templateUrl: localUrl + "/app/views/all-components/all-components.html",
    //         controller: "allComponentsController",
    //         size: "lg",
    //         backdrop: 'static'
    //     });
    // };

    // $scope.changeTheme = function (theme) {
    //     var themeRabbitInn = '/AppSistemas.APPHotelOne.Web/assets/css/style-scss-app-hotel-one.css';
    //     var themeAppHotelOne = '/AppSistemas.APPHotelOne.Web/assets/css/style-scss.css';

    //     var faviconRabbitInn = '/AppSistemas.APPHotelOne.Web/assets/img/favicon-appHotelOne.ico';
    //     var faviconAppHotelOne = '/AppSistemas.APPHotelOne.Web/assets/img/favicon-rabbitInn.ico';

    //     var cssFile, oldlink, favicon;

    //     function changeFavicon(img) {
    //         var favicon = document.querySelector('link[rel="shortcut icon"]');
    //         if (!favicon) {
    //             favicon = document.createElement('link');
    //             favicon.setAttribute('rel', 'shortcut icon');
    //             var head = document.querySelector('head');
    //             head.appendChild(favicon);
    //         }
    //         favicon.setAttribute('type', 'image/png');
    //         favicon.setAttribute('href', img);
    //     }

    //     function changeCssTheme() {
    //         var linksLength = document.getElementsByTagName("link").length;
    //         for (var i = 0; i < linksLength; i++) {
    //             if (document.getElementsByTagName("link")[i].href.search(themeAppHotelOne) > 0 || document.getElementsByTagName("link")[i].href.search(themeRabbitInn) > 0) {

    //                 if (theme === 0) {
    //                     if (document.getElementsByTagName("link")[i].href.search(themeAppHotelOne) > 0) {
    //                         favicon = faviconRabbitInn;
    //                         oldlink = themeAppHotelOne;
    //                         cssFile = themeRabbitInn;
    //                     }
    //                     else {
    //                         favicon = faviconAppHotelOne;
    //                         cssFile = themeAppHotelOne;
    //                         oldlink = themeRabbitInn;
    //                     }
    //                 }
    //                 else if (theme === 1) {
    //                     favicon = faviconRabbitInn;
    //                     oldlink = themeAppHotelOne;
    //                     cssFile = themeRabbitInn;
    //                 }
    //                 else {
    //                     favicon = faviconAppHotelOne;
    //                     cssFile = themeAppHotelOne;
    //                     oldlink = themeRabbitInn;
    //                 }

    //                 oldlink = document.getElementsByTagName("link").item(i);
    //                 break;
    //             }
    //         }

    //         var newlink = document.createElement("link");

    //         newlink.setAttribute("rel", "stylesheet");
    //         newlink.setAttribute("type", "text/css");
    //         newlink.setAttribute("href", cssFile);

    //         document.getElementsByTagName("head")[0].removeChild(oldlink);
    //         document.getElementsByTagName("head")[0].appendChild(newlink);

    //         changeFavicon(favicon);
    //     }

    //     changeCssTheme();
    // };

    // // define a handler
    // function docKeyUp(e) {
    //     // this would test for whichever key is 40 and the ctrl key at the same time
    //     if (e.ctrlKey && e.shiftKey && e.altKey && e.keyCode === 186) {
    //         // call your function to do the thing
    //         $scope.goAllComponents();
    //     }
    //     if (e.ctrlKey && e.shiftKey && e.altKey && e.keyCode === 49) {
    //         // call your function to do the thing
    //         $scope.changeTheme(1);
    //     }
    //     if (e.ctrlKey && e.shiftKey && e.altKey && e.keyCode === 50) {
    //         // call your function to do the thing
    //         $scope.changeTheme(2);
    //     }
    //     if (e.ctrlKey && e.shiftKey && e.altKey && e.keyCode === 84) {
    //         // call your function to do the thing
    //         $scope.changeTheme(0);
    //     }
    // }
    // // register the handler
    // document.addEventListener('keyup', docKeyUp, false);

    // $scope.headerOpenModalReport = function () {
    //     $scope.addTabs('reports', 'reports');
    // };

    // $scope.headerOpenExports = function () {
    //     $scope.addTabs('exports', 'exports');
    // };

    // $scope.headerOpenImport = function () {
    //     $scope.addTabs('import', 'import');
    // };

    // $scope.headerOpenModalDashboard = function () {
    //     var modalInstance = $uibModal.open({
    //         animation: true,
    //         component: "modalDashboardComponent",
    //         size: "home-modal-dashboard",
    //         resolve: {
    //             user: function () {
    //                 return $scope.user.userId;
    //             },
    //             dashboard: ['dashboardService', function (dashboardService) {
    //                 return dashboardService.get();
    //             }]
    //         }
    //     });

    //     modalInstance.result.then(function () {
    //         $scope.$broadcast('fillUserDashboard');
    //     }, function (error) {
    //         throw error;
    //     });
    // };

    // $scope.markRead = function (item) {

    //     blockUi.start(window.Translate('msgWaiting'));
    //     notificationService.markRead(item).then(
    //         function () {
    //             loadNotifications();
    //         },
    //         function (error) {
    //             throw error;
    //         }).finally(function () {
    //             blockUi.stop();
    //         });

    // };

    // $scope.readAll = function () {
    //     blockUi.start(window.Translate('msgWaiting'));
    //     notificationService.readAll().then(
    //         function () {
    //             loadNotifications();
    //         },
    //         function (error) {
    //             throw error;
    //         }).finally(function () {
    //             blockUi.stop();
    //         });
    // };

    // $scope.searchModel = {};

    // $scope.ignoreAccents = function (item) {
    //     if (!$scope.searchModel.search)
    //         return true;
    //     var text = item.Name.toLowerCase().removeAccents();
    //     var search = $scope.searchModel.search.toLowerCase().removeAccents();
    //     return text.indexOf(search) > -1;
    // };

    // $scope.onExit = function () {
    //     authService.removeAuthData();
    //     $scope.user = {};
    //     $scope.configMenu = [];
    //     $scope.defMenu = [];
    //     userProperties = [];
    //     window.appHotelOneSettings.currentSelectedHotelCode = "0";
    // };

    // var authorizationBeforeWindowClose = null;

    // window.onunload = function () {

    //     authorizationBeforeWindowClose = localStorageService.get(localSettings.authorizationDataStorageName);

    //     if ($authsusceptor.isAuth()) {
    //         authService.removeAuthData();
    //         $authsusceptor.Logoff();
    //     }
    // };

    // window.onpagehide = function () {

    //     if (authorizationBeforeWindowClose !== null) {
    //         return;
    //     }

    //     if ($authsusceptor.isAuth()) {
    //         authService.removeAuthData();
    //         $authsusceptor.Logoff();
    //     }
    // };

    // // Menu fixed
    // var didScroll;
    // var lastScrollTop = 0;
    // var delta = 5;
    // var navbarHeight = $('#menuFixo').outerHeight();

    // $(window).scroll(function () {
    //     didScroll = true;
    // });

    // setInterval(function () {
    //     if (didScroll) {
    //         hasScrolled();
    //         didScroll = false;
    //     }
    // }, 1);

    // function hasScrolled() {
    //     var st = $(this).scrollTop();

    //     if (Math.abs(lastScrollTop - st) <= delta)
    //         return;
    //     if (st > lastScrollTop && st > navbarHeight) {
    //         $('#menuFixo').removeClass('box-menu-fixed');
    //         $('#mainContent').removeClass('main-content-padding');
    //     } else {
    //         if (st + $(window).height() < $(document).height()) {
    //             $('#menuFixo').addClass('box-menu-fixed');
    //             $('#mainContent').addClass('main-content-padding');
    //         }
    //     }

    //     lastScrollTop = st;
    // }
};

mainControler.$inject = ['$scope', '$injector', '$uiRouter'];


/* harmony default export */ __webpack_exports__["default"] = (mainControler);

(function ($) {
    $.fn.extend({
        onShow: function (callback, unbind) {
            return this.each(function () {
                var bindopt = (unbind === undefined) ? true : unbind;
                if ($.isFunction(callback)) {
                    if ($(this).is(':hidden')) {
                        var checkVis = function () {
                            if ($(this).is(':visible')) {
                                callback.call(this);
                                if (bindopt) {
                                    $('body').unbind('click keyup keydown', checkVis);
                                }
                            }
                        };
                        $('body').bind('click keyup keydown', checkVis);
                    }
                    else {
                        callback.call(this);
                    }
                }
            });
        }
    });
})(jQuery);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

/******/ });
//# sourceMappingURL=oneapp.js.map