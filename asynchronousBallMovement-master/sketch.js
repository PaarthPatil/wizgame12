var canvas;
var wiz, wizimg, ground, groundimg, en, enimg;
var invisground;
var groundgrp, engrp;

function preload(){
wizimg = loadImage ("imgs/w.png");
groundimg = loadImage("imgs/gr.png");
enimg = loadImage("imgs/e.png");
    
}

function setup(){
createCanvas(800,400);
wiz = createSprite(50, 250, 30, 30);
wiz.addImage (wizimg);
wiz.scale = 0.2;
invisground = createSprite (0,400, 2000, 5)
invisground.visible = false;
groundgrp = new Group();
engrp = new Group();

}

function draw(){
background('cyan');

if (keyDown ("w")){
    wiz.velocityY = -10;
}
if (keyDown ("d")){
    wiz.x = wiz.x + 7;
}
if (keyDown ("a")){
    wiz.x = wiz.x - 7;
}
if (keyDown("e")){
    wiz.x = wiz.x + 6;
    wiz.y = wiz.y - 15;
}
if (keyDown("q")){
    wiz.x = wiz.x - 6;
    wiz.y = wiz.y - 15;
}

//gravity
    wiz.velocityY = wiz.velocityY + 1;
wiz.collide(invisground);
groundgrp.collide (wiz);
spawnEnemies();
spawnGround();
drawSprites();
}

function spawnGround(){
if (frameCount % 50 === 0){
    ground = createSprite(800, 250, 200, 5);
    ground.y = Math.round(random(100,350));
    ground.addImage (groundimg);
    ground.velocityX = -5;
    groundgrp.add (ground);
    groundgrp.setLifetimeEach(1000);
    
}

}
function spawnEnemies(){
if (frameCount % 100 === 0){
en = createSprite (610, 380, 20,20);
en.addImage (enimg);
en.scale = 0.2;
en.x = Math.round(random(800, 1000));
en.velocityX = -5;
engrp.add(en);
engrp.setLifetimeEach(1000);

}

}






