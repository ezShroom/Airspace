Bun.jest(module.id)
const Airspace = require('./index.cjs')

beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation()
})
afterEach(() => {
    Airspace.variables = {}
    jest.restoreAllMocks()
})

describe('general variables', () => {
    test('can be defined without keywords', () => {
        with (Airspace) {
            foo = 'bar'
        }

        expect(Airspace.variables.foo).toBeDefined()
        expect(Airspace.variables.foo).toEqual('bar')
    })
    test('have .d for logging', () => {
        expect(console.log).toHaveBeenCalledTimes(0)
        with (Airspace) {
            foo = 'bar'
            foo.d
        }

        expect(console.log).toHaveBeenCalledTimes(1)
        expect(console.log).toHaveBeenCalledWith('bar')
    })
})

describe('execute operator', () => {
    test.todo('works on functions', () => {
        with (Airspace) {
            foo = () => 'arst'
            bar = foo.x
        }
        expect(Airspace.variables.bar).toEqual('arst')
    })
})
