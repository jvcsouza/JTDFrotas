import angular from "angular";

export const driverListComponent = {
    bindings: {
        dados: '<'
    },
    template: require('./driver-list.html'),
    controller: ['$scope', '$stateParams', 'driverServices', '$state', '$injector'
        , function ($scope, $stateParams, driverServices, $state, $injector) {
            console.log(this);
            $scope.companies = [];
            $scope.RedirectToDetail = () => $state.go("drivers.detail", { id: 0 });
        }]
};