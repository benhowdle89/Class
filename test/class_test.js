var test = require("tap").test;
var Class = require("../class.js");

test("Creating a class", function(t) {
  var Parent = Class().extend({
    foo: 2
  });

  var p = new Parent();
  t.equal(2, p.foo);
  t.end();
});

test("Extending a class", function(t) {
  var Parent = Class().extend({
    foo: 2
  });

  var p = new Parent();

  var Child = p.extend({
    bar: 3
  });

  var c = new Child();

  t.equal(2, c.foo);
  t.equal(3, c.bar);
  t.equal(undefined, p.bar, "parent should not get child properties");
  t.equal(2, p.foo);
  t.end();
});

