'use strict';

angular.module('designtrends')
  .controller('ProjectsCtrl', function ($scope, $http, Projects) {
    
    //Get projects from projects factory
    $scope.projects = Projects.getProjects();

    $("#jumbo").css('background-image','url(../../assets/img/everest.jpg)');
  });
