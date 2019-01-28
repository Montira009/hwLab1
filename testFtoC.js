var Value = require('./FtoC.js');
console.log("Please Enter Value of Fahrenheit")
let stdin = process.openStdin()
stdin.addListener("data", (d) => {
 console.log("You input F="+d+"C =" +Value(d))
 stdin.end()
});
