function Classs() {
    if (this === window) {
        return new Classs();
    }
}

Classs.prototype.extend = function (params) {
    for (var x in params) {
        this[x] = params[x];
    }
    var fn = function () {};
    fn.prototype = this;
    return fn;
};

var MyClass = Classs().extend({
    sayHello: function () {
        console.log('hello');
    }
});
var myClass = new MyClass();

myClass.sayHello();
