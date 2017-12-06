(function() {
	'use strict';

	angular
		.module('AngularJsNews.list-news.endpoints', [])
		.factory('ListNewsEndpoints', ListNewsEndpoints);

    ListNewsEndpoints.$inject = ['API_URL'];

	/* @ngInject */
	function ListNewsEndpoints(API_URL) {
		let service = {
      list: list,
      news: news
		};
		return service;

		////////////////

		function list() {
			return API_URL + '/news';
    }

		function news(idNews) {
			return API_URL + '/news/' + idNews;
    }
	}
})();
