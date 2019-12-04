export const vehicleState = {
    parent: 'app',
    name: 'vehicles',
    url: '/vehicles',
    dsr: true,
    views: {
        'viewVehicle': {
            template: '<div ui-view="viewList"></div><div ui-view="viewDetail"></div>',
        }
    },
    deepStateRedirect: {
        default: { state: 'vehicles.list' }
    }
};

export const vehicleDetailState = {
    name: 'vehicles.detail',
    url: '/:id',
    views: {
        'viewDetail': {
            component: 'vehicleDetailComponent',
        }
    },
};

export const vehicleListState = {
    name: 'vehicles.list',
    views: {
        'viewList': {
            component: 'vehicleListComponent',
        },
    }
};