linkify-instagram (WIP)
===

[![npm version](https://badge.fury.io/js/linkify-instagram.svg)](https://www.npmjs.com/package/linkify-instagram)
[![Build Status](https://travis-ci.org/abh1nav/linkify-instagram.svg?branch=master)](https://travis-ci.org/abh1nav/linkify-instagram)

## Sample Usage

```javascript
var linkify = require('linkify-instagram');

console.log(linkify('Hello #World'));
// --> Hello <a href="https://www.instagram.com/explore/tags/world">#World</a>

console.log(linkify('Hello #World', '<a href="https://www.instagram.com/explore/tags/{hashtag}" target="_blank">#{hashtag}</a>'));
// --> Hello <a href="https://www.instagram.com/explore/tags/world" target="_blank">#World</a>
```
