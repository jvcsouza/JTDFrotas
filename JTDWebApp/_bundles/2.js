(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./app/modules/vehicle/vehicle-detail.component.js":
/*!*********************************************************!*\
  !*** ./app/modules/vehicle/vehicle-detail.component.js ***!
  \*********************************************************/
/*! exports provided: vehicleDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vehicleDetailComponent", function() { return vehicleDetailComponent; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
﻿

const vehicleDetailComponent = {
  bindings: {
    dados: "<"
  },
  template: __webpack_require__(/*! ./vehicle-detail.html */ "./app/modules/vehicle/vehicle-detail.html"),
  controller: ["$scope", ($scope, $stateParams, vehicleServices, $state) => {}]
};


/***/ }),

/***/ "./app/modules/vehicle/vehicle-detail.html":
/*!*************************************************!*\
  !*** ./app/modules/vehicle/vehicle-detail.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card row shadow-sm px-2\">\r\n    <form class=\"col pl-0\">\r\n        <div class=\"card-body pt-2\">\r\n            <div class=\"card-title m-3\">\r\n                <h4 class=\"h4 font-weight-light\">Registro Viagem</h4>\r\n            </div>\r\n            <div class=\"row container\">\r\n                <div class=\"col-sm-6 py-4\">\r\n                    <div class=\"form-group col\">\r\n                        <label for=\"client\">Cliente:</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"client\" ng-model=\"company\"\r\n                            placeholder=\"Insira o nome de um cliente\">\r\n                        <small id=\"client\" class=\"form-text text-muted\">\r\n                            <a href=\"javascript:\" ng-click=\"openModalCnpj()\">Clique aqui para cadastrar com CNPJ</a>\r\n                        </small>\r\n                    </div>\r\n                    <div class=\"form-group col\">\r\n                        <label for=\"orig\">Origem:</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"orig\" ng-model=\"origin\" placeholder=\"Origem\">\r\n                        <small id=\"orig\" class=\"form-text text-muted\">\r\n                            <a href=\"javascript:\" ng-class=\"{'text-muted': !originCep }\"\r\n                                ng-click=\"originCep = !originCep\">Buscar por CEP</a>\r\n                        </small>\r\n                    </div>\r\n                    <div class=\"form-group col\">\r\n                        <label for=\"destination\">Destino:</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"destination\" ng-model=\"destiny\"\r\n                            placeholder=\"Destino\">\r\n                        <small id=\"destination\" class=\"form-text text-muted\">\r\n                            <a href=\"javascript:\" ng-class=\"{'text-muted': !destinyCep }\"\r\n                                ng-click=\"destinyCep = !destinyCep\">Buscar por CEP</a>\r\n                        </small>\r\n                    </div>\r\n                    <div class=\"row float-right mr-1\">\r\n                        <button ng-click=\"updateMaps(origin, destiny)\"\r\n                            ng-disabled=\"!(destiny.length > 0 && origin.length > 0 && company.length > 0)\"\r\n                            class=\"btn btn-primary ml-1\">Atualizar</button>\r\n                        <button ng-click=\"cancel()\" class=\"btn btn-outline-secondary ml-1\">Cancelar</button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"card col col-sm-12 h-100 shadow-sm\">\r\n                        <div class=\"row h-100\">\r\n                            <div id=\"map\" class=\"col-sm-12\" style=\"overflow: hidden;\"></div>\r\n                        </div>\r\n                        <div class=\"card-body py-3 px-0\">\r\n                            <div class=\"col no-wrap px-0\">\r\n                                <label for=\"\">Cliente: </label>\r\n                                <strong class=\"text-truncate\">{{card.Company}}</strong>\r\n                            </div>\r\n                            <!-- <div class=\"row\"> -->\r\n                            <div class=\"col no-wrap px-0\">\r\n                                <label for=\"\">De: </label>\r\n                                <strong class=\"text-truncate\">{{card.Origin}}</strong>\r\n                            </div>\r\n                            <div class=\"col no-wrap px-0\">\r\n                                <label for=\"\">Para: </label>\r\n                                <strong class=\"text-truncate\">{{card.Destiny}}</strong>\r\n                            </div>\r\n                            <!-- </div> -->\r\n                            <!-- <div class=\"row\"> -->\r\n                            <div class=\"col no-wrap px-0\">\r\n                                <label for=\"\">Km total: </label>\r\n                                <strong>{{card.Distance}}</strong>\r\n                            </div>\r\n                            <div class=\"col no-wrap px-0\">\r\n                                <label for=\"\">Duração: </label>\r\n                                <strong class=\"text-truncate\">{{card.Duration}}</strong>\r\n                            </div>\r\n                            <!-- </div> -->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n</div>\r\n</form>\r\n</div>\r\n</div>\r\n\r\n<div class=\"card row mt-3\">\r\n    <div class=\"card-body pb-0 pt-2\">\r\n        <div class=\"card-title m-3\">\r\n            <h4 class=\"h4 font-weight-light\">Veiculos/Motoristas</h4>\r\n        </div>\r\n        <div class=\"row container justify-content-around mb-3\">\r\n            <div class=\"card col col-7\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"d-flex flex-row justify-content-around\">\r\n                        <div class=\"form-group col\">\r\n                            <label for=\"exampleFormControlSelect1\">Veiculos</label>\r\n                            <input list=\"browsers\" class=\"form-control\">\r\n                            <datalist id=\"browsers\">\r\n                                <option value=\"Internet Explorer\">\r\n                                <option value=\"Firefox\">\r\n                                <option value=\"Chrome\">\r\n                                <option value=\"Opera\">\r\n                                <option value=\"Safari\">\r\n                            </datalist>\r\n                        </div>\r\n                        <div class=\"form-group col\">\r\n                            <label for=\"exampleFormControlSelect1\">Motoristas</label>\r\n                            <input list=\"browsers\" class=\"form-control\">\r\n                            <datalist id=\"browsers\">\r\n                                <option value=\"Internet Explorer\">\r\n                                <option value=\"Firefox\">\r\n                                <option value=\"Chrome\">\r\n                                <option value=\"Opera\">\r\n                                <option value=\"Safari\">\r\n                            </datalist>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row d-flex justify-content-end pr-4\">\r\n                        <button class=\"btn btn-sm btn-primary col-2 mr-1\">Incluir</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card col col-4 px-0 py-0\">\r\n                <div class=\"card-body pt-0 px-0 overflow-auto\">\r\n                    <table class=\"table table-striped h-25\">\r\n                        <thead class=\"shadow-sm text-center\">\r\n                            <tr>\r\n                                <th>Veic.</th>\r\n                                <th>Moto.</th>\r\n                                <th>Cust.</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody class=\"overflow-auto text-center h-75\">\r\n                            <tr>\r\n                                <td>AHS-1451</td>\r\n                                <td>Marcio</td>\r\n                                <td>$20,6</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>AHS-1451</td>\r\n                                <td>Marcio</td>\r\n                                <td>$20,6</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>AHS-1451</td>\r\n                                <td>Marcio</td>\r\n                                <td>$20,6</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>AHS-1451</td>\r\n                                <td>Marcio</td>\r\n                                <td>$20,6</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>AHS-1451</td>\r\n                                <td>Marcio</td>\r\n                                <td>$20,6</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>AHS-1451</td>\r\n                                <td>Marcio</td>\r\n                                <td>$20,6</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n<div class=\"card row mt-3\">\r\n    <div class=\"card-body pb-0 pt-2\">\r\n        <div class=\"card-title m-3\">\r\n            <h4 class=\"h4 font-weight-light\">Orçamento</h4>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ }),

/***/ "./app/modules/vehicle/vehicle-list.component.js":
/*!*******************************************************!*\
  !*** ./app/modules/vehicle/vehicle-list.component.js ***!
  \*******************************************************/
/*! exports provided: vehicleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vehicleListComponent", function() { return vehicleListComponent; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
﻿

const vehicleListComponent = {
    bindings: {
        dados: '<'
    },
    template: __webpack_require__(/*! ./vehicle-list.html */ "./app/modules/vehicle/vehicle-list.html"),
    controller: ['$scope', '$stateParams', 'vehicleServices', '$state', '$injector'
        , function ($scope, $stateParams, vehicleServices, $state, $injector) {
            console.log(this);
            $scope.companies = [];
            $scope.RedirectToDetail = () => $state.go("vehicles.detail", { id: 0 });
        }]
};

/***/ }),

/***/ "./app/modules/vehicle/vehicle-list.html":
/*!***********************************************!*\
  !*** ./app/modules/vehicle/vehicle-list.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-between row flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">\r\n    <h3 class=\"col-sm-8 font-weight-light\">Veículos</h3>\r\n    <div class=\"btn-toolbar col-xs-4\">\r\n        <div class=\"btn-block\">\r\n            <button type=\"button\"\r\n                    class=\"\r\n                       btn pmd-btn-outline btn-sm pmd-btn-raised\r\n                       btn-default\"\r\n                    ng-click=\"RedirectToDetail()\">\r\n                Novo Veículo\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"table-responsive\">\r\n    <table class=\"table table-hover table-striped table-sm table-bordered\">\r\n        <thead class=\"thead-dark\">\r\n            <tr class=\"text-center\">\r\n                <th>#</th>\r\n                <th>Nome</th>\r\n                <th>CNPJ</th>\r\n                <th>Cidade</th>\r\n                <th>Telefone</th>\r\n                <th>Ativo</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr ng-if=\"companies.length > 0\" ng-repeat=\"com in companies\" class=\"text-center\">\r\n                <td ng-click=\"teste(com.FantasyName)\"><a href=\"#companies\">{{com.Id}}</a></td>\r\n                <td>{{com.FantasyName}}</td>\r\n                <td>{{com.Cnpj}}</td>\r\n                <td>{{com.City}}</td>\r\n                <td>{{com.Phone}}</td>\r\n                <td><input type=\"checkbox\" ng-disabled=true ng-checked=\"com.Act\"></td>\r\n            </tr>\r\n            <tr>\r\n                <td ng-if=\"companies.length == 0\" class=\"text-center\" colspan=\"6\">Não existem dados...</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n";

/***/ }),

/***/ "./app/modules/vehicle/vehicle.module.js":
/*!***********************************************!*\
  !*** ./app/modules/vehicle/vehicle.module.js ***!
  \***********************************************/
/*! exports provided: VEHICLE_MODULE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VEHICLE_MODULE", function() { return VEHICLE_MODULE; });
/* harmony import */ var _vehicle_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehicle-detail.component */ "./app/modules/vehicle/vehicle-detail.component.js");
/* harmony import */ var _vehicle_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vehicle-list.component */ "./app/modules/vehicle/vehicle-list.component.js");
/* harmony import */ var _vehicle_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vehicle.services */ "./app/modules/vehicle/vehicle.services.js");
/* harmony import */ var _vehicle_states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vehicle.states */ "./app/modules/vehicle/vehicle.states.js");
﻿






const VEHICLE_MODULE = angular.module('vehicle.module', []);

VEHICLE_MODULE.service('vehicleServices', _vehicle_services__WEBPACK_IMPORTED_MODULE_2__["vehicleServices"]);

VEHICLE_MODULE.component('vehicleDetailComponent', _vehicle_detail_component__WEBPACK_IMPORTED_MODULE_0__["vehicleDetailComponent"]);
VEHICLE_MODULE.component('vehicleListComponent', _vehicle_list_component__WEBPACK_IMPORTED_MODULE_1__["vehicleListComponent"]);

VEHICLE_MODULE.config(['$uiRouterProvider', function ($uiRouterProvider) {
    var stateRegistry = $uiRouterProvider.stateRegistry;
    stateRegistry.register(_vehicle_states__WEBPACK_IMPORTED_MODULE_3__["vehicleState"]);
    stateRegistry.register(_vehicle_states__WEBPACK_IMPORTED_MODULE_3__["vehicleDetailState"]);
    stateRegistry.register(_vehicle_states__WEBPACK_IMPORTED_MODULE_3__["vehicleListState"]);
}]);

/***/ }),

/***/ "./app/modules/vehicle/vehicle.services.js":
/*!*************************************************!*\
  !*** ./app/modules/vehicle/vehicle.services.js ***!
  \*************************************************/
/*! exports provided: vehicleServices, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vehicleServices", function() { return vehicleServices; });
﻿vehicleServices.$inject = ['$http'];

function vehicleServices($http) {

    var api = window.location.origin + window.location.pathname + 'api/';
    var service = {};

    service.getTravels = () => $http.get(api + 'vehicle/');

    service.getTravel = (id) => $http.get(api + 'vehicle/' + id);

    service.getCities = () => $http.get(api + 'city/GetCities');

    service.getCompanies = (name) => $http.get(api + 'Company/GetCompaniesWithParams/' + name);

    service.GetDirections = (model) => $http.get(api + 'integrations/maps/direction?' + $.param(model));

    return service;
}

/* harmony default export */ __webpack_exports__["default"] = (angular.module('services.vehicleServices', [])
    .service('vehicleServices', vehicleServices).name);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./app/modules/vehicle/vehicle.states.js":
/*!***********************************************!*\
  !*** ./app/modules/vehicle/vehicle.states.js ***!
  \***********************************************/
/*! exports provided: vehicleState, vehicleDetailState, vehicleListState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vehicleState", function() { return vehicleState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vehicleDetailState", function() { return vehicleDetailState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vehicleListState", function() { return vehicleListState; });
﻿const vehicleState = {
    parent: 'app',
    name: 'vehicles',
    url: '/vehicles',
    dsr: true,
    views: {
        'viewVehicle': {
            template: '<div ui-view="viewList"></div><div ui-view="viewDetail"></div>',
        }
    },
    deepStateRedirect: {
        default: { state: 'vehicles.list' }
    }
};

const vehicleDetailState = {
    name: 'vehicles.detail',
    url: '/:id',
    views: {
        'viewDetail': {
            component: 'vehicleDetailComponent',
        }
    },
};

const vehicleListState = {
    name: 'vehicles.list',
    views: {
        'viewList': {
            component: 'vehicleListComponent',
        },
    }
};

/***/ })

}]);
//# sourceMappingURL=2.js.map