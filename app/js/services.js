'use strict';

/* Services */
var clientServices = angular.module('MyClientServices', ['ngResource']);

clientServices.factory('Client', ['$resource', function($resource) {
	return $resource('data/:data', {}, {
		queryList: {
			method: 'GET',
			params: {
				data: 'client-list.json'
			}
		},
		add: {

		}
	})
}]);

// $resource(url [, paramDefaults 可选 对象] , action[可选，对象]);