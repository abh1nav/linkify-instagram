var _ = require('lodash');

var hashtag = require('./hashtag');

module.exports = function(text) {
	var spaced = text.split(' '),
		hashtagged = spaced.map(function(word) {
			if (_.startsWith(word, '#')) {
				var words = _.words(word),
					actualTag = words[0],
					linkified = hashtag(actualTag),
					replaced = word.replace(actualTag, linkified).replace('#', '');
				return replaced;
			} else {
				return word;
			}
		});
	return _.join(hashtagged, ' ');
};