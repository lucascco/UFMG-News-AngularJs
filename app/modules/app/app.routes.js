(function() {
	'use strict';

	angular
		.module('AngularJsNews.app.routes', [
		]).config(Config);

		Config.$inject = ['$urlRouterProvider', '$stateProvider'];

		function Config($urlRouterProvider, $stateProvider) {

			$stateProvider.state('app', {
				url: '/app',
				abstract: true,
				controller: 'AppController',
				controllerAs: 'app',
				template: '<div ui-view="app"></div>'
      });

			$stateProvider.state('app.external', {
				abstract: true,
				views: {
					app: {
						templateUrl: 'parts/app.tpl.html'
					}
				}
      });

			$stateProvider.state('app.internal', {
				abstract: true,
				views: {
					app: {
						templateUrl: 'parts/internal.tpl.html'
					}
				},
				resolve: {
					auth: ['$state', 'LoginService', ($state, LoginService) => {
            return LoginService.isLogged()
              .catch(error => $state.go('app.external.login'));
					}]
				}
			});

			$urlRouterProvider.otherwise('app/list-news');
		}
})();
