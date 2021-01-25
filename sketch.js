var ground , bgroundImage;
var tom , tomImage1,tomImage2,tomImage3,tomImage4;
var jerry,jreeyImage1,jerryImage2,jerryImage3,jerryImage4;



function preload() {
    //load the images here

bgroundImage = loadImage("images/garden.png")
tomImage1=loadImage("images/tomOne.png")
jreeyImage1=loadImage("images/jerryOne.png")
tomImage2=loadImage("images/tomTwo.png")
tomImage3=loadImage("images/tomThree.png")
jerryImage2=loadImage("images/jerryTwo.png")
jerryImage3=loadImage("images/jerryThree.png")
tomImage4=loadImage("images/tomFour.png")
jerryImage4=loadImage("images/jerryFour.png")

}

function setup(){
    createCanvas(1000,1000);
    //create tom and jerry sprites here
    
    ground=createSprite(400,400,0,0)
    ground.addImage("groundB",bgroundImage)
    ground.scale=0.9;

    tom=createSprite(600,600,50,50)
    tom.addImage("tom",tomImage1)
    tom.scale=0.1;
      
    jerry=createSprite(100,590,40,40)
    jerry.addImage("jerry",jreeyImage1)
    jerry.scale=0.1;
}

function draw() {

    background('white');
    //Write condition here to evalute if tom and jerry collide


    
    if(tom.x - jerry.x < tom.width/2 - jerry.width/2 ){

    tom.velocityX=0;
      
    tom.addAnimation("tomset",tomImage4)
    tom.changeAnimation("tomset")
        
    jerry.addAnimation("jreeymouse",jerryImage4)
    jerry.changeAnimation("jreeymouse")

    }
   


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

 if(keyCode == LEFT_ARROW){
   
    tom.velocityX=-5;
    tom.addAnimation("tomrunning",tomImage2,tomImage3)
    tom.changeAnimation("tomrunning")
 }


 if(keyCode = RIGHT_ARROW){
       
    jerry.addAnimation("jreeyfun",jerryImage2,jerryImage3)
    jerry.changeAnimation("jreeyfun")
    
    }



}
