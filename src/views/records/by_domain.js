module.exports = {
	map: function (doc) {
		var domain = doc._id
		var records = doc.records || []

		records.forEach(function (record) {
			emit(domain, record)
		})
	}
}
