a = [1,2,3,4,5,6,7,8];

rotArray = function (a,x) {

	//if (typeof a != 'array') return -1;

	if (a.length == 0) return;
	

	return [a.pop()].concat(rotArray(a,x-1));

}

rotArray2 = function (a,x) {
	while (x--) {
		a = [a.pop()].concat(a);
	}

	return a;
}

rotArray3 = function (a,x) {
	return x-- ? rotArray3([a.pop()].concat(a),x) : a;
}

console.log(rotArray3(a,3));