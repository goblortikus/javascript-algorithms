// quicksort  recursive
// monir mamoun

a = [1,4,5,66,2,1,3,5,3,6];

quicksort = function (a) {
	if (a.length <= 1) return a;

	var pivot = a[0];
	var less = [];
	var more = [];

	a.slice(1).forEach(function (d) {
		if (d < pivot) {
			less.push(d);
		} else {
			more.push(d);
		}
	});

	return  quicksort(less).concat([pivot]).concat(quicksort(more)) ;
}
console.log('quicksort on: ', a);
console.log('result: ',quicksort(a));