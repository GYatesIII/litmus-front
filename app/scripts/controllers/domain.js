'use strict';

angular.module('litmusApp')
.controller('DomainCtrl', function ($scope, Domain) {
  	$scope.$watch('domain', function() {
  		$scope.available = {
  			domain : null,
  			facebook : null,
  			twitter : null,
  			google: null,
  			instagram: null,
  			vimeo: null,
  			dribbble: null,
  			linkedin: null,
  			etsy: null,
  			ebay: null,
  			angellist: null,
  			github: null
  		};

  		$scope.alternatives = [];

  		if (!$scope.domain) {
  			return;
  		}

  		Domain.checkDomain($scope.domain).success(function(response) {
  			$scope.available.domain = response.success ? !response.taken : false;
  		});

  		// for (var service in $scope.available) {
  		// 	if (typeof (service) === 'undefined' || service == 'domain')
  		// 		continue;

  		// 	Domain.checkService($scope.domain, service).success(function(response) {
  		// 		$scope.available[service] = response.success ? !response.taken : false;  				
  		// 	}).error(function() {
  		// 		$scope.available[service] = false;
  		// 	});
  		// }


  		Domain.checkService($scope.domain, 'facebook').success(function(response) {
  			$scope.available.facebook = response.success ? !response.taken : false;
  		});

  		Domain.checkService($scope.domain, 'twitter').success(function(response) {
  			$scope.available.twitter = response.success ? !response.taken : false;
  		});

  		Domain.checkService($scope.domain, 'google').success(function(response) {
  			$scope.available.google = response.success ? !response.taken : false;
  		});

  		Domain.checkService($scope.domain, 'instagram').success(function(response) {
  			$scope.available.instagram = response.success ? !response.taken : false;
  		});

  		Domain.checkService($scope.domain, 'vimeo').success(function(response) {
  			$scope.available.vimeo = response.success ? !response.taken : false;
  		});

  		Domain.checkService($scope.domain, 'dribbble').success(function(response) {
  			$scope.available.dribbble = response.success ? !response.taken : false;
  		});

  		Domain.checkService($scope.domain, 'linkedin').success(function(response) {
  			$scope.available.linkedin = response.success ? !response.taken : false;
  		});

  		Domain.checkService($scope.domain, 'etsy').success(function(response) {
  			$scope.available.etsy = response.success ? !response.taken : false;
  		});

  		Domain.checkService($scope.domain, 'ebay').success(function(response) {
  			$scope.available.ebay = response.success ? !response.taken : false;
  		});

  		Domain.checkService($scope.domain, 'angellist').success(function(response) {
  			$scope.available.angellist = response.success ? !response.taken : false;
  		});

  		Domain.checkService($scope.domain, 'github').success(function(response) {
  			$scope.available.github = response.success ? !response.taken : false;
  		});

  		Domain.getAlternatives($scope.domain).success(function(response) {
  			$scope.alternatives = [];

  			if (!response.success) {
  				return;
  			}

  			angular.forEach(response.names, function(_name) {
  				$scope.alternatives.push({
  					name : _name
  				});
  			});
  		});
  	});

  	$scope.availableClass = function(available) {
  		if (typeof (available) === 'undefined' || available == null) {
  			return 'btn-default';
  		}

		return available ? 'btn-success' : 'btn-danger';
  	};
});
