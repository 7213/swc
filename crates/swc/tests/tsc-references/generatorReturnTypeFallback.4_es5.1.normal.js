// @target: esnext
// @lib: es5,es2015.iterable
// @noemit: true
// @strict: false
// Allow generators to fallback to IterableIterator if they are not in strictNullChecks mode
// NOTE: In non-strictNullChecks mode, `undefined` (the default sent value) is assignable to everything.
import regeneratorRuntime from "regenerator-runtime";
var _marked = regeneratorRuntime.mark(f);
function f() {
    var x;
    return regeneratorRuntime.wrap(function f$(_ctx) {
        while(1)switch(_ctx.prev = _ctx.next){
            case 0:
                _ctx.next = 2;
                return 1;
            case 2:
                x = _ctx.sent;
            case 3:
            case "end":
                return _ctx.stop();
        }
    }, _marked);
}
