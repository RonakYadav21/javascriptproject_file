const x=document.getElementById("demo");
function getlocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showposition,showerror);
    }
    else{
        x.innerHTML="geolocation is not supported in this browser";
    }
}
function showposition(position){
x.innerHTML="latitude"+position.coords.latitude+"<br> longitude"+position.coords.longitude;
//let latlon = position.coords.latitude + "," + position.coords.longitude;

//let img_url = "https://maps.googleapis.com/maps/api/staticmap?center=
//"+latlon+"&zoom=14&size=400x300&sensor=false&key=YOUR_KEY";

//document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";


}

//The second parameter of the getCurrentPosition() method is used to handle errors. It specifies a function to run if it fails to get the user's location:


function showerror(error){
switch(error.code){
case error.PERMISSION_DENIED:
    x.innerHTML="User denied the request for Geolocation.";
    break;
    case error.POSITION_UNAVAILABLE:
        x.innerHTML = "Location information is unavailable."
        break;
      case error.TIMEOUT:
        x.innerHTML = "The request to get user location timed out."
        break;
      case error.UNKNOWN_ERROR:
        x.innerHTML = "An unknown error occurred."
        break;
  
}
}