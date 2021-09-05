



function Obstacles(){

    this.width=50;
    this.height=80;

    this.x=width+100;
    this.y=height-(this.height+20);

    this.speed;

    if(screen.width>800){
        this.speed=-15;
    }else{
        this.speed=-8;
        this.width=30;
        this.height=50;
        this.y=height-(this.height+20);
    }
    
    

    this.render=function (){

        noStroke();
        fill(0,0,255);
        rect(this.x,this.y,this.width,this.height);

        this.x+=this.speed;
    }

}