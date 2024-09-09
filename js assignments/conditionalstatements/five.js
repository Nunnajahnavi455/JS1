//write a program to check if a number is 3-digit number or not?
function isThreeDigitNumber(num) {
    if(typeof num === 'number' && num >=100 && num <= 999){
        return true;
    }else{
        return false;
    }
    
}
console.log(isThreeDigitNumber(123));
console.log(isThreeDigitNumber(12));
console.log(isThreeDigitNumber(100));
console.log(isThreeDigitNumber(1));