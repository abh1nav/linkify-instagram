var defaultTmpl = '<a href="https://www.instagram.com/explore/tags/{hashtag}">#{hashtag}</a>';

module.exports = function(hashtag, template) {
	if (typeof hashtag !== 'string') {
		throw new Error('hashtag must be a string');
		return;
	}
	if (template && typeof template !== 'string') {
		throw new Error('template must be a string');
		return;
	}

	var tag = hashtag.replace(/#/ig, '');
	var tmpl;

	if (!template) {
		tmpl = defaultTmpl;
	} else {
		tmpl = template;
	}

	if (tmpl.indexOf('{hashtag}') === -1) {
		throw new Error('template must contain the {hashtag} token');
		return;
	}

	return tmpl.replace(/{hashtag}/g, tag);
};