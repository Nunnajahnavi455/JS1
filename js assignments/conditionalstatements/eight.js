//write a program to print the least number in given two numbers?
function printLeastNumber(num1,num2) {
    if (num1 < num2){
        console.log(num1 + "is the least number.");
    }else if(num2 <num1){
        console.log(num2 + "is the least number.");
    }else {
        console.log("Both numbers are equal.");
    }
}
printLeastNumber(10,20);
printLeastNumber(30,15);
printLeastNumber(25,25);