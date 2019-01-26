console.log('Multiplication Table');
var Obj={};
Obj.Add=function(valueX){
	for (var i = 1; i <= 12; i++){
		console.log(i+valueX);
	}
}
Obj.Sub=function(valueX){
	for (var i = 1; i <= 12; i++){
		console.log(i-valueX);
	}
}
Obj.Mul=function(valueX){
	for (var i = 1; i <= 12; i++){
		console.log(i*valueX);
	}
}
exports.Table=Obj;