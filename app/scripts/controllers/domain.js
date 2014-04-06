'use strict';

angular.module('litmusApp')
.controller('DomainCtrl', function ($scope, Domain) {
  	$scope.$watch('domain', function() {
  		$scope.alternatives = [];

  		if (!$scope.domain) {
  			return;
  		}

      if ($scope.domain.name.length == 0) {
        $scope.domain = false;
        return;
      }

      $scope.domain.name = $scope.sanitizeDomain($scope.domain.name);

  		Domain.checkDomain($scope.domain.name + '.com').success(function(response) {
  			$scope.domain.comAvailable = response.success ? !response.taken : false;
  		});

      Domain.checkDomain($scope.domain.name + '.org').success(function(response) {
        $scope.domain.orgAvailable = response.success ? !response.taken : false;
      });
      
      Domain.checkDomain($scope.domain.name + '.net').success(function(response) {
        $scope.domain.netAvailable = response.success ? !response.taken : false;
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
  			$scope.platforms.facebook.available = response.success ? !response.taken : false;
  		});

  		Domain.checkService($scope.domain, 'twitter').success(function(response) {
  			$scope.platforms.twitter.available = response.success ? !response.taken : false;
  		});

  		Domain.checkService($scope.domain, 'google').success(function(response) {
  			$scope.platforms.google.available = response.success ? !response.taken : false;
  		});

  		Domain.checkService($scope.domain, 'instagram').success(function(response) {
  			$scope.platforms.instagram.available = response.success ? !response.taken : false;
  		});

  		Domain.checkService($scope.domain, 'vimeo').success(function(response) {
  			$scope.platforms.vimeo.available = response.success ? !response.taken : false;
  		});

  		Domain.checkService($scope.domain, 'dribbble').success(function(response) {
  			$scope.platforms.dribbble.available = response.success ? !response.taken : false;
  		});

  		// Domain.checkService($scope.domain, 'linkedin').success(function(response) {
  		// 	$scope.platforms.linkedin.available = response.success ? !response.taken : false;
  		// });

  		// Domain.checkService($scope.domain, 'etsy').success(function(response) {
  		// 	$scope.platforms.etsy.available = response.success ? !response.taken : false;
  		// });

  		// Domain.checkService($scope.domain, 'ebay').success(function(response) {
  		// 	$scope.platforms.ebay.available = response.success ? !response.taken : false;
  		// });

  		Domain.checkService($scope.domain, 'angellist').success(function(response) {
  			$scope.platforms.angellist.available = response.success ? !response.taken : false;
  		});

  		Domain.checkService($scope.domain, 'github').success(function(response) {
  			$scope.platforms.github.available = response.success ? !response.taken : false;
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
