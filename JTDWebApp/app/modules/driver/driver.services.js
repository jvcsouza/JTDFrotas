driverServices.$inject = ['$http'];

export function driverServices($http) {

    var api = window.location.origin + window.location.pathname + 'api/';
    var service = {};

    service.getTravels = () => $http.get(api + 'driver/');

    service.getTravel = (id) => $http.get(api + 'driver/' + id);

    service.getCities = () => $http.get(api + 'city/GetCities');

    service.getCompanies = (name) => $http.get(api + 'Company/GetCompaniesWithParams/' + name);

    service.GetDirections = (model) => $http.get(api + 'integrations/maps/direction?' + $.param(model));

    return service;
}

export default angular.module('services.driverServices', [])
    .service('driverServices', driverServices).name;
