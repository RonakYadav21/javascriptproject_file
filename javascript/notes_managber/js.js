let btn=document.getElementById("addbtn");
const main=document.querySelector(".main")
const savenote=()=>{
    const notes=document.querySelectorAll(".notes textarea");
    console.log(notes)
    const data=[];
    notes.forEach((note)=>{
        data.push(note.value)
    }
)

localStorage.setItem("notes",JSON.stringify(data))
}

const addnote=(text=" ")=>{
    const note=document.createElement("div");
    note.classList.add("notes")
    note.innerHTML=`<div class="tool">
    <i class=" save fas fa-save"></i>
    <i class=" trash fas fa-trash"></i>
    </div>
    <textarea>${text}</textarea>
    `
note.querySelector(".trash").addEventListener("click",function(){
   note.remove();
})
note.querySelector(".save").addEventListener("click",function(){
    savenote();
})

 main.appendChild(note);
savenote()
};

btn.addEventListener("click",
              function(){
            addnote();
});


(function (){
const lsnote=JSON.parse(localStorage.getItem("notes"));
lsnote.forEach((lsnote)=>{
    addnote(lsnote)
})
})()