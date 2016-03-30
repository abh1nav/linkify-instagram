var defaultTmpl = '<a href="https://www.instagram.com/{username}">@{username}</a>';

module.exports = function(username, template) {
	if (typeof username !== 'string') {
		throw new Error('username must be a string');
		return;
	}
	if (template && typeof template !== 'string') {
		throw new Error('template must be a string');
		return;
	}

	var uname = username.replace(/@/ig, '');
	var tmpl = template ? template : defaultTmpl;

	if (tmpl.indexOf('{username}') === -1) {
		throw new Error('template must contain the {username} token');
		return;
	}

	return tmpl.replace(/{username}/g, uname);
};