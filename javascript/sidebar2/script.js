let body=document.querySelector("body");
let toggle_switch=document.getElementById("switch");
let toggle=document.getElementById("toggle");
let sidebar=document.getElementById("sidebar");
//let darkmode=false;
toggle_switch.addEventListener('click',function(){
  //  if(darkmode==false){
    body.classList.toggle("dark");
      //  darkmode=true;
       // document.body.style.backgroundColor="black";
      //  sidebar.style.backgroundColor="black";

});
toggle.addEventListener('click',()=>{
    sidebar.classList.toggle('close');
})
