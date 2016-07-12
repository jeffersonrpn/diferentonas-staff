(function(angular) {
  'use strict';

  angular
    .module('diferentonasStaffApp')
    .controller('AuthCtrl', AuthCtrl);

    AuthCtrl.$inject = ['$scope', '$window', '$rootScope', '$auth', 'toastr'];

    function AuthCtrl($scope, $window, $rootScope, $auth, toastr) {
      var vm = this;

      vm.authenticate = authenticate;
      vm.isAuthenticated = isAuthenticated;

      function authenticate(provider) {
        $auth.authenticate(provider)
          .then(function(response) {
            console.log(response);
            toastr.success('Autenticado!');
            $window.localStorage.currentUser = JSON.stringify(response.data.id);
            $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
            window.location.href = window.location.origin+'/home.html';
          })
          .catch(function(response) {
            console.log(response);
            toastr.error('Não foi possivel autenticar-se com o Google');
          });
      }
      function isAuthenticated() {
        return $auth.isAuthenticated();
      };
    }
})(angular);
