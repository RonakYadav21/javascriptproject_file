//document.querySelectorAll('.number') returns a NodeList, which is an array-like object but not a true array. The spread syntax [...nodeList] converts this NodeList into a true array.
// This is useful because arrays come with a full set of array methods like .map(), .filter(), and .forEach(), which are not available on a NodeList.


//response.ok: This is a property of the Response object in the Fetch API. It is a Boolean that indicates whether the HTTP response status code is in the range of 200–299, which signifies a successful response.




const items =[...document.querySelectorAll(".number")];

const updateCount=(e)=>{
    const value = parseInt(e.dataset.value);
    let increse=Math.ceil(value/1000);
    console.log(increse);
    let initialvalue=0;
    const incresevalue=setInterval(()=>{
        initialvalue+=increse;
       if(initialvalue>value){
        e.textContent = `${value}+`;
          clearInterval(incresevalue);
          return;
       }  
       e.textContent=`${initialvalue}+`;
    },1);  
};
items.forEach((item) => {
  updateCount(item);
});