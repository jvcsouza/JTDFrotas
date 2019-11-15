import angular from "angular";

export const travelListComponent = {
    bindings: {
        dados: '<'
    },
    template: require('./travel-list.html'),
    controller: ['$scope', '$stateParams', 'travelServices', '$state', '$injector'
        , function ($scope, $stateParams, travelServices, $state, $injector) {
            console.log(this);
            $scope.companies = [];
            $scope.RedirectToDetail = () => $state.go("travels.detail", { id: 0 });
        }]
};