class Plinko{
    constructor(x,y,radius){
        var options={
            restitutuion:0.4,
            isStatic:true
        }
        this.radius = radius;
        this.body = Bodies.circle(x,y,this.radius,options);
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
};