'use strict';

/* Controllers */

var phonecatControllers = angular.module('ClientControllers', []);

//phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
//	function($scope, Phone) {
//		$scope.phones = Phone.query();
//		$scope.orderProp = 'age';
//	}
//]);

phonecatControllers.controller('ClientListController', ['$scope',
	function($scope) {
		$scope.testResult = 'test is running!';
	}
]);

//phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
//	function($scope, $routeParams, Phone) {
//		
//		console.info ("$ = " + $routeParams.phoneId);
//		
//		$scope.phone = Phone.get({
//			phoneId: $routeParams.phoneId
//		}, function(phone) {
//			console.info("phone ---> " + JSON.stringify(phone));
//			$scope.mainImageUrl = phone.images[0];
//		});
//
//		$scope.setImage = function(imageUrl) {
//			$scope.mainImageUrl = imageUrl;
//		}
//	}
//]);

//phonecatControllers.controller('MyPhoneDetailCtrl', ['$scope', '$routeParams', 'MyPhone',
//	function($scope, $routeParams, MyPhone) {
//		$scope.phone = MyPhone.get({
//			phoneId: $routeParams.phoneId + '.json'
//		}, function(phone) {
//			console.info("phone ---> " + JSON.stringify(phone));
//			$scope.mainImageUrl = phone.images[0];
//		});
//
//		$scope.setImage = function(imageUrl) {
//			$scope.mainImageUrl = imageUrl;
//		}
//	}
//]);