'use strict';

angular.module('trueyesNodeApp.auth', [
  'trueyesNodeApp.constants',
  'trueyesNodeApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
