(function(angular) {
  'use strict';

  angular
    .module('diferentonasStaffApp')
    .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['Message'];

    function MainCtrl(Message) {
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
          console.log('Mensagens carregadas');
        }, function error() {
          console.log('Algo errado');
        });
      }
    }
})(angular);
