(function(angular) {
  'use strict';
  angular
    .module('diferentonasStaffApp')
    .factory('Message', message);

    message.$inject = ['$resource', 'RESTAPI'];

    function message($resource, RESTAPI) {
      var service = $resource(RESTAPI.url+'/mensagens/:id');
      return service;
    }
})(angular);
