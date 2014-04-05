'use strict';

angular
	.module('litmusApp', [
		'ngCookies',
		'ngResource',
		'ngSanitize',
		'ui.router',
		'ui.bootstrap'
	]).
	config(function($stateProvider, $urlRouterProvider) {
		$stateProvider.
			/**
			 * Root State
			 **/
			// state('root', {
			// 	url: '/',
			// 	templateUrl: 'views/expertise.html',
			// 	controller: 'ExpertiseCtrl',
			// 	bodyClass: 'login'
			// }).
			state('search', {
				url: '',
				templateUrl: 'views/search.html',
				controller: 'SearchCtrl',
				bodyClass: 'search'
			}).
			state('search.field', {
				url: '/:field',
				templateUrl: 'views/search.html',
				controller: 'SearchCtrl',
				bodyClass: 'search field'
			}).
			state('search.field.domain', {
				url: '/:domain',
				templateUrl: 'views/search.html',
				controller: 'SearchCtrl',
				bodyClass: 'search field domain'
			});
		$urlRouterProvider.otherwise('/');
	}).
	constant('CONFIG', {
		apiUrl: 'http://litmusserv.herokuapp.com'
	})
	.run(function ($rootScope, $state, $stateParams) {
	  $rootScope.$state = $state;
	  $rootScope.$stateParams = $stateParams;
	});