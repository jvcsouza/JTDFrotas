import { driverDetailComponent } from "./driver-detail.component";
import { driverListComponent } from "./driver-list.component";

import { driverServices } from "./driver.services";

import { driverState, driverDetailState, driverListState } from "./driver.states";

export const DRIVER_MODULE = angular.module('driver.module', []);

DRIVER_MODULE.service('driverServices', driverServices);

DRIVER_MODULE.component('driverDetailComponent', driverDetailComponent);
DRIVER_MODULE.component('driverListComponent', driverListComponent);

DRIVER_MODULE.config(['$uiRouterProvider', function ($uiRouterProvider) {
    var stateRegistry = $uiRouterProvider.stateRegistry;
    stateRegistry.register(driverState);
    stateRegistry.register(driverDetailState);
    stateRegistry.register(driverListState);
}]);