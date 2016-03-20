'use strict';

angular.module('designtrends')
  .controller('MainCtrl', function ($scope, $http, $rootScope, $location, $anchorScroll) {
      $scope.$scrollTo = function(hash) {
        $location.hash(hash);
        $anchorScroll();
      };
  });
