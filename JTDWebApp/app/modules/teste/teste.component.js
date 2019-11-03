import angular from "angular";

export const testeComponent = {
	template: require('./teste.html'),
	controller: ['$scope','$uiRouter', function ($scope, $uiRouter){
		$scope.hello = "Hello";
		var $deepStateRedirect = $uiRouter._plugins["deep-state-redirect"];
		console.log($scope);
	}]
};