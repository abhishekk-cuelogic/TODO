var id=parseInt(localStorage.getItem('id'));
var user=JSON.parse(localStorage.getItem('users'));
var email=document.getElementById('email');
var fname=document.getElementById('fname');
var lname=document.getElementById('lname');
var gender= document.getElementById('gender');
var address=document.getElementById('address');
var pwd=document.getElementById('pwd');
var todo=user[id].TODO;
var img=user[id].IMG
localStorage.setItem("img",img);

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
    document.getElementById('img').disabled=false;
    event.preventDefault()
}

function save(){
    email.disabled=true;
    fname.disabled=true;
    lname.disabled=true;
    gender.disabled=true;
    address.disabled=true;
    pwd.disabled=true;
    event.preventDefault();

    var obj={
        EMAIL:email.value,
        FNAME:fname.value,
        LNAME:lname.value,
        GENDER:gender.value,
        ADDRESS:address.value,
        PWD:pwd.value,
        IMG:localStorage.getItem("img"),
        TODO:todo
      }
      localStorage.removeItem("img");
      user.splice(id,1,obj);
      localStorage.setItem("users",JSON.stringify(user));
      alert("Updated Successfully!!");
}

var input=document.getElementById('img');

input.addEventListener('change',function(e){
  console.log(input.files);
  var reader=new FileReader();
  reader.onload=function()
  {
    var img=new Image();
    img.src=reader.result;
    localStorage.setItem("img",img.src);
  }
  reader.readAsDataURL(input.files[0])
})