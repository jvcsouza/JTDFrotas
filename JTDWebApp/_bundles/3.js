(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

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
    controller: ['$scope', 'companyServices', 'blockUI', ($scope, companyServices, $blockUI) => {

        $scope.companies = [];

        const Toast = Swal.mixin({
            toast: true,
            position: "bottom",
            showConfirmButton: false,
            timer: 3000
        });

        var CNPJIsValid = (value) => {
            var cnpj = value.replace(/[\.\-//]?/g, '');

            if (/[\D]/g.test(cnpj))
                return 'O CNPJ deve conter apenas numeros.';

            if (cnpj.length !== 14)
                return 'O valor informado nao e um CNPJ valido.';
        };

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
                console.log(rs);
                Toast.fire({
                    icon: "success",
                    title: "Operacao Concluida!",
                });
                getCompanies();
                return rs;
            });

            var getCompanies = () =>  
                companyServices.getCompanies()
                .success(r => $scope.companies = r)
                .error(e => { throw e; });

        $scope.openModalCnpj = () => {
            Swal.fire({
                title: 'Informe o CNPJ da empresa abaixo: ',
                input: 'text',
                inputAttributes: {
                    autocapitalize: 'off',
                    'ui-br-cnpj-mask': true,
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

        $scope.openOptions = (t) => 
            new window.$.confirm({
                title: t,
                titleClass: 'd-inline-block text-truncate',
                content: 'Selecione uma das opções abaixo...',
                type: 'dark',
                animateFromElement: false,
                animation: 'scale',
                closeAnimation: 'scale',
                animationBounce: 1.5,
                typeAnimated: true,
                backgroundDismiss: true,
                bgOpacity: true,
                buttons: {
                    Exclude: {
                        text: 'Excluir',
                        btnClass: 'btn btn-red float-left',
                        action: function () {
                            console.log(this);
                            alert('Excluir');
                        }
                    },
                    Travel: {
                        text: 'Viagem',
                        btnClass: 'btn-dark',
                        action: () => alert('VIAGEM')
                    },
                    Edit: {
                        text: 'Editar',
                        btnClass: 'btn btn-outline-secondary',
                        action: function () {
                            console.log(this);
                            alert('Editar');
                        }
                    },
            },
        });
    
        getCompanies();
       
    }]
};

/***/ }),

/***/ "./app/modules/company/company-list.html":
/*!***********************************************!*\
  !*** ./app/modules/company/company-list.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\r\n    class=\"d-flex justify-content-between row flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">\r\n    <h3 class=\"col-sm-8 font-weight-light\">Companias</h3>\r\n    <div class=\"btn-toolbar col-sm-4\">\r\n        <div class=\"btn-group btn-block\">\r\n            <button type=\"button\" class=\"sticky-top font-weight-light\r\n                       btn pmd-btn-outline btn-sm pmd-btn-raised\r\n                     btn-default\" ng-click=\"openModalCnpj()\">\r\n                Nova c/ CNPJ\r\n            </button>\r\n            <button type=\"button\" class=\"sticky-top font-weight-light\r\n                       btn pmd-btn-outline btn-sm pmd-btn-raised\r\n                     btn-default\" ng-click=\"openModalEdit()\">\r\n                Nova manual\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"table-responsive font-italic\">\r\n    <table class=\"table table-hover table-striped table-sm table-bordered\">\r\n        <thead class=\"thead-dark\">\r\n            <tr class=\"text-center\">\r\n                <th>#</th>\r\n                <th>Nome</th>\r\n                <th>CNPJ</th>\r\n                <th>Cidade</th>\r\n                <th>Telefone</th>\r\n                <!-- <th>Ativo</th> -->\r\n            </tr>\r\n        </thead>\r\n        <tbody class=\"text-capitalize\">\r\n            <tr ng-click=\"openOptions(com.Name)\" ng-if=\"companies.length > 0\" ng-repeat=\"com in companies\"\r\n                class=\"text-center\" style=\"cursor: pointer;\">\r\n                <td>{{com.Id}}</td>\r\n                <td>{{com.Name}}</td>\r\n                <td>{{com.Cnpj}}</td>\r\n                <td>{{com.City}}</td>\r\n                <td>{{com.Phone}}</td>\r\n                <!-- <td><input type=\"checkbox\" ng-click=\"alert\" class=\"form-control\" ng-disabled=true ng-checked=\"com.Act\"></td> -->\r\n            </tr>\r\n            <tr>\r\n                <td ng-if=\"companies.length == 0\" class=\"text-center\" colspan=\"6\">Não existem dados...</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>";

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

    service.searchCnpj = (cnpj) => {
        var cnpjClean = cnpj.replace(/[\.\-//]?/g, '');
        return $http.get(api + 'integrations/cnpj/' + cnpjClean);
    }

    service.saveCompany = (company) => $http.post(api + 'company/SaveCompany', company);

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
//# sourceMappingURL=3.js.map