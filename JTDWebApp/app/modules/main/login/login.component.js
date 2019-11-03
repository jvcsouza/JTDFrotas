export const loginComponent = {
    template: require('./login.html'),
    controller: ['$scope', '$http', '$injector', function ($scope, $http, $injector) {

        var $state = $injector.get("$state");
        var userService = $injector.get("userService");
        var authService = $injector.get("authService");
        var $authsusceptor = $injector.get("$authsusceptor");
        var localStorageService = $injector.get("localStorageService");
        var tmhDynamicLocale = $injector.get("tmhDynamicLocale");
        var blockUi = $injector.get("blockUI");
        var localeService = $injector.get("localeService");
        var $timeout = $injector.get("$timeout");
        var modalBrands = $injector.get("modalBrands");

        var localSettings = window.appHotelOneSettings;
        //language default
        $http.defaults.headers.common['X-API-APPLICATION-CODE'] = window.appHotelOneSettings.applicationCode;
        $http.defaults.headers.common['X-API-PROPERTY-CODE'] = 0;
        $http.defaults.headers.common['X-API-VERSION'] = window.appHotelOneSettings.currentAppVersion;

        var selectProperty = function (sc) {
            $scope.user = localStorageService.get(localSettings.authorizationDataStorageName);
            $scope.user.Brands = sc.IdBrand;
            $scope.user.DefaultProperty = sc.IdProperty;
            $scope.user.PropertyObj = sc.PropertyObj;
            localStorageService.set(window.appHotelOneSettings.currentSelectedHotelTimeZone, sc.Utc);
            localStorageService.set(localSettings.authorizationDataStorageName, $scope.user);

            $http.defaults.headers.common["X-API-PROPERTY-CODE"] = sc.IdProperty;
            localStorageService.set(window.appHotelOneSettings.currentSelectedHotelCodeStorageName, sc.IdProperty);
            window.appHotelOneSettings.currentSelectedHotelCode = sc.IdProperty;

            localeService.changeCulture().then(function (response) {
                window._translations = response;

                var lang = window.Translate("Language").toLowerCase();

                $http.defaults.headers.common['X-API-LANGUAGE-CODE'] = lang;
                tmhDynamicLocale.set(lang);
                localStorageService.set(window.appHotelOneSettings.selectecLanguageStorageName, lang);
                moment.locale(lang);

                $scope.goHome();

                var model = {};
                model.IdUser = $scope.user.userId;
                model.IdProperty = $scope.user.DefaultProperty;
                model.IsSelected = sc.SetPropDefault;

                userService.setDefaultPropertyOnLogin(model);
            }, function (err) {
                $timeout(function () {
                    $authsusceptor.Logoff();
                }, 2000);
                throw err;
            }).finally(function () {
                blockUi.stop();
            });
        };

        var openBrandModal = function () {
            modalBrands.OpenBrands($scope.brandsButtons).result.then(function (selectedItem) {
                if (selectedItem === null || selectedItem === undefined) {
                    return;
                }
                selectProperty(selectedItem);
            }, function () {
                $authsusceptor.Logoff();
            });
        };

        var chooseBrand = function (response, responseSc) {
            if (parseInt(response.Brands) === 1 || parseInt(response.DefaultProperty) > 0) {
                $scope.user.Brands = $scope.user.DefaultBrand;
                $scope.user.DefaultProperty = parseInt(response.DefaultProperty);
                localStorageService.set(localSettings.authorizationDataStorageName, $scope.user);

                if (response.DefaultProperty > 0) {
                    $http.defaults.headers.common["X-API-PROPERTY-CODE"] = parseInt(response.DefaultProperty);
                    localStorageService.set(window.appHotelOneSettings.currentSelectedHotelCodeStorageName, parseInt(response.DefaultProperty));
                    localStorageService.set(window.appHotelOneSettings.currentSelectedHotelTimeZone, response.Utc);
                    window.appHotelOneSettings.currentSelectedHotelCode = parseInt(response.DefaultProperty);
                }
                else {
                    $http.defaults.headers.common["X-API-PROPERTY-CODE"] = responseSc.data[0].Properties[0].IdProperty;
                    localStorageService.set(window.appHotelOneSettings.currentSelectedHotelCodeStorageName, responseSc.data[0].Properties[0].IdProperty);
                    localStorageService.set(window.appHotelOneSettings.currentSelectedHotelTimeZone, responseSc.data[0].Properties[0].Utc);
                    window.appHotelOneSettings.currentSelectedHotelCode = responseSc.data[0].Properties[0].IdProperty;
                }

                localeService.changeCulture().then(function (response1) {
                    window._translations = response1;

                    var lang = window.Translate("Language").toLowerCase();

                    $http.defaults.headers.common['X-API-LANGUAGE-CODE'] = lang;
                    tmhDynamicLocale.set(lang);
                    localStorageService.set(window.appHotelOneSettings.selectecLanguageStorageName, lang);
                    moment.locale(lang);

                    $scope.goHome();
                }, function (err) {
                    $timeout(function () {
                        $authsusceptor.Logoff();
                    }, 2000);
                    throw err;
                }).finally(function () {
                    blockUi.stop();
                });

            } else {
                $scope.brandsButtons = responseSc.data;
                openBrandModal();
            }
        };

        var defineBrand = function (response) {
            blockUi.start(window.Translate('msgWaiting'));
            userService.getUserBrands($scope.user.userId).then(
                function (responseSc) {
                    chooseBrand(response, responseSc);
                },
                function (error) {
                    throw (error);
                }).finally(function () {
                    blockUi.stop();
                });
        };

        blockUi.start();
        userService.getAuthData().then(function (response) {

            $scope.user = {};
            $scope.configMenu = [];
            $scope.defMenu = [];
            window.appHotelOneSettings.currentSelectedHotelCode = "0";

            var data = response.data;

            if (data === null) {
                $authsusceptor.Logoff();
                return;
            }

            authService.setAuthData(data);

            $scope.user = authService.getAuthData();

            defineBrand(data);

        }, function (err) {
            throw err;
        }).finally(function () {
            blockUi.stop();
        });

        $scope.goHome = function () {
            $state.go("home");
            $scope.$emit('fillLoginDataListener');
        };
    }]
};
