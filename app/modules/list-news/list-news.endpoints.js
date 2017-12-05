(function() {
	'use strict';

	angular
		.module('AngularJsNews.list-news.endpoints', [])
		.factory('ListNewsEndpoints', ListNewsEndpoints);

    ListNewsEndpoints.$inject = ['API_URL'];

	/* @ngInject */
	function ListNewsEndpoints(API_URL) {
		var service = {
		};
		return service;

		////////////////

	}
})();
