'use strict';

/**
 * @ngdoc overview
 * @name diferentonasStaffApp
 * @description
 * # diferentonasStaffApp
 *
 * Main module of the application.
 */
angular
  .module('diferentonasStaffApp', [
    'ngRoute', 'jcs-autoValidate'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
