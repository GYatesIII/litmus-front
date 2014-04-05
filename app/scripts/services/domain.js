'use strict';

angular.module('litmusApp')
.service('Domain', function Domain(CONFIG, $http, $q) {
	return {
		checkDomain : function(domain) {
			return $http.get(CONFIG.apiUrl + '/owned/webpage/' + domain.name + '.com');
		},
		checkService: function(domain, service) {
			return $http.get(CONFIG.apiUrl + '/owned/' + service + '/' + domain.name);
		},
		getAlternatives: function(domain) {
			return $http.get(CONFIG.apiUrl + '/brand/generator?name=' + domain.name);
		}
	};
});