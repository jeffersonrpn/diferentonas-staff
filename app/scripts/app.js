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
      'ui.router', 'ngResource', 'ui.bootstrap', 'jcs-autoValidate', 'toastr', 'angular-confirm', 'satellizer'
    ])
    .constant('RESTAPI', {
      url: 'http://diferentonas.nuvem.gov.br/api'
    })
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('login', {
          url: '/',
          templateUrl: 'views/login.html',
          controller: 'AuthCtrl',
          controllerAs: 'auth'
        })
        .state('home', {
          url: '/home',
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main',
          data: { requiredLogin: true }
        });
      $urlRouterProvider.otherwise('/');
    })
    .config(function ($authProvider) {
      $authProvider.google({
        url: 'http://diferentonas.nuvem.gov.br/api/cidadao/auth/google',
        clientId: '1061066859155-tngvmfeld8800lq6rmuu9dmq15301ucl.apps.googleusercontent.com'
      });
    })
    .run(function ($rootScope, $state, $auth) {
      $rootScope.$on('$stateChangeStart',
        function (event, toState) {
          var requiredLogin = false;
          // check if this state need login
          if (toState.data && toState.data.requiredLogin) {
            requiredLogin = true;
          }

          // if yes and if this user is not logged in, redirect him to login page
          if (requiredLogin && !$auth.isAuthenticated()) {
            event.preventDefault();
            $state.go('login');
          }
        });
    });
})(angular);
