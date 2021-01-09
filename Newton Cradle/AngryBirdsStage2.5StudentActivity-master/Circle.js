class Circle extends BaseClass {
  constructor(x, y, color){
    var options = {
      'restitution':1,
      'friction':0,
      'density':1,
      'frictionAir':0,
      'slop': 1,
      'inertia': Infinity

  };
this.body = Bodies.rectangle(x, y, 40, 40, options);
this.x =x;
this.y =y;
this.color = color;
World.add(world, this.body);
};
