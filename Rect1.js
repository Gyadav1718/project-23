class Rect1{


    constructor(){
    
      this.body=Bodies.rectangle(550,610,50,50,{isStatic:true})
    this.width = 20;
    this.height = 100;
    
    World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER) 
        rect(pos.x,pos.y,this.width,this.height);
    }
}