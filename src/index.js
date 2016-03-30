var hashtag = require('./hashtag');
var username = require('./username');

// Basic polyfill for forEach
if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (fn, arg) {
        var arr = this;
        var len = arr.length;
        var thisArg = arg ? arg : undefined;
        var i;
        for (i = 0; i < len; i += 1) {
            if (arr.hasOwnProperty(i)) {
                fn.call(thisArg, arr[i], i, arr);
            }
        }
        return undefined;
    };
}

module.exports = function(text, htTemplate, unTemplate) {
	// Hashtags
	var hashtags = text.match(/[#]\w+/g);
	if (hashtags) {
		hashtags.forEach(function(ht) {
			text = text.replace(ht, hashtag(ht, htTemplate));
		});
	};

	// Usernames
	var usernames = text.match(/[@]\w+/g);
	if (usernames) {
		usernames.forEach(function(un) {
			text = text.replace(un, username(un, unTemplate));
		});
	}

	return text;
};