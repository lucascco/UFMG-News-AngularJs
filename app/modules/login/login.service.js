(function() {
	'use strict';

	angular
		.module('AngularJsNews.login.service', [])
		.factory('LoginService', LoginService);

    LoginService.$inject = ['LoginEndpoints', 'ServerService', '$window', 'KEY_STORAGE', '$http', '$q'];

	/* @ngInject */
	function LoginService(LoginEndpoints, ServerService, $window, KEY_STORAGE, $http, $q) {
		let service = {
      login: login,
      isLogged: isLogged
		};
		return service;

		////////////////

    function login(credentials) {
      credentials.grant_type = 'password';
      credentials.client_id = 'cms';
      return ServerService.post(LoginEndpoints.authenticate(), credentials)
        .then(token => loginSuccess(token.data));
    }

    function loginSuccess(token) {
      saveUserData(token);
      setAuthorization(token)
      return token;
    }

    function setAuthorization(token) {
      $http.defaults.headers.common.Authorization = `${token.type} ${token.access_token}`;
    }

    function saveUserData(token) {
      $window.localStorage.setItem(KEY_STORAGE, angular.toJson(token));
    }

    function getToken() {
      let token = $window.localStorage.getItem(KEY_STORAGE);
      return token ? angular.fromJson(token) : {};
    }

    function isLogged() {
      let defer = $q.defer();
      let token = getToken();
      console.log('isLogged', defer, token);
      if(token && token.access_token) {
        defer.resolve(token);
      } else {
        defer.reject('noToken');
      }
      return defer.promise;
    }

	}
})();
