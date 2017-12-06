(function() {
	'use strict';

	angular
		.module('AngularJsNews.login.controller', [])
		.controller('LoginController', LoginCtrl);

    LoginCtrl.$inject = ['LoginService', '$state', 'toaster'];

	/* @ngInject */
	function LoginCtrl(LoginService, $state, toaster) {
		let vm = this;

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
      this.loading = true;
      LoginService.login(vm.user)
        .then(() => loginSuccess())
        .catch(error => handleError(error))
        .then(() => this.loading = false);
    }

    function loginSuccess() {
      $state.go('app.internal.listNews');
    }


    function hasError(formLogin, field) {
      return (formLogin.$submitted || formLogin[field].$touched) && formLogin[field].$error.required;
    }

    function handleError(error) {
      console.error(error);
      switch(error.status) {
        case 401:
          toaster.pop('warning', 'Senha Incorreta', 'Ops, Parece que a senha esta incorreta.')
          vm.msgErrorServer = 'A combinação de senha e usuário está incorreta. =(';
          break;
        default:
          toaster.pop('error', 'Desculpe', 'Um erro ocorreu ao tentar fazer o login. Tente novamente ou entre em contato.');
          vm.msgErrorServer = 'Houve um error ao tentar comunicar com o servidor. =(';
      }
    }

    function clearMsgError() {
      vm.msgErrorServer = '';
    }

		function activate() {
      vm.user = {};
      vm.msgErrorServer = '';
      vm.loading = false;
		}
	}
})();
