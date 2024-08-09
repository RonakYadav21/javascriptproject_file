const upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lower="abcdefghijklmnopqrstuvwxyz"
const number="1234567890121314"
const symbol="~@#$^&*%()-!/\|"

const upperinput=document.getElementById("uppercase");
const lowerinput=document.getElementById("lowercase");
const numberinput=document.getElementById("number");
const symbolinput=document.getElementById("Symbol");
const  charlength=document.getElementById("len");


const getrandom=(dataset)=>{
return dataset[Math.floor(Math.random()*dataset.length)]

}
const generatepassword=(password="")=>{
     if(upperinput.checked){
        password+=getrandom(upper)
     }

     if(lowerinput.checked){
        password+=getrandom(lower)
     }
     if(numberinput.checked){
        password+=getrandom(number)
     }
     if(symbolinput.checked){
         password+=getrandom(symbol)
    
     }
     if(password.length<charlength.value){
       return  generatepassword(password)
     }

     document.getElementById("pass").innerHTML= truncatestring(password,charlength.value)

     

}
document.getElementById("btn").addEventListener("click",function(){
    generatepassword();
})
function truncatestring(str,num){
    if (str.length>num){
        let substr=str.substring(0,num);
        return substr;
    }
    else{
        return str;
    }
}
