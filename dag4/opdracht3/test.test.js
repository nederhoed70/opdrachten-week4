const thePasswordVerifier = require('./password-test.js');

test('verify password function', function() {
	const expected = true;

	const output = thePasswordVerifier('5UlowPPEEUU');
	expect(output).toEqual(expected);
});
