(function(angular) {
  'use strict';

  angular
    .module('diferentonasStaffApp')
    .controller('MainCtrl', MainCtrl);

    function MainCtrl() {
      var vm = this;

      vm.message = {
        title: '',
        message: ''
      }
      vm.saveMessage = saveMessage;

      function saveMessage() {
        console.log(vm.message);
      }
    }
})(angular);
