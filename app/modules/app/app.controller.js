(function() {
	'use strict';

	angular
		.module('AngularJsNews.app.controller', [])
		.controller('AppController', AppController);

	AppController.$inject = ['LoginService', '$state'];

	/* @ngInject */
	function AppController(LoginService, $state) {
		let vm = this;

    vm.logout = logout;
    vm.getUserLogged = getUserLogged;


		activate();

		////////////////

		function logout() {
      LoginService.logout();
      $state.go('app.external.login');
    }

    function getUserLogged() {
      return LoginService.getUserLogged();
    }

		function activate() {
    }
	}
})();
