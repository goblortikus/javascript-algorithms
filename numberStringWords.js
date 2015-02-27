dogString = 'The quick brown fox';

dogStringArray = dogString.split(' ');

var newDogString = '';
dogStringArray.forEach(function(d,i) {
	newDogString += d + (i+1) + (i == dogStringArray.length - 1 ? '.' : ' ' );
})

console.log(newDogString)