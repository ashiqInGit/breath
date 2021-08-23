




// +++++++++++++++++++++  FIRSRT PAGE ANIMATION

const girlIllustration=document.querySelector('#land-img');
const potLeft=document.querySelector('#pot_1');
const potRight=document.querySelector('#pot_2');
const girlsShadow=document.querySelector('.shadow');


window.addEventListener('scroll',()=>{

    let val=window.scrollY;

    girlIllustration.style.bottom=`${val}px`;
    potRight.style.bottom=`${val*0.7}px`;
    potLeft.style.bottom=`${val*0.7}px`;

    if(val<170){
        girlsShadow.style.width=`${val+160}px`;
    }

})



// PAGE LINKING STUFF


const card1=document.querySelector('.card-1');
const card2=document.querySelector('.card-2');


card1.addEventListener('click',()=>{
    window.location.href="otherHTML/food.html";
})


card2.addEventListener('click',()=>{
    window.location.href="otherHTML/exercise.html";
})



// +++++++++++++++++++++++++++ ANIMATION STUFFS


const cards=document.querySelectorAll('.card');


let options ={
    root: null,
    rootMargin:'200px',
    threshold:1.0
}

let observer= new IntersectionObserver((entries,observe)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){
            entry.target.classList.add('appear');
        }
    })
},options)


cards.forEach((card)=>{
    observer.observe(card);
})


window.addEventListener('scroll',()=>{
    if(window.pageYOffset==0){
        cards.forEach((card)=>{
            card.classList.remove('appear');
        })
    }
})



// SMALLCARD ANIMATIONS++++++++++ 

const smallCrads=document.querySelectorAll('.more-card');


let smallCradOptions={
    root: null,
    rootMargin:'0px',
    threshold:0
}


let smallCardobserver= new IntersectionObserver((entries,observe)=>{


    let speed=500;

    entries.forEach((entry)=>{

        if(entry.isIntersecting){
            entry.target.style.transitionDuration=`${speed}ms`;
            entry.target.classList.add('appear');
        }else{
            entry.target.classList.remove('appear');   
            entry.target.style.transitionDuration="0";     
        }

        speed+=200;
    })

},smallCradOptions)


smallCrads.forEach((card)=>{
    smallCardobserver.observe(card);
})
























