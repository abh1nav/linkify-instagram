var should = require('chai').should();
var expect = require('chai').expect;

var linkifyUsername = require('../username');

describe('linkifyUsername', function() {

	it('should linkify a username correctly', function() {
		var expected = '<a href="https://www.instagram.com/hodor">@hodor</a>';
		var username = 'hodor';
		linkifyUsername(username).should.equal(expected);
	});

	it('should linkify a username correctly even when the @ sign is included', function() {
		var expected = '<a href="https://www.instagram.com/hodor">@hodor</a>';
		var username = '@hodor';
		linkifyUsername(username).should.equal(expected);
	});

	it('should not accept non-string usernames', function() {
		expect(function() {
			linkifyUsername({})
		}).to.throw('username must be a string');
	});

	it('should be able modify the username template correctly', function() {
		var newTmpl = '<a href="https://www.instagram.com/{username}" target="_blank">@{username}</a>';
		var expected = '<a href="https://www.instagram.com/hodor" target="_blank">@hodor</a>';
		var username = 'hodor';
		linkifyUsername(username, newTmpl).should.equal(expected);
	});

	it('should not accept non-string username templates', function() {
		expect(function() {
			linkifyUsername('username', {});
		}).to.throw('template must be a string');
	});

	it('should not accept username templates without the {username} token', function() {
		expect(function() {
			linkifyUsername('username', '<a>Hodor!</a>');
		}).to.throw('template must contain the {username} token');
	});

});