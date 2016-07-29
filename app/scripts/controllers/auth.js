(function(angular) {
  'use strict';

  angular
    .module('diferentonasStaffApp')
    .controller('AuthCtrl', AuthCtrl);

    AuthCtrl.$inject = ['$scope', '$state', '$window', '$rootScope', '$auth', 'toastr'];

    function AuthCtrl($scope, $state, $window, $rootScope, $auth, toastr) {
      var vm = this;

      vm.authenticate = authenticate;
      vm.isAuthenticated = isAuthenticated;
      vm.logout = logout;

      function authenticate(provider) {
        $auth.authenticate(provider)
          .then(function(response) {
            console.log(response);
            toastr.success('Autenticado!');
            $auth.setToken(response);
            $window.localStorage.token = response;
            // $window.localStorage.currentUser = response;
            $rootScope.currentUser = JSON.parse('{}');
            $state.go('home');
          })
          .catch(function(response) {
            toastr.error('Não foi possivel autenticar-se');
          });
      }
      function isAuthenticated() {
        return $auth.isAuthenticated();
      };
      function logout() {
        $auth.logout();
      };
    }
})(angular);
