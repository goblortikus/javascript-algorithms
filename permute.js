
// use: permute(myString) --> return all permutations of myString in an array
//		permute(a,b) --> return all permutations of b with a inserted at every position in every permutation; a should be single character
function permute() {

	var incomingArgumentsArray = arguments;

	console.log('a0len ' + arguments[0].length, arguments[0]);

	if (!arguments.length) {
		console.log('no length');
		return -1;
	}

	if (typeof arguments[0] != 'string') {
		console.log('no string ' + typeof arguments[0]);
		console.log(arguments[0]);
		return -1;
	}

	if (arguments[0].length == 1) {
			var singleLetterArray = [];
			singleLetterArray.push(arguments[0]);
			console.log('returning singleLetterArray ' + singleLetterArray);
			return singleLetterArray;
	}

	console.log('passed new aolen ' + incomingArgumentsArray[0].length, arguments[0])

	var newPArray = [];
	// start
	console.log('permute arg ' + incomingArgumentsArray[0].substr(0,1), incomingArgumentsArray[0].substr(1,incomingArgumentsArray[0].length-1));
	debugger;
	var perm = permute(incomingArgumentsArray[0].substr(1,incomingArgumentsArray[0].length-1));
	console.log('permute ',perm);
	perm.forEach(function (permutation, index, pArray) {
		console.log('in permuation w permutation ' + incomingArgumentsArray[0].length, incomingArgumentsArray[0], permutation, index, pArray, permutation.length);
		for (var i = 0;  i <= permutation.length; i++) {
		
			permString = permutation.substr(0, i) + incomingArgumentsArray[0].substr(0,1) + permutation.substr(i,permutation.length - i);
			newPArray.push(permString);			
			console.log('pushing '+ permString);
		}
		console.log('out for',newPArray);
		return newPArray;
	})	
}

// if (!console) {
// 	console.log('y');
// 	console = null;
// }

console.log(permute('abc'));

