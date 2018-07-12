window.onload=function(){
    var id=parseInt(localStorage.getItem("id"));
    var user=JSON.parse(localStorage.getItem("users"));
    document.getElementById('name').innerHTML=user[id].FNAME+" "+user[id].LNAME;
    display(id,user);
}

function addList()
{
    var date=document.getElementById('date');
    var note=document.getElementById('note');
    var check=document.getElementById('catagory');
    var public=document.getElementById('pub');
    var remdate=document.getElementById('remdate');

    if((note.value == '') || (date.value == '') || (remdate.value == ''))
    {
        alert("plese enter all info ");
        return;
    }

    var div=document.createElement("div");
    div.classList.add("col-lg-1","well","text-center","head");
    var h4=document.createElement("input");
    h4.type="checkbox";
    div.appendChild(h4);

    var d=document.getElementById('list');
    d.appendChild(div);

    var div=document.createElement("div");
    div.classList.add("col-lg-2","well","text-center","head");
    var h4=document.createElement("h4");
    var text=document.createTextNode(date.value);
    h4.appendChild(text);
    div.appendChild(h4);

    var d=document.getElementById('list');
    d.appendChild(div);

    var div=document.createElement("div");
    div.classList.add("col-lg-2","well","text-center","head");
    var h4=document.createElement("h4");
    var text=document.createTextNode(note.value);
    h4.appendChild(text);
    div.appendChild(h4);

    d.appendChild(div);

    var div=document.createElement("div");
    div.classList.add("col-lg-2","well","text-center","head");
    var h4=document.createElement("h4");
    var text=document.createTextNode(check.value);
    h4.appendChild(text);
    div.appendChild(h4);

    d.appendChild(div);

    var div=document.createElement("div");
    div.classList.add("col-lg-2","well","text-center","head");
    var h4=document.createElement("h4");
    if(flag==true){
        var text=document.createTextNode(remdate.value);
    }
    else{
        var text=document.createTextNode("No Remider");
    }
    
    h4.appendChild(text);
    div.appendChild(h4);

    d.appendChild(div);

    var div=document.createElement("div");
    div.classList.add("col-lg-2","well","text-center","head");
    var h4=document.createElement("h4");
    if(pub.checked){
        var text=document.createTextNode("Yes");
    }
    else
    {
        var text=document.createTextNode("NO");
    }
   
    h4.appendChild(text);
    div.appendChild(h4);

    d.appendChild(div);

   
    var div=document.createElement("div");
    div.classList.add("col-lg-1","well","head");
    var but=document.createElement("button");
    but.classList.add("btn","btn-primary","btn-sm");
    var text=document.createTextNode("DELETE");
    but.appendChild(text);
    div.appendChild(but);

    d.appendChild(div);

    store(date.value,note.value,check.value,public,remdate.value);
    location.reload();

}

var flag=false;
function setReminder(){
   var check=document.getElementById('rem');
   var cal=document.getElementById('remdate');
   if(check.checked){
    cal.disabled=false;
    flag=true;
   }
   else{
    cal.disabled=true;
    flag=false;
   }
  
   
}

function store(date,note,check,public,remdate){
    var obj={
        DATE:date,
        NOTE:note,
        CHECK:check,
        PUBLIC:"",
        REMDATE:remdate,
        DELETE:false
    }

    var check=document.getElementById('rem');
    if(!check.checked){
        obj.REMDATE="NO Reminder";
    }

    if(public.checked){
        obj.PUBLIC="YES"
    }
    else{
        obj.PUBLIC="NO";
    }

    var id=parseInt(localStorage.getItem("id"));
    var user=JSON.parse(localStorage.getItem("users"));

    user[id].TODO.push(obj);
    localStorage.setItem("users",JSON.stringify(user));
}


function display(id,user){
    var len=user[id].TODO.length;

    for(var i=0;i<len;i++){
        var date=user[id].TODO[i].DATE;
        var note=user[id].TODO[i].NOTE;
        var check=user[id].TODO[i].CHECK;
        var public=user[id].TODO[i].PUBLIC;
        var reminder=user[id].TODO[i].REMDATE;
        update(date,note,check,public,reminder,i,id,user);
    }
}

function update(date,note,check,public,reminder,i,id,user){
    var div=document.createElement("div");
    div.classList.add("col-lg-1","well","text-center","head",);
    var h4=document.createElement("input");
    h4.type="checkbox";
    h4.addEventListener('click',function(){
        if(user[id].TODO[i].DELETE)
        {
            user[id].TODO[i].DELETE=false;
           // alert('false');
        }
        else{
            user[id].TODO[i].DELETE=true;
           // alert(true);
        }
        localStorage.setItem("users",JSON.stringify(user));
    },false)
    div.appendChild(h4);

    var d=document.getElementById('list');
    d.appendChild(div);

    var div=document.createElement("div");
    div.classList.add("col-lg-2","well","text-center","head");
    var h4=document.createElement("h4");
    var text=document.createTextNode(date);
    h4.appendChild(text);
    div.appendChild(h4);

    var d=document.getElementById('list');
    d.appendChild(div);

    var div=document.createElement("div");
    div.classList.add("col-lg-2","well","text-center","head");
    var h4=document.createElement("h4");
    var text=document.createTextNode(note);
    h4.appendChild(text);
    div.appendChild(h4);

    d.appendChild(div);

    var div=document.createElement("div");
    div.classList.add("col-lg-2","well","text-center","head");
    var h4=document.createElement("h4");
    var text=document.createTextNode(check);
    h4.appendChild(text);
    div.appendChild(h4);

    d.appendChild(div);

    var div=document.createElement("div");
    div.classList.add("col-lg-2","well","text-center","head");
    var h4=document.createElement("h4");
    var text=document.createTextNode(reminder);
    h4.appendChild(text);
    div.appendChild(h4);

    d.appendChild(div);

    var div=document.createElement("div");
    div.classList.add("col-lg-2","well","text-center","head");
    var h4=document.createElement("h4");
    var text=document.createTextNode(public);
    h4.appendChild(text);
    div.appendChild(h4);

    d.appendChild(div);

    var div=document.createElement("div");
    div.classList.add("col-lg-1","well","head");
    var but=document.createElement("button");
    but.classList.add("btn","btn-primary","btn-sm");
    var text=document.createTextNode("DELETE");
    but.appendChild(text);
    div.appendChild(but);
    but.addEventListener('click',function(){
        user[id].TODO.splice(i,1);
        localStorage.setItem("users",JSON.stringify(user));
        location.reload();
    },false);

    d.appendChild(div);
}

function deleteSelected(){
    var id=parseInt(localStorage.getItem("id"));
    var user=JSON.parse(localStorage.getItem("users"));

    var len=user[id].TODO.length;

    //alert(user[id].TODO[i].DELETE);

   for(var i=0;i<len;i++)
    {
        if(user[id].TODO[i].DELETE == true)
        {
            user[id].TODO.splice(i,1);
           
        }
        localStorage.setItem("users",JSON.stringify(user));
        alert("done");
    }
}
    



