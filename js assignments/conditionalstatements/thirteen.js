//javascript program to find largest of three numbers?
function findLargestNumber(a,b,c) {
    let largest;
    if(a >=b && a>=c){
        largest=a;
    }else if(b >=a && b>=c){
        largest=b;
    }else{
        largest=c;
    }
    console.log("The largest number is:" +largest);
    
}
findLargestNumber(10,25,30);