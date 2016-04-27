'use strict';

angular.module('designtrends')
  .config(function ($stateProvider) {
    $stateProvider
      .state('paper', {
        url: '/paper',
        templateUrl: 'app/paper/paper.html',
        controller: 'PaperCtrl'
      });
  });