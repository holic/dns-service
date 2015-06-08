var expect = require('expect.js')
var validator = require('is-my-json-valid')

var schema = require('../../src/schemas/json-schema.json')
var validate = validator(schema, { greedy: true })


describe('DNS resource record model', function () {
	var model = require('../../src/schemas/record.json')

	it('is a valid JSON schema', function () {
		expect(validate(model)).to.be.ok()
	})
})
