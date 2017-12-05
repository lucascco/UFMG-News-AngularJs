(function() {
	'use strict';

	angular
		.module('AngularJsNews.create-news.controller', [])
		.controller('NewsCreateController', NewsCreateController);

    NewsCreateController.$inject = ['ListNewsService', '$stateParams', 'toaster'];

	/* @ngInject */
	function NewsCreateController(ListNewsService, $stateParams, toaster) {
    let vm = this;

    vm.submit = submit;
    vm.hasError = hasError;

		activate();

    ////////////////

    function submit(form) {
      if(form.$invalid) {
        toaster.pop('warning', 'Atenção', 'Atenção aos campos em vermelho, eles são obrigatórios.');
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
      vm.processing = true
      ListNewsService.updateNews(vm.idNews, vm.news)
        .then(() => toast.pop('success', 'Atualizado!', 'Notícia atualizada com sucesso.'))
        .catch(error => handleErrorSave(error))
        .then(() => vm.processing = false);
    }

    function save() {
      vm.processing = true
      ListNewsService.postNews(vm.news)
      .then(response => {
        console.log(response);
        toast.pop('success', 'Cadastrado!', 'Notícia cadastrada com sucesso.')
      })
      .catch(error => handleErrorSave(error))
      .then(() => vm.processing = false);
    }

    function getNews() {
      ListNewsService.news(vm.idNews)
        .then(response => {
          vm.news = response.data;
          buildTags();
        })
        .catch(error => handleErrorGet(error));
    }

    function buildTags() {
      if(vm.news.tags && vm.news.tags.length) {
        vm.news.tags = vm.news.tags.map(tags => tags.name).join(', ');
      }
    }

    function initNews() {
      vm.news = {
        title: '',
        subtitle: '',
        text: '',
        tags: ''
      };
    }

    function handleErrorGet(error) {
      console.error(error);
      toaster.pop('error', 'Ops, houve um error', 'Desculpe, não conseguimos recuperar essa notícia.');
    }

    function handleErrorSave(error) {
      toaster.pop('error', 'Ops, houve um error', 'Desculpe, não conseguimos enviar os dados.');
    }

		function activate() {
      initNews();
      vm.processing = false;
      vm.idNews = $stateParams.id;
      if (vm.idNews) {
        getNews();
      }
		}
	}
})();
