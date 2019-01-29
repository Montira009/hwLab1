/*var MyGrade = require('./grade.js');
console.log(MyGrade(80));
*/

var MyValue = require('./ftoc.js')
console.log('Please Enter Value of Fahrenheit :')
let stdin = process.openStdin()
stdin.addListener("data", (d) => {
 console.log("Celsius = "+MyValue(d))
 stdin.destroy()
});
