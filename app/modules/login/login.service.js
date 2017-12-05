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
      isLogged: isLogged,
      logout: logout,
      account: account,
      getUserLogged: getUserLogged,
		};
		return service;

    ////////////////
    function getUserLogged() {
      let user = getToken().user;
      return user;
    }

    function login(credentials) {
      credentials.grant_type = 'password';
      credentials.client_id = 'cms';
      return ServerService.post(LoginEndpoints.authenticate(), credentials)
        .then(token => loginSuccess(token.data));
    }

    function logout() {
      removeAuthorization();
      removeToken();
    }

    function account() {
      return ServerService.get(LoginEndpoints.account());
    }

    function loginSuccess(token) {
      setAuthorization(token)
      return account()
        .then(acc => saveToken(token, acc.data));
    }

    function removeAuthorization() {
      delete $http.defaults.headers.common.Authorization;
    }

    function removeToken() {
      delete $http.defaults.headers.common.Authorization;
      $window.localStorage.removeItem(KEY_STORAGE);
    }

    function setAuthorization(token) {
      $http.defaults.headers.common.Authorization = `${token.token_type} ${token.access_token}`;
    }

    function saveToken(token, accountUser) {
      token.user = accountUser;
      $window.localStorage.setItem(KEY_STORAGE, angular.toJson(token));
      return token;
    }

    function getToken() {
      let token = $window.localStorage.getItem(KEY_STORAGE);
      return token ? angular.fromJson(token) : {};
    }

    function isLogged() {
      let defer = $q.defer();
      let token = getToken();
      if(token && token.access_token) {
        setAuthorization(token);
        defer.resolve(token);
      } else {
        defer.reject('noToken');
      }
      return defer.promise;
    }

	}
})();
