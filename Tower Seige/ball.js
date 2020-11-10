class Ball{
    constructor(x,y,width,height) {
        var options = {
            density:1.2,
            restitution:0,
            friction:0.3

        }
        this.body = Bodies.circle(450 , 350 ,20 ,options);
        this.image = loadImage("hex.png")
        
        World.add(world, this.body);

        
      }
       


      display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(2);
        fill("blue")
        imageMode(CENTER);
       image(this.image,0,0,70,70);
       pop();
        
        
        
     }
}