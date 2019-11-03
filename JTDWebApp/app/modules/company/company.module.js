import { companyListComponent } from "./company-list.component";

import { companyServices } from "./company.services";

import { companyState, companyListState } from "./company.states";

export const COMPANY_MODULE = angular.module('company.module', []);

COMPANY_MODULE.service('companyServices',companyServices);

COMPANY_MODULE.component('companyListComponent', companyListComponent);

COMPANY_MODULE.config(['$uiRouterProvider', function ($uiRouterProvider) {    
    var stateRegistry = $uiRouterProvider.stateRegistry;
    stateRegistry.register(companyState);
    stateRegistry.register(companyListState);
}]);