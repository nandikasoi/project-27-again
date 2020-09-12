class Bob {
    constructor(x,y,width,height){
        var options ={
            isStatic : false,
            restitution : 0.3,
            friction :  0.5,
            density : 1.2
        }
        this.body = Bodies.circle(x,y,width,height);
        World.add(World, this.body);
    }  
    display(){
       var position = this.body.position;
       ellipseMode(CENTER);
       Fill(255);
       circle(position.x,position.y,this.width,this.height);
       
    }
}