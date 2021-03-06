'use strict';

angular.module('designtrends')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === "#" + $location.path();
    };

    function cutUrl(str) {
      var matched = str.match(/([^/]*\/){2}/);
      return matched ? matched[0] : str/* or null if you wish */;
    }

    $scope.isDropdownActive = function(route) {
      return route === "#" + cutUrl($location.path());
    };

  });