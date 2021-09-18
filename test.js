import test from 'ava';
import {readChunkSync} from 'read-chunk';
import isWebp from './index.js';

const check = filename => isWebp(readChunkSync(filename, {length: 12}));

test('detects WebP from Buffer', t => {
	t.true(check('fixture.webp'));
	t.false(check('fixture.png'));
});
