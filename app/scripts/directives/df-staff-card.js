(function(angular) {
  'use strict';

  /**
   * @ngdoc directive
   * @name diferentonasStaffApp.directive:dfStaffCard
   * @desc Staff card used to show or list messages
   * @example <df-message-card></df-message-card>
   */
  angular
    .module('diferentonasStaffApp')
    .directive('dfStaffCard', staffCard);

  function staffCard() {
    return {
      templateUrl: 'views/directives/df-staff-card.html',
      restrict: 'E',
      scope: {
        citizen: '=',
        deleteFunction: '&'
      }
    };
  }
})(angular);
