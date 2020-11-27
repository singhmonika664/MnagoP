class Rope{
	constructor(body,anchor)
	{
		
		var options={ bodyA:body,			 
			pointB:anchor, 
			stiffness:0.004, 
			length:1
			
		}
		
		this.bodyA=body
		this.pointB=anchor
		this.Rope=Constraint.create(options)
		World.add(world,this.Rope)
	}

	attach(body){
		this.Rope.bodyA=body;
	}

	fly()
	{
		this.Rope.bodyA=null;
	}

	display()
	{
		if(this.Rope.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}