linkify-instagram (WIP)
===

[![npm version](https://badge.fury.io/js/linkify-instagram.svg)](https://www.npmjs.com/package/linkify-instagram)
[![Build Status](https://travis-ci.org/abh1nav/linkify-instagram.svg?branch=master)](https://travis-ci.org/abh1nav/linkify-instagram)

## Sample Usage

```javascript
var linkify = require('linkify-instagram');

// Linkifies hashtags
console.log(linkify('Hello #World'));
// --> Hello <a href="https://www.instagram.com/explore/tags/world">#World</a>

// The hastag template is customizable
console.log(linkify('Hello #World', '<a href="https://www.instagram.com/explore/tags/{hashtag}" target="_blank">#{hashtag}</a>'));
// --> Hello <a href="https://www.instagram.com/explore/tags/world" target="_blank">#World</a>

// Linkifies usernames
console.log(linkify('Hello @hodor'));
// --> Hello <a href="https://www.instagram.com/hodor">@hodor</a>

// The template is customizable
console.log(linkify('Hello @hodor', undefined,'<a href="https://www.instagram.com/{username}" target="_blank">@{username}</a>'));
// --> Hello <a href="https://www.instagram.com/hodor" target="_blank">@hodor</a>
```
