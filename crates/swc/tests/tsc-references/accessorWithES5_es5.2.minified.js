import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _create_class from "@swc/helpers/src/_create_class.mjs";
var C = function() {
    "use strict";
    function C() {
        _class_call_check(this, C);
    }
    return _create_class(C, [
        {
            key: "x",
            get: function() {
                return 1;
            }
        }
    ]), C;
}(), D = function() {
    "use strict";
    function D() {
        _class_call_check(this, D);
    }
    return _create_class(D, [
        {
            key: "x",
            set: function(v) {}
        }
    ]), D;
}();
