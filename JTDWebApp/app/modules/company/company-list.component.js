import angular from "angular";
import { companyServices } from "./company.services";

export const companyListComponent = {
	template: require('./company-list.html'),
	controller: ['$scope','companyServices', ($scope, companyServices) => {
		$scope.hello = "Hello";

		console.log(companyServices);

		companyServices.getCompanies()
		.success(r => console.log(r))
		.error(e => console.log(e));

	}]
};