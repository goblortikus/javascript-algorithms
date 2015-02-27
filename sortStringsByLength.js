// sort strings by length
// by Monir Mamoun

sA = ['ddd','d','yyyyyyy','kkk','44','99999999999'];

(function sortArrayByStringLength(sA) {
	
	var stringBuckets = [];

	sA.forEach(function(d) {
		if (!stringBuckets[d.length]) {
			stringBuckets[d.length] = [];
		}
		stringBuckets[d.length].push(d);
	})

	stringBuckets.forEach(function(s) {
		s.forEach(function(ss) {
			console.log(ss);
		})
	})

})(sA);

