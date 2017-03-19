angular.module('app').controller('HomeCtrl', function ($scope, $timeout, $mdSidenav, $log) {
	$scope.close = function () {
		// Component lookup should always be available since we are not using `ng-if`
		$mdSidenav('left').close()
			.then(function () {

			});
	};
	$scope.open = function () {
		console.log("toggle");
		// Component lookup should always be available since we are not using `ng-if`
		$mdSidenav('left').toggle()
			.then(function () {

			});
	};


});