var should = require('chai').should();
var expect = require('chai').expect;

var htmlEscape = require('../htmlEscape');

describe('htmlEscape', function() {

	it('should escape html correctly', function() {
		var expected = 'Ben &amp; Jerry\'s &gt; Baskin Robbins';
		var actual = 'Ben & Jerry\'s > Baskin Robbins';
		htmlEscape(actual).should.equal(expected);
	});

	it('should not fail on an example with >, < and pipes', function() {
		var expected = 'Testing greater than&gt;|&lt;less than and pipes || #hashtag';
		var caption = 'Testing greater than>|<less than and pipes || #hashtag';
		htmlEscape(caption).should.equal(expected);
	});

});