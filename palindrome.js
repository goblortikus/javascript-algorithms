var string = 'abcdefggfedcba';

function checkPal(p) {
 console.log(p);
 if (p.length <=1) {console.log ('pal'); return;}
 if (p[0]==p[p.length-1]) { checkPal(p.slice(1,p.length-1)); } else{ console.log('nopal');}
}

checkPal(string);


function c(p) {
 return(p.length<=1?'y':(p[0]==p[p.length-1]?c(p.slice(1,p.length-1)):'n'));
}

console.log(c(string));
