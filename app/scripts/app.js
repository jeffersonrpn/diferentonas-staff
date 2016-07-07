(function(angular) {
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
      'ngRoute', 'ngResource', 'jcs-autoValidate', 'toastr'
    ])
    .constant('RESTAPI', {
      url: 'http://diferentonas.herokuapp.com'
    })
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
    })
})(angular);
