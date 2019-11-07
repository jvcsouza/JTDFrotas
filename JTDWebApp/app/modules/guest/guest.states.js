export const guestState = {
    parent: 'app',
    name: 'guests',
    url: '/guests',
    dsr: true,
    sticky: true,
    views: {
        'viewGuest': {
            template: '<div ui-view="viewList"></div><div ui-view="viewDetail"></div>'
        }
    },
    deepStateRedirect: {
        default: { state: 'guests.list' }
    }
};

export const guestListState = {
    name: 'guests.list',
    views: {
        'viewList': {
            component: 'guestListComponent'
        }
    }
};