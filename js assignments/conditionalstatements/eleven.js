//write a program to print the given 3 numbers in ascending orders?
function sortThreeNumber(a,b,c) {
    let numbers=[a,b,c];
    numbers.sort(function(x,y){
        return x-y;
    });
      console.log("Numbers in ascending order:" + numbers.join(","));
    
}

sortThreeNumber(25, 7, 14);