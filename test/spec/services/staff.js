'use strict';

describe('Service: staff', function () {

  // load the service's module
  beforeEach(module('diferentonasStaffApp'));

  // instantiate service
  var staff;
  beforeEach(inject(function (_staff_) {
    staff = _staff_;
  }));

  it('should do something', function () {
    expect(!!staff).toBe(true);
  });

});
