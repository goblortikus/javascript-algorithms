dS = 'The quick brown fox jumps over the lazy yellow dog.';

dSA = [];

dSA = dS.split(' ') ;

dSN = '';

dSA.forEach (function (word,index) {
	dSN += word + (index + 1) + (index == dSA.length - 1 ? '': ' ');
});

console.log (dSN);