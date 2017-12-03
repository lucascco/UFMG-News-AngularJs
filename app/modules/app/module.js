(function() {
	'use strict';

	angular
		.module('AngularJsNews', [
      'ngSanitize',
      'ui.router',

      'AngularJsNews.app.controller',
      'AngularJsNews.app.routes',
      'AngularJsNews.app.constants',
      'AngularJsNews.app.config',
      'AngularJsNews.app.constants',

      'AngularJsNews.login',
      'AngularJsNews.dash',
		]);
})();
