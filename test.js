'use strict';
var assert = require('assert');
var readChunk = require('read-chunk');
var isWebp = require('./index');

function check(filename) {
	return isWebp(readChunk.sync(filename, 0, 12));
}

it('should detect WebP from Buffer', function () {
	assert(check('fixture.webp'));
	assert(!check('fixture.png'));
});
