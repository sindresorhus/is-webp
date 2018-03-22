import test from 'ava';
import readChunk from 'read-chunk';
import m from '.';

const check = filename => m(readChunk.sync(filename, 0, 12));

test('detects WebP from Buffer', t => {
	t.true(check('fixture.webp'));
	t.false(check('fixture.png'));
});
