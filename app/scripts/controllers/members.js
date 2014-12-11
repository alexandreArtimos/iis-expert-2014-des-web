'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:MembersCtrl
 * @description
 * # MembersCtrl
 * Controller of the myAppApp
 */
angular.module('myAppApp')
  .controller('MembersCtrl', function ($scope, $http) {

  	$http.get('http://localhost:8080/FirstApp/rest/members').success(function(data) {
    	$scope.members = data;
  	});

   });
