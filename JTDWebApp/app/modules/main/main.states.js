export const mainState = {
    parent: 'app',
    name: 'dashboard',
    url: "/dashboard",
    dsr: true,
    sticky: true,
    views: {
        "viewDashboard": {
            template: '<div ui-view="viewList"></div><div ui-view="viewDetail"></div>'
        }
    },
    deepStateRedirect: {
        default: { state: 'dashboard.list' }
    }
};

export const mainDetailState = {
    name: 'login',
    url: "/login",
    cache: false,
    component: "loginComponent",
    data: {
        requireLogin: true
    }
};

export const mainListState = {
    name: 'dashboard.list',
    views: {
        'viewList': {
            component: "dashboardComponent"
        }
    }
};
