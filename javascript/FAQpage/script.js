document.addEventListener('DOMContentLoaded',function(){

    let question=document.querySelectorAll(".faq-question");
    question.forEach(que=>{
       que.addEventListener('click',()=>{
       // const answer=document.querySelector('.faq-answer'); //will only select the first element with the class faq-answer
       const answer = que.nextElementSibling;
        if(answer.style.display==="block"){
            answer.style.display="none";
        }
        else{
            answer.style.display="block";
        }
       }) 
    })
})