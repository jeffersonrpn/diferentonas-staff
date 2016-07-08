(function(angular) {
  'use strict';

  /**
   * @ngdoc directive
   * @name diferentonasStaffApp.directive:dfMessageCard
   * @desc Message card used to show or list messages
   * @example <df-message-card></df-message-card>
   */
  angular
    .module('diferentonasStaffApp')
    .directive('dfMessageCard', messageCard);

  function messageCard() {
    return {
      templateUrl: 'views/directives/df-message-card.html',
      restrict: 'E',
      scope: {
        message: '=',
        deleteFuncion: '&'
      },
      link: function postLink(scope, element, attrs) {}
    };
  }
})(angular);
