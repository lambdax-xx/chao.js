/* Orientations */

function O(ori) {
	if (typeof ori === 'string') {
		return O[ori.toUpperCase()];
	}
	return ori;
}

Utils.assign(O, {
	EAST:  0x01，
	WEST:  0x02,
	SOUTH: 0x04,
	NORTH: 0x08,

	NONE: 0x00,
	ALL: 0x0f,

	E: 0x01,
	W: 0x02,
	S: 0x04,
	N: 0x08,

	O: 0x00,
	A: 0x0f,
});
