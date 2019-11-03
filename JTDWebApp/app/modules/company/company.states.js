export const companyState = {
	parent:'app',
	name: 'companies',
	url: '/companies',
	dsr: true,
	sticky: true,
	views: {
		'viewCompany':{
			template: '<div ui-view="viewList"></div><div ui-view="viewDetail"></div>'
		}
	},
	deepStateRedirect: {
        default: { state: 'companies.list' }
    }
};

export const companyListState = {
	name: 'companies.list',
	views: {
		'viewList': {
			component: 'companyListComponent'
		}
	}
};


