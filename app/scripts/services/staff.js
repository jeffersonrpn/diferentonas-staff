(function(angular) {
  'use strict';
  angular
    .module('diferentonasStaffApp')
    .factory('Staff', staff);

    staff.$inject = ['$resource', 'RESTAPI'];

    function staff($resource, RESTAPI) {
      var service = $resource(RESTAPI.url+'/funcionarios/:id');
      return service;
    }
})(angular);
