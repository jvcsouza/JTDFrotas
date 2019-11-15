export const travelState = {
    parent: 'app',
    name: 'travels',
    url: '/travels',
    dsr: true,
    views: {
        'viewTravel': {
            template: '<div ui-view="viewList"></div><div ui-view="viewDetail"></div>',
        }
    },
    deepStateRedirect: {
        default: { state: 'travels.list' }
    }
};

export const travelDetailState = {
    name: 'travels.detail',
    url: '/:id',
    views: {
        'viewDetail': {
            component: 'travelDetailComponent',
        }
    },
};

export const travelListState = {
    name: 'travels.list',
    views: {
        'viewList': {
            component: 'travelListComponent',
        },
    }
};