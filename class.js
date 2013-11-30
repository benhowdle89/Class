(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.Class = factory();
    }
}(this, function() {

    function Class() {
        if (this === root) {
            return new Class();
        }
    }

    Class.prototype.extend = function(params) {
        for (var x in params) {
            this[x] = params[x];
        }
        var fn = function() {};
        fn.prototype = this;
        return fn;
    };
    
    return Class;
}));
