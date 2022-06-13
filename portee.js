var $var12 = 200; // globale
function example() {
var $var12 = 300; // locale
console.log("Inside example() function = "
+ $var12);
}
console.log("Outside example() function = "
+ $var12);
example();