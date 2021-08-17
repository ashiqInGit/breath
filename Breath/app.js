const img=document.querySelector('#land-img');
const potLeft=document.querySelector('#pot_1');
const potRight=document.querySelector('#pot_2');


window.addEventListener('scroll',()=>{
    let val=window.scrollY;
    console.log(val);
    img.style.bottom=`${val*0.3}px`;
    potRight.style.bottom=`${val}px`;
    potLeft.style.bottom=`${val}px`;
})
