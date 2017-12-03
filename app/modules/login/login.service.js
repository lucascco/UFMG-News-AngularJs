(function() {
	'use strict';

	angular
		.module('AngularJsNews.login.service', [])
		.factory('LoginService', LoginService);

    LoginService.$inject = ['LoginEndpoints', 'ServerService'];

	/* @ngInject */
	function LoginService(LoginEndpoints, ServerService) {
		var service = {
		};
		return service;

		////////////////


	}
})();
