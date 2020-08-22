class Drop {
    constructor(x, y,w=random(4,6)) {
      var options = {
          isStatic:false,
         // 'restitution':,
          'friction':0.1,
          'density':0.1,
          frictionAir: 0.02,
       
      }
      this.body = Bodies.circle(x, y,w/2, options);
      this.width = width;
      this.height = height;
      this.w = w
 
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle)
      
      fill("#E8F1FE");
      ellipse(0, 0, this.w)
      pop();
    }
  };
  var Drops = []
  function createDrop(x,y){
    var a= new Drop(x,y)
    Drops.push(a)
    return a;
  }
  function drawDrops(){
    Drops.forEach(element => {
      element.display();
    });
  }
  function reverseDrops(){
    if(frameCount%10 === 0){
    Drops.forEach(element => {
    if(element.body.position.y >height){
      Matter.Body.setPosition(element.body,{x:random(width),y:random(-height*2)})
    }
    });
  }
  }