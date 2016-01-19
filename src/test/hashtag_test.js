var should = require('chai').should();
var expect = require('chai').expect;

var linkifyHashtag = require('../hashtag');

describe('linkifyHashtag', function() {

	it('should linkify the hashtag correctly', function() {
		var expected = '<a href="https://www.instagram.com/explore/tags/sometag">#sometag</a>';
		var hashtag = 'sometag';
		linkifyHashtag(hashtag).should.equal(expected);
	});

	it('should linkify the hashtag correctly even when the # sign is included', function() {
		var expected = '<a href="https://www.instagram.com/explore/tags/sometag">#sometag</a>';
		var hashtag = '#sometag';
		linkifyHashtag(hashtag).should.equal(expected);
	});

	it('should not accept non-string hashtags', function() {
		expect(function() {
			linkifyHashtag({})
		}).to.throw('hashtag must be a string');
	});

	it('should be able modify the hashtag template correctly', function() {
		var newTmpl = '<a href="https://www.instagram.com/explore/tags/{hashtag}" target="_blank">#{hashtag}</a>';
		var expected = '<a href="https://www.instagram.com/explore/tags/sometag" target="_blank">#sometag</a>';
		var hashtag = 'sometag';
		linkifyHashtag(hashtag, newTmpl).should.equal(expected);
	});

	it('should not accept non-string hashtag templates', function() {
		expect(function() {
			linkifyHashtag('hashtag', {});
		}).to.throw('template must be a string');
	});

	it('should not accept hashtag templates without the {hashtag} token', function() {
		expect(function() {
			linkifyHashtag('hashtag', '<a>Hodor!</a>');
		}).to.throw('template must contain the {hashtag} token');
	});

});