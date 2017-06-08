var MapboxNavigation = require("nativescript-mapbox-navigation").MapboxNavigation;
var mapboxNavigation = new MapboxNavigation();

// TODO replace 'functionname' with an acual function name of your plugin class and run with 'npm test <platform>'
describe("functionname", function() {
  it("exists", function() {
    expect(mapboxNavigation.functionname).toBeDefined();
  });

  it("returns a promise", function() {
    expect(mapboxNavigation.functionname()).toEqual(jasmine.any(Promise));
  });
});