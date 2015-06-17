var input = prompt("Input end of range: ");
var fizzBuzz = function(num) {
	var count = 1;
	while(count <= num) {
		if (count % 3 === 0 && count % 5 === 0) {
			document.write("FizzBuzz!");
		} else if (count % 3 === 0) {
			document.write("Fizz! ");
		} else if (count % 5 === 0) {
			document.write("Buzz! ");
		} else {
			document.write(count + ", ");
		}
		count++
	}
};

fizzBuzz(input);