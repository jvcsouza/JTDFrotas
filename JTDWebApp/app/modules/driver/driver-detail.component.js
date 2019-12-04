import angular from "angular";

export const driverDetailComponent = {
  bindings: {
    dados: "<"
  },
  template: require("./driver-detail.html"),
  controller: ["$scope", ($scope, $stateParams, driverServices, $state) => {}]
};
