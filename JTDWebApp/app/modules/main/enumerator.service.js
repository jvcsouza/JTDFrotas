export function enumeratorService($http, $q, $cacheFactory, localStorageService) {

    var cache = $cacheFactory('enumeratorsCache');
    var api = window.appHotelOneSettings.apiServiceBaseUri + 'api/';
    var service = {};

    var getHttpOrCache = function (name, endPoint, lang) {
        var cacheName;

        if (lang)
            cacheName = name + localStorageService.get(window.appHotelOneSettings.selectecLanguageStorageName);
        else
            cacheName = name;

        var deferred = $q.defer();

        var returnValue = cache.get(cacheName);

        if (!returnValue) {
            $http.get(api + endPoint).then(
                function (response) {
                    deferred.resolve(response);
                    cache.put(cacheName, response);
                },
                function (error) {
                    deferred.reject(error);
                }
            );
        } else {
            deferred.resolve(returnValue);
        }

        return deferred.promise;
    };

    service.getDocumentTypes = function () {
        return getHttpOrCache("GetDocumentTypes", "EnumList/GetDocumentTypes", true);
    };

    service.getTreatmentTitles = function () {
        return getHttpOrCache("GetTreatmentTitles", "EnumList/GetTreatmentTitles", true);
    };

    service.getLanguages = function () {
        return getHttpOrCache("GetLanguages", "EnumList/GetLanguages", true);
    };

    service.getContactTypes = function () {
        return getHttpOrCache("GetContactTypes", "EnumList/GetContactTypes", true);
    };

    service.getFolioDailies = function () {
        return getHttpOrCache("GetFolioDaily", "EnumList/GetFolioDaily", true);
    };

    service.getReservationDailies = function () {
        return getHttpOrCache("GetReservationDaily", "EnumList/GetReservationDaily", true);
    };

    service.getLanguagesForLogin = function () {
        return getHttpOrCache("GetLanguagesForLogin", "EnumList/GetLanguagesForLogin", false);
    };

    service.getFeatureEnum = function () {
        return getHttpOrCache("GetFeatureEnum", "EnumList/GetFeatureEnum", true);
    };

    service.getEmailSendingFeatureEnum = function () {
        return getHttpOrCache("GetEmailSendingFeatureEnum", "EnumList/GetEmailSendingFeatureEnum", true);
    };

    service.getRoomFrontStatusEnum = function () {
        return getHttpOrCache("GetRoomFrontStatusEnum", "EnumList/GetRoomFrontStatusEnum", true);
    };

    service.getStateAuditEnum = function () {
        return getHttpOrCache("GetStateAuditEnum", "EnumList/GetStateAuditEnum", true);
    };

    service.getFeatureTypeEnum = function () {
        return getHttpOrCache("GetFeatureTypeEnum", "EnumList/GetFeatureTypeEnum", true);
    };

    service.getOperationTypeEnum = function () {
        return getHttpOrCache("GetOperationTypeEnum", "EnumList/GetOperationTypeEnum", true);
    };

    service.getChannelManagerOperationTypeEnum = function () {
        return getHttpOrCache("GetChannelManagerOperationTypeEnum", "EnumList/GetChannelManagerOperationTypeEnum", true);
    };

    service.getEventTypeEnum = function () {
        return getHttpOrCache("GetEventTypeEnum", "EnumList/GetEventTypeEnum", true);
    };

    service.getProductTypeEnum = function () {
        return getHttpOrCache("GetProductTypeEnum", "EnumList/GetProductTypeEnum", true);
    };

    service.getPaymentTypeEnum = function () {
        return getHttpOrCache("GetPaymentTypeEnum", "EnumList/GetPaymentTypeEnum", true);
    };

    service.getEntityCreditTypeEnum = function () {
        return getHttpOrCache("GetEntityCreditTypeEnum", "EnumList/GetEntityCreditTypeEnum", true);
    };

    service.getUTCZones = function () {
        return getHttpOrCache("GetUTCZones", "EnumList/GetUTCZones", true);
    };

    service.getReservationStatus = function () {
        return getHttpOrCache("ReservationStatus", "EnumList/GetReservationStatus", true);
    };

    service.getLocalizationType = function () {
        return getHttpOrCache("GetLocalizationType", "EnumList/GetLocalizationType", true);
    };

    service.getGuestPurposeTrip = function () {
        return getHttpOrCache("GetGuestPurposeTrip", "EnumList/GetGuestPurposeTrip", true);
    };

    service.getGuestArrivingBy = function () {
        return getHttpOrCache("GetGuestArrivingBy", "EnumList/GetGuestArrivingBy", true);
    };

    service.getIdentifierPostIntegratorFile = function () {
        return getHttpOrCache("GetIdentifierPostIntegratorFile", "EnumList/GetIdentifierPostIntegratorFile", true);
    };

    service.getFolioItemType = function () {
        return getHttpOrCache("GetFolioItemType", "EnumList/GetFolioItemType", true);
    };

    service.getFolioType = function () {
        return getHttpOrCache("GetFolioType", "EnumList/GetFolioType", true);
    };

    service.getFolioItemPostingStatus = function () {
        return getHttpOrCache("GetFolioItemPostingStatus", "EnumList/GetFolioItemPostingStatus", true);
    };

    service.getRoomFrontStatus = function () {
        return getHttpOrCache("GetRoomFrontStatus", "EnumList/GetRoomFrontStatus", true);
    };

    service.GetMealPlanType = function () {
        return getHttpOrCache("GetMealPlanType", "EnumList/GetMealPlanType", true);
    };

    service.getLostItemStatus = function () {
        return getHttpOrCache("GetLostItemStatus", "EnumList/GetLostItemStatus", true);
    };

    service.getRentedItemStatus = function () {
        return getHttpOrCache("GetRentedItemStatus", "EnumList/GetRentedItemStatus", true);
    };

    service.getIntegrationStatusEnum = function () {
        return getHttpOrCache("GetIntegrationStatusEnum", "EnumList/GetIntegrationStatusEnum", true);
    };

    service.getIntegrationEventEnum = function () {
        return getHttpOrCache("GetIntegrationEventEnum", "EnumList/GetIntegrationEventEnum", true);
    };

    service.getFnrhExceptionOpEnum = function () {
        return getHttpOrCache("GetFnrhExceptionOpEnum", "EnumList/GetFnrhExceptionOpEnum", true);
    };

    service.getPaymentTransactionType = function () {
        return getHttpOrCache("GetPaymentTransactionType", "EnumList/GetPaymentTransactionType", true);
    };

    return service;
};

enumeratorService.$inject = ['$http', '$q', '$cacheFactory', 'localStorageService'];

export default angular.module('services.enumeratorService', [])
    .service('enumeratorService', enumeratorService).name;