// array rotation
// by monir mamoun
// this will take an array and "rotate" all values by the specified number



var originalArray = [1,2,3,4,5,6,7,9,10,11,12,13];
var rotatedArray = [];
var rotation = 3;

// implementation 1 -- NON-recursive
rot = function(arrayToRotate,x) {
	// must copy array or references get bungled
	arrayCopy = arrayToRotate.slice(0);
	while (x--) {
		arrayCopy = [arrayCopy.pop()].concat(arrayCopy);
	}
	return arrayCopy;
}

//implementation 2 -- recursive
rotRecursive = function (a,x) {
	return x-- ? rotRecursive([a.pop()].concat(a),x) : a;
}

console.log('Rotating array ' + originalArray + ' by ' + rotation + ' times' );
console.log();
console.log('implementation 1: non-recursive:');
console.log('original array: ', originalArray);

rotatedArray = rot(originalArray, rotation);

console.log('rotated array: ', rotatedArray);

console.log();

console.log('implementation 2: recursive:');
console.log('original array: ', originalArray);

rotatedArray = rotRecursive(originalArray, rotation);

console.log('rotated array: ', rotatedArray);

