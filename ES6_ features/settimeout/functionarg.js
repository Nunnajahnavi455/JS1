let goToGoa=(success,failure)=>{
    let acc_Bal=25000;
    if(acc_Bal>=10000){
          success('Go and Enjoy')
    }
    else{
        failure("Go To Pg! carry laptop! sit in prostack!")
    }
}
goToGoa((msg)=>{console.log(msg)},err=>{console.log(err)})