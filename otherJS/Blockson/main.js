

var ground;
var player;
var obstacles=[];

var startGame=false;



var playerImg;
var monsterImg;

function preload(){

    playerImg=loadImage('img/player01.png');
    monsterImg=loadImage('img/monster01.png');

}





function setup(){
    let cnv=createCanvas(windowWidth,windowHeight-250);
    cnv.position(0,200);

    ground=new Ground();
    player=new Player();
    obstacles.push(new Obstacles());
}


function draw(){

    if(startGame){
        background(0);

        ground.render();
    
        player.jump();
        player.render();   
    
        if(frameCount%100==0){
            obstacles.push(new Obstacles());
        }
    
        for(let i=obstacles.length-1;i>0;i--){
            obstacles[i].render();
    
            if(checkCollide(obstacles[i])){
                gameOver();
                return;
            }
            
    
            if(obstacles[i].x<-50){
                obstacles.splice(i,1);
            }
    
        }
    }


}


function checkCollide(obstacle){
    return collideRectRect(player.x,player.y, player.width,player.height,obstacle.x, obstacle.y, obstacle.width, obstacle.height);
}


function keyPressed(){

    if(keyCode===UP_ARROW){
            player.setVelocity();
        
    }
    
}



function mousePressed(){
    player.setVelocity();
}





// //////////////// START GAME and GAME OVER 

const gameOverCont=document.querySelector('.game-over-cont');

const retryBtn=document.querySelector('.retry-btn');
const stopBtn=document.querySelector('.stop-btn');

function gameOver(){

    startGame=false;
    obstacles=[];
    noLoop();

    obstacles=[];

    gameOverCont.style.display="block";

}


retryBtn.addEventListener('click',()=>{

    gameOverCont.style.display="none";

    player=new Player();
    obstacles=[];

    startGame=true;

    loop();

})

stopBtn.addEventListener('click',()=>{
    gameOverCont.style.display="none";

    startGame=false;
    background(0);
    noLoop();
    player=new Player();
    obstacles=[];

    startGame=false;
})



const startBtn=document.querySelector('.start-btn');


startBtn.addEventListener('click',()=>{
    startGame=true;

    loop();
    gameOverCont.style.display="none";
})




// ////////////////////// PREVENTING USER FROM USE ARROW KEYS TO SCROLL PAGE

window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight",13].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);