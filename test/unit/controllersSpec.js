'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  beforeEach(module('mc.controllers'));


  it('should ....', inject(function($controller) {
    //spec body
    var calc = $controller('Calculator');
    expect(calc).toBeDefined();
  }));

  it('should ....', inject(function($controller) {
    //spec body
    var settings = $controller('Settings');
    expect(settings).toBeDefined();
  }));
});
