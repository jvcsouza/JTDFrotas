import angular from "angular";
import { companyServices } from "./company.services";

export const companyListComponent = {
	template: require('./company-list.html'),
	controller: ['$scope','companyServices', ($scope, companyServices) => {
		$scope.hello = "Hello";

		// console.log(companyServices);

		$scope.teste = (t) => alert("Editando usuario: " + t);

		companyServices.getCompanies()
		.success(r => $scope.companies = r)
		.error(e => console.log(e));11

	}]
};