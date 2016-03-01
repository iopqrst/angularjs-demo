'use strict';

/* Services */
var phonecatServices = angular.module('ClientServices', ['ngResource']);

phonecatServices.factory('MyPhone', ['$resource', function($resource) {
	return $resource('phones/:phoneId');
}]);


// $resource(url [, paramDefaults 可选 对象] , action[可选，对象]);

//phonecatServices.factory('Phone', ['$resource',
//	function($resource) {
//		return $resource('phones/:phoneId.json', {}, {
//			query: {
//				method: 'GET',
//				params: {
//					phoneId: 'phones-list'
//				},
//				isArray: true
//			}
//		});
//	}
//]);
