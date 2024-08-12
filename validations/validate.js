function validate_user(){
    //alert('test case 123')
let userName=document.getElementById('uname').value;
let password=document.getElementById('upassword').value;
 if(userName ===''){
 document.getElementById('username').innerHTML="please enter the username"
 }

if(password ===''){
    document.getElementById('password').innerHTML="please enter the password"
}
console.log("name: "+userName+" password: "+password)
return false;
}