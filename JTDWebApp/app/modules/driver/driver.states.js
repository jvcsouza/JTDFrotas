export const driverState = {
    parent: 'app',
    name: 'drivers',
    url: '/drivers',
    dsr: true,
    views: {
        'viewDriver': {
            template: '<div ui-view="viewList"></div><div ui-view="viewDetail"></div>',
        }
    },
    deepStateRedirect: {
        default: { state: 'drivers.list' }
    }
};

export const driverDetailState = {
    name: 'drivers.detail',
    url: '/:id',
    views: {
        'viewDetail': {
            component: 'driverDetailComponent',
        }
    },
};

export const driverListState = {
    name: 'drivers.list',
    views: {
        'viewList': {
            component: 'driverListComponent',
        },
    }
};