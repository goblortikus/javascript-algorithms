//bubblesort
// by Monir Mamoun

a = [1,4,5,66,2,1,3,5,3,6];

bubblesort = function (a) {
	do {
		var swapped = false;

		for (var x = 0; x < a.length-1; x++) {
			if (a[x] > a[x+1]) {
				var b = a[x];
				a[x] = a[x+1];
				a[x+1] = b;
				swapped = true;
			}
		}
	} while (swapped);
	return a;
}

bubblesortRecursive = function (a) {
	var swapped = false;

	for (var x=0; x < a.length-1; x++) {
		if (a[x] > a[x+1]) {
			var b = a[x+1];
			a[x+1] = a[x];
			a[x] = b;
			swapped = true;
		}
	}
	return swapped ? bubblesortRecursive(a) : a;
}

console.log(bubblesortRecursive(a));


