(function() {
	'use strict';

	angular
		.module('AngularJsNews.app.config', [])
		.config(Config);

	Config.$inject = ['$httpProvider', '$provide', '$locationProvider'];

	/* @ngInject */
	function Config($httpProvider, $provide, $locationProvider) {

		activate();

		////////////////

		function activate() {
			// $locationProvider.html5Mode(true);
			$httpProvider.defaults.useXDomain = true;
			$httpProvider.defaults.headers['Content-Type'] = 'application/json; charset=UTF-8';
			delete $httpProvider.defaults.headers.common['X-Requested-With'];
		}
	}
})();
