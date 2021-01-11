function bounce(object1,object2){
    if(object2.isTouching(object1)){
        object1.shapeColor="orange";
       music.play();
    }
}
function bounceR(object1,object2){
    if(object2.isTouching(object1)){
        object1.shapeColor="red";
      
    }
}
function bounceO(object1,object2){
    if(object2.isTouching(object1)){
        object1.shapeColor="green";
       
    }
}
function bounceOff(obj1,obj2){
    if(obj1.isTouching(obj2)){
        obj1.shapeColor="blue";
       music.stop();
       box.velocityX=0;
       box.velocityY=0;
    }
    }