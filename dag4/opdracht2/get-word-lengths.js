const getWordLengths = function(someWords) {
	const wordLengths = someWords.map(words => {
		let length = words.length;
		return length;
	});
	return wordLengths;
};

module.exports = getWordLengths;
