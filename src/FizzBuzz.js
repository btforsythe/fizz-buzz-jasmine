function say(number) {
	
	var returnValue = isFizz(number)? "Fizz": "";

	if(isBuzz(number)) {
		returnValue += "Buzz";
		// same as below
		// returnValue = returnValue + "Buzz";
	}
	// I could do this with the ternary operator
	// returnValue += (isBuzz(number)? "Buzz": "");

	// non-empty strings are "truthy"
	if(returnValue) {
		return returnValue;
	}

	return "" + number;
}

function isFizz(number) {
	return number%3 == 0;
}

function isBuzz(number) {
	return number%5 == 0;
}