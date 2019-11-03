export const testeState = {
	parent:'app',
	name: 'testes',
	url: '/testes',
	dsr: true,
	sticky: true,
	views: {
		'viewTeste':{
			template: '<div ui-view="viewT"></div>'
		}
	},
	deepStateRedirect: {
        default: { state: 'testes.te' }
    }
};

export const testesTState = {
	name: 'testes.te',
	views: {
		'viewT': {
			component: 'testeComponent'
		}
	}
};


