// This function effectively creates a *closure*
// around the number we specified. Since everything
// is defined inside the FizzBuzzNumber method,
// number is in scope for all of the functions. This
// is known as the *object revealing pattern*.
function FizzBuzzNumber(number) { // constructor

	// I'm effectively private :)
	function say() {
		if (isFizz() && isBuzz()) { 
			return "FizzBuzz";
		}

		if (isFizz()) {
			return "Fizz";
		}

		if (isBuzz()) {
			return "Buzz";
		}

		return "" + number;
	}
	
	// I'm effectively private :)
	function isFizz() {
		return number % 3 === 0;
	}

	// I'm effectively private :)
	function isBuzz() {
		return number % 5 === 0;
	}

	// this returns an anonymous (no class) object
	// with a say attribute tied to the 'say' function above
	return {
		say: say
	}
}
