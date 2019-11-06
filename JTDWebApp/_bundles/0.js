(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./app/modules/company/company-list.component.js":
/*!*******************************************************!*\
  !*** ./app/modules/company/company-list.component.js ***!
  \*******************************************************/
/*! exports provided: companyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "companyListComponent", function() { return companyListComponent; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);


const companyListComponent = {
	template: __webpack_require__(/*! ./company-list.html */ "./app/modules/company/company-list.html"),
	controller: ['$scope','companyServices', ($scope, companyServices) => {
		$scope.hello = "Hello";

		// console.log(companyServices);

		$scope.teste = (t) => alert("Editando usuario: " + t);

		companyServices.getCompanies()
		.success(r => $scope.companies = r)
		.error(e => console.log(e));
	}]
};

/***/ }),

/***/ "./app/modules/company/company-list.html":
/*!***********************************************!*\
  !*** ./app/modules/company/company-list.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Companias</h3>\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-striped table-sm\">\r\n          <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th>Nome</th>\r\n              <th>Cidade</th>\r\n\t\t\t  <th>Endereço</th>\r\n\t\t\t  <th>Número</th>\r\n              <th>Ativo</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr ng-repeat=\"com in companies\">\r\n              <td ng-click=\"teste(com.Name)\"><a href=\"#companies\">{{com.Id}}</a></td>\r\n              <td>{{com.Name}}</td>\r\n              <td>{{com.Cities}}</td>\r\n\t\t\t  <td>{{com.Address}}</td>\r\n\t\t\t  <td>{{com.Number}}</td>\r\n              <td><input type=\"checkbox\" ng-disabled=true ng-checked=\"com.Act\"></td>\r\n\t\t\t</tr>\r\n          </tbody>\r\n        </table>\r\n      </div>";

/***/ }),

/***/ "./app/modules/company/company.module.js":
/*!***********************************************!*\
  !*** ./app/modules/company/company.module.js ***!
  \***********************************************/
/*! exports provided: COMPANY_MODULE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPANY_MODULE", function() { return COMPANY_MODULE; });
/* harmony import */ var _company_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company-list.component */ "./app/modules/company/company-list.component.js");
/* harmony import */ var _company_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company.services */ "./app/modules/company/company.services.js");
/* harmony import */ var _company_states__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company.states */ "./app/modules/company/company.states.js");






const COMPANY_MODULE = angular.module('company.module', []);

COMPANY_MODULE.service('companyServices',_company_services__WEBPACK_IMPORTED_MODULE_1__["companyServices"]);

COMPANY_MODULE.component('companyListComponent', _company_list_component__WEBPACK_IMPORTED_MODULE_0__["companyListComponent"]);

COMPANY_MODULE.config(['$uiRouterProvider', function ($uiRouterProvider) {    
    var stateRegistry = $uiRouterProvider.stateRegistry;
    stateRegistry.register(_company_states__WEBPACK_IMPORTED_MODULE_2__["companyState"]);
    stateRegistry.register(_company_states__WEBPACK_IMPORTED_MODULE_2__["companyListState"]);
}]);

/***/ }),

/***/ "./app/modules/company/company.services.js":
/*!*************************************************!*\
  !*** ./app/modules/company/company.services.js ***!
  \*************************************************/
/*! exports provided: companyServices, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "companyServices", function() { return companyServices; });
companyServices.$inject = ['$http'];

function companyServices($http) {

    var api = window.location.origin + window.location.pathname + 'api/';
    var service = {};

    service.getCompanies = () => $http.get(api + 'Company/');

    return service;
}

/* harmony default export */ __webpack_exports__["default"] = (angular.module('services.companyServices', [])
    .service('companyServices', companyServices).name);


/***/ }),

/***/ "./app/modules/company/company.states.js":
/*!***********************************************!*\
  !*** ./app/modules/company/company.states.js ***!
  \***********************************************/
/*! exports provided: companyState, companyListState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "companyState", function() { return companyState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "companyListState", function() { return companyListState; });
const companyState = {
	parent:'app',
	name: 'companies',
	url: '/companies',
	dsr: true,
	sticky: true,
	views: {
		'viewCompany':{
			template: '<div ui-view="viewList"></div><div ui-view="viewDetail"></div>'
		}
	},
	deepStateRedirect: {
        default: { state: 'companies.list' }
    }
};

const companyListState = {
	name: 'companies.list',
	views: {
		'viewList': {
			component: 'companyListComponent'
		}
	}
};




/***/ })

}]);
//# sourceMappingURL=0.js.map