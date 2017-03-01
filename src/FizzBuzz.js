

function FizzBuzzNumber(number) { // constructor
	// I'm effectively private :)
	function isFizz() {
		// You could pass in number if you wanted too for a more functional feel, but unnecessary since its in scope
		return number % 3 === 0;
	}

	// I'm effectively private :)
	function isBuzz() {
		return number % 5 === 0;
	}
	
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
	
	return {
		say: say
	}
}

let solution5 = FizzBuzzNumber(5);
solution5.say(); // Buzz

let solution15 = FizzBuzzNumber(15);
solution5.say(); // FizzBuzz
