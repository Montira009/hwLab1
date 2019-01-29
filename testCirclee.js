var Area = require('./Ciecle.js');
console.log("Please Enter Radian :")
let stdin = process.openStdin()
stdin.addListener("data", (d) => {
 console.log("Your Circle Area = "+Area.cirArea(d))
 stdin.end()
});
