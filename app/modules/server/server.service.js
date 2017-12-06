(function() {
	'use strict';

	angular
		.module('AngularJsNews.server.service', [])
		.service('ServerService', ServerService);

	ServerService.$inject = ['$http', '$q', '$httpParamSerializerJQLike', '$log', '$state'];

	/* @ngInject */
	function ServerService($http, $q, $httpParamSerializerJQLike, $log, $state) {

		this.get = get;
		this.post = post;
    this.put = put;

		// $http.defaults.useXDomain = true;
		// delete $http.defaults.headers.common['X-Requested-With'];

		function buildParams(url, params) {
			if (params) {
				params = $httpParamSerializerJQLike(params);
				url += '?' + params;
			}
			return url;
		}

		////////////////

		function get(url, params) {
      url = buildParams(url, params);
      return $http.get(url);
		}

    function post(url, data) {
      console.log(url, data);
      let headers = {'Content-Type': 'application/x-www-form-urlencoded'};
      return $http({ method: 'POST', url, headers, transformRequest: transformRequest, data });
    }

		function put(url, params, body) {
			url = buildParams(url, params);
			return $http.put(url, body);
    }

    function transformRequest(obj) {
      let str = [];
      for(let p in obj) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]))
      }
      return str.join('&');
    }
	}

})();
