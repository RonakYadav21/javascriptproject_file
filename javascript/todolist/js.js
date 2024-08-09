const item=document.getElementById("item");
const todolist=document.getElementById("todolist")

item.addEventListener("keyup",
function(event){
       if(event.key=="Enter"){
              additem(item.value);
              item.value="";
       }
}) 
const additem=(text)=>{
              if(text.trim() !==""){
                     let content=document.createElement("li")
                     content.innerHTML=`<li id="listitem">${text}  <i class="fa fa-times"></i> </li> `
                     todolist.appendChild(content);
                     content.addEventListener("click",function(){
                            content.classList.toggle("done");
                     })

                     const removeitem=content.querySelector(".fa-times");
                     removeitem.addEventListener("click",function(event){
                            event.stopPropagation();
                            todolist.removeChild(content);
                     })

                     }

 }

