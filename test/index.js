var should = require('chai').should();

var linkify = require('../index');

describe('linkify', function() {

	it('should linkify the simplest example with a single hashtag', function() {
		var expected = 'Hello <a href="https://www.instagram.com/explore/tags/world">#world</a>';
		var caption = 'Hello #world';
		linkify(caption).should.equal(expected);
	});

	it('should linkify a caption with a single hashtag with a punctuation at the end', function() {
		var expected = 'Hello <a href="https://www.instagram.com/explore/tags/world">#world</a>!';
		var caption = 'Hello #world!';
		linkify(caption).should.equal(expected);
	});

});