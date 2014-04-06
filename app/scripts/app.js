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
			state('search.expertise', {
				url: '/:expertise',
				templateUrl: 'views/search.html',
				controller: 'SearchCtrl',
				bodyClass: 'search expertise'
			}).
			state('search.expertise.domain', {
				url: '/:domain',
				templateUrl: 'views/search.html',
				controller: 'SearchCtrl',
				bodyClass: 'search expertise domain'
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