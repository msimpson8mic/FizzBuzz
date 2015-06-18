var INPUT = prompt("Input end of range:");
var fizzBuzz = function(endRange) {
	var count = 1;
	while(count <= endRange) {
		if (count % 3 === 0 && count % 5 === 0) {
			console.log("FizzBuzz! ");
		} else if (count % 3 === 0) {
			console.log("Fizz! ");
		} else if (count % 5 === 0) {
			console.log("Buzz! ");
		} else {
			console.log(count + ", ");
		}
		count++;
	}
};

var INPUT = + INPUT;

if (INPUT.isNaN || INPUT % 1 !== 0) {
	alert("Invalid input! (Remember: value must not be a decimal.)");
} else {
	fizzBuzz(INPUT);
}
