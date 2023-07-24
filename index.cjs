const variables = {}
const Airspace = new Proxy(
    {},
    {
        get(target, property) {
            const wrapped = Object(variables[property])
            console.log(property)
            Object.defineProperty(wrapped, 'd', {
                get() {
                    console.log(variables[property])
                    return variables[property]
                },
                set(value) {
                    console.log(variables[property])
                    variables[property] = value
                },
                configurable: true,
            })
            if (typeof wrapped === 'function')
                Object.defineProperty(wrapped, 'x', {
                    get() {
                        return wrapped()
                    },
                    set(value) {
                        return wrapped(value)
                    },
                    configurable: true,
                })
            return wrapped
        },
        set(target, property, value) {
            variables[property] = value
            return true
        },
        has() {
            return true
        },
    },
)

with (Airspace) {
    foo = () => 'arst'
    foo
}

module.exports = Airspace
module.exports.variables = variables
