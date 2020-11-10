class box{
    constructor(x, y, width, height) {
        var options = {
            isStatic:false,
            restitution:0.5
        }
        this.body = Bodies.rectangle(x, y, width, height, options );
        this.width = width;
        this.height = height;
        
        this.visibility = 255;
        World.add(world, this.body);
      }
      display(){
        console.log(this.body.speed)
        var pos =this.body.position;
        
        if(this.body.speed<15){
          push();
         translate(this.body.position.x, this.body.position.y);
         fill(246,142,95);
         rect(0, 0, this.width, this.height);
        pop();
        }
        else{
          World.remove(world,this.body);
          push();
          this.visibility = this.visibility-5;
          tint(255,this.visibility);
          strokeWeight(3);
          fill(246,142,95);
          pop();
    }
        }
        score(){
          
          if (this.visibility < 0 && this.visibility > -1005){
            score++;
          }
          
        }
        
      
    

       
        
        
        
      }
    
