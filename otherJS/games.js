
// ////////////////// POP UP MSG ***********'


const moreBtn=document.querySelector('.more-games-btn');
const popUpMsg=document.querySelector('.pop-up-msg');


moreBtn.addEventListener('mouseover',()=>{
    popUpMsg.style.color="#1C2B2D";
    popUpMsg.style.fontWeight="500";
    popUpMsg.style.clipPath="polygon(0 0,100% 0,100% 100%,0 100%)";

})

moreBtn.addEventListener('mouseleave',()=>{
    popUpMsg.style.clipPath="polygon(0 0,0% 0,0% 100%,0 100%)";
})

