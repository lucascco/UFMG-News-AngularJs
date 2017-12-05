(function() {
	'use strict';

	angular
		.module('AngularJsNews', [
      'ngSanitize',
      'ui.router',
      'ui.bootstrap',
      'toaster',

      'AngularJsNews.app.controller',
      'AngularJsNews.app.routes',
      'AngularJsNews.app.constants',
      'AngularJsNews.app.config',
      'AngularJsNews.app.constants',

      'AngularJsNews.login',
      'AngularJsNews.list-news',
      'AngularJsNews.create-news',

      'AngularJsNews.server'
		]);
})();
