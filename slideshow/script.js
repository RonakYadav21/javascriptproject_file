const slide=document.querySelectorAll(".slide");
var count=0;
slide.forEach((slide,index) => {
    slide.style.top=`${index*100}%`
});
const slideshow=()=>{
    slide.forEach((slide)=>{
        slide.style.transform=`translateY(-${count*100}%)`
    }
    )
}

const gonext=()=>{
    if(count<slide.length-1){
        count++;
        slideshow();
    }
}
const goprev=()=>{
    if(count>0){
        count--;
        slideshow();
   }
}