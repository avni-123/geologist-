class Hammer {
    constructor(x, y, width, height) {

      this.body = Bodies.rectangle(x, y, width, height);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    
    display(){
      var angle = this.body.angle;

      push();
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("brown");
      fill("yellow");
      rect(0, 0, this.width, this.height);
      pop();
    }

  }  
