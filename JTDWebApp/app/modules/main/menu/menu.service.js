menuService.$inject = ['$http', '$q', '$cacheFactory', 'localStorageService', '$injector'];

export function menuService($http, $q, $cacheFactory, localStorageService) {

    var cache = $cacheFactory('menuServiceCache');
    var api = window.appHotelOneSettings.apiServiceBaseUri + 'api/';

    var getMenus = function () {

        var cacheName = "getMenus" + localStorageService.get(window.appHotelOneSettings.selectecLanguageStorageName);
        var deferred = $q.defer();
        var returnValue = cache.get(cacheName);

        if (!returnValue) {
            $http.get(api + 'Menu/GetApplicationMenu').then(
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

    var menus = [];

    var setMenus = function (m) {
        menus = m;
    };

    var service = {};

    service.GetUserGroupMenu = function () {
        var cacheName = "GetUserGroupMenu" + localStorageService.get(window.appHotelOneSettings.selectecLanguageStorageName);
        var deferred = $q.defer();
        var returnValue = cache.get(cacheName);

        if (!returnValue) {
            $http.get(api + 'Menu/GetUserGroupMenu').then(
                function (response) {
                    deferred.resolve(response.data);
                    cache.put(cacheName, response.data);
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

    var tabs = {};

    var getTabSub = function (sub) {
        for (var i = 0; i < sub.length; i++) {
            if (sub[i].Op !== 0) {
                tabs[sub[i].Code] = [sub[i].Name.toUpperCase(), "", false, sub[i].IsExternalLink];
            }

            if (angular.isDefinedAndNotNull(sub[i].Sub) && sub[i].Sub !== null)
                getTabSub(sub[i].Sub);
        }
    };

    var getTabs = function () //Op !== 0
    {
        getTabSub(menus);
        return tabs;
    };

    var getConfigMenu = function () //Type === 1
    {
        var configMenu = { inArray: [], inHtml: "" };

        configMenu.inHtml += '<ul role="menu">';

        for (var a in menus) {
            if (menus.hasOwnProperty(a)) {
                if (menus[a].Type === 1) //Type === 1
                {
                    var sub = menus[a].Sub;
                    for (var b in sub) {
                        if (sub.hasOwnProperty(b)) {
                            if (!angular.isFunction(sub[b])) {
                                configMenu.inArray.push(sub[b]);

                                if (menus[a].Sub[b].Visible && menus[a].Sub[b].Type === 1) {
                                    configMenu.inHtml += '    <li class="item no-selection">';
                                    configMenu.inHtml += `    <a data-toggle="collapse" href="#${menus[a].Sub[b].Code}" id="menu${menus[a].Sub[b].Code}" aria-expanded="false"`;
                                    configMenu.inHtml += `            aria-controls="${menus[a].Sub[b].Code}" class="collapsed">`;
                                    configMenu.inHtml += `            <span>${menus[a].Sub[b].Name}</span>`;
                                    configMenu.inHtml += '    </a>';
                                    configMenu.inHtml += `    <ul id="${menus[a].Sub[b].Code}" class="collapse">`;

                                    for (var i = 0; i < menus[a].Sub[b].Sub.length; i++) {
                                        var subMenu = menus[a].Sub[b].Sub[i];

                                        if (subMenu.Visible) {
                                            configMenu.inHtml += `    <li class="menu${menus[a].Sub[b].Code} openTab subitem no-selection"`;
                                            configMenu.inHtml += `                action="${subMenu.Code}" data-item="box-${subMenu.Code}" tab="${subMenu.Code}" data-tipo="tab"`;
                                            configMenu.inHtml += `                ng-click="addTabs('${subMenu.Code}', '${subMenu.Code}')" id="menu${subMenu.Code}"`;
                                            configMenu.inHtml += '                one-draggable-menu>';
                                            configMenu.inHtml += '                <a>';
                                            configMenu.inHtml += '                    <i class="material-icons i-arrow">keyboard_arrow_right</i>';
                                            configMenu.inHtml += `                    <i class="ui-draggable-handle"><span>${subMenu.Name}</span></i>`;
                                            configMenu.inHtml += '                </a>';
                                            configMenu.inHtml += '    </li>';
                                        }
                                    }
                                    configMenu.inHtml += '    </ul>';
                                    configMenu.inHtml += '    </li>';
                                }
                            }
                        }
                    }
                }
            }
        }

        configMenu.inHtml += '<ul role="menu">';
        return configMenu;
    };

    var getOperationMenu = function ()//type = 2
    {
        var operationMenu = { inArray: [], inHtml: "" };

        operationMenu.inHtml += '<ul role="menu">';

        for (var a in menus) {
            if (menus.hasOwnProperty(a)) {
                if (menus[a].Type === 2) //Type === 2
                {
                    if (menus[a].Sub) {
                        for (var b in menus[a].Sub) {
                            if (menus[a].Sub.hasOwnProperty(b)) {

                                operationMenu.inArray.push(menus[a].Sub[b]);

                                if (menus[a].Sub[b].Visible && menus[a].Sub[b].Type === 2) {
                                    operationMenu.inHtml += '    <li class="item no-selection">';
                                    operationMenu.inHtml += `    <a data-toggle="collapse" href="#${menus[a].Sub[b].Code}" id="menu${menus[a].Sub[b].Code}" aria-expanded="false"`;
                                    operationMenu.inHtml += `            aria-controls="${menus[a].Sub[b].Code}" class="collapsed">`;
                                    operationMenu.inHtml += `            <span>${menus[a].Sub[b].Name}</span>`;
                                    operationMenu.inHtml += '    </a>';
                                    operationMenu.inHtml += `    <ul id="${menus[a].Sub[b].Code}" class="collapse">`;

                                    for (var i = 0; i < menus[a].Sub[b].Sub.length; i++) {
                                        var subMenu = menus[a].Sub[b].Sub[i];

                                        if (subMenu.Visible) {
                                            operationMenu.inHtml += `    <li class="menu${menus[a].Sub[b].Code} openTab subitem no-selection"`;
                                            operationMenu.inHtml += `                action="${subMenu.Code}" data-item="box-${subMenu.Code}" tab="${subMenu.Code}" data-tipo="tab"`;
                                            operationMenu.inHtml += `                ng-click="addTabs('${subMenu.Code}', '${subMenu.Code}')" id="menu${subMenu.Code}"`;
                                            operationMenu.inHtml += '                one-draggable-menu>';
                                            operationMenu.inHtml += '                <a>';
                                            operationMenu.inHtml += '                    <i class="material-icons i-arrow">keyboard_arrow_right</i>';
                                            operationMenu.inHtml += `                    <i class="ui-draggable-handle"><span>${subMenu.Name}</span></i>`;
                                            operationMenu.inHtml += '                </a>';
                                            operationMenu.inHtml += '    </li>';
                                        }
                                    }
                                    operationMenu.inHtml += '    </ul>';
                                    operationMenu.inHtml += '    </li>';
                                }
                            }
                        }
                    }
                }
            }
        }

        operationMenu.inHtml += '</ul>';
        return operationMenu;
    };

    service.getTabs = getTabs;
    service.getConfigMenu = getConfigMenu;
    service.getOperationMenu = getOperationMenu;
    service.getMenus = getMenus;
    service.setMenus = setMenus;

    return service;
}

export default angular.module('services.menuService', [])
    .service('menuService', menuService).name;
