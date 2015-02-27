//rotate array

ar = [1,2,3,4,5,6,7,8,9];

rotate = function (ar, x) {

	if (x==0) return ar;

	return rotate([ar.pop()].concat(ar),x-1);

}

console.log(rotate(ar,3));

