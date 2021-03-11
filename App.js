function isWhitelisted(word) {
    return new RegExp('[pP]\w*[Nn]\w*[Ss]').test(word);
}

var bad = require('bad-words/lib/lang.json').words
module.exports = str => bad.some(word => str.includes(word) && !isWhitelisted(word));
