class Paper
{
	constructor(x,y,radius){
     var options = {   
        isStatic:false,
        restitution: 0.3,
        friction:0,
        density: 1.2
     }
        
		this.body = Bodies.circle(x, y,radius/3, options);
        this.r = radius;
        this.x=x;
		this.y=y;
        this.image = loadImage("paper.png")
        World.add(world, this.body);
    }

    
		
display(){

    var pos =this.body.position;	
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    fill(255);
    image(this.image,0, 0, this.r, this.r);
    pop();
}
	


}