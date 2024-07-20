const main=document.querySelector("#Weatherreport");
const search=document.querySelector("#search");
const form=document.querySelector("form");
const API_KEY='011f44d90229ff7b472d49e5580d1833';



const getweather=async(city)=>{
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
 const response= await  fetch(url);
 const data= await response.json();
 console.log(data);
 return data;
}
form.addEventListener("submit", async function(event){
        event.preventDefault();
         const w=  await getweather(search.value);
         main.innerHTML=" ";
         const item=document.createElement("div");
         item.classList.add("content");
         item.style.display="flex";
            if(w.cod =="404"){
               item.innerHTML=`<h2>City not found</h2>`
         // main.appendChild(item)

            }
            else{
          item.innerHTML=`<div><img src="https://openweathermap.org/img/wn/${w.weather[0].icon}@2x.png" alt="report"></div>
       <div id="temperature">
        <h1>${w.main.temp}</h1>
        <h3>${w.weather[0].main} </h3>
        </div>
          `;
          }
          main.appendChild(item)
         }
    );