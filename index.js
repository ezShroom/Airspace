const Airspace = new Proxy(
    {},
    {
        get: function (target, prop) {
            console.log('hello world')
            return target[prop]; // Return the actual property value if it exists
        },
    }
);


Object.defineProperty(Array.prototype, "d", {
    get: function () {
        console.log(this)
        return this // To allow method chaining if needed
    },
    set: function (value) {
        console.log(this)
        Object.assign(this, value)
        return this
    },
});

let thing = [1, 2, 3]
thing.d = [4, 5, 6]
thing.d = 4
console.log(thing)