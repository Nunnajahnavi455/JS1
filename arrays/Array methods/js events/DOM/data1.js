function changeColor1(){
    document.getElementById('btn1').style.backgroundColor="green"
}
function changeColor2(){
    document.getElementsByTagName('button')[1].style.backgroundColor="yellow"
}
function changeColor3(){
    document.querySelector('.abc').style.backgroundColor="blue"
}
function changeColor4(){
    document.getElementById('events').style.backgroundColor="gray"
}
function changeColor5(){
    document.getElementById("Rahul").style.backgroundColor="orange"
}
function changeCase(){
    let userName=document.getElementById("blur").value;
    alert(userName)
    document.getElementById("blur").value=userName.toUpperCase();

}