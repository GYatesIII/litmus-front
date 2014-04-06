'use strict';

angular.module('litmusApp')
.controller('LandingCtrl', function ($scope, $rootScope, Domain) {
  	$scope.searchSubmit = function() {
  		if (typeof ($scope.domainSearch) === 'undefined' || $scope.domainSearch == null || $scope.domainSearch.length == 0) {
  			Domain.generateRandom().success(function(response) {
  				$scope.domainSearch = response.names[0];
  				$rootScope.$broadcast('domain:updated', $scope.domainSearch);
  			});
  		} else {
  			$rootScope.$broadcast('domain:updated', $scope.domainSearch);
  		}
  	};
});
