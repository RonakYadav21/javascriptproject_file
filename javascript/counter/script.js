let counter=document.getElementById("counter");
let dbutton=document.getElementById("dec");
let incbutton=document.getElementById("inc");
let reset=document.getElementById("reset");
let count=0;
incbutton.addEventListener('click',function(){
    if(count>=0){

        count=count+1;
        counter.innerHTML=count;
    }
   // console.log(count)
});
dbutton.addEventListener('click',function(){
if(count>0){

    count=count-1;
    counter.innerHTML=count;
    //console.log(count);
}
else{
    count=0;
    counter.innerHTML=count;
}

});

reset.addEventListener('click',function(){
count=0;
counter.innerHTML=count;
});
