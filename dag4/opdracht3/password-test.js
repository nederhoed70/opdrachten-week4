const passwordVerifier = function(password) {
	// We tellen het aantal requirements waar het wachtwoord aan moet voldoen
	let score = 0;

	// Voor elke conditie maken we een interne check
	const isNotBlank = pw => {
		// return boolean
		return pw != null && pw != '';
	};
	const isLessThan8Chars = pw => {
		// return boolean
		return pw.length >= 8;
	};
	const hasUppercase = pw => {
		// return boolean
		return pw.search(/[A-Z]/) != -1;
	};
	const hasLowercase = pw => {
		// return boolean
		return pw.search(/[a-z]/) != -1;
	};
	const hasDigit = pw => {
		// return boolean
		return pw.search(/[0-9]/) != -1;
	};

	// 	// Voor elke requirement die waar is, tel 1 punt op
	if (isNotBlank(password)) score++;
	if (isLessThan8Chars(password)) score++;
	if (hasUppercase(password)) score++;
	if (hasDigit(password)) score++;
	if (hasLowercase(password)) {
		score++;
	} else {
		// Voor deze requirement maken een uitzondering; reset de score als hier niet aan wordt voldaan
		score = 0;
	}

	// 	// Markeer het wachtwoord als valide als er een score van minimaal 3 is
	return {
		score: score,
		valid: score >= 3
	};
};

module.exports = passwordVerifier;
