(function() {
	'use strict';

	angular
		.module('AngularJsNews.create-news.controller', [])
		.controller('NewsCreateController', NewsCreateController);

    NewsCreateController.$inject = ['ListNewsService', '$stateParams'];

	/* @ngInject */
	function NewsCreateController(ListNewsService, $stateParams) {
    let vm = this;

    vm.submit = submit;
    vm.hasError = hasError;

		activate();

    ////////////////

    function submit(form) {
      if(form.$invalid) {
        return;
      }
      if (vm.idNews) {
        update();
      } else {
        save();
      }
    }

    function hasError(form, field) {
      return (form.$submitted || form[field].$touched) && form[field].$error.required;
    }

    function update() {
      ListNewsService.updateNews(vm.idNews, vm.news)
        .then(() => console.log('update success'))
        .catch(error => console.error('update error', error));
    }

    function save() {
      ListNewsService.postNews(vm.news)
      .then(() => console.log('postNews success'))
      .catch(error => console.error('postNews error', error));
    }

    function getNews() {
      ListNewsService.news(vm.idNews)
        .then(response => vm.news = response.data)
        .catch(error => console.error(error));
    }

    function initNews() {
      vm.news = {
        title: '',
        subtitle: '',
        text: '',
        tags: ''
      };

    }


		function activate() {
      console.log('teste', $stateParams.id);
      initNews();
      vm.idNews = $stateParams.id;
      if (vm.idNews) {
        getNews();
      }
		}
	}
})();
