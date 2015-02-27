// fibonacci.js
// by monir mamoun

var fibArray = [];

function fib(x) {
	if (x==0 || x==1) {
		return fibArray[x] = x;
	}

	if (typeof fibArray[x-1] != 'undefined' && typeof fibArray[x-2] != 'undefined') {
		return fibArray[x] = fibArray[x-1] + fibArray[x-2]
	} else {
		return fibArray[x] = (typeof fibArray[x-1] != 'undefined' ? fibArray[x-1] : fib(x-1)) +  fib(x-2);					
	}
}


// note : this algorightm will break if x exceeds 78 because total value will exceed Javascript's 53-bit mantissa limit for its 64-bit integers
for (x=0; x < 61; x++) {
	console.log('Fibonacci of ' + x + ' is ' + fib(x));
}

