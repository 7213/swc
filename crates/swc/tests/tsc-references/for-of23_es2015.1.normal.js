//@target: ES6
class Foo {
}
class FooIterator {
    next() {
        return {
            value: new Foo,
            done: false
        };
    }
    [Symbol.iterator]() {
        return this;
    }
}
for (const v of new FooIterator){
    const v1 = 0; // new scope
}
