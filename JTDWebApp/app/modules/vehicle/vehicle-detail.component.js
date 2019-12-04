import angular from "angular";

export const vehicleDetailComponent = {
  bindings: {
    dados: "<"
  },
  template: require("./vehicle-detail.html"),
  controller: ["$scope", ($scope, $stateParams, vehicleServices, $state) => {}]
};
