    var email= document.getElementById('email');
    var fname= document.getElementById('fname');
    var lname= document.getElementById('lname');
    var address= document.getElementById('address');
    var pwd= document.getElementById('pwd');
    var gender=document.getElementById('gender');



function validate(){

    if((email.value == '') || (fname.value == '') || (lname.value == '') || (address.value == '') || (pwd.value == '') ){
        if(email.value == '')
        {
          var para=document.createElement("div");
          var node=document.createTextNode("*plese enter email");
          para.setAttribute("style","color:red;text-align:right;")
          para.appendChild(node);
          var div=document.getElementsByClassName("form-group");
          div[0].appendChild(para);
          event.preventDefault()
        }

        if(fname.value == '')
        {
          var para=document.createElement("div");
          var node=document.createTextNode("*plese enter first name");
          para.setAttribute("style","color:red;text-align:right;")
          para.appendChild(node);
          var div=document.getElementsByClassName("form-group");
          div[1].appendChild(para);
          event.preventDefault()
        }

        if(lname.value == '')
        {
          var para=document.createElement("div");
          var node=document.createTextNode("*plese enter last name");
          para.setAttribute("style","color:red;text-align:right;")
          para.appendChild(node);
          var div=document.getElementsByClassName("form-group");
          div[2].appendChild(para);
          event.preventDefault()
        }

        if(address.value == '')
        {
          var para=document.createElement("div");
          var node=document.createTextNode("*plese enter address");
          para.setAttribute("style","color:red;text-align:right;")
          para.appendChild(node);
          var div=document.getElementsByClassName("form-group");
          div[4].appendChild(para);
          event.preventDefault()
        }

        if(pwd.value == '')
        {
          var para=document.createElement("div");
          var node=document.createTextNode("*plese enter password");
          para.setAttribute("style","color:red;text-align:right;")
          para.appendChild(node);
          var div=document.getElementsByClassName("form-group");
          div[5].appendChild(para);
          event.preventDefault()
        }

        return false;
    }
    else{
      return true;
    }

}



function store(){
  var users=[];

  var obj={
    EMAIL:email.value,
    FNAME:fname.value,
    LNAME:lname.value,
    GENDER:gender.value,
    ADDRESS:address.value,
    PWD:pwd.value,
  }
  
  val=JSON.parse(localStorage.getItem("users"));
  if(val == null)
  {
    users.push(obj);
  }
  else
  {
    users=val;
    users.push(obj);
  }
 
  localStorage.setItem("users",JSON.stringify(users));
  alert("Registration Successful!!!");
  

}

document.getElementById('btnreg').addEventListener('click',function(){
  var result=validate();

  if(result == true)
  {
    store();
  }

},false);

