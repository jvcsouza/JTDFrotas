guestServices.$inject = ['$http'];

export function guestServices($http) {

    var api = window.location.origin + window.location.pathname + 'api/';
    var service = {};

    service.getGuests = () => $http.get(api + 'guest/');

    return service;
}

export default angular.module('services.guestServices', [])
    .service('guestServices', guestServices).name;
