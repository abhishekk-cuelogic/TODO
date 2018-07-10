
function signin(){

var email=document.getElementById('email');
var pwd=document.getElementById('pwd');



var users=JSON.parse(localStorage.getItem('users'));

  for(var i=0;i<users.length;i++)
  {
      if((email.value == users[i].EMAIL) && (pwd.value == users[i].PWD))
      {
          alert("Login Successful!!!");
          break;
      }
  }

  if(i == users.length)
  {
      alert("Invalid Username or Password");
  }
   
   
    
}