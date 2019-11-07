import { guestListComponent } from "./guest-list.component";

import { guestServices } from "./guest.services";

import { guestState, guestListState } from "./guest.states";

export const GUEST_MODULE = angular.module('guest.module', []);

GUEST_MODULE.service('guestServices', guestServices);

GUEST_MODULE.component('guestListComponent', guestListComponent);

GUEST_MODULE.config(['$uiRouterProvider', function ($uiRouterProvider) {
    var stateRegistry = $uiRouterProvider.stateRegistry;
    stateRegistry.register(guestState);
    stateRegistry.register(guestListState);
}]);