let users=['rahul','sonia','priya']
let i=0;
while(i<users.length){
    console.log(users[i]);
    i++;
}


let employees=[
    {id:101,name:"rahul",sal:34000},
    {id:102,name:"sonia",sal:44000},
    {id:103,name:"priyanka",sal:54000}
]
for(emp of employees)  {
    console.log(`emp name: ${emp.name} and emp id: ${emp.id} emp salary: ${emp.sal}`)
}


//for(emp of employees)  {
  //  console.log(emp.name,emp.id,emp.sal)
}
