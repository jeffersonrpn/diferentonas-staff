(function(angular) {
  'use strict';
  angular
    .module('diferentonasStaffApp')
    .factory('Staff', staff);

    staff.$inject = ['$resource', 'RESTAPI'];

    function staff($resource, RESTAPI) {
      var service = $resource(RESTAPI.url+'/cidadaos/:id/funcionario');
      return service;
    }
})(angular);
