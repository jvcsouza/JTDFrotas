travelServices.$inject = ['$http'];

export function travelServices($http) {

    var api = window.location.origin + window.location.pathname + 'api/';
    var service = {};

    service.getTravels = () => $http.get(api + 'travel/');

    service.getTravel = (id) => $http.get(api + 'travel/' + id);

    return service;
}

export default angular.module('services.travelServices', [])
    .service('travelServices', travelServices).name;
