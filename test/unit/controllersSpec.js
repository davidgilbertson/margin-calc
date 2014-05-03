'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  beforeEach(module('mc.controllers'));

  it('Should add numbers', function() {
    expect(1 + 2).toBe(3);
  });

  it('should ....', inject(function($controller) {
    //spec body
    var calc = $controller('Calculator');
    expect(calc).toBeDefined();
  }));

  // it('should ....', inject(function($controller) {
  //   //spec body
  //   var settings = $controller('Settings');
  //   expect(settings).toBeDefined();
  // }));
});
