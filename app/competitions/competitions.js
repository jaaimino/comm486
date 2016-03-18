'use strict';

angular.module('designtrends')
  .config(function ($stateProvider) {
    $stateProvider
      .state('competitions', {
        url: '/activities/competitions',
        templateUrl: 'app/competitions/competitions.html',
        controller: 'CompetitionsCtrl'
      });
  });