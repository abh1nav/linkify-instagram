var _ = require('lodash');

var hashtag = require('./hashtag');
var username = require('./username');

module.exports = function(text) {
	var spaced = text.split(' '),
		hashtagged = spaced.map(function(word) {
			if (_.startsWith(word, '#')) {
				var words = _.words(word),
					actualTag = words[0],
					linkified = hashtag(actualTag),
					replaced = word.replace('#', '').replace(actualTag, linkified);
				return replaced;
			} else if (_.startsWith(word, '@')) {
				var words = _.words(word),
					actualUsername = words[0],
					linkified = username(actualUsername),
					replaced = word.replace('@', '').replace(actualUsername, linkified);
				return replaced;
			} else {
				return word;
			}
		});
	return _.join(hashtagged, ' ');
};