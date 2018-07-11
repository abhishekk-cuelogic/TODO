function signin(){
var email=document.getElementById('email');
var pwd=document.getElementById('pwd');




var users=JSON.parse(localStorage.getItem('users'));

  for(var i=0;i<users.length;i++)
  {
      if((email.value == users[i].EMAIL) && (pwd.value == users[i].PWD))
      {
          localStorage.setItem("id",i);
          window.location.href="list.html";
          alert("Login Successful!!!");
          event.preventDefault();
          break;
      }
  }

  if(i == users.length)
  {
      alert("Invalid Username or Password");
  } 
}

