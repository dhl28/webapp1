'use strict';

describe('Directive: siderBar', function () {

  // load the directive's module
  beforeEach(module('webapp1App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<sider-bar></sider-bar>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the siderBar directive');
  }));
});
