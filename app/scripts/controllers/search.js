'use strict';

angular.module('litmusApp')
.controller('SearchCtrl', function ($scope, $state, $window) {
	var platforms = {
		creative: [
			{
				name : 'Instagram',
				endpoint: 'instagram'
			},
			{
				name: 'Vimeo',
				endpoint: 'vimeo'
			},
			{
				name: 'Dribbble',
				endpoint: 'dribbble'		
			}
		],
		ecommerce: [
			{
				name: 'LinkedIn',
				endpoint: 'linkedin'
			},
			{
				name: 'eBay',
				endpoint: 'ebay'
			},
			{
				name: 'Etsy',
				endpoint: 'etsy'				
			}
		],
		technology: [
			{
				name: 'Angel List',
				endpoint: 'angellist'				
			},
			{
				name: 'Github',
				endpoint: 'github'				
			},
			{
				name: 'Vimeo',
				endpoint: 'vimeo'
			}
		]
	};

	function updateField() {
		$scope.field = false;
		if (typeof ($state.params.field) !== 'undefined') {
			switch ($state.params.field) {
				case 'creative' :
					$scope.field = {
						name : 'Creative',
						platforms : platforms.creative
					};
					break;
				case 'ecommerce' :
					$scope.field = {
						name : 'eCommerce',
						platforms : platforms.ecommerce
					};
					break;
				case 'technology' :
					$scope.field = {
						name : 'Technology',
						platforms : platforms.technology
					};
					break;
			}
		}
	}

	function updateDomain() {
		$scope.domain = false;
		if (typeof ($state.params.domain) !== 'undefined') {
			$scope.domain = {
				name : $state.params.domain
			};
			$scope.domainSearch = $state.params.domain;
		}
	}

	$scope.selectField = function(_field) {
		if ($state.includes('**.domain')) {
			$state.go('search.field.domain', {field: _field, domain: $scope.domain.name});
		} else {
			$state.go('search.field', {field: _field});
		}
	};

	$scope.fieldActiveClass = function(_name) {
		return $scope.field.name != _name ? 'btn-default' : 'btn-primary';
	};

	$scope.switchDomain = function(_domain) {
		$state.go('search.field.domain', {domain: _domain});
	};

	$scope.searchSubmit = function() {
		$window.ga('send', 'event', 'Domain', 'Searched', 'Input box filled out and searched');
		$scope.switchDomain($scope.domainSearch);
	};

	$scope.clickAlternative = function(_domain) {
		$window.ga('send', 'event', 'Domain', 'Alternative', 'A suggested alternative name was clicked on');
		$scope.switchDomain(_domain);
	};

	$scope.$on('$stateChangeSuccess', function() {
		console.log(typeof($state.params.field));

		if (typeof($state.params.field) === 'undefined') {
			resetDomain();
		}

		updateDomain();
		updateField();
	});

	function resetDomain() {
		$scope.field = false;
		$scope.domain = false;
		$scope.domainSearch = null;
	}

	function init() {
		updateField();
		updateDomain();
	}

	/**
	 * Initialization
	 **/
	init();
});