(function() {
	'use strict';

	angular
		.module('AngularJsNews.app.controller', [])
		.controller('AppController', AppController);

	AppController.$inject = ['LoginService', '$state'];

	/* @ngInject */
	function AppController(LoginService, $state) {
		var vm = this;

		vm.logout = logout;

		activate();

		////////////////

		function logout() {
      console.log('logout');
      LoginService.logout();
      $state.go('app.external.login');
		}

		function activate() {
		}
	}
})();
