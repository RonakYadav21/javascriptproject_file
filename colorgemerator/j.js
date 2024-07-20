const getcolor=()=>{
   const codenum=Math.floor(Math.random()*16777125);
   const randomcode="#"+codenum.toString(16);
   document.getElementById("code").innerHTML=randomcode;
   document.getElementById("container").style.backgroundColor=randomcode;
   document.body.style.backgroundColor=randomcode;
}

document.getElementById("btn").addEventListener("click",getcolor)
//initial background color
getcolor()