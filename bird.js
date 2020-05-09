class bird{
 constructor(){
var options={
'restitution':1,
'density':1,
'friction':1

}

this.body=Bodies.circle(100,200,10,options);
World.add(world,this.body);
//this.snakepos=[];
 }
display(){
    //var ang= this.body.angle;
    this.body.position.x=World.mouseX;
    this.body.position.y=World.mouseY;
push ();
translate(this.body.position.x,this.body.position.y);
rotate (this.body.angle);

circle(this.body.position.x,this.body.position.y,10)
   pop (); 
 //if(this.body.Collide()){}   
//var pos=[this.body.position.x,this.body.position.y];
//this.snakepos.push(pos);
//for (i=0 ; i<this.snakepos.length;i=i+1){

//rect(this.snakepos[i][0],this.snakepos[i][0],20,20);

}


}



