/*
   promise:passing a function with 2 args resolve and reject

           once promise is received,executes
           .then(success msg)
           .catch(failure err)
*/




let employees=[
         {id:101,name:"Rahul",sal:45000},
         {id:102,name:"Sonia",sal:55000}
]
let createEmployee = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let db_flag = true;
            db_flag===true? resolve('Data Inserted'):reject("Failed")
        },4000)
    })
}
let displayEmployee=()=>{
}
createEmployee({id:103,name:"Priyanka",sal:65000})