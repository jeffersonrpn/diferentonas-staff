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
        var data = {
            titulo: vm.message.title,
            conteudo: vm.message.message,
            autor: "User01"
        };
        Message.save(data, function success() {
          toastr.success('Mensagem enviada com sucesso');
        }, function error() {
          toastr.console.error('Não foi possível enviar a mensagem');
        });
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
