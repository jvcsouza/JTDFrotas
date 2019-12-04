import { vehicleDetailComponent } from "./vehicle-detail.component";
import { vehicleListComponent } from "./vehicle-list.component";

import { vehicleServices } from "./vehicle.services";

import { vehicleState, vehicleDetailState, vehicleListState } from "./vehicle.states";

export const VEHICLE_MODULE = angular.module('vehicle.module', []);

VEHICLE_MODULE.service('vehicleServices', vehicleServices);

VEHICLE_MODULE.component('vehicleDetailComponent', vehicleDetailComponent);
VEHICLE_MODULE.component('vehicleListComponent', vehicleListComponent);

VEHICLE_MODULE.config(['$uiRouterProvider', function ($uiRouterProvider) {
    var stateRegistry = $uiRouterProvider.stateRegistry;
    stateRegistry.register(vehicleState);
    stateRegistry.register(vehicleDetailState);
    stateRegistry.register(vehicleListState);
}]);