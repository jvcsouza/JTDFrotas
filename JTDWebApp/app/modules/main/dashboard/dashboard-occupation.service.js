dashboardOccupationService.$inject = ['$http'];

export function dashboardOccupationService($http) {

    var api = window.appHotelOneSettings.apiServiceBaseUri + 'api/';
    var dashboardService = {};

    // Api atualizada (httpget): /api/DashboardOccupation/Get
    dashboardService.getRestful = function (params) {
        if (params === "" || params === undefined) {
            return $http.get(api + 'DashboardOccupation/Get');
        } else {
            return $http.get(api + 'DashboardOccupation/Get' + params);
        }
    };

    /// Get single dashboard -> /api/DashboardOccupation/Get
    dashboardService.getChartAdrRevparOcc = function () {
        return $http.get(api + 'DashboardOccupation/GetChartAdrRevparOcc');
    };

    /// Get single dashboard -> /api/DashboardOccupation/Get
    dashboardService.getChartOcc = function () {
        return $http.get(api + 'DashboardOccupation/GetChartOcc');
    };

    /// Get single dashboard -> /api/DashboardOccupation/Get
    dashboardService.getChartAdrRevPar = function () {
        return $http.get(api + 'DashboardOccupation/GetChartAdrRevPar');
    };

    dashboardService.getCheckoutExpiredQty = function () {
        return $http.get(api + 'Folio/GetCheckoutExpiredQty');
    };

    dashboardService.getBlockedReservationToExpire = function () {
        return $http.get(api + 'Reservation/GetBlockedReservationToExpire');
    };

    dashboardService.getNegotitionsQty = function () {
        return $http.get(api + 'RatePlan/GetRatePlanNegotiationQty');
    };

    return dashboardService;
}

export default angular.module('services.dashboardOccupationService', [])
    .service('dashboardOccupationService', dashboardOccupationService).name;
