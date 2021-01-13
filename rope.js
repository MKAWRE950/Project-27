class rope {

    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
          bodyA : body1,
          bodyB : body2,
          pointB : {x:this.offsetX,y:this.offsetY}
          length :10,
          stiffness:0.04
        }
        Constraint.create(options)
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }

    display(){
        strokeWeight(5);
        line(posA.x,posA.y,posB.x,posB.y);
    }
}