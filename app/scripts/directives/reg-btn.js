'use strict';

angular.module('litmusApp')
  .directive('regBtn', function () {
    return {
      restrict: 'C',
      link: function postLink(scope, element) {
      	scope.disable = function() {
      		console.log(element);
      		element.attr('disabled', 'true');
      	};
      }
    };
  });
