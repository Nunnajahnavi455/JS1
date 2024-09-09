//write a program to print the least number in given three numbers?
function printLeastNumber(num1,num2,num3) {
    if(num1 <=num2 && num1 <= num3){
        least = num1;
    }else if(num2 <= num1 && num2 <=num3){
        least=num2;
    }else {
        least=num3;
    }
    console.log(least +"is the least number.");
}

printLeastNumber(10,20,30);
printLeastNumber(1,200,300);
printLeastNumber(100,20,530);