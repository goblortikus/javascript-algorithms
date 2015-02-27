/* monir finished 25-feb-2014. show all permutations of string 12345 */

var permString = '123456';

var permString = permString.split('');

var permArray = [];

permString.forEach(function(permLetter) {
	permArray.push(permLetter);
});

var finalPermArray = [];

for (var i=permString.length-1; i >= 0; i--) {
	var permPop = permArray.pop();
	if (finalPermArray.length) {
		var tempFinalPermArray = [];
		finalPermArray.forEach(function(rootString) {
			for (var j=0; j<=rootString.length; j++) {
				tempFinalPermArray.push(rootString.substr(0,j) + permPop + rootString.substr(j,rootString.length-j));
			}
		})
		finalPermArray = tempFinalPermArray;
	} else {
		finalPermArray.push(permPop);
	}
}
console.log('All permutations of ' + permString);
console.log(finalPermArray,finalPermArray.length + ' permutations');