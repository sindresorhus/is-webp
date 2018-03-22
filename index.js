'use strict';
module.exports = buffer => {
	if (!buffer || buffer.length < 12) {
		return false;
	}

	return buffer[8] === 87 &&
		buffer[9] === 69 &&
		buffer[10] === 66 &&
		buffer[11] === 80;
};
