'use strict';

/* Controllers */
var clientControllers = angular.module('ClientControllers', []);

clientControllers.controller('ClientListController', ['$scope', 'Client',
	function($scope, Client) {
		Client.queryList({

		}, function(data) {
			if( data && data.code == 1) {
				$scope.clientList = data.data.clientList;
			}
		}, function(error) {

		});
	}
]);