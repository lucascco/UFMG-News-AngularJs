(function() {
	'use strict';

	angular
		.module('AngularJsNews.dash.routes', [])
		.config(Config);

	Config.$inject = ['$stateProvider'];

	/* @ngInject */
	function Config($stateProvider) {
		$stateProvider.state('app.internal.dash', {
			url: '/dash',
			views: {
				app: {
					controller: 'DashController',
					controllerAs: 'dash',
					templateUrl: 'dash/dash.html'
				}
			}
		});
	}
})();
