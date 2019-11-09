import angular from "angular";

export const travelDetailComponent = {
    template: require('./travel-detail.html'),
    controller: ['$scope', '$stateParams', 'travelServices', ($scope, $stateParams, travelServices) => {

        var scopeId = $stateParams.id;
        if (scopeId != 0)
            travelServices.getTravel(scopedId)
                .success(rs => $scope.travel = rs);
    }]
};