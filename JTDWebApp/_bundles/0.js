(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./app/modules/travel/travel-detail.component.js":
/*!*******************************************************!*\
  !*** ./app/modules/travel/travel-detail.component.js ***!
  \*******************************************************/
/*! exports provided: travelDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "travelDetailComponent", function() { return travelDetailComponent; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
﻿

const travelDetailComponent = {
    bindings: {
        dados: '<'
    },
    template: __webpack_require__(/*! ./travel-detail.html */ "./app/modules/travel/travel-detail.html"),
    controller: ['$scope', '$stateParams', 'travelServices', '$state',
        ($scope, $stateParams, travelServices, $state) => {

            var scopeId = $stateParams.id;
            if (scopeId != 0)
                travelServices.getTravel(scopedId)
                    .success(rs => $scope.travel = rs);

            $scope.cancel = () => $state.go('travels.list');

            $scope.user = {
                title: 'Developer',
                email: 'ipsum@lorem.com',
                firstName: '',
                lastName: '',
                company: 'Google',
                address: '1600 Amphitheatre Pkwy',
                city: 'Mountain View',
                state: 'CA',
                biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
                postalCode: '94043'
            };

            $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
                'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
                'WY').split(' ').map(function (state) {
                    return { abbrev: state };
                });

        }],
};

/***/ }),

/***/ "./app/modules/travel/travel-detail.html":
/*!***********************************************!*\
  !*** ./app/modules/travel/travel-detail.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<h4>Registro Viagem</h4>-->\r\n<!--<br />-->\r\n<form>\r\n    <div class=\"card mb-3\">\r\n        <div class=\"card-body pb-0 pt-2\">\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col\">\r\n                    <label for=\"client\">Cliente:</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"client\" placeholder=\"Insira o nome de um cliente\">\r\n                    <small id=\"client\" class=\"form-text text-muted\">\r\n                        <a href=\"#\">Clique aqui para cadastra com CNPJ</a>\r\n                    </small>\r\n                </div>\r\n                <div class=\"form-group col\">\r\n                    <label for=\"client\">CNPJ:</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"client\" disabled placeholder=\"Cadastro nacional de pessoa juridica\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col\">\r\n                    <label for=\"origin\">Origem:</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"origin\" placeholder=\"Origem\">\r\n                    <small id=\"origin\" class=\"form-text text-muted\"><a href=\"#cep\">Buscar por CEP</a></small>\r\n                </div>\r\n                <div class=\"form-group col\">\r\n                    <label for=\"destiny\">Destino:</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"destiny\" placeholder=\"Destino\">\r\n                    <small id=\"destiny\" class=\"form-text text-muted\"><a href=\"#cep\">Buscar por CEP</a></small>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row float-right\">\r\n        <a href=\"#\" class=\"btn btn-primary\">Salvar</a>\r\n        <button ng-click=\"cancel()\" class=\"btn btn-outline-secondary\">Cancelar</button>\r\n    </div>\r\n</form>";

/***/ }),

/***/ "./app/modules/travel/travel-list.component.js":
/*!*****************************************************!*\
  !*** ./app/modules/travel/travel-list.component.js ***!
  \*****************************************************/
/*! exports provided: travelListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "travelListComponent", function() { return travelListComponent; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
﻿

const travelListComponent = {
    bindings: {
        dados: '<'
    },
    template: __webpack_require__(/*! ./travel-list.html */ "./app/modules/travel/travel-list.html"),
    controller: ['$scope', '$stateParams', 'travelServices', '$state', '$injector'
        , function ($scope, $stateParams, travelServices, $state, $injector) {
            console.log(this);
            $scope.companies = [];
            $scope.RedirectToDetail = () => $state.go("travels.detail", { id: 0 });
        }]
};

/***/ }),

/***/ "./app/modules/travel/travel-list.html":
/*!*********************************************!*\
  !*** ./app/modules/travel/travel-list.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-between row flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">\r\n    <h3 class=\"col-sm-8 font-weight-light\">Viagens</h3>\r\n    <div class=\"btn-toolbar col-xs-4\">\r\n        <div class=\"btn-block\">\r\n            <button type=\"button\"\r\n                    class=\"\r\n                       btn pmd-ripple-effect pmd-btn-outline btn-sm pmd-btn-raised\r\n                       pmd-ripple-effect btn-default\"\r\n                    ng-click=\"RedirectToDetail()\">\r\n                Nova Viagem\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"table-responsive\">\r\n    <table class=\"table table-hover table-striped table-sm table-bordered\">\r\n        <thead class=\"thead-dark\">\r\n            <tr class=\"text-center\">\r\n                <th>#</th>\r\n                <th>Nome</th>\r\n                <th>CNPJ</th>\r\n                <th>Cidade</th>\r\n                <th>Telefone</th>\r\n                <th>Ativo</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr ng-if=\"companies.length > 0\" ng-repeat=\"com in companies\" class=\"text-center\">\r\n                <td ng-click=\"teste(com.FantasyName)\"><a href=\"#companies\">{{com.Id}}</a></td>\r\n                <td>{{com.FantasyName}}</td>\r\n                <td>{{com.Cnpj}}</td>\r\n                <td>{{com.City}}</td>\r\n                <td>{{com.Phone}}</td>\r\n                <td><input type=\"checkbox\" ng-disabled=true ng-checked=\"com.Act\"></td>\r\n            </tr>\r\n            <tr>\r\n                <td ng-if=\"companies.length == 0\" class=\"text-center\" colspan=\"6\">Não existem dados...</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n";

/***/ }),

/***/ "./app/modules/travel/travel.module.js":
/*!*********************************************!*\
  !*** ./app/modules/travel/travel.module.js ***!
  \*********************************************/
/*! exports provided: TRAVEL_MODULE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRAVEL_MODULE", function() { return TRAVEL_MODULE; });
/* harmony import */ var _travel_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./travel-detail.component */ "./app/modules/travel/travel-detail.component.js");
/* harmony import */ var _travel_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./travel-list.component */ "./app/modules/travel/travel-list.component.js");
/* harmony import */ var _travel_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./travel.services */ "./app/modules/travel/travel.services.js");
/* harmony import */ var _travel_states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./travel.states */ "./app/modules/travel/travel.states.js");
﻿






const TRAVEL_MODULE = angular.module('travel.module', []);

TRAVEL_MODULE.service('travelServices', _travel_services__WEBPACK_IMPORTED_MODULE_2__["travelServices"]);

TRAVEL_MODULE.component('travelDetailComponent', _travel_detail_component__WEBPACK_IMPORTED_MODULE_0__["travelDetailComponent"]);
TRAVEL_MODULE.component('travelListComponent', _travel_list_component__WEBPACK_IMPORTED_MODULE_1__["travelListComponent"]);

TRAVEL_MODULE.config(['$uiRouterProvider', function ($uiRouterProvider) {
    var stateRegistry = $uiRouterProvider.stateRegistry;
    stateRegistry.register(_travel_states__WEBPACK_IMPORTED_MODULE_3__["travelState"]);
    stateRegistry.register(_travel_states__WEBPACK_IMPORTED_MODULE_3__["travelDetailState"]);
    stateRegistry.register(_travel_states__WEBPACK_IMPORTED_MODULE_3__["travelListState"]);
}]);

/***/ }),

/***/ "./app/modules/travel/travel.services.js":
/*!***********************************************!*\
  !*** ./app/modules/travel/travel.services.js ***!
  \***********************************************/
/*! exports provided: travelServices, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "travelServices", function() { return travelServices; });
﻿travelServices.$inject = ['$http'];

function travelServices($http) {

    var api = window.location.origin + window.location.pathname + 'api/';
    var service = {};

    service.getTravels = () => $http.get(api + 'travel/');

    service.getTravel = (id) => $http.get(api + 'travel/' + id);

    return service;
}

/* harmony default export */ __webpack_exports__["default"] = (angular.module('services.travelServices', [])
    .service('travelServices', travelServices).name);


/***/ }),

/***/ "./app/modules/travel/travel.states.js":
/*!*********************************************!*\
  !*** ./app/modules/travel/travel.states.js ***!
  \*********************************************/
/*! exports provided: travelState, travelDetailState, travelListState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "travelState", function() { return travelState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "travelDetailState", function() { return travelDetailState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "travelListState", function() { return travelListState; });
﻿const travelState = {
    parent: 'app',
    name: 'travels',
    url: '/travels',
    dsr: true,
    views: {
        'viewTravel': {
            template: '<div ui-view="viewList"></div><div ui-view="viewDetail"></div>',
        }
    },
    deepStateRedirect: {
        default: { state: 'travels.list' }
    }
};

const travelDetailState = {
    name: 'travels.detail',
    url: '/:id',
    views: {
        'viewDetail': {
            component: 'travelDetailComponent',
        }
    },
};

const travelListState = {
    name: 'travels.list',
    views: {
        'viewList': {
            component: 'travelListComponent',
        },
    }
};

/***/ })

}]);
//# sourceMappingURL=0.js.map