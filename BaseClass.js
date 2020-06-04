class BaseClass{
    constructor(x,y,width,height){
        
        var options = {
            restitutuion : 0.3
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);

    }
    display(){
        push();
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }
}