class Ball{
    constructor(x,y){
        var options = {
            restitution : 1.1,
            friction : 0,
            density : 10
        }
        this.body = Bodies.circle(x,y,20,options);
        World.add(world,this.body);

    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        ellipse(0, 0, 50,50);
        pop();
    }
}