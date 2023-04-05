class Ground {

    constructor(x,y,w,h) {
        this.width = w;
        this.height = h;
        this.body = Bodies.rectangle(x,y,w,h);
        World.add(world, this.Body);

    }

    display(){
        var pos = this.body.position;
        push();
        rect(x,y,this.width,this.height);
        pop();
    }
}