(function() {
	'use strict';

	angular
		.module('AngularJsNews.login.controller', [])
		.controller('LoginController', LoginCtrl);

    LoginCtrl.$inject = ['LoginService'];

	/* @ngInject */
	function LoginCtrl(LoginService) {
		var vm = this;

    vm.login = login;
    vm.hasError = hasError;
		activate();

		////////////////


    function login(formLogin) {
      console.log('login', vm.user);
      clearMsgError();
      if(formLogin.$invalid) {
        return;
      }
      LoginService.login(vm.user)
        .then(data => console.log('login controller', data))
        .catch(error => handleError(error));
    }

    function hasError(formLogin, field) {
      return (formLogin.$submsgErrorServermitted || formLogin[field].$touched) && formLogin[field].$error.required;
    }

    function handleError(error) {
      console.error(error);
      switch(error.status) {
        case 401:
          vm.msgErrorServer = 'A combinação de senha e usuário está incorreta. =(';
          break;
        default:
          vm.msgErrorServer = 'Houve um error ao tentar comunicar com o servidor. =(';
      }
    }

    function clearMsgError() {
      vm.msgErrorServer = '';
    }

		function activate() {
      vm.user = {};
      vm.msgErrorServer = '';
		}
	}
})();
