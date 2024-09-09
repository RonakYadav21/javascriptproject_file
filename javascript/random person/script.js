import get from './getelement.js';
import getuser from './randomuser.js';
import displayuser from './displayuser.js';


const btn = get('.btn');

  // get user from api
  // display user

const showuser=async()=>{
  let  person= await getuser();
  displayuser(person);
}
window.addEventListener('DOMContentLoaded',showuser);
