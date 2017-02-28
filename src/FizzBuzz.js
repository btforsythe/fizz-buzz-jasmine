function FizzBuzzNumber(number) { // constructor
	this.number = number;
}
FizzBuzzNumber.prototype = {
	say: function() {
		if (this.isFizz(this.number) && this.isBuzz(this.number)) {
			return "FizzBuzz";
		}

		if (this.isFizz(this.number)) {
			return "Fizz";
		}

		if(this.isBuzz(this.number)) {
			return "Buzz";
		}

		return "" + this.number;
	},
	isFizz: function() {
		return this.number%3 == 0;
	},
	isBuzz: function() {
		return this.number%5 == 0;
	}
}