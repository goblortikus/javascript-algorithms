// print array

myAr = [1,4,66,77,88,99,000,777];

printArray = function (myAr) {
	if (!myAr.length) return;
	chopMyAr = myAr.pop();
	console.log(chopMyAr);
	return printArray(chopMyAr);
	
}

printArray(myAr);