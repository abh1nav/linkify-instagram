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
		var expected = 'Hello <a href="https://www.instagram.com/world">@world</a>@sup <a href="https://www.instagram.com/javascript">@javascript</a>';
		var caption = 'Hello @world@sup @javascript';
		linkify(caption).should.equal(expected);
	});

	it('should linkify captions with >, < and pipes correctly', function() {
		var expected = 'Hello <a href="https://www.instagram.com/world">@world</a> here are some &gt; &amp; &lt; signs that you can escape';
		var caption = 'Hello @world here are some > & < signs that you can escape';
		linkify(caption).should.equal(expected);
	});
	
	it('should linkify a hashtag at the beginning of the string', function() {
		var expected = '<a href="https://www.instagram.com/explore/tags/hello">#hello</a> world!';
		var caption = '#hello world!';
		linkify(caption).should.equal(expected);
	});

	it('should linkify a username at the beginning of the string', function() {
		var expected = '<a href="https://www.instagram.com/hello">@hello</a> world!';
		var caption = '@hello world!';
		linkify(caption).should.equal(expected);
	});

	it('should linkify usernames prefixed with a non-letter, number, or underscore', function() {
		var expected = '.<a href="https://www.instagram.com/hello">@hello</a> world! h@this 1@is _@a *<a href="https://www.instagram.com/test">@test</a>';
		var caption = '.@hello world! h@this 1@is _@a *@test';
		linkify(caption).should.equal(expected);
	});

	it('should linkify a username with trailing periods', function() {
		var expected = '.<a href="https://www.instagram.com/hello">@hello</a>.. world!';
		var caption = '.@hello.. world!';
		linkify(caption).should.equal(expected);
	});

	it('should linkify a username with trailing non-letter, number, or underscore', function() {
		var expected = '<a href="https://www.instagram.com/hello">@hello</a>* world!';
		var caption = '@hello* world!';
		linkify(caption).should.equal(expected);
	});

	it('should linkify a username with leading and trailing emojis', function() {
		var expected = '😁<a href="https://www.instagram.com/hello">@hello</a>⚡️ world!';
		var caption = '😁@hello⚡️ world!';
		linkify(caption).should.equal(expected);
	});

	it('should linkify a hashtag, but not a username when in that order back-to-back', function() {
		var expected = '<a href="https://www.instagram.com/explore/tags/hello">#hello</a>@world';
		var caption = '#hello@world';
		linkify(caption).should.equal(expected);
	});

	it('should linkify a username and hashtag when in that order back-to-back', function() {
		var expected = '<a href="https://www.instagram.com/hello">@hello</a><a href="https://www.instagram.com/explore/tags/world">#world</a>';
		var caption = '@hello#world';
		linkify(caption).should.equal(expected);
	});

	it('should linkify an actual instagram example with hashtag overlap', function() {
		var expected = 'Can you believe <a href="https://www.instagram.com/explore/tags/NashvilleJuly4">#NashvilleJuly4</a> is only 5 days away? That\'s 5 days until fireworks are launched from Nissan Stadium lighting up the sky. We can\'t wait! Double tap if you agree. <a href="https://www.instagram.com/explore/tags/Nashville">#Nashville</a> <a href="https://www.instagram.com/explore/tags/MusicCity">#MusicCity</a>';
		var caption = 'Can you believe #NashvilleJuly4 is only 5 days away? That\'s 5 days until fireworks are launched from Nissan Stadium lighting up the sky. We can\'t wait! Double tap if you agree. #Nashville #MusicCity';
		linkify(caption).should.equal(expected);
	});

	it('should linkify back-to-back hashtags', function() {
		var expected = '<a href="https://www.instagram.com/explore/tags/hello">#hello</a><a href="https://www.instagram.com/explore/tags/world">#world</a>';
		var caption = '#hello#world';
		linkify(caption).should.equal(expected);
	});

	it('should linkify emoji hashtags', function() {
		var expected = '<a href="https://www.instagram.com/explore/tags/🔥😎">#🔥😎</a> <a href="https://www.instagram.com/explore/tags/test⚡️emoji">#test⚡️emoji</a>';
		var caption = '#🔥😎 #test⚡️emoji';
		linkify(caption).should.equal(expected);
	});

	it('should linkify unicode hashtags correctly', function() {
		var expected = 'don\'t know what this says: <a href="https://www.instagram.com/explore/tags/絵文字">#絵文字</a>';
		var caption = 'don\'t know what this says: #絵文字';
		linkify(caption).should.equal(expected);
	});

	it('should linkify a hashtag with multiple hashes', function() {
		var expected = '<a href="https://www.instagram.com/explore/tags/keyboard">#keyboard</a> #<a href="https://www.instagram.com/explore/tags/cat">#cat</a>';
		var caption = '#keyboard ##cat';
		linkify(caption).should.equal(expected);
	});

	it('shouldn\'t linkify a username starting with a period', function() {
		var expected = 'keyboard @.cat.';
		var caption = 'keyboard @.cat.';
		linkify(caption).should.equal(expected);
	});

	it('should linkify a hashtag, but stop at a period character', function() {
		var expected = '<a href="https://www.instagram.com/explore/tags/keyboard">#keyboard</a>.cat';
		var caption = '#keyboard.cat';
		linkify(caption).should.equal(expected);
	});

	it('should linkify a hashtag containing an underscore', function() {
		var expected = '<a href="https://www.instagram.com/explore/tags/keyboard_cat">#keyboard_cat</a>';
		var caption = '#keyboard_cat';
		linkify(caption).should.equal(expected);
	});
});
