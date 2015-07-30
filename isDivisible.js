function isDivisible(num,divisor) {
    if(num%divisor == 0) {
        return true;
    } 
    else {
        return false;
    }
};
var calc = isDivisible(40,5);
console.log("first result : " + calc);
calc = isDivisible(22,5);
console.log("" + calc);

