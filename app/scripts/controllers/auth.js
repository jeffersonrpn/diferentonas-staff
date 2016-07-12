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

      function authenticate(provider) {
        $auth.authenticate(provider)
          .then(function(response) {
            console.log(response);
            toastr.success('Autenticado!');
            $auth.setToken(response.data.state);
            $window.localStorage.token = response.data.state;
            $window.localStorage.currentUser = response.data.id;
            $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
            $state.go('home');
          })
          .catch(function(response) {
            toastr.error('Não foi possivel autenticar-se');
          });
      }
      function isAuthenticated() {
        return $auth.isAuthenticated();
      };
    }
})(angular);
