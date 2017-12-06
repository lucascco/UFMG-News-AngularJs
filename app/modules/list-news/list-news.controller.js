(function() {
	'use strict';

	angular
		.module('AngularJsNews.list-news.controller', [])
		.controller('ListNewsController', ListNewsController);

    ListNewsController.$inject = ['ListNewsService'];

	/* @ngInject */
	function ListNewsController(ListNewsService) {
    let vm = this;

    vm.next = next;
    vm.prev = prev;
    vm.changePage = changePage;
		activate();

    ////////////////

    function prev() {
      if(vm.filter.page <= 1) {
        return;
      }
      vm.filter.page = --vm.filter.page;
      list();
    }

    function next() {
      if(vm.filter.page >= vm.totPage) {
        return;
      }
      vm.filter.page = ++vm.filter.page;
      list();
    }

    function changePage() {
      if (vm.listNews.page < 1 || vm.listNews.page > vm.totPage) {
        vm.listNews.page = vm.filter.page;
        return;
      }
      vm.filter.page = vm.listNews.page;
      list();
    }

    function list() {
      vm.processing = true;
      ListNewsService.list(vm.filter)
        .then(response => {
          vm.listNews = response.data;
          calcTotPage();
        })
        .catch(error => console.error('list news', error))
        .then(() => vm.processing = false);

    }

    function iniFilter() {
      vm.filter = {
        page: 1,
        page_size: 10
      }
    }

    function initList() {
      vm.listNews = {
        items: [],
        page: 1
      };
    }

    function calcTotPage() {
      if(vm.listNews.total) {
        vm.totPage = Math.ceil(vm.listNews.total / vm.filter.page_size);
      }
    }

		function activate() {
      vm.processing = false;
      iniFilter();
      initList();
      list();
		}
	}
})();
