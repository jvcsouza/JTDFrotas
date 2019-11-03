enableSupportService.$inject = ['$http'];

export function enableSupportService($http) {
    var api = window.appHotelOneSettings.apiServiceBaseUri + 'api/';
    var service = {};

    service.get = function() {
        return $http.get(api + 'EnableSupport/Get');
    };

    service.enable = function(user) {
        return $http.post(api + 'EnableSupport/Enable', user);
    }

    return service;
};

export default angular.module('services.enableSupportService', [])
    .service('enableSupportService', enableSupportService).name;
