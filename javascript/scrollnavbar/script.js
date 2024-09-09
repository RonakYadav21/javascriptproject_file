const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
// linksContainer.classList.toggle("show-links"); 
 //defautl height of link container is set to be 0  when the nav toggle appers

const linksHeight = links.getBoundingClientRect().height;
const containerHeight = linksContainer.getBoundingClientRect().height;
if (containerHeight === 0) {
  linksContainer.style.height = `${linksHeight}px`;//finding the dynamic height of the nav bar links so that that much space will be allocated 
} else {
  linksContainer.style.height = 0;
}
});

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
window.addEventListener("scroll",function(){
    const windowheight=window.pageYOffset;
    const navheight=navbar.getBoundingClientRect().height;
  
   if(windowheight>navheight){
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  if (windowheight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
})
//scroll smooth
const scrolllink=document.querySelectorAll(".scroll-link");
scrolllink.forEach(function(link){
    link.addEventListener('click',function(e){
        e.preventDefault()//prevent from default behavoiur  of the links
        const id=e.currentTarget.getAttribute("href").slice(1); // slice return about not #about
     const element =document.getElementById(id);
     //calculate height
     const navHeight=navbar.getBoundingClientRect().height;
     const containerHeight=linksContainer.getBoundingClientRect().height;
     const fixednav=navbar.classList.contains("fixed-nav");


let position =element.offsetTop-navHeight; //offsetTop returns  the top position relative to the parent.
if (!fixednav) {
   position = position - navHeight;
 }
  if (navHeight > 82) {
    position = position + containerHeight;
 }

window.scrollTo({left:0,top:position

});
linksContainer.style.height=0;  //to hide the links when we scroll in case of  nav toggle 
    })
})