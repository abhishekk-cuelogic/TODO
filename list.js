window.onload=function(){
    var id=parseInt(localStorage.getItem("id"));
    var user=JSON.parse(localStorage.getItem("users"));
    document.getElementById('name').innerHTML=user[id].FNAME+" "+user[id].LNAME;
    //alert("Welcome"+user[id].FNAME);
}

function addList()
{
    var date=document.getElementById('date');
    var note=document.getElementById('note');

    var div=document.createElement("div");
    div.classList.add("col-lg-2","well","text-center","head");
    var h4=document.createElement("h4");
    var text=document.createTextNode(date.value);
    h4.appendChild(text);
    div.appendChild(h4);

    var d=document.getElementById('list');
    d.appendChild(div);

    var div=document.createElement("div");
    div.classList.add("col-lg-8","well","text-center","head");
    var h4=document.createElement("h4");
    var text=document.createTextNode(note.value);
    h4.appendChild(text);
    div.appendChild(h4);

    d.appendChild(div);

    var div=document.createElement("div");
    div.classList.add("col-lg-2","well","text-center","head");
    var but=document.createElement("button");
    but.classList.add("btn","btn-primary");
    var text=document.createTextNode("DELETE");
    but.appendChild(text);
    div.appendChild(but);

    d.appendChild(div);

    note.value="";

}