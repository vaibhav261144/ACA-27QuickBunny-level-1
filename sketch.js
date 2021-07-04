var player;
var target;
var edges;

function setup() {
createCanvas(600,600);

edges=createEdgeSprites();
player = createSprite(40,550,30,30); 
target = createSprite(560,40,30,30);
obs1 = createSprite(300,320,100,20);
obs2 = createSprite(100,320,100,20);
obs3 = createSprite(500,320,100,20);
obs4 = createSprite(50,220,100,20);
obs5 = createSprite(250,220,100,20);
obs6 = createSprite(450,220,100,20);
target.shapeColor = "orange"
obs6.shapeColor = "brown"
obs5.shapeColor = "brown"
obs4.shapeColor = "brown"
obs3.shapeColor = "brown"
obs2.shapeColor = "brown"
obs1.shapeColor = "brown"
}

function draw() {
background("green");  

player.bounceOff(edges[0]);
player.bounceOff(edges[1]);
player.bounceOff(edges[2]);
player.bounceOff(edges[3]);
obs1.bounceOff(edges[1]);
obs1.bounceOff(edges[0]);
obs2.bounceOff(edges[1]);
obs2.bounceOff(edges[0]);
obs3.bounceOff(edges[1]);
obs3.bounceOff(edges[0]);

if(keyDown("up")){
  player.y=player.y-3;
}
if(keyDown("down")){
  player.y=player.y+3;
}
if(keyDown("left")){
  player.x=player.x-3;
}
if(keyDown("right")){
  player.x=player.x+3;
}
if(player.isTouching(target)){
  text("YOU WIN",200,200);
}
if(player.isTouching(obs1)){
  obs1.velocityX=0;
  text("YOU LOSE",200,200);
}
if(player.isTouching(obs2)){
  obs2.velocityX=0;
  text("YOU LOSE",200,200);
}
if(player.isTouching(obs3)){
  obs2.velocityX=0;
  text("YOU LOSE",200,200);
}
if(player.isTouching(obs4)){
  obs2.velocityX=0;
  text("YOU LOSE",200,200);
}
if(player.isTouching(obs5)){
  obs2.velocityX=0;
  text("YOU LOSE",200,200);
}
if(player.isTouching(obs6)){
  obs2.velocityX=0;
  text("YOU LOSE",200,200);
}
  drawSprites();
}