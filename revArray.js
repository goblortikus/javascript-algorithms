a = [1,4,5,66,2,1,3,5,3,6];

revA = function (a) {
	for (x = 0; x < a.length/2; x++) {
		temp = a[x];
		a[x] = a[a.length-1-x];
		a[a.length-1-x] = temp;
	}

	return a;
}

revRecurse = function (a) {
	return a.length ? [a.pop()].concat(revRecurse(a)) : [];
}

console.log(revRecurse(a));

