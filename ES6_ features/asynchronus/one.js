//synchronous:-blocking some other's request
//             Executing the request one after another
//Asynchronous:- Executing the request symultaneously


setTimeout(()=>{console.log('R1')},10000)
setTimeout(()=>{console.log('R2')},1000)
setTimeout(()=>{console.log('R3')},3000)
setTimeout(()=>{console.log('R4')},2000)
