var should = require('chai').should();

var linkify = require('../index');

describe('linkify', function() {

	it('should treat blank captions correctly', function() {
		var expected = '';
		var caption = '';
		linkify(caption).should.equal(expected);
	});

	it('should handle captions that don\'t need any linkification correctly', function() {
		var expected = 'Hello World!';
		var caption = 'Hello World!';
		linkify(caption).should.equal(expected);
	});

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

	it('should linkify captions with hashtag blocks correctly', function() {
		var expected = 'Hello <a href="https://www.instagram.com/explore/tags/world">#world</a><a href="https://www.instagram.com/explore/tags/sup">#sup</a> <a href="https://www.instagram.com/explore/tags/javascript">#javascript</a>';
		var caption = 'Hello #world#sup #javascript';
		linkify(caption).should.equal(expected);
	});

	it('should linkify captions with username blocks correctly', function() {
		var expected = 'Hello <a href="https://www.instagram.com/world">@world</a><a href="https://www.instagram.com/sup">@sup</a> <a href="https://www.instagram.com/javascript">@javascript</a>';
		var caption = 'Hello @world@sup @javascript';
		linkify(caption).should.equal(expected);
	});
	
});