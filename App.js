var bad = require('bad-words/lib/lang.json').words
module.exports = str => bad.some(word => str.includes(word))