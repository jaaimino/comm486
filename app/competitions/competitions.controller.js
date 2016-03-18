'use strict';

angular.module('designtrends')
  .controller('CompetitionsCtrl', function ($scope, $http, Competitions) {
  	$scope.competitions = Competitions.getCompetitions();
  });
