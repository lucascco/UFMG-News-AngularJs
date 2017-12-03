(function() {
	'use strict';

	angular
		.module('AngularJsNews.server.service', [])
		.service('ServerService', ServerService);

	ServerService.$inject = ['$http', '$q', '$httpParamSerializerJQLike', '$log'];

	/* @ngInject */
	function ServerService($http, $q, $httpParamSerializerJQLike, $log) {

		this.get = get;
		this.delete = deleteFn;
		this.post = post;
		this.patch = patch;
		this.put = put;

		$http.defaults.useXDomain = true;
		delete $http.defaults.headers.common['X-Requested-With'];

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

		function deleteFn(url, params) {
			var defer = $q.defer();
			url = buildParams(url, params);
			$http.delete(url).success(function (data) {
				defer.resolve(data);
			}).error(function (err) {
				$log.error(err);
				defer.reject(err);
			});
			return defer.promise;
		}

		function post(url, params, body, headers) {
			var defer = $q.defer();
			url = buildParams(url, params);
			$http.post(url, body, { headers: headers }).success(function (data) {
				defer.resolve(data);
			}).error(function (err) {
				$log.error(err);
				defer.reject(err);
			});
			return defer.promise;
		}

		function patch(url, params, body, headers) {
			var defer = $q.defer();
			url = buildParams(url, params);
			$http.patch(url, body, { headers: headers }).success(function (data) {
				defer.resolve(data);
			}).error(function (err) {
				$log.error(err);
				defer.reject(err);
			});
			return defer.promise;
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
	}

})();
