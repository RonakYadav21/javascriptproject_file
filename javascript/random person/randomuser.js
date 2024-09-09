const URL = 'https://randomuser.me/api/';
const getuser= async ()=>{

        let response= await fetch(URL);
        let data= await response.json();
       // console.log("person.name");
  // console.log(data);
   const person=data.results[0];
   const {email,phone}=person;
   const {large:image}=person.picture;
   const {password}=person.login;
   const {age}=person.dob;
   const{street:{number, name},}=person.location;
   const { first, last } = person.name;
 //  console.log(`${first}${last}`);
   return {   
      age,phone,email,password,image,street:`${number}${name}`,name:`${first}${last}`
      }



}

 export default getuser;