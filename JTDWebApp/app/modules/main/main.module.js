import { mainState, mainDetailState, mainListState } from "./main.states";

export const MAIN_MODULE = angular.module("main.module", []);

MAIN_MODULE.directive('compile', ['$compile', function ($compile) {
    return function (scope, element, attrs) {
        var $watchCompile = scope.$watch(
            function compileWatch (scope) {
                // watch the 'compile' expression for changes
                return scope.$eval(attrs.compile);
            },
            function (value, oldValue) {

                if (value !== oldValue && value !== "") {
                    // when the 'compile' expression changes
                    // assign it into the current DOM
                    element.html(value);

                    // compile the new DOM and link it to the current
                    // scope.
                    // NOTE: we only compile .childNodes so that
                    // we don't get into infinite loop compiling ourselves
                    $compile(element.contents())(scope);
                    //$watchCompile();
                }
            }
        );

        scope.$on('$destoy', function () {
            if ($watchCompile) {
                $watchCompile();
            }
        });
    };
}]);

MAIN_MODULE.config(['$uiRouterProvider', function ($uiRouterProvider) {
    var stateRegistry = $uiRouterProvider.stateRegistry;
    stateRegistry.register(mainState);
    stateRegistry.register(mainDetailState);
    stateRegistry.register(mainListState);
}]);
