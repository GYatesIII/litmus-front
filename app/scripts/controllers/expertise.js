'use strict';

angular.module('litmusApp')
.controller('ExpertiseCtrl', function ($scope, $state, Expertise) {
    $scope.setExpertise = function(expertise) {
    	switch (expertise) {
    		case 'beginner' :
    			Expertise.setBeginner();
    			break;
    		case 'pro' :
    			Expertise.setPro();
    			break;
    	}
    };
});