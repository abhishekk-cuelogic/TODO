var id=parseInt(localStorage.getItem('id'));
var user=JSON.parse(localStorage.getItem('users'));
var email=document.getElementById('email');
var fname=document.getElementById('fname');
var lname=document.getElementById('lname');
var gender= document.getElementById('gender');
var address=document.getElementById('address');
var pwd=document.getElementById('pwd');

window.onload=function(){    
    email.value=user[id].EMAIL;
    fname.value=user[id].FNAME;
    lname.value=user[id].LNAME;
    gender.value=user[id].GENDER;
    address.value=user[id].ADDRESS;
    pwd.value=user[id].PWD;
}

function edit(){
    email.disabled=false;
    fname.disabled=false;
    lname.disabled=false;
    gender.disabled=false;
    address.disabled=false;
    pwd.disabled=false;
    event.preventDefault()
}

function save(){
    email.disabled=true;
    fname.disabled=true;
    lname.disabled=true;
    gender.disabled=true;
    address.disabled=true;
    pwd.disabled=true;
}