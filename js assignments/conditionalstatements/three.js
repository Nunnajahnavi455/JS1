//write a program to check if a number is positive or not?
function isPositive(num) {
    if(typeof num === 'number' && num > 0){
        return true;
    }else{
        return false;
    }
}
console.log(isPositive(10));
console.log(isPositive(-5));
console.log(isPositive(0));
console.log(isPositive(3.14));