vehicleServices.$inject = ['$http'];

export function vehicleServices($http) {

    var api = window.location.origin + window.location.pathname + 'api/';
    var service = {};

    service.getTravels = () => $http.get(api + 'vehicle/');

    service.getTravel = (id) => $http.get(api + 'vehicle/' + id);

    service.getCities = () => $http.get(api + 'city/GetCities');

    service.getCompanies = (name) => $http.get(api + 'Company/GetCompaniesWithParams/' + name);

    service.GetDirections = (model) => $http.get(api + 'integrations/maps/direction?' + $.param(model));

    return service;
}

export default angular.module('services.vehicleServices', [])
    .service('vehicleServices', vehicleServices).name;
