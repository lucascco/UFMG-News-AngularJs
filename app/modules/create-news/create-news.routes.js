(function() {
	'use strict';

	angular
		.module('AngularJsNews.create-news.routes', [])
		.config(Config);

	Config.$inject = ['$stateProvider'];

	/* @ngInject */
	function Config($stateProvider) {
		$stateProvider.state('app.internal.createNews', {
      url: '/create-news',
			views: {
				app: {
					controller: 'NewsCreateController',
					controllerAs: 'createNews',
					templateUrl: 'create-news/create-news.html'
				}
			}
    });

		$stateProvider.state('app.internal.editNews', {
      url: '/edit-news/:id',
			views: {
				app: {
					controller: 'NewsCreateController',
					controllerAs: 'createNews',
					templateUrl: 'create-news/create-news.html'
				}
			}
		});
	}
})();
