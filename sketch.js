var box;
var wall1;
var wall2;
var wall3;
var wall4;
var wall5;
var insideWall1;
var insideWall2;
var insideWall3;
var insideWall4;
var insideWall5;
var insideWall6;
var insideWall7;
var insideWall8;
var insideWall9;
var insideWall10;
var insideWall11;
var insideWall12;
var insideWall13;
var insideWall14;
var insideWall15;
var insideWall16;
var insideWall17;
var insideWall18;
var score = 0
var lives = 5
var deaths = 0
var heart 
var heart1
var heart2
var heart3
var heart4
var heart5
// var obstical_for_2_and_up
// var obstical1_for_2_and_up

function setup() {
  createCanvas(800,700);
  box = createSprite(400,25,25,25);
  wall1 = createSprite(400, 0, 800, 10);
  wall2 = createSprite(0, 400, 10, 800);
  wall3 = createSprite(400, 700, 800, 10);
  wall4 = createSprite(800, 400, 10, 800);
  wall5 = createSprite(400, 650, 800, 5)
  insideWall1 = createSprite(400, 50, 400, 5);
  insideWall2 = createSprite(150, 100, 300, 5);
  insideWall3 = createSprite(650, 100, 300, 5);
  insideWall4 = createSprite(400, 150, 400, 5);
  insideWall5 = createSprite(150, 200, 300, 5);
  insideWall6 = createSprite(650, 200, 300, 5)
  insideWall7 = createSprite(400, 250, 400, 5)
  insideWall8 = createSprite(150, 300, 300, 5)
  insideWall9 = createSprite(650, 300, 300, 5)
  insideWall10 = createSprite(400, 350, 400, 5)
  insideWall11 = createSprite(150, 400, 300, 5)
  insideWall12 = createSprite(650, 400, 300, 5)
  insideWall13 = createSprite(400, 450, 400, 5)
  insideWall14 = createSprite(150, 500, 300, 5)
  insideWall15 = createSprite(650, 500, 300, 5)
  insideWall16 = createSprite(400, 550, 400, 5)
  insideWall17 = createSprite(150, 600, 300, 5)
  insideWall18 = createSprite(650, 600, 300, 5)
  heart = createSprite(650, 85, 25, 25)
  heart1 = createSprite(150, 185, 25, 25)
  heart2 = createSprite(650, 285, 25, 25)
  heart3 = createSprite(150, 385, 25, 25)
  heart4 = createSprite(650, 485, 25, 25)
  heart5 = createSprite(150, 585, 25, 25)
  // if (score >= 2) {
  // obstical_for_2_and_up = createSprite(400, 150, 10, 6)
  // obstical1_for_2_and_up = createSprite(400, 250, 10, 6)
  // }
}



function draw() 
{
  background(10);
  box.velocityY = 10
  box.collide(insideWall1)
  box.collide(insideWall2)
  box.collide(insideWall3)
  box.collide(insideWall4)
  box.collide(insideWall5)
  box.collide(insideWall6)
  box.collide(insideWall7)
  box.collide(insideWall8)
  box.collide(insideWall9)
  box.collide(insideWall10)
  box.collide(insideWall11)
  box.collide(insideWall12)
  box.collide(insideWall13)
  box.collide(insideWall14)
  box.collide(insideWall15)
  box.collide(insideWall16)
  box.collide(insideWall17)
  box.collide(insideWall18)
  
 
  

  textSize(30)

  // if (box.isTouching(obstical_for_2_and_up)) {
  //   lives = lives - 1 
  //   deaths = deaths + 1
  //   box.x = 400
  //   box.y = 25
  // }

  // if (box.isTouching(obstical1_for_2_and_up)) {
  //   lives = lives - 1 
  //   deaths = deaths + 1
  //   box.x = 400
  //   box.y = 25
  // }
  
  if (box.isTouching(heart)) {
    lives = lives + 1
    heart.remove()
  }

  if (box.isTouching(heart1)) {
    lives = lives + 1
    heart1.remove()
  }

  if (box.isTouching(heart2)) {
    lives = lives + 1
    heart2.remove()
  }


  if (box.isTouching(heart3)) {
    lives = lives + 1
    heart3.remove()
  }
  if (box.isTouching(heart4)) {
    lives = lives + 1
    heart4.remove()
  }
  if (box.isTouching(heart5)) {
    lives = lives + 1
    heart5.remove()
  }


  if (lives <= 0) {
    text("game over!", 400, 350)
    box.x = 0
    lives = 0
    deaths = 0
    box.y = 100
  }

  if(score < 10){
  text ("Score: "+score, 50, 675)
  text ("lives: "+lives, 200, 675)
  text ("deaths: "+deaths, 350, 675)
}else{
  text("You win!!", 400, 775)
}



if(box.isTouching(wall4)){
  lives = lives -1
  box.x = 400
  box.y = 25
  deaths = deaths + 1
}

if(box.isTouching(wall2)){
  lives = lives -1
  box.x = 400
  box.y = 25
  deaths = deaths + 1
}

if (lives <= 0) {
  text("game over!", 400, 350)
  box.x = 400
  lives = 0
  deaths=5
  box.y = 25
}
  
  if (keyIsDown(LEFT_ARROW)) {box.x = box.x -15}
  
  if (keyIsDown(RIGHT_ARROW)) {box.x = box.x +15}

  if(score === 9) {
    box.shapeColor = "red"
  }

  if(score === 3) {
    box.shapeColor = "#ff8900"
  }

  if(score === 6) {
    box.shapeColor = "#FFEB00"
  }

  if(score === 7) {
    box.shapeColor = "green"
  }

  if(score === 1) {
    box.shapeColor = "blue"
  }

  if(score === 8) {
    box.shapeColor = "purple"
  }

  if(score === 5) {
    box.shapeColor = "#00ff9d"
  }

  if(score === 10) {
    box.shapeColor = "indigo"
  }

  
  if(score === 4) {
    box.shapeColor = "#8323FF"
  }

  if(score === 2) {
    box.shapeColor = "#652CAE"
  }

  if (box.isTouching(wall5)) {
     score = score + 1
     box.x = 400
     box.y = 25
    }



 
  
  drawSprites();
}




