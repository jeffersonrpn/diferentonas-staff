(function(angular) {
  'use strict';

  angular
    .module('diferentonasStaffApp')
    .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['Message', 'toastr'];

    function MainCtrl(Message, toastr) {
      var vm = this;

      vm.message = {
        title: '',
        message: ''
      }
      vm.messages = [];
      vm.searchMessageTerm = '';
      vm.saveMessage = saveMessage;

      getMessages();

      function saveMessage() {
        console.log(vm.message);
      }
      function getMessages() {
        vm.messages = Message.query(function success() {
          toastr.success('Mensagens carregadas');
        }, function error() {
          toastr.error('Algo errado');
        });
      }
    }
})(angular);
