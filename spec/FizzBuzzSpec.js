describe("FizzBuzz", function() {
	describe("should return the number for", function() {
		it("1", function() {
			var result = say(1);

			expect(result).toBe("1");
		});
		it("2", function() {
			var result = say(2);

			expect(result).toBe("2");
		});
	});

	describe("should return Fizz for", function() {
		it("3", function() {
			var result = say(3);

			expect(result).toBe("Fizz");
		});

		it("6", function() {
			var result = say(6);

			expect(result).toBe("Fizz");
		});
	});

	describe("should return Buzz for", function() {
		it("5", function() {
			var result = say(5);

			expect(result).toBe("Buzz");
		});
		it("10", function() {
			var result = say(10);

			expect(result).toBe("Buzz");
		});
	});

	describe("should return FizzBuzz for", function() {
		it("15", function() {
			var result = say(15);

			expect(result).toBe("FizzBuzz");
		});
		it("30", function() {
			var result = say(30);

			expect(result).toBe("FizzBuzz");
		});
	});

});