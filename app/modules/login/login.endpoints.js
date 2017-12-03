(function() {
	'use strict';

	angular
		.module('AngularJsNews.login.endpoints', [])
		.factory('LoginEndpoints', LoginEndpoints);

    LoginEndpoints.$inject = ['API_URL'];

	/* @ngInject */
	function LoginEndpoints(API_URL) {
		var service = {
      authenticate: authenticate
		};
		return service;

		////////////////

		function authenticate() {
			return API_URL + '/authenticate';
		}
	}
})();
