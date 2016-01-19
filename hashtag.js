var _ = require('lodash');
var format = require('string-format');
format.extend(String.prototype);

var defaultTmpl = '<a href="https://www.instagram.com/explore/tags/{hashtag}">#{hashtag}</a>';

module.exports = function(hashtag, template) {
	if (!_.isString(hashtag)) {
		throw new Error('hashtag must be a string');
		return;
	}
	if (!_.isNil(template) && !_.isString(template)) {
		throw new Error('template must be a string');
		return;
	}

	var tag = _.replace(hashtag, '#', ''),
		tmpl;

	if (_.isNil(template)) {
		tmpl = defaultTmpl;
	} else {
		tmpl = template;
	}

	if (tmpl.indexOf('{hashtag}') === -1) {
		throw new Error('template must contain the {hashtag} token');
		return;
	}

	return tmpl.format({hashtag: tag});
};