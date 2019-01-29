/*var MyGrade = require('./grade.js');
console.log(MyGrade(80));
*/

var MyGrade = require('./grade.js')
console.log('Enter Score :')
let stdin = process.openStdin()
stdin.addListener("data", (d) => {
 console.log("You Get = "+MyGrade(d))
 stdin.destroy() // ตั้งแต่ node v10 ใช้ stdin.destroy()
});
