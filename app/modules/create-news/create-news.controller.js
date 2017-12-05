(function() {
	'use strict';

	angular
		.module('AngularJsNews.create-news.controller', [])
		.controller('NewsCreateController', NewsCreateController);

    NewsCreateController.$inject = ['ListNewsService', '$stateParams'];

	/* @ngInject */
	function NewsCreateController(ListNewsService, $stateParams) {
    var vm = this;

		activate();

    ////////////////


		function activate() {
      console.log('teste', $stateParams.id);
		}
	}
})();
