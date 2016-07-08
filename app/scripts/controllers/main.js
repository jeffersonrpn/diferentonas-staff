(function(angular) {
  'use strict';

  angular
    .module('diferentonasStaffApp')
    .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$scope','Message', 'toastr'];

    function MainCtrl($scope, Message, toastr) {
      var vm = this;

      vm.message = {
        title: '',
        message: ''
      }
      vm.messages = [];
      vm.searchMessageTerm = '';
      vm.saveMessage = saveMessage;
      vm.deleteMessage = deleteMessage;

      getMessages();

      function saveMessage() {
        var data = {
            titulo: vm.message.title,
            conteudo: vm.message.message,
            autor: "User01"
        };
        Message.save(data, function success() {
          toastr.success('Mensagem enviada com sucesso');
          vm.message = {
            title: '',
            message: ''
          }
          $scope.saveMessageForm.$setPristine();
          getMessages();
        }, function error() {
          toastr.console.error('Não foi possível enviar a mensagem');
        });
      }
      function deleteMessage(message) {
        Message.delete({id: message.id}, function success() {
          toastr.success('Mensagem removida com sucesso');
          getMessages();
        }, function error() {
          toastr.error('Não foi possível remover a mensagem');
        });
      }
      function getMessages() {
        vm.messages = Message.query(function success() {
        }, function error() {
          toastr.error('Não foi possível carregar mensagens');
        });
      }
    }
})(angular);
