
import sublinks from './data.js';

const toggleBtn = document.querySelector('.toggle-btn');
const closeBtn = document.querySelector('.close-btn');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const sidebar = document.querySelector('.sidebar-links');
const linkBtns = [...document.querySelectorAll('.link-btn')];
const submenu = document.querySelector('.submenu');
const hero = document.querySelector('.hero');
const nav = document.querySelector('.nav');
// hide/show sideabar
toggleBtn.addEventListener('click', () => {
  sidebarWrapper.classList.add('show');
  console.log("show");
});
closeBtn.addEventListener('click', () => {
  sidebarWrapper.classList.remove('show');
  console.log("hide");
});

// set sidebar
sidebar.innerHTML = sublinks//The map function is used to iterate over each item in the sublinks array
  .map((item) => { //each item, it returns a string of HTML.
    const { links, page } = item;  //extract links and page properties from the current item object.
    //article :This is the HTML structure being created for each item in the sublinks array
    return `<article >  
<h4>${page}</h4>
<div class="sidebar-sublinks">
${links
  .map((link) => {
    return `<a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>`;
  })
  //join('') is used to concatenate the array of HTML strings into a single string without any separators
  .join('')}
</div>
</article>`;
  })
  .join('');//join('') is used to concatenate all the generated <article> blocks into a single string of HTML, without any separators

  linkBtns.forEach((btn)=>{
    btn.addEventListener('click',function(e){
       const text=e.currentTarget.textContent;
    const tempBtn = e.currentTarget.getBoundingClientRect();
       const center=(tempBtn.left+tempBtn.right)/2;
        const bottom = tempBtn.bottom-3;
       const tempPage= sublinks.find((item)=>item.page==text);
         if(tempPage){
             const {page,links}=tempPage;
             submenu.classList.add("show");
              submenu.style.left=`${center}px`;
              submenu.style.top=`${bottom}`;
              let  columns="col-2";
              if(links.length==3){
                columns="col-3";
              }
              if(links.length >3){
                  columns="col-4";
                }
              
           submenu.innerHTML=`<section>
           <h4>${page}</h4>
           <div class="submenu-center ${columns}">
           ${links.map((link)=>{
             return `<a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>`;
            })
            .join(" ")
          }
            </div>
            </section>`
          }
       });

    });

    nav.addEventListener('mouseover',function(e){
     if(!e.currentTarget.classList.contains("link-btn")){
      submenu.classList.remove("show");
     }
    })


    hero.addEventListener('mouseover', function (e) {
     submenu.classList.remove('show');
    });