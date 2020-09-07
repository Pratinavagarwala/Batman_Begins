var man,man_img;

function preload(){
 man_img=loadImage("images/man.png");
}

function setup(){
  createCanvas(400,800);   
    
}

function draw(){
background("white");
man = createSprite(150,500);
    man.addImage("man",man_img);

spawnRain();


    drawSprites();

}
function spawnRain(){
    if(frameCount%64===0){
      var rain=createSprite(100,0,10,10);
      rain.shapeColor="blue";
      rain.velocityY=5;
      rain.x=random(10,390);
      rain.lifetime=200;
    }
  }   

