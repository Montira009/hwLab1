console.log('Calculate Area');
var Obj={};
Obj.cirArea=function(radian){
	  var PI = 3.14
		return PI*radian*radian
}

Obj.squreArea=function(base,high){
	  var x = 1/2;
		return x*base*high
}

exports.result=Obj;
