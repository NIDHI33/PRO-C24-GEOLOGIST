class Sand {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y,50, 50, options);
      this.width = 10;
      this.height = 10;
      
      World.add(world, this.body);
    }
    display(){
     //pos.x =mouseX;
     //pos.y=mouseY;
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("blue");
      strokeWeight(4);
      //stroke("yellow")
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  