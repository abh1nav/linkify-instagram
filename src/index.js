var hashtag = require('./hashtag');
var htmlEscape = require('./htmlEscape');
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
  // Escape HTML characters
  text = htmlEscape(text);

  // Usernames
  text = text.replace(/(^|[\W])@\w(\w|\.)*/g, function(matched) {
    var prefix = '';
    var postfix = '';
    var postfixIdx;
    // Remove any leading non-word character
    if (/^[\W]@/.test(matched)) {
      prefix = matched.slice(0, 1);
      matched = matched.slice(1);
    }
    // Remove any trailing periods
    postfixIdx = matched.search(/\.+$/);
    if (postfixIdx > -1) {
      postfix = matched.slice(postfixIdx);
      matched = matched.slice(0, postfixIdx);
    }
    return prefix + username(matched, unTemplate) + postfix;
  });

  // Hashtags
  text = text.replace(/#(\w|[^\u0000-\u007F])+/g, function(matched) {
    return hashtag(matched, htTemplate);
  });

  return text;
};
