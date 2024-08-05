///writwe a program js code snippet to display employee data in the form ofHTML table?
let employees=[
    {id:101,name:"Rahul",sal:55000},
    {id:102,name:"Rahul",sal:75000},
    {id:103,name:"priya",sal:55000},
    {id:104,name:"Modi",sal:65000},
]

function getEmployees(){
    let rows=""
    for(emp of employees){
        rows=rows + `<tr> 
                      <td>${emp.id}</td>
                      <td>${emp.name}</td>
                      <td>${emp.sal}</td>
                      </tr>`

    }
function getEmployees(){

    let rows=""
    let i=0;
    while(i<=employees.length-1){
        rows=rows +` <tr>
                      <td>{employees[i].id}</td>
                      <td>{employees[i].name}</td>
                     </tr>`
        i++
    }


    document.getElementsByTagName('tbody')[0].innerHTML=rows
}





