var _ = require('lodash');

var hashtag = require('./hashtag');

module.exports = function(text) {
	var spaced = text.split(' '),
		hashtagged = spaced.map(function(word) {
			if (_.startsWith(word, '#')) {
				return hashtag(word);
			} else {
				return word;
			}
		});
	return _.join(hashtagged, ' ');
};