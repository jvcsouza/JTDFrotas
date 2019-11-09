(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

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
    template: __webpack_require__(/*! ./travel-detail.html */ "./app/modules/travel/travel-detail.html"),
    controller: ['$scope', '$stateParams', 'travelServices', ($scope, $stateParams, travelServices) => {

        var scopeId = $stateParams.id;
        if (scopeId != 0)
            travelServices.getTravel(scopedId)
                .success(rs => $scope.travel = rs);
    }]
};

/***/ }),

/***/ "./app/modules/travel/travel-detail.html":
/*!***********************************************!*\
  !*** ./app/modules/travel/travel-detail.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <meta charset=\"utf-8\" />\r\n    <title></title>\r\n</head>\r\n<body>\r\n\r\n</body>\r\n</html>";

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
    template: __webpack_require__(/*! ./travel-list.html */ "./app/modules/travel/travel-list.html"),
    controller: ['$scope', '$stateParams', 'travelServices', ($scope, $stateParams, travelServices) => {

    }]
};

/***/ }),

/***/ "./app/modules/travel/travel-list.html":
/*!*********************************************!*\
  !*** ./app/modules/travel/travel-list.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <meta charset=\"utf-8\" />\r\n    <title></title>\r\n</head>\r\n<body>\r\n\r\n</body>\r\n</html>";

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
    sticky: true,
    views: {
        'viewTravel': {
            template: '<div ui-view="viewList"></div><div ui-view="viewDetail"></div>'
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
            component: 'travelDetailComponent'
        }
    }
};

const travelListState = {
    name: 'travels.list',
    views: {
        'viewList': {
            component: 'travelListComponent'
        }
    }
};

/***/ })

}]);
//# sourceMappingURL=4.js.map