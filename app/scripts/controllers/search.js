'use strict';

angular.module('litmusApp')
.controller('SearchCtrl', function ($scope, $rootScope, $state, $window, $modal, Domain) {
	$scope.platforms = {
		twitter: {
			name: 'Twitter',
			available: null
		},
		facebook: {
			name: 'Facebook',
			available: null
		},
		google: {
			name: 'Google+',
			available: null
		},
		instagram: {
			name: 'Instagram',
			available: null
		},
		vimeo: {
			name: 'Vimeo',
			available: null
		},
		dribbble: {
			name: 'Dribbble',
			available: null
		},
		/*linkedin: {
			name: 'LinkedIn',
			available: null
		},
		ebay: {
			name: 'eBay',
			available: null
		},
		etsy: {
			name: 'Etsy',
			available: null
		},*/
		angellist: {
			name: 'AngelList',
			available: null
		},
		github: {
			name: 'GitHub',
			available: null
		}
	};

	var expertiseModal = null;

	function updateExpertise() {
		$scope.expertise = false;

		if (typeof ($state.params.expertise) !== 'undefined') {
			$scope.expertise = $state.params.expertise;
		}

		if ($scope.expertise === 'advanced' && expertiseModal === null) {
			expertiseModal = $modal.open({
				templateUrl: '/views/advanced-modal.tpl.html'
			});
		} else {
			if (typeof (expertiseModal) !== 'undefined' && expertiseModal !== null) {
				expertiseModal.close();
				expertiseModal = null;
			}
		}
	}

	function updateDomain() {
		$scope.domain = false;
		if (typeof ($state.params.domain) !== 'undefined') {
			$scope.domain = {
				name : $state.params.domain,
				available: null
			};
			$scope.domainSearch = $scope.domain.name;
		}
	}

	$rootScope.$on('domain:updated', function(e, _domain) {
		$state.go('search.expertise.domain', {expertise: 'simple', domain: _domain});
	});

	$scope.expertiseLevel = function(_expertise) {
		if ($state.includes('**.domain')) {
			$state.go('search.expertise.domain', {expertise: _expertise, domain: $scope.domain.name});
		} else {
			$state.go('search.expertise', {expertise: _expertise});
		}
	};

	$scope.activeExpertise = function(_expertise) {
		return $scope.expertise == _expertise ? 'btn-primary' : 'btn-default';
	};

	$scope.switchDomain = function(_domain) {
		$state.go('search.expertise.domain', {domain: _domain});
	};

	$scope.searchSubmit = function() {
	};

  	$scope.searchSubmit = function() {
  		if (typeof ($scope.domainSearch) === 'undefined' || $scope.domainSearch == null || $scope.domainSearch.length == 0) {
			$window.ga('send', 'event', 'Domain', 'Random Searched', 'Input box not filled out and searched');
  			Domain.generateRandom().success(function(response) {
  				$scope.domainSearch = response.names[0];
				$scope.switchDomain($scope.domainSearch);
  			});
  		} else {
			$window.ga('send', 'event', 'Domain', 'Searched', 'Input box filled out and searched');
			$scope.switchDomain($scope.domainSearch);
  		}
  	};

	$scope.clickAlternative = function(_domain) {
		$window.ga('send', 'event', 'Domain', 'Alternative', 'A suggested alternative name was clicked on');
		$scope.switchDomain(_domain);
	};

	$scope.$on('$stateChangeSuccess', function() {
		if (typeof($state.params.field) === 'undefined') {
			resetDomain();
		}

		updateDomain();
		updateExpertise();
	});

	function resetDomain() {
		$scope.domain = false;
		$scope.domainSearch = null;
	}

	function init() {
		updateExpertise();
		updateDomain();
	}

	/**
	 * Initialization
	 **/
	init();
});