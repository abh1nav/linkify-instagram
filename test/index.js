var should = require('chai').should();
var expect = require('chai').expect;

var linkify = require('../index');

describe('linkify', function() {

	it('should linkify text', function() {
		var expected = 'Hello <a href="https://www.instagram.com/explore/tags/world">#world</a>';
		var caption = 'Hello #world';
		linkify(caption).should.equal(expected);
	});

});