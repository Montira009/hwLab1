function celsius(F){
	C = (F - 32) * 5/9;
	return C
}

function faren(C){
	F = (C*(9/5))+32;
	return F
}
module.exports = celsius
//module.exports = faren
