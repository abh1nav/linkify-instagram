var _ = require('lodash');
var format = require('string-format');
format.extend(String.prototype);

var defaultTmpl = '<a href="https://www.instagram.com/{username}">@{username}</a>';

module.exports = function(username, template) {
	if (!_.isString(username)) {
		throw new Error('username must be a string');
		return;
	}
	if (!_.isNil(template) && !_.isString(template)) {
		throw new Error('template must be a string');
		return;
	}

	var uname = _.replace(username, '@', ''),
		tmpl;

	if (_.isNil(template)) {
		tmpl = defaultTmpl;
	} else {
		tmpl = template;
	}

	if (tmpl.indexOf('{username}') === -1) {
		throw new Error('template must contain the {username} token');
		return;
	}

	return tmpl.format({username: uname});
};