//write a program to print the greatest number in given two numbers?
function printGreatestNumber(num1,num2) {
    if (num1 > num2){
        console.log(num1 + "is the greatest number.");
    }else if(num2 >num1){
        console.log(num2 + "is the greatest number.");
    }else {
        console.log("Both numbers are equal.");
    }
}
printGreatestNumber(10,20);
printGreatestNumber(30,15);
printGreatestNumber(25,25);