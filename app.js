

// +++++++++++++++++++++  FIRSRT PAGE ANIMATION

const girlIllustration=document.querySelector('#land-img');
const potLeft=document.querySelector('#pot_1');
const potRight=document.querySelector('#pot_2');


window.addEventListener('scroll',()=>{

    let val=window.scrollY;

    girlIllustration.style.bottom=`${val}px`;
    potRight.style.bottom=`${val*0.5}px`;
    potLeft.style.bottom=`${val*0.5}px`;

})
