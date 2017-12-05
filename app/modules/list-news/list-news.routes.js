(function() {
	'use strict';

	angular
		.module('AngularJsNews.list-news.routes', [])
		.config(Config);

	Config.$inject = ['$stateProvider'];

	/* @ngInject */
	function Config($stateProvider) {
		$stateProvider.state('app.internal.listNews', {
      url: '/list-news',
			views: {
				app: {
					controller: 'ListNewsController',
					controllerAs: 'listNews',
					templateUrl: 'list-news/list-news.html'
				}
			}
		});
	}
})();
