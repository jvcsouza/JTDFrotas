import angular from "angular";

export const vehicleListComponent = {
    bindings: {
        dados: '<'
    },
    template: require('./vehicle-list.html'),
    controller: ['$scope', '$stateParams', 'vehicleServices', '$state', '$injector'
        , function ($scope, $stateParams, vehicleServices, $state, $injector) {
            console.log(this);
            $scope.companies = [];
            $scope.RedirectToDetail = () => $state.go("vehicles.detail", { id: 0 });
        }]
};