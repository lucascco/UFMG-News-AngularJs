(function() {
	'use strict';

	angular
		.module('AngularJsNews.login.routes', [])
		.config(Config);

	Config.$inject = ['$stateProvider'];

	/* @ngInject */
	function Config($stateProvider) {
		$stateProvider.state('app.external.login', {
			url: '/login',
			views: {
				app: {
					controller: 'LoginController',
					controllerAs: 'login',
					templateUrl: 'login/login.html'
				}
			}
		});
	}
})();
