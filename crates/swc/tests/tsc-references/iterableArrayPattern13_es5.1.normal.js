//@target: ES6
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _inherits from "@swc/helpers/src/_inherits.mjs";
import _to_array from "@swc/helpers/src/_to_array.mjs";
import _create_super from "@swc/helpers/src/_create_super.mjs";
var Bar = function Bar() {
    "use strict";
    _class_call_check(this, Bar);
};
var Foo = /*#__PURE__*/ function(Bar) {
    "use strict";
    _inherits(Foo, Bar);
    var _super = _create_super(Foo);
    function Foo() {
        _class_call_check(this, Foo);
        return _super.apply(this, arguments);
    }
    return Foo;
}(Bar);
var FooIterator = /*#__PURE__*/ function() {
    "use strict";
    function FooIterator() {
        _class_call_check(this, FooIterator);
    }
    var _proto = FooIterator.prototype;
    _proto.next = function next() {
        return {
            value: new Foo,
            done: false
        };
    };
    _proto[Symbol.iterator] = function() {
        return this;
    };
    return FooIterator;
}();
function fun(param) {
    var _param = _to_array(param), a = _param[0], b = _param.slice(1);
}
fun(new FooIterator);
