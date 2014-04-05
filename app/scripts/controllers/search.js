'use strict';

angular.module('litmusApp')
.controller('SearchCtrl', function ($scope, $state) {
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

	$scope.switchDomain = function(_domain) {
		$state.go('search.field.domain', {domain: _domain});
	};

	$scope.searchSubmit = function() {
		$scope.switchDomain($scope.domainSearch);
	};

	$scope.$on('$stateChangeSuccess', function() {
		updateDomain();
		updateField();
	});

	function init() {
		updateField();
		updateDomain();
	}

	/**
	 * Initialization
	 **/
	init();
});