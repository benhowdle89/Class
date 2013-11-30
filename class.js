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
        if (this === ((typeof root !== 'undefined') ? root : window)) {
            return new Class();
        }
    }

    Class.prototype.extend = function(params) {
        var fn = function() {};
        var newProto = {};
        for(var p in this) {
          newProto[p] = this[p];
        }
        for(var x in params) {
          newProto[x] = params[x];
        }

        fn.prototype = newProto;
        return fn;
    };
    
    return Class;
}));
