module.exports = {
	_id: '_design/records',
	views: {
		by_domain: require('./by_domain')
	}
}
