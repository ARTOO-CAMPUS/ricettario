angular.module('app').controller('HomeCtrl', function ($scope, $timeout, $mdSidenav, $log) {
	$scope.close = function () {
		$mdSidenav('left').close()
			.then(function () {});
	};
	$scope.open = function () {
		$mdSidenav('left').toggle()
			.then(function () {});
	};


});