import { testeComponent } from "./teste.component";
//import { nightAuditService } from "./nightAudit.service";
import { testeState, testesTState } from "./teste.states";

export const TESTE_MODULE = angular.module('teste.module', []);

TESTE_MODULE.component('testeComponent', testeComponent);

TESTE_MODULE.config(['$uiRouterProvider', function ($uiRouterProvider) {    
    var stateRegistry = $uiRouterProvider.stateRegistry;
    stateRegistry.register(testeState);
    stateRegistry.register(testesTState);
}]);