angular.module('app', [
		'ui.router',
		'ngMaterial'
	]).run(function () {
		console.log("App is run");
	})
	.config(function ($mdThemingProvider) {
		$mdThemingProvider.theme('my-theme')
			.primaryPalette('indigo')
			.accentPalette('amber')
			.warnPalette('red')
			.backgroundPalette('blue-grey');
	});