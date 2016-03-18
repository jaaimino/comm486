'use strict';

angular.module('designtrends')
  .config(function ($stateProvider) {
    $stateProvider
      .state('organizations', {
        url: '/activities/organizations',
        templateUrl: 'app/organizations/organizations.html',
        controller: 'OrganizationsCtrl'
      });
  });