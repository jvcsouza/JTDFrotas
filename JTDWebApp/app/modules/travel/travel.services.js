travelServices.$inject = ['$http'];

export function travelServices($http) {

    var api = window.location.origin + window.location.pathname + 'api/';
    var service = {};

    service.getTravels = () => $http.get(api + 'travel/');

    service.getTravel = (id) => $http.get(api + 'travel/' + id);

    service.getCities = () => $http.get(api + 'city/GetCities');

    service.saveTravel = (model) => $http.post(api + 'travel/save', model);

    service.getCompanies = (name) => $http.get(api + 'Company/GetCompaniesWithParams/' + name);

    service.GetDirections = (model) => $http.get(api + 'integrations/maps/direction?' + $.param(model));

    return service;
}

export default angular.module('services.travelServices', [])
    .service('travelServices', travelServices).name;
