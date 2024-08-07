// function get(){
//     console.log(this)
// }
// get()


// function wish(){
//     console.log('GM')
// }
// wish()

// function wish(){
//     console.log('GA')
// }
// wish()   //here function overriding
//converting the normal function into flat arrow function
var wish=()=>{
    console.log('GM')
}
wish()
var wish=()=>{
    console.log('GA')
}
wish()