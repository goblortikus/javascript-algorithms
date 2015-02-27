// mergesort - 
// by Monir Mamoun

a = [5,66,3,-3,-22,-99,3,555,5,-22,-333,-555,2,33,44,66,77,111,222,333];

mergesort = function (a) {

	if (a.length == 0 || a.length == 1) return a;

	// convert a to array of arrays
	aOfA = [];

	a.forEach(function(d) {
		aOfA.push([d]);
	})

	merge(aOfA);


}

merge = function (a) {
	// a is array of arrays
	// merge pairs into new members of next array
	if (a.length == 0 || a.length == 1) return a;

	newA = [];

	while (a.length > 1) {

		mergeA = a.shift();
		mergeB = a.shift();

		while (mergeA.length || mergeB.length) {
			comp = mergeA.shift();



		}
	}




}