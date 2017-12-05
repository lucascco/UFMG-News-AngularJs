(function() {
	'use strict';

	angular
		.module('AngularJsNews.list-news.controller', [])
		.controller('ListNewsController', ListNewsController);

    ListNewsController.$inject = ['ListNewsService'];

	/* @ngInject */
	function ListNewsController(ListNewsService) {
		var vm = this;

		activate();

		////////////////


		function activate() {
      ListNewsService.list({page: 1, 'page_size': 30});
		}
	}
})();
