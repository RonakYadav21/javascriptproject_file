const toggle=document.getElementById("toggle-button");
const nav_link=document.getElementById("nav-links");
toggle.addEventListener('click',function(){
    nav_link.classList.toggle('active');
})