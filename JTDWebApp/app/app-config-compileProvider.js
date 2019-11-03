var jtdFrotas = angular.module('jtdFrotas');

jtdFrotas.config(['$compileProvider', function ($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
}]);