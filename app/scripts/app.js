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
				url: '/',
				templateUrl: 'views/search.html',
				controller: 'SearchCtrl',
				bodyClass: 'search'
			}).
			state('search.expertise', {
				url: ':expertise',
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

	  	var $container = $('.container-wrap');
	  	var $curtain = $('.landing-curtain');

	  	var curtainBottom = Math.max($container.height(), $(window).height());
    	$curtain.css('margin-bottom', curtainBottom);

    	$(window).scroll(function() {
		    if($(window).scrollTop() >= $curtain.height()) {
		        $container.addClass('revealed');
		        $container.css('top', $curtain.height());
		    } else {
		        $container.removeClass('revealed');
		        $container.css('top', 0);
		    }
    	});

    	$rootScope.$on('$stateChangeSuccess', function() {
    		if (!$state.is('search')) {
    			$(window).scrollTop($curtain.height());    			
    		}
    	});
	});