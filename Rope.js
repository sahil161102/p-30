class Rope{
constructor(body1, body2, offsetX, offsetY){
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    var options = {
        bodyA: body1,
        bodyB: body2,
        pointB:{x:this.offsetX, y:this.offsetY}
    }
    this.rope = Matter.Constraint.create(options);
    World.add(world, this.rope);
}
display(){
    var pointA = this.rope.bodyA.position;
    var pointB = this.rope.bodyB.position;
    strokeWeight(2);
    var a = pointA.x;
    var b = pointA.y;
    var c = pointB.x+this.offsetX;
    var d = pointB.y+this.offsetY;
    stroke("yellow");
    line(a,b,c,d);
    
}
}