let emp={id:101,name:'Rahul',email:'rahul@gmail.com'}
let details={email:'rahul@ibm.com',sal:45000,loc:'waynad'}

let emp_Details={}
//without spread operator

for(key in emp){
  //  console.log(key, emp[key])
  emp_details[key]=emp[key]
}
for(key in details){
    emp_details1[key]=details[key]
}
console.log(emp_details)