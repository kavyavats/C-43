var genius;
var ground;
var background_img;
var scene;

function preload(){
    background_img=loadImage("background.png")
}

function setup(){
    createCanvas(displayWidth,displayHeight-150);
    genius = createSprite(width/10,height/2,50,50);
    genius.display=false;
    ground=createSprite(width/2,height,width,20);
}

function draw(){
    background("lightblue");

    if(keyDown("space") && genius.collide(ground)){
        genius.velocityY=-10;
    } 
    genius.velocityY = genius.velocityY+1;

    genius.collide(ground);

    ground.velocityX=-4

    if(ground.x<700){
        ground.x=width/2;
    }
    image(background_img,genius.x,genius.y,50,50)

    drawSprites();
}