class Hammer {
  constructor(x, y) {
    var options = {
        'restitution':0.8,
        'friction':2.0,
        'density':2.0
    }
    this.body = Bodies.rectangle(x, y, 20, height, options);
    this.width = 100;
    this.height = 20;
    
    World.add(world, this.body);
   // Matter.Body.setAngle(this.body, )
  }
  display(){
    var pos =this.body.position;
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
   //var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
   // rotate(angle);
    rectMode(CENTER);
    fill("yellow");
    strokeWeight(4);
    stroke("green")
    rect(0, 0, this.width, this.height);
    pop();
  }
};
