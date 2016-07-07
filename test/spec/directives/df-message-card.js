'use strict';

describe('Directive: dfMessageCard', function () {

  // load the directive's module
  beforeEach(module('diferentonasStaffApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<df-message-card></df-message-card>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dfMessageCard directive');
  }));
});
