(function() {
	'use strict';

	angular
		.module('AngularJsNews.server.service', [])
		.service('ServerService', ServerService);

	ServerService.$inject = ['$http', '$q', '$httpParamSerializerJQLike', '$log'];

	/* @ngInject */
	function ServerService($http, $q, $httpParamSerializerJQLike, $log) {

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
			var defer = $q.defer();
			url = buildParams(url, params);
			$http.get(url).success(function (data) {
				defer.resolve(data);
			}).error(function (err) {
				$log.error(err);
				defer.reject(err);
			});
			return defer.promise;
		}

    function post(url, data) {
      let headers = {'Content-Type': 'application/x-www-form-urlencoded'};
      return $http({ method: 'POST', url, headers, transformRequest: transformRequest, data });
    }

		function put(url, params, body) {
			var defer = $q.defer();
			url = buildParams(url, params);
			$http.put(url, body).success(function (data) {
				defer.resolve(data);
			}).error(function (err) {
				$log.error(err);
				defer.reject(err);
			});
			return defer.promise;
    }

    function transformRequest(obj) {
      var str = [];
      for(var p in obj) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]))
      }
      return str.join('&');
    }
	}

})();
