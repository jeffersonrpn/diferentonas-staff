(function(angular) {
  'use strict';

  angular
    .module('diferentonasStaffApp')
    .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$scope', '$window', '$http', 'RESTAPI', 'Message', 'Staff', '$auth', 'toastr'];

    function MainCtrl($scope, $window, $http, RESTAPI, Message, Staff, $auth, toastr) {
      var vm = this;

      vm.message = {
        title: '',
        message: ''
      }
      vm.messages = [];
      vm.searchMessageTerm = '';
      vm.citizens = [];
      vm.searchCitizenTerm = '';
      vm.selectedCitizen = {
        login: ''
      };
      vm.currentUser = $window.localStorage.currentUser;
      vm.saveMessage = saveMessage;
      vm.deleteMessage = deleteMessage;
      vm.isAuthenticated = isAuthenticated;
      vm.getCitizens = getCitizens;
      vm.selectCitizen = selectCitizen;
      vm.saveStaff = saveStaff;

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
      function getCitizens(term) {
        $http({
          url: RESTAPI.url+'/cidadaos',
          method: "GET",
          params: {query: term}
       }).then(function(response) {
         vm.citizens = response.data;
         return response.data.map(function(item) {
            return item.login;
          });
       }, function(response) {
         console.log('error');
       });
      }
      function selectCitizen(citizen) {
        vm.citizens = [];
        vm.selectedCitizen = citizen;
        vm.searchCitizenTerm = citizen.login;
      }
      function saveStaff() {
        var data = {
            id: vm.selectedCitizen.id,
            ministerio: vm.selectedCitizen.ministerioDeAfiliacao
        };
        $http({
          url: RESTAPI.url+'/cidadaos/'+vm.selectedCitizen.id+'/funcionario',
          method: "POST",
          params: data
       }).then(function(response) {
         toastr.success('Funcionário atribuído com sucesso');
         vm.selectedCitizen = {
           login: ''
         }
       }, function(response) {
         toastr.console.error('Não foi possível realizar a ação');
       });
      }
      function isAuthenticated() {
        return $auth.isAuthenticated();
      }
    }
})(angular);
