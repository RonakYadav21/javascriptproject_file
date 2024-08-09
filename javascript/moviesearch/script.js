//const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
//const IMGPATH = "https://image.tmdb.org/t/p/w1280";
//const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&query=";

//const moviebox=document.getElementById("movie-box");
//const getmovie = async (api) =>{
   // console.log('Fetching data from API...');
  //  const response = await fetch(api);
  ////  const data = await response.json();
   // console.log('Data fetched successfully:', data);
   // showmovie(data.results);
//};

//const showmovie=(data)=>{
  //moviebox.innerHTML=" ";
    //data.forEach((item)=>{
      //  const box=document.createElement("div");
        //box.classList.add("item");
        //box.innerHTML=`<img src="${IMGPATH+item.poster_path}" alt=" movie image">
        //<div class="box">
        //<div class="title"><h3>${item.title}</h3><span>${item.vote_average}</span></div>
        //<h4>Overview :</h4>
       // <p>${item.overview}</p>
       // </div>
       // `
      //  moviebox.appendChild(box);
      //});
    
  //};
  
 // const search=document.getElementById("Searchbar");
 // search.addEventListener("keyup",
 // function(event){
  //  console.log(event.target.value);
   // const searchTerm = event.target.value.trim();
  //  if (searchTerm !== "") {
   //     getmovie(SEARCHAPI + searchTerm);
   // } else {
      //  getmovie(APIURL);
   // }

 // }
//);
  
 // getmovie(APIURL);

 const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&query=";

const moviebox = document.getElementById("movie-box");

const getmovie = async (api) => {
    try {
        console.log('Fetching data from API...');
        const response = await fetch(api);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Data fetched successfully:', data);
        showmovie(data.results);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const showmovie = (data) => {
    moviebox.innerHTML = "";
    data.forEach((item) => {
        const box = document.createElement("div");
        box.classList.add("item");
        box.innerHTML = `
            <img src="${IMGPATH + item.poster_path}" alt="movie image">
            <div class="box">
                <div class="title"><h3>${item.title}</h3><span>${item.vote_average}</span></div>
                <h4>Overview :</h4>
                <p>${item.overview}</p>
            </div>`;
        moviebox.appendChild(box);
    });
};

const search = document.getElementById("Searchbar");
search.addEventListener("keyup", function (event) {
    console.log(event.target.value);
    const searchTerm = event.target.value.trim();
    if (searchTerm !== "") {
        getmovie(SEARCHAPI + searchTerm);
    } else {
        getmovie(APIURL);
    }
});

// Initial load of popular movies
getmovie(APIURL);
