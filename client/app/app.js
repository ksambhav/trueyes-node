'use strict';

angular.module('trueyesNodeApp', [
  'trueyesNodeApp.auth',
  'trueyesNodeApp.admin',
  'trueyesNodeApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
