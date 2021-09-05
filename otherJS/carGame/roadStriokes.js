

function RoadStroke(){

    this.x1=width/2-180;
    this.x2=width/2+170;

    this.y=-60;
    this.width=10;
    this.height=80;


    this.render=function(){

        noStroke();
        fill(255);
        rect(this.x1,this.y,this.width,this.height);
        rect(this.x2,this.y,this.width,this.height);
    }

    this.update=function(){
        this.y+=15;
    }
}