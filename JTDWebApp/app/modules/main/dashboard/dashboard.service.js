import angular from 'angular';

dashboardService.$inject = ['$http'];

export function dashboardService($http) {
    var api = window.appHotelOneSettings.apiServiceBaseUri + 'api/Dashboard';
    var service = {};

    service.get = function () {
        return $http.get(api + '/Get');
    };

    service.create = function (item) {
        return $http.post(api + '/create', item);
    };

    service.update = function (item) {
        return $http.put(api + '/update', item);
    };

    service.delete = function (item) {
        return $http.delete(api + '/delete/' + item + '/');
    };

    service.createWidgets = function (item) {
        return $http.post(api + '/createWidget', item);
    };

    return service;
};

export default angular.module('services.dashboardService', [])
    .service('dashboardService', dashboardService).name;
