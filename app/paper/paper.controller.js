'use strict';

angular.module('designtrends')
  .controller('PaperCtrl', function ($scope, $http, $rootScope, $location, $anchorScroll) {
      $scope.$scrollTo = function(hash) {
        $location.hash(hash);
        $anchorScroll();
      };
  });
