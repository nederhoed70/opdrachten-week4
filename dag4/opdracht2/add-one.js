const addOne = function(numbers) {
	// Schrijf hier de functie...
	numbersPlusOne = numbers.map(function(number) {
		return number + 1;
	});
	return numbersPlusOne;
};
module.exports = addOne;
