//'use strict';
function mainControler($scope, $injector, $uiRouter) {

    var $deepStateRedirect = $uiRouter._plugins["deep-state-redirect"];
    var $state = $injector.get("$state");
    var $http = $injector.get("$http");
    var $timeout = $injector.get("$timeout");

    var router = $uiRouter.getPlugin('sticky-states');

    // var $compile = $injector.get("$compile");
    // var blockUi = $injector.get("blockUI");
    // var authService = $injector.get("authService");
    // var $authsusceptor = $injector.get("$authsusceptor");
    // var userService = $injector.get("userService");
    // var localStorageService = $injector.get("localStorageService");
    // var menuService = $injector.get("menuService");
    // var $filter = $injector.get("$filter");
    // var tmhDynamicLocale = $injector.get("tmhDynamicLocale");
    // var hubService = $injector.get("hubService");
    // var oneTranslateFact = $injector.get("oneTranslateFact");
    // var localSettings = window.appHotelOneSettings;
    // var $uibModal = $injector.get("$uibModal");
    // var $rootScope = $injector.get("$rootScope");
    // var notificationService = $injector.get("notificationService");
    // var localeService = $injector.get("localeService");
    // var wizardService = $injector.get("wizardService");
    // var modalBrands = $injector.get("modalBrands");
    // var messaging = $injector.get("Messaging");

    var userProperties;

    $scope.h = 'HELLO WORLD';

    console.log($scope);

    // var localUrl = localSettings.urls.urlApplicationPath;
    // $scope.appVersion = window.appVersion + window.branchVersion;

    // $rootScope.getEventHubs = {
    //     TimeLineEvent: null,
    //     FolioEvent: null,
    //     FolioWindowEvent: null,
    //     PropertEvent: null,
    //     AvailabilityEvent: null
    // };

    // var hubBrand;

    // tmhDynamicLocale.set(localStorageService.get(window.appHotelOneSettings.selectecLanguageStorageName));

    // $scope.tabs = {};
    // $scope.recentTabs = {};

    // var openWizardModal = function (wizard) {
    //     $uibModal.open({
    //         animation: true,
    //         component: "wizardModal",
    //         size: "lg",
    //         backdrop: 'static',
    //         resolve: {
    //             wizard: function () {
    //                 return wizard;
    //             }
    //         }
    //     });
    // };

    // var showWizard = function (idProperty) {

    //     wizardService.checkShow(idProperty).then(function (response) {
    //         var data = response.data;
    //         if (!data) {
    //             openWizardModal(null);
    //             return;
    //         }

    //         if (data.Show) {
    //             openWizardModal(data);
    //         }

    //     }, function (error) { throw error; }).finally(function () {
    //         blockUi.stop();
    //     });
    // };

    // var fillMenu = function (idProperty) {
    //     $scope.filterMenu = [];
    //     blockUi.start(oneTranslateFact.translate("msgGettingMenusOfTheApplication"));

    //     menuService.getMenus().then(
    //         function (response) {

    //             blockUi.start(oneTranslateFact.translate("msgGettingMenusOfTheApplication"));

    //             menuService.setMenus(response.data);

    //             $scope.tabs = menuService.getTabs();

    //             var configMenuObj = menuService.getConfigMenu();
    //             $scope.configMenu = configMenuObj.inArray;
    //             $scope.configMenuHtml = configMenuObj.inHtml;

    //             var opMenuObj = menuService.getOperationMenu();
    //             $scope.opMenu = opMenuObj.inArray;
    //             $scope.opMenuHtml = opMenuObj.inHtml;

    //             var filterMenu;
    //             for (var i = 0; i < $scope.configMenu.length; i++) {
    //                 for (var j = 0; j < $scope.configMenu[i].Sub.length; j++) {
    //                     filterMenu = { Code: $scope.configMenu[i].Sub[j].Code, Name: $scope.configMenu[i].Sub[j].Name, Parent: $scope.configMenu[i].Name };
    //                     $scope.filterMenu.push(filterMenu);
    //                 }
    //             }

    //             for (var k = 0; k < $scope.opMenu.length; k++) {
    //                 if (angular.isObject($scope.opMenu[k])) {
    //                     for (var l = 0; l < $scope.opMenu[k].Sub.length; l++) {
    //                         filterMenu = { Code: $scope.opMenu[k].Sub[l].Code, Name: $scope.opMenu[k].Sub[l].Name, Parent: $scope.opMenu[k].Name };
    //                         $scope.filterMenu.push(filterMenu);
    //                     }
    //                 }
    //             }

    //             $scope.$broadcast('fillUserDashboard');
    //             blockUi.stop();
    //             showWizard(idProperty);
    //         },
    //         function (error) {
    //             blockUi.stop();
    //             $scope.logout();
    //             throw error;
    //         }
    //     ).finally(function () {
    //         blockUi.stop();
    //     });

    // };

    // var $logoffTimeOut;


    // $scope.logout = function () {
    //     blockUi.start(oneTranslateFact.translate('msgWaiting'));
    //     $scope.closeAllTabs();

    //     $logoffTimeOut = $timeout(function () {
    //         authService.removeAuthData();
    //         $scope.user = {};
    //         $scope.configMenu = [];
    //         $scope.defMenu = [];
    //         userProperties = [];
    //         window.appHotelOneSettings.currentSelectedHotelCode = "0";

    //         if (hubBrand) {
    //             hubBrand.stop();
    //         }

    //         if (hubBrand) {
    //             hubBrand = null;
    //         }
    //         $authsusceptor.Logoff();
    //     }, 500);
    // };

    // $scope.changePassword = function () {
    //     var serverUrl = window.appHotelOneSettings.urls.serverAuthUrl;
    //     var url = serverUrl + '/Manage/ChangePassword';
    //     window.open(url, '_blank');
    // };

    // $scope.$on('logoutListener', function () {
    //     $scope.logout();
    // });

    // $scope.setHome = function () {
    //     $scope.currentTab = 'home';
    // };

    // $scope.unstickyState = function (sticky) {

    //     if (sticky.indexOf('reservations') > -1) {
    //         messaging.ClearToastr();
    //     }

    //     var stickySplit = sticky.split(".");
    //     var tab = stickySplit[0];

    //     var owlTabs = $("#owl-tabs").data('owlCarousel');

    //     //if the tab is active, hide and show home
    //     //hide tab
    //     $(".tab." + tab).parent().remove();
    //     owlTabs.reinit();

    //     $scope.tabs[tab][3] = false;
    //     delete $scope.recentTabs[tab];

    //     if (window.currentTab === tab) {
    //         //hide div
    //         $('#' + window.currentTab).hide();
    //         //show home div
    //         $('#home').show();
    //         window.currentTab = 'home';
    //         //set home tab active
    //         $('#chooseDash').addClass('active');
    //         $("#menu-op").find("li").removeClass("active");

    //         $state.go("home").then(function () {
    //             router.exitSticky(sticky);
    //             $deepStateRedirect.reset(sticky);

    //             router.exitSticky(tab);
    //             $deepStateRedirect.reset(tab);
    //         });

    //         //set home tab active
    //         $('.home').addClass('active');
    //         $("#dash").show();

    //     } else {
    //         router.exitSticky(sticky);
    //         $deepStateRedirect.reset(sticky);

    //         router.exitSticky(tab);
    //         $deepStateRedirect.reset(tab);

    //         $('#' + sticky).hide();
    //     }

    //     var tabExists = 0;
    //     angular.forEach($scope.tabs, function (value) {
    //         if (angular.isDefinedAndNotNull(value[3]) && value[3] === true) {
    //             tabExists++;
    //         }
    //     });

    //     if (tabExists === 0) {
    //         $scope.closeAllTabs();
    //     }

    //     $scope.currentTab = 'home';
    //     $scope.withoutFlapsRecent = tabExists;
    // };

    // $scope.$on('fillLoginDataListener', function () {

    //     $scope.fillLoginData();
    // });

    // // var fctBrand = function (event, poperty) {
    // //     var props = propertyService.getUserProperties();
    // //     var prop;

    // //     var data = JSON.parse(poperty);

    // //     if (event === 'PU') {
    // //         prop = $filter('filter')(props, { IdProperty: data.Id }, true);
    // //         if (prop.length > 0) {
    // //             prop[0].Name = data.N;
    // //             prop[0].IdBrand = data.B;
    // //             prop[0].BrandName = data.Bn;
    // //             prop[0].IdChain = data.C;
    // //             prop[0].ChainName = data.Cn;
    // //         }
    // //     } else {
    // //         prop = {
    // //             IdProperty: data.Id,
    // //             Name: data.N,
    // //             IdBrand: data.B,
    // //             BrandName: data.Bn,
    // //             IdChain: data.C,
    // //             ChainName: data.Cn
    // //         };
    // //         props.push(prop);
    // //     }
    // // };

    // $scope.listMessages = [];
    // var loadNotifications = function () {

    //     notificationService.getRestful().then(
    //         function (response) {

    //             $scope.listMessages = response.data;
    //         },
    //         function (error) {
    //             throw error;
    //         }).finally(function () {

    //         });
    // };

    // var fctNotificationEvent = function (event, data) {
    //     if (data !== null && data !== undefined && parseInt(data.Id) === parseInt($scope.user.userId)) {
    //         loadNotifications();
    //     }
    // };

    // var initHub = function () {

    //     $scope.getEventHubs.PropertEvent = fctBrand;
    //     $scope.getEventHubs.NotificationEvent = fctNotificationEvent;

    //     var host = window.appHotelOneSettings.urls.hostApp;
    //     // ReSharper disable once InconsistentNaming
    //     hubBrand = new hubService('BrandHub', 'brand=' + host + "_" + $scope.user.Brands, $scope.getEventHubs);
    // };

    // // var changeProperty = function (item) {
    // //     if (authService.isAuth() && angular.isDefinedAndNotNull(item)) {
    // //         $scope.closeAllTabs();
    // //         window.appHotelOneSettings.currentSelectedHotelCode = item.IdProperty;
    // //         window.appHotelOneSettings.currentSelectedHotelPicture = item.Picture;
    // //         $http.defaults.headers.common["X-API-PROPERTY-CODE"] = item.IdProperty;
    // //         localStorageService.set(window.appHotelOneSettings.currentSelectedHotelTimeZone, item.Utc);
    // //         localStorageService.set(window.appHotelOneSettings.currentSelectedHotelCodeStorageName, item.IdProperty);

    // //         propertyService.selectedProperty = item;
    // //         if (item.Picture === "" || item.Picture === "no-img?") {
    // //             item.Picture = "img.png?" + new Date().getTime();
    // //         }

    // //         localeService.changeCulture().then(function (response) {
    // //             window._translations = response;

    // //             var lang = window.Translate("Language").toLowerCase();

    // //             $http.defaults.headers.common['X-API-LANGUAGE-CODE'] = lang;
    // //             tmhDynamicLocale.set(lang);
    // //             localStorageService.set(window.appHotelOneSettings.selectecLanguageStorageName, lang);
    // //             moment.locale(lang);

    // //             fillMenu(item.IdProperty);
    // //             loadNotifications();
    // //         }, function (err) {
    // //             $timeout(function () {
    // //                 $authsusceptor.Logoff();
    // //             }, 2000);
    // //             throw err;
    // //         }).finally(function () {
    // //             blockUi.stop();
    // //         });
    // //     }
    // // };

    // // var fillPropertyData = function () {

    // //     if (authService.isAuth()) {

    // //         $http.defaults.headers.common['X-API-APPLICATION-CODE'] = window.appHotelOneSettings.applicationCode;
    // //         $http.defaults.headers.common["X-API-PROPERTY-CODE"] = 0;
    // //         $http.defaults.headers.common['X-API-VERSION'] = window.appHotelOneSettings.currentAppVersion;
    // //         localStorageService.set(window.appHotelOneSettings.currentSelectedHotelCodeStorageName, 0);

    // //         userProperties = [];

    // //         if (!$scope.user.Brands) {
    // //             return;
    // //         }

    // //         if ($scope.user.PropertyObj) {
    // //             $scope.userPropertySelect = $scope.user.PropertyObj;
    // //             changeProperty($scope.userPropertySelect);
    // //         }

    // //         userService.getProperties($scope.user.userId, $scope.user.Brands).then(function (response) {
    // //             if (response.data.length === 0) {
    // //                 messaging.Error(oneTranslateFact.translate("msgUserWithoutProperty"));
    // //                 $scope.logout();
    // //                 return;
    // //             };
    // //             userProperties = response.data;
    // //             propertyService.setUserProperties(response.data);

    // //             if (!$scope.user.PropertyObj) {

    // //                 $scope.userPropertySelect = userProperties[0];

    // //                 if ($scope.user.DefaultProperty > 0) {
    // //                     for (var i = 0; i < userProperties.length; i++) {
    // //                         if (userProperties[i].IdProperty === $scope.user.DefaultProperty) {
    // //                             $scope.userPropertySelect = userProperties[i];
    // //                             break;
    // //                         }
    // //                     }
    // //                 }
    // //                 changeProperty($scope.userPropertySelect);
    // //             }
    // //         }, function (error) {
    // //             throw error;
    // //         });
    // //     }
    // // };

    // $scope.fillLoginData = function () {

    //     if (hubBrand) {
    //         hubBrand.stop();

    //         hubBrand = null;
    //     }

    //     if (authService.isAuth()) {
    //         $scope.user = localStorageService.get(window.appHotelOneSettings.authorizationDataStorageName);
    //         $scope.user.first = $scope.user.userName.split(',')[1].trim();
    //         $scope.user.last = $scope.user.userName.split(',')[0].trim();
    //         $scope.user.UserAvatar = $scope.user.picture || new Date().getTime();

    //         fillPropertyData();
    //         initHub();
    //     }
    // };

    // $scope.releaseNotesShow = function () {
    //     $scope.addTabs("releaseNotes", "releaseNotes");
    // };

    // $scope.linkSupport = function () {
    //     window.open('https://appsistemas.movidesk.com/kb/pt-br', '_blank');
    // };

    // $scope.linkTraining = function () {
    //     window.open('https://www.appensina.com.br/', '_blank');
    // };

    // $scope.enableSupport = function () {
    //     $uibModal.open({
    //         animation: true,
    //         component: "enableSupportComponent",
    //         size: 'lg select-property'
    //     });

    //     if (!$('#navHelpMenu').is(':hidden')) {
    //         $('#navHelpMenu').toggle();
    //         $('.overlay-nav').hide();
    //     }
    // };

    // $scope.viewFolios = function () {
    //     $scope.addTabs("folios.list", "folios", { showExpiredCheckouts: true });
    // };

    // $scope.viewReservation = function () {
    //     $scope.addTabs("reservations.list", "reservations", { showBlocksToExpire: true });
    // };

    // $scope.viewNegotiationsNinety = function () {
    //     $scope.addTabs("ratePlans.negotiated", "ratePlans", { showNegotiationNinety: true });
    // };
    // $scope.addTabs = function (action, tab, parameters) {

    //     //#hack for saved home profile
    //     if (angular.isObject(action)) {
    //         tab = action.name;
    //         action = action.route;
    //     }

    //     if (authService.isAuth()) {

    //         if ($scope.tabs[tab][3]) {
    //             if (action === "backofficeIntegration") {
    //                 let url = "http://" + window.appHotelOneSettings.urls.hostApp + "-bo.hitspms.net/";
    //                 window.open(url);
    //                 return;
    //             }
    //         }

    //         //hide current div
    //         $('#' + window.currentTab).hide();

    //         if ((angular.isDefinedAndNotNull($scope.tabs[tab])) && (!angular.isDefinedAndNotNull($scope.tabs[tab][3]) || !$scope.tabs[tab][3])) {
    //             var tabHtml = '';

    //             tabHtml += '<div class="tab ' + tab + '">';
    //             tabHtml += '  <a id="tab' + tab + '" class="show-tab" tab="' + tab + '" href="#/' + action + '">' + $scope.tabs[tab][0] + ' ' + $scope.tabs[tab][1] + '</a>';
    //             tabHtml += '  <a id="closeTab' + tab + '" href="Javascript: void(0);" class="close-tab material-icons" tab="' + tab + '" ng-click="unstickyState(\'' + action + '\')">close</a>';
    //             tabHtml += '</div>';

    //             var tabHtmlCompiled = $compile(tabHtml)($scope);

    //             var owlTabs = $("#owl-tabs").data('owlCarousel');

    //             owlTabs.addItem(tabHtmlCompiled, 0);
    //             $scope.tabs[tab][3] = true;
    //             $scope.recentTabs[tab] = $scope.tabs[tab];
    //         }

    //         //scroll to top
    //         $('body').animate({ scrollTop: 0 }, 0);
    //         //set tab active
    //         if (window.currentTab === 'home') {
    //             $('.home').removeClass('active');
    //             $("#dash").hide();
    //         } else {
    //             $('.tab.' + window.currentTab).removeClass('active');
    //         }

    //         $('.tab.' + tab).addClass('active');

    //         //store new current tab
    //         window.currentTab = tab;
    //         $scope.currentTab = $scope.tabs[tab][0];
    //         $scope.withoutFlapsRecent = $scope.tabs[tab][3];

    //         $state.go(action, parameters).then(function () {
    //             $('#' + tab).show();
    //         });

    //         if (!$('#navSearchMenu').is(':hidden')) {
    //             $('#navSearchMenu').toggle();
    //             $('.overlay-nav').hide();
    //             $scope.searchModel.search = "";
    //         }

    //         if (!$('#navOptionsRecents').is(':hidden')) {
    //             $('#navOptionsRecents').toggle();
    //             $('.overlay-nav').hide();
    //         }

    //         if (!$('#navHelpMenu').is(':hidden')) {
    //             $('#navHelpMenu').toggle();
    //             $('.overlay-nav').hide();
    //         }
    //     }
    // };

    // var $timeOutShowSearch = null;
    // $scope.checkShowSearch = function () {

    //     $timeOutShowSearch = $timeout(function () {
    //         if ($('#navSearchMenu').is(":visible")) {
    //             document.getElementById('allMenusSearchInput').focus();
    //         }

    //         if ($timeOutShowSearch) {
    //             $timeout.cancel($timeOutShowSearch);
    //         }
    //     });

    // };

    // $scope.closeAllTabs = function () {

    //     $timeout(function () {
    //         $state.go("home");
    //         $('#home').show();

    //         $timeout(function () {

    //             for (var key in $scope.tabs) {

    //                 if ($scope.tabs.hasOwnProperty(key)) {
    //                     if ($scope.tabs[key][3] === true) {
    //                         router.exitSticky(key);
    //                         $deepStateRedirect.reset(key);
    //                     }
    //                     $scope.tabs[key][3] = false;
    //                 }
    //             }
    //         }, 100);

    //     }, 100);

    //     $("#owl-tabs").find(".owl-item").each(function () {
    //         $(this).remove();
    //     });
    //     var owlTabs = $("#owl-tabs").data('owlCarousel');

    //     if (owlTabs)
    //         owlTabs.reinit();

    //     $('#' + window.currentTab).hide();

    //     window.currentTab = 'home';

    //     //set home tab active
    //     $('.home').addClass('active');
    //     $("#dash").show();

    //     if (!$('#navOptionsRecents').is(':hidden')) {
    //         $('#navOptionsRecents').toggle();
    //         $('.overlay-nav').hide();
    //     }

    //     if (!$('#navHelpMenu').is(':hidden')) {
    //         $('#navHelpMenu').toggle();
    //         $('.overlay-nav').hide();
    //     }

    //     $scope.withoutFlapsRecent = 0;
    // };

    // $scope.customSearchOptions = {
    //     onSelect: function (item) {
    //         $scope.addTabs(item.Code, item.Code);
    //     }
    // };

    // $scope.$on('$destroy', function () {
    //     if (hubBrand) {
    //         hubBrand.stop();
    //     }

    //     if (hubBrand) {
    //         hubBrand = null;
    //     }

    //     if ($logoffTimeOut) {
    //         $timeout.cancel($logoffTimeOut);
    //     }

    // });

    // var selectProperty = function (sc) {

    //     $scope.user = localStorageService.get(localSettings.authorizationDataStorageName);
    //     $scope.user.Brands = sc.IdBrand;
    //     $scope.user.DefaultProperty = sc.IdProperty;
    //     $scope.user.PropertyObj = sc.PropertyObj;
    //     localStorageService.set(localSettings.authorizationDataStorageName, $scope.user);
    //     $scope.goHome();

    //     var model = {};
    //     model.IdUser = $scope.user.userId;
    //     model.IdProperty = $scope.user.DefaultProperty;
    //     model.IsSelected = sc.SetPropDefault;

    //     $http.defaults.headers.common["X-API-PROPERTY-CODE"] = $scope.user.DefaultProperty;
    //     localStorageService.set(window.appHotelOneSettings.currentSelectedHotelCodeStorageName, $scope.user.DefaultProperty);
    //     localStorageService.set(window.appHotelOneSettings.currentSelectedHotelTimeZone, sc.Utc);
    //     window.appHotelOneSettings.currentSelectedHotelCode = $scope.user.DefaultProperty;
    //     userService.setDefaultPropertyOnLogin(model);
    // };

    // var openBrandModal = function () {
    //     modalBrands.OpenBrands($scope.brandsButtons).result.then(function (selectedItem) {
    //         if (selectedItem === null || selectedItem === undefined) {
    //             return;
    //         }
    //         selectProperty(selectedItem);
    //     });
    // };

    // $scope.chooseBrand = function () {
    //     $scope.message = "";
    //     $scope.user = localStorageService.get(localSettings.authorizationDataStorageName);
    //     blockUi.start(window.Translate('msgWaiting'));
    //     userService.getUserBrands($scope.user.userId).then(
    //         function (responseSc) {

    //             $scope.brandsButtons = responseSc.data;
    //             openBrandModal();
    //         },
    //         function (error) {
    //             throw error;
    //         }).finally(function () {
    //             blockUi.stop();
    //         });
    // };

    // $scope.goHome = function () {
    //     $state.go("home");
    //     $scope.$emit('fillLoginDataListener');
    // };

    // $scope.goAllComponents = function () {
    //     $uibModal.open({
    //         animation: true,
    //         templateUrl: localUrl + "/app/views/all-components/all-components.html",
    //         controller: "allComponentsController",
    //         size: "lg",
    //         backdrop: 'static'
    //     });
    // };

    // $scope.changeTheme = function (theme) {
    //     var themeRabbitInn = '/AppSistemas.APPHotelOne.Web/assets/css/style-scss-app-hotel-one.css';
    //     var themeAppHotelOne = '/AppSistemas.APPHotelOne.Web/assets/css/style-scss.css';

    //     var faviconRabbitInn = '/AppSistemas.APPHotelOne.Web/assets/img/favicon-appHotelOne.ico';
    //     var faviconAppHotelOne = '/AppSistemas.APPHotelOne.Web/assets/img/favicon-rabbitInn.ico';

    //     var cssFile, oldlink, favicon;

    //     function changeFavicon(img) {
    //         var favicon = document.querySelector('link[rel="shortcut icon"]');
    //         if (!favicon) {
    //             favicon = document.createElement('link');
    //             favicon.setAttribute('rel', 'shortcut icon');
    //             var head = document.querySelector('head');
    //             head.appendChild(favicon);
    //         }
    //         favicon.setAttribute('type', 'image/png');
    //         favicon.setAttribute('href', img);
    //     }

    //     function changeCssTheme() {
    //         var linksLength = document.getElementsByTagName("link").length;
    //         for (var i = 0; i < linksLength; i++) {
    //             if (document.getElementsByTagName("link")[i].href.search(themeAppHotelOne) > 0 || document.getElementsByTagName("link")[i].href.search(themeRabbitInn) > 0) {

    //                 if (theme === 0) {
    //                     if (document.getElementsByTagName("link")[i].href.search(themeAppHotelOne) > 0) {
    //                         favicon = faviconRabbitInn;
    //                         oldlink = themeAppHotelOne;
    //                         cssFile = themeRabbitInn;
    //                     }
    //                     else {
    //                         favicon = faviconAppHotelOne;
    //                         cssFile = themeAppHotelOne;
    //                         oldlink = themeRabbitInn;
    //                     }
    //                 }
    //                 else if (theme === 1) {
    //                     favicon = faviconRabbitInn;
    //                     oldlink = themeAppHotelOne;
    //                     cssFile = themeRabbitInn;
    //                 }
    //                 else {
    //                     favicon = faviconAppHotelOne;
    //                     cssFile = themeAppHotelOne;
    //                     oldlink = themeRabbitInn;
    //                 }

    //                 oldlink = document.getElementsByTagName("link").item(i);
    //                 break;
    //             }
    //         }

    //         var newlink = document.createElement("link");

    //         newlink.setAttribute("rel", "stylesheet");
    //         newlink.setAttribute("type", "text/css");
    //         newlink.setAttribute("href", cssFile);

    //         document.getElementsByTagName("head")[0].removeChild(oldlink);
    //         document.getElementsByTagName("head")[0].appendChild(newlink);

    //         changeFavicon(favicon);
    //     }

    //     changeCssTheme();
    // };

    // // define a handler
    // function docKeyUp(e) {
    //     // this would test for whichever key is 40 and the ctrl key at the same time
    //     if (e.ctrlKey && e.shiftKey && e.altKey && e.keyCode === 186) {
    //         // call your function to do the thing
    //         $scope.goAllComponents();
    //     }
    //     if (e.ctrlKey && e.shiftKey && e.altKey && e.keyCode === 49) {
    //         // call your function to do the thing
    //         $scope.changeTheme(1);
    //     }
    //     if (e.ctrlKey && e.shiftKey && e.altKey && e.keyCode === 50) {
    //         // call your function to do the thing
    //         $scope.changeTheme(2);
    //     }
    //     if (e.ctrlKey && e.shiftKey && e.altKey && e.keyCode === 84) {
    //         // call your function to do the thing
    //         $scope.changeTheme(0);
    //     }
    // }
    // // register the handler
    // document.addEventListener('keyup', docKeyUp, false);

    // $scope.headerOpenModalReport = function () {
    //     $scope.addTabs('reports', 'reports');
    // };

    // $scope.headerOpenExports = function () {
    //     $scope.addTabs('exports', 'exports');
    // };

    // $scope.headerOpenImport = function () {
    //     $scope.addTabs('import', 'import');
    // };

    // $scope.headerOpenModalDashboard = function () {
    //     var modalInstance = $uibModal.open({
    //         animation: true,
    //         component: "modalDashboardComponent",
    //         size: "home-modal-dashboard",
    //         resolve: {
    //             user: function () {
    //                 return $scope.user.userId;
    //             },
    //             dashboard: ['dashboardService', function (dashboardService) {
    //                 return dashboardService.get();
    //             }]
    //         }
    //     });

    //     modalInstance.result.then(function () {
    //         $scope.$broadcast('fillUserDashboard');
    //     }, function (error) {
    //         throw error;
    //     });
    // };

    // $scope.markRead = function (item) {

    //     blockUi.start(window.Translate('msgWaiting'));
    //     notificationService.markRead(item).then(
    //         function () {
    //             loadNotifications();
    //         },
    //         function (error) {
    //             throw error;
    //         }).finally(function () {
    //             blockUi.stop();
    //         });

    // };

    // $scope.readAll = function () {
    //     blockUi.start(window.Translate('msgWaiting'));
    //     notificationService.readAll().then(
    //         function () {
    //             loadNotifications();
    //         },
    //         function (error) {
    //             throw error;
    //         }).finally(function () {
    //             blockUi.stop();
    //         });
    // };

    // $scope.searchModel = {};

    // $scope.ignoreAccents = function (item) {
    //     if (!$scope.searchModel.search)
    //         return true;
    //     var text = item.Name.toLowerCase().removeAccents();
    //     var search = $scope.searchModel.search.toLowerCase().removeAccents();
    //     return text.indexOf(search) > -1;
    // };

    // $scope.onExit = function () {
    //     authService.removeAuthData();
    //     $scope.user = {};
    //     $scope.configMenu = [];
    //     $scope.defMenu = [];
    //     userProperties = [];
    //     window.appHotelOneSettings.currentSelectedHotelCode = "0";
    // };

    // var authorizationBeforeWindowClose = null;

    // window.onunload = function () {

    //     authorizationBeforeWindowClose = localStorageService.get(localSettings.authorizationDataStorageName);

    //     if ($authsusceptor.isAuth()) {
    //         authService.removeAuthData();
    //         $authsusceptor.Logoff();
    //     }
    // };

    // window.onpagehide = function () {

    //     if (authorizationBeforeWindowClose !== null) {
    //         return;
    //     }

    //     if ($authsusceptor.isAuth()) {
    //         authService.removeAuthData();
    //         $authsusceptor.Logoff();
    //     }
    // };

    // // Menu fixed
    // var didScroll;
    // var lastScrollTop = 0;
    // var delta = 5;
    // var navbarHeight = $('#menuFixo').outerHeight();

    // $(window).scroll(function () {
    //     didScroll = true;
    // });

    // setInterval(function () {
    //     if (didScroll) {
    //         hasScrolled();
    //         didScroll = false;
    //     }
    // }, 1);

    // function hasScrolled() {
    //     var st = $(this).scrollTop();

    //     if (Math.abs(lastScrollTop - st) <= delta)
    //         return;
    //     if (st > lastScrollTop && st > navbarHeight) {
    //         $('#menuFixo').removeClass('box-menu-fixed');
    //         $('#mainContent').removeClass('main-content-padding');
    //     } else {
    //         if (st + $(window).height() < $(document).height()) {
    //             $('#menuFixo').addClass('box-menu-fixed');
    //             $('#mainContent').addClass('main-content-padding');
    //         }
    //     }

    //     lastScrollTop = st;
    // }
};

mainControler.$inject = ['$scope', '$injector', '$uiRouter'];


export default mainControler;

(function ($) {
    $.fn.extend({
        onShow: function (callback, unbind) {
            return this.each(function () {
                var bindopt = (unbind === undefined) ? true : unbind;
                if ($.isFunction(callback)) {
                    if ($(this).is(':hidden')) {
                        var checkVis = function () {
                            if ($(this).is(':visible')) {
                                callback.call(this);
                                if (bindopt) {
                                    $('body').unbind('click keyup keydown', checkVis);
                                }
                            }
                        };
                        $('body').bind('click keyup keydown', checkVis);
                    }
                    else {
                        callback.call(this);
                    }
                }
            });
        }
    });
})(jQuery);
