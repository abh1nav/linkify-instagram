var esc = [
  {
    key: '&',
    val: '&amp;'
  },
  {
    key: '>',
    val: '&gt;'
  },
  {
    key: '<',
    val: '&lt;'
  }
];

module.exports = function(text) {
	esc.forEach(function(escapeSequence) {
    text = text.replace(escapeSequence.key, escapeSequence.val);
  });
  return text;
};