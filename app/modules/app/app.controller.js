(function() {
	'use strict';

	angular
		.module('AngularJsNews.app.controller', [])
		.controller('AppController', AppController);

	AppController.$inject = [];

	/* @ngInject */
	function AppController() {
		var vm = this;

		vm.logout = logout;

		activate();

		////////////////

		function logout() {

		}

		function activate() {
		}
	}
})();
