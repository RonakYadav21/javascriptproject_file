const url = 'https://icanhazdadjoke.com/';


let btn=document.querySelector(".btn");
let result=document.querySelector(".result");
btn.addEventListener('click',function(){

fetchdata();

});
const fetchdata= async()=>{
    try{

        let response=await fetch(url,{
            headers: {   //An HTTP header is a field in an HTTP request or response that contains extra information about the request or response. 
                            // These headers are key-value pairs that are sent between a web browser and a website when the website is visited. They are case-insensitive and start at the beginning of a line, followed by a colon (:) and a value.
              Accept: 'application/json',
               'User-Agent': 'learning',
           },
     });
        if(!response.ok){
            throw new Error("error");
        }

        let data= await response.json();
        console.log(data.joke);
        result.innerHTML=data.joke;
    }
    catch(e){
        result.innerHTML="there was an error..."
    }
};
fetchdata();