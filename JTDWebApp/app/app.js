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
} from "./app-config-routes";

var jtdFrotas = angular.module('jtdFrotas', [ocLazyLoad, uiRouter]);

// import { setHtml5Mode } from "./app-config";
// jtdFrotas.config(setHtml5Mode);

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
}]);
jtdFrotas.controller("mainController", mainControler);