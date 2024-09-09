const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");
// edit option
let editElement;
let editFlag = false;
let editID = "";
form.addEventListener('submit',additem);
clearBtn.addEventListener('click',clearitem);
window.addEventListener('load',setupItems);
 function additem(e){
    e.preventDefault();
    let value=grocery.value;
    const id = new Date().getTime().toString();
    if(value!=="" && !editFlag){
        displayalert("item added successfully","success");
        const element=document.createElement("article");
        const attr=document.createAttribute("data-id");
        attr.value=id;
        element.setAttributeNode(attr);
        element.classList.add("grocery-item");
           element.innerHTML=`
                    <p class="item">${value}</p>
                    <div class=btn-container>
                        <button type="button" class="edit-btn"><i class="fas fa-edit"></i></button>
                        <button type="button" class="delete-btn"><i class="fas fa-trash"></i></button> 
                    </div>`;

    const delbtn=element.querySelector(".delete-btn");
    delbtn.addEventListener('click',deleteitem);
    const edit=element.querySelector(".edit-btn");
    edit.addEventListener('click',edititem);

list.appendChild(element);
container.classList.add("show-container");
setbacktodefault();
addTolocalstorage(id,value);


}
else if(value!=="" && editFlag){
        editElement.textContent=value;
        displayalert("item edited ","success");
  setbacktodefault();
  editlocalstorage(editID,value);

}
else{
    displayalert("please enter a value","danger")
}
 }
 function displayalert(text,action){
    alert.textContent = text;

    alert.classList.add(`alert-${action}`);

    setTimeout(function(){
        alert.textContent="";
        alert.classList.remove(`alert-${action}`);
    },1000)
 }


 function clearitem(){
    const items =document.querySelectorAll(".grocery-item");
    items.forEach(function(item){
      if(items.length>0){
        list.removeChild(item);
      }
    });
    container.classList.remove("show-container");
    displayalert('empty','danger')
setbacktodefault();
localStorage.removeItem('list');

 }
 
 function deleteitem(e){
    let element=e.currentTarget.parentElement.parentElement;//b/c we want entire line that grocery-item container 

    const id=element.dataset.id;
    list.removeChild(element);
    if(list.children.length==0){
        container.classList.remove("show-container");
    }
    displayalert("item deleted",'danger');
    setbacktodefault();
    removeFromLocalStorage(id);

}
function edititem(e){
    submitBtn.textContent="Edit";
        let element=e.currentTarget.parentElement.parentElement;//b/c we want entire line that grocery-item container 
        editElement=e.currentTarget.parentElement.previousElementSibling;
        grocery.value=editElement.innerHTML;
        editFlag="true";
        editID = element.dataset.id;
     //   submitBtn.addEventListener('click',function(){
      //      editElement.textContent=grocery.value;

     //   })
}
 function setbacktodefault(){
    grocery.value="";
    editFlag = false;
    editID = "";
    submitBtn.textContent = "submit";  
}

function editlocalstorage(ID,value){
    //things used in local storage
    //setitem
    //getitem
    //removeitem
    //save as string
    //local storage api

    //to add item  : localStorage.setitem("orange",json.stringfy(["item","item2"]))
    //to get item: const oranges=json.parse(localstorage.getitem("orange"))
    //console.log(orange)
    //to remove item: localstorage.removeitem("orange")

    let items=getLocalStorage();
items.map(function(item){
    if(item.id==ID){
        item.value=value
    }
    return item;
})
};
function  removeFromLocalStorage(id){
    let items=getLocalStorage();
    items=items.filter(function(item){
        if(item.id==id){
            return item;
        }
    })
localStorage.setItem("list",JSON.stringify(items));

};

function addTolocalstorage(id,value){
const grocery={id:id,value:value}
console.log(grocery);
let items=getLocalStorage();  // returns an existing list or an empty array 
items.push(grocery);
localStorage.setItem("list",JSON.stringify(items));//This line converts the updated items array back into a JSON string using JSON.stringify(), and then saves it to local storage with the key "list"
}
 function createListItem(id ,value){
    const element=document.createElement("article");
    const attr=document.createAttribute("data-id");
    attr.value=id;
    element.setAttributeNode(attr);
    element.classList.add("grocery-item");
       element.innerHTML=`
                <p class="item">${value}</p>
                <div class=btn-container>
                    <button type="button" class="edit-btn"><i class="fas fa-edit"></i></button>
                    <button type="button" class="delete-btn"><i class="fas fa-trash"></i></button> 
                </div>`;

const delbtn=element.querySelector(".delete-btn");
delbtn.addEventListener('click',deleteitem);
const edit=element.querySelector(".edit-btn");
edit.addEventListener('click',edititem);

list.appendChild(element);

 }

 function getLocalStorage() {
    return localStorage.getItem("list")  //This part of the function attempts to get an item named "list" from the browser's local storage
      ? JSON.parse(localStorage.getItem("list"))  //This converts the JSON string stored in local storage back into a JavaScript object or array.
      : [];
  }
  
 function setupItems() {
    let items =getLocalStorage();
    if (items.length > 0) {
      items.forEach(function (item) {
        createListItem(item.id, item.value);
      });
      container.classList.add("show-container");
    }
  }
  