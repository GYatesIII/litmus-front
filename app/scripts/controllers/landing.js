'use strict';

angular.module('litmusApp')
.controller('LandingCtrl', function ($scope, $rootScope, Domain, $window) {
  	$scope.searchSubmit = function() {
  		if (typeof ($scope.domainSearch) === 'undefined' || $scope.domainSearch == null || $scope.domainSearch.length == 0) {
			$window.ga('send', 'event', 'Domain', 'Curtain Random Searched', 'Curtain input box not filled out'); 
  			Domain.generateRandom().success(function(response) {
  				$scope.domainSearch = response.names[0];
  				$rootScope.$broadcast('domain:updated', $scope.domainSearch);
  			});
  		} else {
			$window.ga('send', 'event', 'Domain', 'Curtain Searched', 'Curtain input box filled out and searched'); 
  			$rootScope.$broadcast('domain:updated', $scope.domainSearch);
  		}
  	};
});
