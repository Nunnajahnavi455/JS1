//write a program to print the given three numbers in descending order?
function sortThreeNumbersDescending(a,b,c) {
    let numbers=[a,b,c];
    numbers.sort(function(x,y){
        return y-x;
    });
      console.log("Numbers in descending order:" + numbers.join(","));
    
}

sortThreeNumbersDescending(25, 7, 14);