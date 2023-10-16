var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="red";
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="blue";
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="red";
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="blue";
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="red";
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="blue";
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="red";
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="blue";


var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="blue";
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="red";
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="blue";
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="red";
var box13 = createSprite(225,125, 50, 50);
box13.shapeColor="blue";
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="red";
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="blue";
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="red";

createEdgeSprites();

var paddle = createSprite(200,390,100,20);
var ball = createSprite(200,200,20,20);
var score = 0;
var gameState = "serve";

function draw() {
  background("white");
  
  textSize(23);
  stroke("yellow");
  text("Pontuação: "+score,250,20);
  
  if(gameState == "serve"){
    textSize(20);
    stroke("blue");
    text("Bem Vindo! Pressione Enter para iniciar",25,225);
    
     if(keyDown("enter")){
        ball.velocityX = 8;
        ball.velocityY = 8;
        gameState = "play";
   }
  }
  
  if(gameState == "play"){
    paddle.x=World.mouseX;
    
    if(ball.isTouching(bottomEdge) || score == 16){
      gameState = "end";
    }
  }
  
  if(gameState == "end"){
    ball.velocityX = 0;
    ball.velocityY = 0;
    
    textSize(25);
    stroke("red");
    text("Fim de jogo!",120,200);
  }
  
  ball.bounceOff(rightEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(topEdge);
  
  ball.bounceOff(paddle);
  
  if(ball.isTouching(box1)){
    ball.bounceOff(box1);
    score+=1;
    box1.destroy();
  }
  if(ball.isTouching(box2)){
    ball.bounceOff(box2);
    score+=1;
    box2.destroy();
  }
  if(ball.isTouching(box3)){
    ball.bounceOff(box3);
    score+=1;
    box3.destroy();
  }
  if(ball.isTouching(box4)){
    ball.bounceOff(box4);
    score+=1;
    box4.destroy();
  }
  if(ball.isTouching(box5)){
    ball.bounceOff(box5);
    score+=1;
    box5.destroy();
  }
  if(ball.isTouching(box6)){
    ball.bounceOff(box6);
    score+=1;
    box6.destroy();
  }
  if(ball.isTouching(box7)){
    ball.bounceOff(box7);
    score+=1;
    box7.destroy();
  }
  if(ball.isTouching(box8)){
    ball.bounceOff(box8);
    score+=1;
    box8.destroy();
  }
  if(ball.isTouching(box9)){
    ball.bounceOff(box9);
    score+=1;
    box9.destroy();
  }
  if(ball.isTouching(box10)){
    ball.bounceOff(box10);
    score+=1;
    box10.destroy();
  }
  if(ball.isTouching(box11)){
    ball.bounceOff(box11);
    score+=1;
    box11.destroy();
  }
  if(ball.isTouching(box12)){
    ball.bounceOff(box12);
    score+=1;
    box12.destroy();
  }
  if(ball.isTouching(box13)){
    ball.bounceOff(box13);
    score+=1;
    box13.destroy();
  }
  if(ball.isTouching(box14)){
    ball.bounceOff(box14);
    score+=1;
    box14.destroy();
  }
  if(ball.isTouching(box15)){
    ball.bounceOff(box15);
    score+=1;
    box15.destroy();
  }
  if(ball.isTouching(box16)){
    ball.bounceOff(box16);
    score+=1;
    box16.destroy();
  }
  drawSprites();
}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
