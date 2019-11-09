import { travelDetailComponent } from "./travel-detail.component";
import { travelListComponent } from "./travel-list.component";

import { travelServices } from "./travel.services";

import { travelState, travelDetailState, travelListState } from "./travel.states";

export const TRAVEL_MODULE = angular.module('travel.module', []);

TRAVEL_MODULE.service('travelServices', travelServices);

TRAVEL_MODULE.component('travelDetailComponent', travelDetailComponent);
TRAVEL_MODULE.component('travelListComponent', travelListComponent);

TRAVEL_MODULE.config(['$uiRouterProvider', function ($uiRouterProvider) {
    var stateRegistry = $uiRouterProvider.stateRegistry;
    stateRegistry.register(travelState);
    stateRegistry.register(travelDetailState);
    stateRegistry.register(travelListState);
}]);