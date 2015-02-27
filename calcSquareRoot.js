
var num = 10;

var itDiff = num;

var sqNum = 1;

loops = 100;

while (itDiff > .001) {
	itDiff = Math.abs((sqNum * sqNum - num) / (2 * sqNum));
	sqNum = sqNum - (sqNum * sqNum - num) / (2 * sqNum);
}

console.log(sqNum);