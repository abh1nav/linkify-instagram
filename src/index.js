var _ = require('lodash');

var hashtag = require('./hashtag');
var username = require('./username');

module.exports = function(text, htTemplate, unTemplate) {
	// Hashtags
	var hashtags = text.match(/[#]\w+/g);
	if (hashtags) {
		_.forEach(hashtags, function(ht) {
			text = text.replace(ht, hashtag(ht, htTemplate));
		});
	};

	// Usernames
	var usernames = text.match(/[@]\w+/g);
	if (usernames) {
		_.forEach(usernames, function(un) {
			text = text.replace(un, username(un, unTemplate));
		});
	}

	return text;
};