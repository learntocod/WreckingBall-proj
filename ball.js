class Ball{
    constructor(x,y){
        var options ={
            restitution: 1,
            friction: 0.5,
            density:1,
            frictionAir:0.005,
            slop: 1,
            inertia: Infinity

        };
            this.body=Bodies.rectangle(x,y,30,30,options);
            this.x = x;
            this.y = y;
            this.width=30;
            this.height=30;
            World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle =this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(5);
        stroke('green');
        fill('red');
        ellipseMode(RADIUS);
        ellipse(0,0,this.width,this.height);
        pop();
    }
     
}