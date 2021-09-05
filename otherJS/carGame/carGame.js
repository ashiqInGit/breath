


var startGame=false;
var userInput=true;
var score=document.querySelector('.score');
var finalScore=document.querySelector('.finalScore');
var actualScore=0;


var road;
var car;
var roadStroke=[];
var otherCars=[];


var carImg;
var otherCarimg=[];

function preload(){

    carImg=loadImage('../../Images/car03.png');
    otherCarimg[0]=loadImage('../../Images/truck01.png');
    otherCarimg[1]=loadImage('../../Images/truck02.png');
    otherCarimg[2]=loadImage('../../Images/truck03.png');

}


function setup() {
    createCanvas(windowWidth,windowHeight);
    background(0,255,0);
    road = new Road();
    roadStroke.push(new RoadStroke());
    car = new Car();

    otherCars.push(new OtherCars());

}



function draw() {

    if(startGame){
        road.render();

        if(frameCount%30==0){
            roadStroke.push(new RoadStroke());
        }

        if(frameCount%40==0){
            let randomNum=Math.floor(Math.random()*3);
            otherCars.push(new OtherCars());
            otherCars[otherCars.length-1].imgNum=randomNum;

        }
    
        addStrokes();
        addOtherCars();

        car.update();
        car.render();
        
        if(car.x<road.x || ((car.x+car.width)>(road.x+road.width))){
            gameOver();
        }
    }

}

if(userInput){
    function keyPressed() {
        if (keyCode === LEFT_ARROW || keyCode===65) {
            car.setvelocity(-8);
    
        } else if (keyCode === RIGHT_ARROW || keyCode==68) {
            car.setvelocity(8);
        }
    }
}




function keyReleased(){
    car.setvelocity(0);
}

function addStrokes(){

    for(let i=roadStroke.length-1;i>0;i--){
        roadStroke[i].render();
        roadStroke[i].update();

        if(roadStroke[i].y>height){
            roadStroke.splice(i,1);
        }

    }

}


function addOtherCars(){

    for(let i=otherCars.length-1;i>0;i--){
        otherCars[i].render();
        otherCars[i].update();
    
        if(otherCars[i].y>height){
            otherCars.splice(i,1);

            actualScore+=10;
            score.innerHTML=actualScore;

        }

        if(otherCars[i].y>=(car.y-car.height-45) && otherCars[i].y<(car.y+car.height)){
            if(otherCars[i].x<car.x && car.x<otherCars[i].x+67){

                gameOver();
            }else if(otherCars[i].x>car.x && (car.x+67>otherCars[i].x)){

                gameOver();
            }
        }

    }

}





// ///////////////////  GAME OVER FUNCTION 


const gameOverCont=document.querySelector('.game-over-cont');

const retryBtn=document.querySelector('.retry-btn');
const stopBtn=document.querySelector('.stop-btn');

function gameOver(){
    
    userInput=false;
    noLoop();
    startGame=false;
    gameOverCont.style.display="block";

    finalScore.innerHTML=actualScore;

}


retryBtn.addEventListener('click',()=>{
    otherCars=[];
    roadStroke=[];

    car=new Car();
    road=new Road();

    gameOverCont.style.display="none";

    loop();
    userInput=true;
    startGame=true;
    
    actualScore=0;
    score.innerHTML=0;

})


stopBtn.addEventListener('click',()=>{
    loop();
    otherCars=[];
    roadStroke=[];

    startGame=false;
    gameOverCont.style.display="none";
    noLoop();

    car=new Car();
    road=new Road();

    actualScore=0;
    score.innerHTML=0;
    clear();
})


// //////////////// START GAME



const startBtn=document.querySelector('.start-btn');

startBtn.addEventListener('click',()=>{
    
    window.scrollTo(0,screen.height);
    background(0,255,0);
    
    userInput=true;
    startGame=true;
    loop();
})