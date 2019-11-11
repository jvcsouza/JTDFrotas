import * as angular from 'angular';

import uiRouter from "@uirouter/angularjs";
import { StickyStatesPlugin } from '@uirouter/sticky-states';
import mainControler from "./modules/main/mainController";
import ocLazyLoad from "oclazyload";
import { DSRPlugin } from '@uirouter/dsr';

import {
    layout
    , home
    , testeFutureState
    , companyFutureState
    , guestFutureState
    , travelFutureState
} from "./app-config-routes";

require("angular-block-ui");
require('angular-input-masks/br')
require("jquery");

var jtdFrotas = angular.module('jtdFrotas', ['blockUI', ocLazyLoad, uiRouter, 'ui.utils.masks']);

import { blockUIConfig, Interceptor, exceptionConfig  } from "./app-config";
jtdFrotas.config(blockUIConfig);
jtdFrotas.config(['$httpProvider', Interceptor]);
jtdFrotas.config(['$provide', exceptionConfig]);

jtdFrotas.config(['$uiRouterProvider', '$locationProvider', ($uiRouter, $locationProvider) => {
    $uiRouter.plugin(DSRPlugin);

    $locationProvider.hashPrefix('');

    const $urlService = $uiRouter.urlService;
    $urlService.rules.otherwise({ state: 'home' });

    const $stateRegistry = $uiRouter.stateRegistry;

    $stateRegistry.register(layout);
    $stateRegistry.register(home);
    $stateRegistry.register(testeFutureState);
    $stateRegistry.register(companyFutureState);
    $stateRegistry.register(guestFutureState);
    $stateRegistry.register(travelFutureState);
}]);
jtdFrotas.controller("mainController", mainControler);
window.jtd = jtdFrotas;