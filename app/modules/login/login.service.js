(function() {
	'use strict';

	angular
		.module('AngularJsNews.login.service', [])
		.factory('LoginService', LoginService);

    LoginService.$inject = ['LoginEndpoints', 'ServerService'];

	/* @ngInject */
	function LoginService(LoginEndpoints, ServerService) {
		var service = {
      login: login
		};
		return service;

		////////////////

    function login(credentials) {
      credentials.grant_type = 'password';
      credentials.client_id = 'cms';
      return ServerService.post(LoginEndpoints.authenticate(), credentials);
    }

	}
})();
