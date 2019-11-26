(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./app/modules/travel/travel-detail.component.js":
/*!*******************************************************!*\
  !*** ./app/modules/travel/travel-detail.component.js ***!
  \*******************************************************/
/*! exports provided: travelDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "travelDetailComponent", function() { return travelDetailComponent; });
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

            var divMap = document.getElementById('map');
            var directionsService = {};
            var directionsRenderer = {};
            $scope.travel = {};

            var scopeId = $stateParams.id;
            if (scopeId != 0)
                travelServices.getTravel(scopedId)
                    .success(rs => $scope.travel = rs);

            $scope.initMap = () => {
                directionsService = new window.google.maps.DirectionsService();
                directionsRenderer = new window.google.maps.DirectionsRenderer();
                var map = new window.google.maps.Map(divMap, {
                    zoom: 7,
                    center: { lat: 41.85, lng: -87.65 }
                });
                directionsRenderer.setMap(map);

                $('#map').animate({ width: '100%', height: '100%' });
            }

            $scope.updateMaps = (origin, destiny) => {

                var request = {
                    origin: new window.google.maps.LatLng(origin.lat, origin.lng),
                    destination: new window.google.maps.LatLng(destiny.lat, destiny.lng),
                    travelMode: 'DRIVING'
                }

                directionsService.route(request, (response, status) => {
                    if (status === 'OK')
                        directionsRenderer.setDirections(response);
                });
            }

            $scope.cancel = () => $state.go('travels.list');

            var searchCNPJ = (cnpj) =>
                companyServices.searchCnpj(cnpj)
                    .then(rs => {
                        if (!rs)
                            throw rs;
                        return rs;
                    });

            var saveCompany = company =>
                companyServices.saveCompany(company)
                    .then(rs => {
                        Toast.fire({
                            icon: "success",
                            title: "Operacao Concluida!",
                        });
                        getCompanies();
                        return rs;
                    });

            var CNPJIsValid = (value) => {
                var cnpj = value.replace(/[\.\-//]?/g, '');

                if (/[\D]/g.test(cnpj))
                    return 'O CNPJ deve conter apenas numeros.';

                if (cnpj.length !== 14)
                    return 'O valor informado nao e um CNPJ valido.';
            };

            $scope.openModalCnpj = () => {
                Swal.fire({
                    title: 'Informe o CNPJ da empresa abaixo: ',
                    input: 'text',
                    inputAttributes: {
                        autocapitalize: 'off',
                        'ui-br-cnpj-mask': 'ui-br-cnpj-mask',
                        'max-length': 18
                    },
                    customClass: {
                        input: 'ml-5 mr-5 w-75'
                    },
                    showCancelButton: true,
                    confirmButtonText: 'Buscar',
                    showLoaderOnConfirm: true,
                    inputValidator: CNPJIsValid,
                    preConfirm: searchCNPJ,
                    allowOutsideClick: () => !Swal.isLoading()
                })
                    .then((result) => {
                        if (result.value.status === 200) {
                            Swal.fire({
                                title: `CNPJ Encontrado!`,
                                text: `${result.value.data.FantasyName || result.value.data.Person.Name}`,
                                icon: 'info',
                                showCancelButton: true,
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#d33',
                                cancelButtonText: 'Esta errado, quero cancelar.',
                                confirmButtonText: 'Esta correto, pode salvar.',
                                preConfirm: () => saveCompany(result.value.data),
                            });
                        }
                    })
            }
        }],
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./app/modules/travel/travel-detail.html":
/*!***********************************************!*\
  !*** ./app/modules/travel/travel-detail.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card row shadow-sm px-2\">\r\n    <form class=\"col pl-0\">\r\n        <div class=\"card-body pt-2\">\r\n            <div class=\"card-title m-3\">\r\n                <h4 class=\"h4 font-weight-light\">Registro Viagem</h4>\r\n            </div>\r\n            <div class=\"row container\">\r\n                <div class=\"col-sm-6 py-4\">\r\n                    <div class=\"form-group col\">\r\n                        <label for=\"client\">Cliente:</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"client\" placeholder=\"Insira o nome de um cliente\">\r\n                        <small id=\"client\" class=\"form-text text-muted\">\r\n                            <a href=\"javascript:\" ng-click=\"openModalCnpj()\">Clique aqui para cadastrar com CNPJ</a>\r\n                        </small>\r\n                    </div>\r\n                    <div class=\"form-group col\">\r\n                        <label for=\"origin\">Origem:</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"origin\" placeholder=\"Origem\">\r\n                        <small id=\"origin\" class=\"form-text text-muted\"><a href=\"#cep\">Buscar por CEP</a></small>\r\n                    </div>\r\n                    <div class=\"form-group col\">\r\n                        <label for=\"destiny\">Destino:</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"destiny\" placeholder=\"Destino\">\r\n                        <small id=\"destiny\" class=\"form-text text-muted\"><a href=\"#cep\">Buscar por CEP</a></small>\r\n                    </div>\r\n                    <div class=\"row float-right mr-1\">\r\n                        <a href=\"javascript:\" ng-click=\"initMap()\" class=\"btn btn-primary\">Salvar</a>\r\n                        <button ng-click=\"initMap()\" class=\"btn btn-outline-secondary ml-1\">InitMaps</button>\r\n                        <button ng-click=\"cancel()\" class=\"btn btn-outline-secondary ml-1\">Cancelar</button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"card col col-sm-12 h-100 shadow-sm\">\r\n                        <div class=\"row h-100\">\r\n                            <div id=\"map\" class=\"col-sm-12\" style=\"overflow: hidden;\"></div>\r\n                        </div>\r\n                        <div class=\"card-body py-2 px-0\">\r\n                            <label for=\"\">Cliente: </label>\r\n                            <strong>Serviço de Correios e Cia</strong>\r\n                            <div class=\"w-100\"></div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col\">\r\n                                    <label for=\"\">De: </label>\r\n                                    <strong>Orindiúva</strong>\r\n                                </div>\r\n                                <div class=\"col\">\r\n                                    <label for=\"\">Para: </label>\r\n                                    <strong>São josé do rio preto</strong>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col\">\r\n                                    <label for=\"\">Km total: </label>\r\n                                    <strong>50km</strong>\r\n                                </div>\r\n                                <div class=\"col\">\r\n                                    <label for=\"\">Duração: </label>\r\n                                    <strong>27min</strong>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n</div>\r\n</form>\r\n</div>\r\n</div>\r\n<div class=\"card row mt-3\">\r\n    <div class=\"card-body pb-0 pt-2\">\r\n        <div class=\"card-title m-3\">\r\n            <h4 class=\"h4 font-weight-light\">Veiculos/Motoristas</h4>\r\n        </div>\r\n    </div>\r\n</div>";

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