import angular from "angular";

export const testeComponent = {
	template: require('./teste.html'),
	controller: ['$scope', function ($scope){
		$scope.hello = "Hello";
	}]
};