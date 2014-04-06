'use strict';

angular.module('litmusApp')
  .controller('MainCtrl', function ($scope) {
    $scope.sanitizeDomain = function(_domain) {
    	return _domain.replace(/\W/g, '').replace(/ /g,'').toLowerCase();
    };
  });
