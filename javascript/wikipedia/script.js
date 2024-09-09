const url =
  'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=';


resultDom=document.querySelector(".result");
form_result=document.querySelector(".form");
inputsearch=document.querySelector(".input-search")
searchbtn=document.querySelector(".search-btn");
form_result.addEventListener('submit',function(e){
    e.preventDefault();
    let value=inputsearch.value;
    console.log(value);
    if(!value){
resultDom.innerHTML=`<div class="error">Please enter valid search data</div>`
return 
    }

    fetchdata(value);
})

const fetchdata=async(searchvalue)=>{
    resultDom.innerHTML = '<div class="loading"></div>';

    try{

        let response=await fetch(`${url}${searchvalue}`);  //Concatenation: ${url}${searchvalue} uses template literals to concatenate the url and searchvalue variables into a single string. This is similar to traditional string concatenation using the + operator but is often more readable and concise.
        let data=await response.json();
        let results=data.query.search;
        if(results.length<1){
            resultDom.innerHTML =
            '<div class="error">no matching results. Please try again</div>';
          return;    
        } 
        renderresult(results);
    }
    catch(error){
        resultDom.innerHtml=`<div class="error">ther was an error </div>`
    }
}
 const renderresult=(list)=>{
    const cardlist=list.map(function(item){//The map method creates a new array by applying a function to each element of the list array. In this case, it processes each item to generate HTML content.
     const {title,snippet,pageid}=item;//This line uses destructuring to extract title, snippet, and pageid from each item. It assumes that each item in the list array is an object with these properties.
     return `<a href=http://en.wikipedia.org/?curid=${pageid} target="_blank">
     <h4>${title}</h4>
     <p>
       ${snippet}
     </p>
   </a>`;
})
.join(" ");
resultDom.innerHTML=`<div class="articel">${cardlist}</div>`;
 }


//.map(): Transforms each item in the list into an HTML string.
