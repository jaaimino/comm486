'use strict';

angular.module('designtrends', [
  'ui.router',
  'mgcrea.ngStrap'
])
.constant('version', 'v2.3.7')
.constant('ngVersion', angular.version.full)

  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider
      .otherwise('/');
    //$locationProvider.html5Mode(true);
    
  }).run(function($window, $rootScope, $location, $anchorScroll, version, ngVersion){
      // Support simple anchor id scrolling

  $rootScope.version = version;
  $rootScope.ngVersion = ngVersion;

  // FastClick
  //$window.FastClick.attach($window.document.body);

  // Support simple anchor id scrolling
  var bodyElement = angular.element($window.document.body);
  bodyElement.on('click', function(evt) {
    var el = angular.element(evt.target);
    var hash = el.attr('href');
    if(!hash || hash[0] !== '#') return;
    if(hash.length > 1 && hash[1] === '/') return;
    if(evt.which !== 1) return;
    $location.hash(hash.substr(1));
    $anchorScroll();
  });

  // Initial $anchorScroll()
  setTimeout(function() {
    $anchorScroll();
  }, 0);

  });
