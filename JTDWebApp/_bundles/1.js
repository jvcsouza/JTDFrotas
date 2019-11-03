(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./app/modules/teste/teste.component.js":
/*!**********************************************!*\
  !*** ./app/modules/teste/teste.component.js ***!
  \**********************************************/
/*! exports provided: testeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testeComponent", function() { return testeComponent; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);


const testeComponent = {
	template: __webpack_require__(/*! ./teste.html */ "./app/modules/teste/teste.html"),
	controller: ['$scope','$uiRouter', function ($scope, $uiRouter){
		$scope.hello = "Hello";
		var $deepStateRedirect = $uiRouter._plugins["deep-state-redirect"];
		console.log($scope);
	}]
};

/***/ }),

/***/ "./app/modules/teste/teste.html":
/*!**************************************!*\
  !*** ./app/modules/teste/teste.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t<body>\r\n\t\t<div class=\"card\">\r\n\t\t\t\r\n\t  <div class=\"card-body\">\r\n\t  \t<div class=\"card-title\">\r\n\t    <h5> {{hello}} Mundo!</h5>\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\t<div> O</div>\r\n\t  </div>\r\n\t</div>\r\n\t</body>";

/***/ }),

/***/ "./app/modules/teste/teste.module.js":
/*!*******************************************!*\
  !*** ./app/modules/teste/teste.module.js ***!
  \*******************************************/
/*! exports provided: TESTE_MODULE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TESTE_MODULE", function() { return TESTE_MODULE; });
/* harmony import */ var _teste_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teste.component */ "./app/modules/teste/teste.component.js");
/* harmony import */ var _teste_states__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teste.states */ "./app/modules/teste/teste.states.js");

//import { nightAuditService } from "./nightAudit.service";


const TESTE_MODULE = angular.module('teste.module', []);

TESTE_MODULE.component('testeComponent', _teste_component__WEBPACK_IMPORTED_MODULE_0__["testeComponent"]);

TESTE_MODULE.config(['$uiRouterProvider', function ($uiRouterProvider) {    
    var stateRegistry = $uiRouterProvider.stateRegistry;
    stateRegistry.register(_teste_states__WEBPACK_IMPORTED_MODULE_1__["testeState"]);
    stateRegistry.register(_teste_states__WEBPACK_IMPORTED_MODULE_1__["testesTState"]);
}]);

/***/ }),

/***/ "./app/modules/teste/teste.states.js":
/*!*******************************************!*\
  !*** ./app/modules/teste/teste.states.js ***!
  \*******************************************/
/*! exports provided: testeState, testesTState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testeState", function() { return testeState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testesTState", function() { return testesTState; });
const testeState = {
	parent:'app',
	name: 'testes',
	url: '/testes',
	dsr: true,
	sticky: true,
	views: {
		'viewTeste':{
			template: '<div ui-view="viewT"></div>'
		}
	},
	deepStateRedirect: {
        default: { state: 'testes.te' }
    }
};

const testesTState = {
	name: 'testes.te',
	views: {
		'viewT': {
			component: 'testeComponent'
		}
	}
};




/***/ })

}]);
//# sourceMappingURL=1.js.map