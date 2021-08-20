




//+++++++++++++++++++++++++++++++++HAMBURGER MENU+++++++++++++=++++++++++++++++++++++++



const hamburger=document.querySelector('.hamBurger');


const line1=document.querySelector('.line1');
const line2=document.querySelector('.line2');
const line3=document.querySelector('.line3');
const midLine1=document.querySelector('.mid-line1');
const midLine2=document.querySelector('.mid-line2');

const mobileNav=document.querySelector('#mobile-nav');

hamburger.addEventListener('click',()=>{
    

    line1.classList.toggle('changetheline1');
    line3.classList.toggle('changetheline3');

    midLine1.classList.toggle('changeMidLine1');
    midLine2.classList.toggle('changeMidLine2');

    mobileNav.classList.toggle('show-nav');

})




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
    rootMargin:'-50px',
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




// const mobileNavLists=document.querySelectorAll('.mobile-view-list');


// let mobileNavOptions={
//     root: null,
//     rootMargin:'0px',
//     threshold:1
// }


// let mobileNavObserver=new IntersectionObserver((entries,observer)=>{

//     entries.forEach((entry)=>{

//         if(entry.isIntersecting){
//             console.log(entry.target);
//             entry.target.classList.add('fade-in-mobile-list');
//         }

//     })

// },mobileNavOptions);


// mobileNavLists.forEach((list)=>{
//     mobileNavObserver.observe(list);
// })





















