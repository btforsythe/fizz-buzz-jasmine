describe("FizzBuzz", function() {
	describe("should return the number for", function() {
		it("1", function() {

			var underTest = FizzBuzzNumber(1);

			var result = underTest.say();

			expect(result).toBe("1");
		});
		it("2", function() {
			var underTest = FizzBuzzNumber(2);

			var result = underTest.say();

			expect(result).toBe("2");
		});
	});

	describe("should return Fizz for", function() {
		it("3", function() {
			var underTest = FizzBuzzNumber(3);

			var result = underTest.say();

			expect(result).toBe("Fizz");
		});

		it("6", function() {
			var underTest = FizzBuzzNumber(6);

			var result = underTest.say();

			expect(result).toBe("Fizz");
		});
	});

	describe("should return Buzz for", function() {
		it("5", function() {
			var underTest = FizzBuzzNumber(5);

			var result = underTest.say();

			expect(result).toBe("Buzz");
		});
		it("10", function() {
			var underTest = FizzBuzzNumber(10);

			var result = underTest.say();

			expect(result).toBe("Buzz");
		});
	});

	describe("should return FizzBuzz for", function() {
		it("15", function() {
			var underTest = FizzBuzzNumber(15);

			var result = underTest.say();

			expect(result).toBe("FizzBuzz");
		});
		it("30", function() {
			var underTest = FizzBuzzNumber(30);

			var result = underTest.say();

			expect(result).toBe("FizzBuzz");
		});
	});

});