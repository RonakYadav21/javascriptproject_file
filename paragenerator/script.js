const text=['In the heart of the ancient forest, where the sunlight barely penetrated through the dense canopy of towering trees, a hidden world thrived in perpetual twilight. The air was thick with the earthy scent of moss and decaying leaves, and the silence was broken only by the occasional rustle of unseen creatures.',
'Ferns and wildflowers carpeted the forest floor their delicate forms illuminated by rare shafts of light. Amongst the gnarled roots and tangled underbrush, an old stone path wound its way deeper into the woods, leading to secrets long forgotten by time. Each step along this path seemed to echo with the whispers of the past, tales of a once-great civilization that had vanished into the embrace of nature',
'On the edge of a bustling city',
'an abandoned warehouse stood as a relic of the past', 
'its walls covered in ivy and graffiti. Inside, shafts of sunlight pierced through broken windows, illuminating the dust particles that danced in the air. The silence was occasionally broken by the distant rumble of trains and the chirping of birds that had made the rafters their home. In one corner, a collection of old machinery lay rusting, remnants of a time when the place hummed with activity. Exploring the forgotten space, one could almost hear the echoes of workers' 

,' In a quaint village nestled between rolling hills and verdant forests, life moved at a gentle pace. The aroma of freshly baked bread wafted through the cobblestone streets every morning, mingling with the scent of blooming flowers from the market stalls',
'In a quaint village nestled between rolling hills and verdant forests, life moved at a gentle pace. The aroma of freshly baked bread wafted through the cobblestone streets every morning, mingling with the scent of blooming flowers from the market stalls',
'Children played games of tag around the old fountain in the square, their laughter a melodic backdrop to the rhythmic clinking of the blacksmiths hammer. As the sun dipped below the horizon, villagers gathered around a large bonfir sharing stories passed down through generations'];

const item=document.querySelector("#generate");
const para=document.querySelector("#para");
const generatePara=()=>{
     if(isNaN(item.value) || item.value<0 || item.value>9){
        const randomindex=Math.floor(Math.random()*text.length)
        para.innerHTML=`<div class="Paragraph"><p>${text[randomindex]}</p></div>`
        
     }
     else{
        const data=text.slice(0,item.value);
        const paragraph=data.map((d)=>{
            return `<div class="Paragraph"><p>${d} </p></div>`;
        })
        para.innerHTML=paragraph.join(" ");
     }
    }
