import get from './getelement.js';
import removeactive from './removeactive.js';
const img=get('.user-img');
const value=get('.user-value');
const title=get('.user-title');
const btns = [...document.querySelectorAll('.icon')];


const displayuser=(person)=>{
    img.src=person.image;
    title.textContent="My name is";
    value.textContent=person.name;
    removeactive(btns);
    btns[0].classList.remove('active');
    btns.forEach(function(btn){
        btn.addEventListener('click',function(){
            let label=btn.dataset.label;
            title.textContent=`My ${label} is`;
            value.textContent=person[label];
            removeactive(btns);
            btn.classList.add('active');
      
        })
    })
}
export default displayuser;