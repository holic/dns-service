var expect = require('expect.js')
var tv4 = require('tv4')

var schema = require('../../src/schemas/json-schema.json')
tv4.addSchema(schema.$schema, schema)

describe('DNS resource record model', function () {
	var model = require('../../src/schemas/record.json')

	it('is a valid JSON schema', function () {
		var result = tv4.validateMultiple(model, schema)

		result.errors.forEach(function (err) {
			throw err
		})
		result.missing.forEach(function (err) {
			throw err
		})

		expect(result.valid).to.be(true)
		expect(result.errors.length).to.be(0)
		expect(result.missing.length).to.be(0)
	})
})
