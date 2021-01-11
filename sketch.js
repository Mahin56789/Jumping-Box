//storing all sprites to store in computer's memory;
var canvas;
var music;
var box;
var surface1,surface2,surface3,surface4;
var edges;
function preload(){
    //loading the sound;
music = loadSound("music.mp3");

}


function setup(){
//making canvas,surface1,2,3,4 and box and giving them colours;

 canvas=createCanvas(800,600);

 

 surface1=createSprite(100,580,185,25);
 surface1.shapeColor="green";

 surface2=createSprite(300,580,185,25);
 surface2.shapeColor="orange";

surface3=createSprite(500,580,185,25);
 surface3.shapeColor="blue";

 surface4=createSprite(700,580,185,25);
 surface4.shapeColor="red";

 box=createSprite(300,400,35,35);
 box.x=Math.round(random(20,750));
 box.shapeColor="white";  
 box.velocityX=-9;
 box.velocityY=7;
}

function draw() {
    
    //adding background colour;
 
    background("black");
    edges= createEdgeSprites();
   

   
//adding function to box and surfaces;
    bounceO(box,surface1);
    bounce(box,surface2);

    bounceOff(box,surface3);

    bounceR(box,surface4);

    


    //creating edge sprites so that box does not get out of the canvas and making the box to bounce off surface1,2 and 4;

    
         box.bounceOff(edges);
         box.bounceOff(surface1);
         box.bounceOff(surface2);
         
         box.bounceOff(surface4);
       
//making the sprites to display;

   drawSprites();
}