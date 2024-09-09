const getelement= (selection)=>{
const element=document.querySelector(selection);
if(element) return element;
throw new error('not found');
}
export default getelement;