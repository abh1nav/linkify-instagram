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

	it('should linkify a caption with a multiple hashtags', function() {
		var expected = 'Hello <a href="https://www.instagram.com/explore/tags/world">#world</a> <a href="https://www.instagram.com/explore/tags/hello">#hello</a>';
		var caption = 'Hello #world #hello';
		linkify(caption).should.equal(expected);
	});

	it('should linkify a caption with a single username', function() {
		var expected = 'Hello <a href="https://www.instagram.com/hodor">@hodor</a>';
		var caption = 'Hello @hodor';
		linkify(caption).should.equal(expected);
	});

	it('should linkify a caption with a single username with a punctuation at the end', function() {
		var expected = 'Hello <a href="https://www.instagram.com/hodor">@hodor</a>!';
		var caption = 'Hello @hodor!';
		linkify(caption).should.equal(expected);
	});

	it('should linkify a caption with a username and hashtag combo', function() {
		var expected = 'Hello <a href="https://www.instagram.com/explore/tags/world">#world</a>, meet <a href="https://www.instagram.com/hodor">@hodor</a>!';
		var caption = 'Hello #world, meet @hodor!';
		linkify(caption).should.equal(expected);
	});

	it('should linkify many with usernames and hashtags', function() {
		var expected = 'Hello <a href="https://www.instagram.com/explore/tags/world">#world</a>, meet <a href="https://www.instagram.com/hodor">@hodor</a>! He\'s a <a href="https://www.instagram.com/explore/tags/gameofthrones">#gameofthrones</a> character. <a href="https://www.instagram.com/gameofthrones">@gameofthrones</a>';
		var caption = 'Hello #world, meet @hodor! He\'s a #gameofthrones character. @gameofthrones';
		linkify(caption).should.equal(expected);
	});
	
});