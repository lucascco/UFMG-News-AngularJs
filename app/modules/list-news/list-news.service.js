(function() {
	'use strict';

	angular
		.module('AngularJsNews.list-news.service', [])
		.factory('ListNewsService', ListNewsService);

    ListNewsService.$inject = ['ListNewsEndpoints', 'ServerService'];

	/* @ngInject */
	function ListNewsService(ListNewsEndpoints,  ServerService) {
		let service = {
      list: list
		};
    return service;

    function list(filter) {
      ServerService.get(ListNewsEndpoints.list(), filter);
    }

    ////////////////


	}
})();
