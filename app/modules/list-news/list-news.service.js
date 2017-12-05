(function() {
	'use strict';

	angular
		.module('AngularJsNews.list-news.service', [])
		.factory('ListNewsService', ListNewsService);

    ListNewsService.$inject = ['ListNewsEndpoints', 'ServerService'];

	/* @ngInject */
	function ListNewsService(ListNewsEndpoints,  ServerService) {
		let service = {
      list: list,
      news: news,
      updateNews: updateNews,
      postNews: postNews
		};
    return service;

    ////////////////

    function list(filter) {
      return ServerService.get(ListNewsEndpoints.list(), filter);
    }

    function news(idNews) {
      return ServerService.get(ListNewsEndpoints.news(idNews));
    }

    function updateNews(idNews, data) {
      return ServerService.put(ListNewsEndpoints.news(idNews), null, data);
    }

    function postNews(data) {
      return ServerService.post(ListNewsEndpoints.list(), data);
    }


	}
})();
