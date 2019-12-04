import angular from "angular";

export const travelListComponent = {
  bindings: {
    dados: "<"
  },
  template: require("./travel-list.html"),
  controller: [
    "$scope",
    "$stateParams",
    "travelServices",
    "$state",
    "$injector",
    function($scope, $stateParams, travelServices, $state, $injector) {
      $scope.travels = [];
      
      $scope.loadTravel = (id) => $state.go("travels.detail", { id: id });

      travelServices.getTravels().success(r => ($scope.travels = r));
    }
  ]
};
