import _async_to_generator from "@swc/helpers/src/_async_to_generator.mjs";
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _create_class from "@swc/helpers/src/_create_class.mjs";
import regeneratorRuntime from "regenerator-runtime";
var A = /*#__PURE__*/ function() {
    "use strict";
    function A() {
        _class_call_check(this, A);
    }
    _create_class(A, [
        {
            key: "method",
            value: function method() {
                var _this = this;
                this.foo = _async_to_generator(regeneratorRuntime.mark(function _callee() {
                    return regeneratorRuntime.wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _this.x();
                            case 1:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }));
                var _this1 = this;
                this.bar = _async_to_generator(regeneratorRuntime.mark(function _callee() {
                    return regeneratorRuntime.wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _this1.x();
                            case 1:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }));
            }
        }
    ]);
    return A;
}();
console.log(A);
