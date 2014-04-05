'use strict';

angular.module('litmusApp')
.service('Expertise', function Expertise() {
	var expertise = null;

	return {
		getExpertise: function() {
			return expertise;
		},
		setBeginner: function() {
			expertise = 'beginner';
		},
		setPro: function() {
			expertise = 'pro';
		}
	};
});