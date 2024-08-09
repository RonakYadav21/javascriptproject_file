const question=[{
    "que":"what is the full form of html ",
    "a":"hypertext markup language",
    'b':"hyper",
    'c':"hypertollmakelanguage",
    'd':"none of the above",
    'correct_answer':"a",
},
{
    "que":"which of the following is the markup language ",
    "a":"html",
    'b':"javascript",
    'c':"css",
    'd':"java",
    'correct_answer':"a",
},
{
    "que":"In which year javascript is launched ",
    "a":"1996",
    'b':"1995",
    'c':"1994",
    'd':"none of the above",
    'correct_answer':"b",
}]
let index=0
const quebox=document.getElementById("quebox")
const frist=document.getElementById("f")
const sec=document.getElementById("s")
const third=document.getElementById("t")
const fourth=document.getElementById("four")

const loadque=()=>{
let data=question[index]
quebox.innerText=`${index+1}) ${data.que}`
frist.innerText=data.a
sec.innerText=data.b
third.innerText=data.c
fourth.innerText=data.d
}
let right=0;
let wrong=0;
let total=question.length;

const quizans=()=>{
    let data=question[index].correct_answer
    let answer=getanswer() 
    if(answer==data){
        right++;
    }
    
    else{
        wrong++;
    }
    index++;
    if(index==total){
     return endquiz();
    }
    reset();   

    loadque();
return 
}

const getanswer=()=>{
    let correctans;
    let answers=document.getElementsByName("ans")
    for( let i of answers){
       if(i.checked){
        correctans=i.value;
        break;
       }
    }
    return correctans;
}
const reset=()=>{
    let answers=document.getElementsByName("ans");
    for( let i of answers){
        i.checked=false;
    }
}

const endquiz=()=>{
    document.getElementById("container").innerHTML=`<h3> Thank you for playing the game </h3>
    <p style="padding:10px" >Total Questions : ${total}</p>
    <p style="padding:10px"> Total Correct Answer : ${right}</p>
    <p style="padding:10px"> Total Wrong Answer : ${wrong}</p>
    `
}
loadque()

