var viewCrudTemplate = '<div ui-view="viewList"></div><div ui-view="viewDetail"></div>';

function localUrl() {

    var local = location.pathname;

    if (local.toUpperCase().indexOf("CALLBACK") !== -1) {
        local = window.appHotelOneSettings.urls.urlApplicationPath;
    }

    if (local.substr(local.length - 1) !== "/") {
        local += "/";

    }
    return local;
};

export const layout = {
    name: 'app',
    "abstract": true,
    templateUrl: localUrl() + "app/views/shared/_layout.html",
    data: {
        requireLogin: false
    }
};

export const home = {
    parent: 'app',
    name: 'home',
    url: "/home",
    sticky: true,
    views: {
        "viewDash": {
            templateUrl: localUrl() + "app/views/home/home.html"
        }
    },
    lazyLoad: function (transition) {
        const $ocLazyLoad = transition.injector().get('$ocLazyLoad');
        return import('./modules/main/main.module').then(mod => $ocLazyLoad.load(mod.MAIN_MODULE));
    }
};

export const companyFutureState = {
    parent: 'app',
    name: 'companies.**',
    url: '/companies',
    sticky: true,
    views: {
        'viewCompany': {
            template: '<div ui-view="viewList"></div><div ui-view="viewDetail"></div>'
        }
    },
    lazyLoad: function (transition) {
        const $ocLazyLoad = transition.injector().get('$ocLazyLoad');
        return import('./modules/company/company.module').then(mod => $ocLazyLoad.load(mod.COMPANY_MODULE));
    }
};

export const testeFutureState = {
    parent: 'app',
    name: 'testes.**',
    url: '/testes',
    sticky: true,
    views: {
        'viewTeste': {
            template: '<div ui-view="viewT"></div>'
        }
    },
    lazyLoad: function (transition) {
        const $ocLazyLoad = transition.injector().get('$ocLazyLoad');
        return import('./modules/teste/teste.module').then(mod => $ocLazyLoad.load(mod.TESTE_MODULE));
    }
};

export const guestFutureState = {
    parent: 'app',
    name: 'guests.**',
    url: '/guests',
    views: {
        'viewGuest': {
            template: '<div ui-view="viewList"></div><div ui-view="viewDetail"></div>'
        }
    },
    lazyLoad: (transition) => {
        const $ocLazyLoad = transition.injector().get('$ocLazyLoad');
        return import('./modules/guest/guest.module').then(mod => $ocLazyLoad.load(mod.GUEST_MODULE));
    }
}

export const travelFutureState = {
    parent: 'app',
    name: 'travels.**',
    url: '/travels',
    views: {
        'viewTravel': {
            template: viewCrudTemplate
        }
    },
    lazyLoad: (transition) => {
        const $ocLazyLoad = transition.injector().get('$ocLazyLoad');
        return import('./modules/travel/travel.module').then(mod => $ocLazyLoad.load(mod.TRAVEL_MODULE));
    }
}
export const vehicleFutureState = {
    parent: 'app',
    name: 'vehicles.**',
    url: '/vehicles',
    views: {
        'viewVehicle': {
            template: viewCrudTemplate
        }
    },
    lazyLoad: (transition) => {
        const $ocLazyLoad = transition.injector().get('$ocLazyLoad');
        return import('./modules/vehicle/vehicle.module').then(mod => $ocLazyLoad.load(mod.VEHICLE_MODULE));
    }
}
export const driverFutureState = {
    parent: 'app',
    name: 'drivers.**',
    url: '/drivers',
    views: {
        'viewDriver': {
            template: viewCrudTemplate
        }
    },
    lazyLoad: (transition) => {
        const $ocLazyLoad = transition.injector().get('$ocLazyLoad');
        return import('./modules/driver/driver.module').then(mod => $ocLazyLoad.load(mod.DRIVER_MODULE));
    }
}