class ground {
constructor(a,b,width,height){

    var option={
        isStatic:true

    }

    this.body=Bodies.rectangle(a,b,width,height,option);
    World.add(world,this.body);
}
display(){

rectMode (CENTER);
fill (0,255,0);
stroke(255);
rect(this.body.position.x,this.body.position.y,this.body.width,this.body.height) 

}

};