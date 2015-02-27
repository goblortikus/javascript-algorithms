ar = [1,2,3,4,5,6,7,8,9];

function rotate (ar,x) {

	return ar.slice(ar.length-1-x,ar.length).concat(ar.slice(0,x));

}

console.log(rotate(ar,3));
