(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./app/modules/main/main.module.js":
/*!*****************************************!*\
  !*** ./app/modules/main/main.module.js ***!
  \*****************************************/
/*! exports provided: MAIN_MODULE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAIN_MODULE", function() { return MAIN_MODULE; });
/* harmony import */ var _main_states__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.states */ "./app/modules/main/main.states.js");


const MAIN_MODULE = angular.module("main.module", []);

MAIN_MODULE.directive('compile', ['$compile', function ($compile) {
    return function (scope, element, attrs) {
        var $watchCompile = scope.$watch(
            function compileWatch (scope) {
                // watch the 'compile' expression for changes
                return scope.$eval(attrs.compile);
            },
            function (value, oldValue) {

                if (value !== oldValue && value !== "") {
                    // when the 'compile' expression changes
                    // assign it into the current DOM
                    element.html(value);

                    // compile the new DOM and link it to the current
                    // scope.
                    // NOTE: we only compile .childNodes so that
                    // we don't get into infinite loop compiling ourselves
                    $compile(element.contents())(scope);
                    //$watchCompile();
                }
            }
        );

        scope.$on('$destoy', function () {
            if ($watchCompile) {
                $watchCompile();
            }
        });
    };
}]);

MAIN_MODULE.config(['$uiRouterProvider', function ($uiRouterProvider) {
    var stateRegistry = $uiRouterProvider.stateRegistry;
    stateRegistry.register(_main_states__WEBPACK_IMPORTED_MODULE_0__["mainState"]);
    stateRegistry.register(_main_states__WEBPACK_IMPORTED_MODULE_0__["mainDetailState"]);
    stateRegistry.register(_main_states__WEBPACK_IMPORTED_MODULE_0__["mainListState"]);
}]);


/***/ }),

/***/ "./app/modules/main/main.states.js":
/*!*****************************************!*\
  !*** ./app/modules/main/main.states.js ***!
  \*****************************************/
/*! exports provided: mainState, mainDetailState, mainListState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainState", function() { return mainState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainDetailState", function() { return mainDetailState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainListState", function() { return mainListState; });
﻿const mainState = {
    parent: 'app',
    name: 'dashboard',
    url: "/dashboard",
    dsr: true,
    sticky: true,
    views: {
        "viewDashboard": {
            template: '<div ui-view="viewList"></div><div ui-view="viewDetail"></div>'
        }
    },
    deepStateRedirect: {
        default: { state: 'dashboard.list' }
    }
};

const mainDetailState = {
    name: 'login',
    url: "/login",
    cache: false,
    component: "loginComponent",
    data: {
        requireLogin: true
    }
};

const mainListState = {
    name: 'dashboard.list',
    views: {
        'viewList': {
            component: "dashboardComponent"
        }
    }
};


/***/ })

}]);
//# sourceMappingURL=6.js.map