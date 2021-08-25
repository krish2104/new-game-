var backGroundImage;
var bg1,bg2,bg3;
var superman,superman1,alien,kymera,ghost1,ghost2,ghost3,ghost4,ghost5,ghoul,stormKing,rift1;
var gameState="L1";
var bullet;
var lazar;
var lazerbeam;
var alien1,alien2,alien3,alien4,alien5;
var cube,cube1,kevin;




function preload(){
    bg1=loadImage("fnbg1.jpg");
    bg2=loadImage("fnbg2.jpg");
    bg3=loadImage("bgno3.jpg");
    cube=loadImage("kevin.jpg");
    superman=loadImage("sup2.png");
    kymera=loadImage("ghoul1.jpg");
    ghoul=loadImage("Ghoul2.jpg");
    storm=loadImage("stormking.png");
    rift=loadImage("rift.jpg");
    lazerbeam=loadImage("lazarbeam.png");

}
function setup(){
    createCanvas(1500,700);
    superman1=createSprite(200,200);
    superman1.addImage(superman);
    superman1.scale=0.40
    stormKing=createSprite(800,200);
    cube1=createSprite(400,500);
    ghost1=createSprite(700,200);
    ghost2=createSprite(700,400);
    ghost3=createSprite(700,600);
    ghost4=createSprite(1000,300);
    ghost5=createSprite(1000,500);
    alien1=createSprite(700,200);
    alien2=createSprite(700,400);
    alien3=createSprite(700,600);
    alien4=createSprite(1000,300);
    alien5=createSprite(1000,500);
    ghost1.addImage(ghoul);
    ghost2.addImage(ghoul);
    ghost3.addImage(ghoul);
    ghost4.addImage(ghoul);
    ghost5.addImage(ghoul);
    alien1.addImage(kymera);
    alien2.addImage(kymera);
    alien3.addImage(kymera);
    alien4.addImage(kymera);
    alien5.addImage(kymera);
    rift1=createSprite(1300,400);
    rift1.addImage(rift) 
    rift1.scale=0.2;
    riftGroup = new Group();
    riftGroup.add(rift1)
    cube1.addImage(cube);
    stormKing.addImage(storm);
    lazarGroup=new Group();  

    ghoulGroup=new Group();
    ghoulGroup.add(ghost1);
    ghoulGroup1=new Group();
    ghoulGroup2=new Group();
    ghoulGroup3=new Group();
    ghoulGroup4=new Group();
    ghoulGroup1.add(ghost2);
    ghoulGroup2.add(ghost3);
    ghoulGroup3.add(ghost4);
    ghoulGroup4.add(ghost5);
    alienGroup1=new Group();
    alienGroup1.add(alien1)
    alienGroup2=new Group();
    alienGroup2.add(alien2)
    alienGroup3=new Group();
    alienGroup3.add(alien3)
    alienGroup4=new Group();
    alienGroup4.add(alien4)
    alienGroup5=new Group();
    alienGroup5.add(alien5);
    cubeGroup=new Group()
    cubeGroup.add(cube1);
    
    

    
     
  
}
function draw(){
    background(0);
     if(gameState==="L1"){
        console.log(1);
        ghost1.visible=false;
        ghost2.visible=false;
        ghost3.visible=false;
        ghost4.visible=false;
        ghost5.visible=false;
        alienGroup1.visible=true;
        alienGroup2.visible=true;
        alienGroup3.visible=true;
        alienGroup4.visible=true;
        alienGroup5.visible=true;
        cubeGroup.visible=false;
        stormKing.visible=false;

        //background(bg1)
        ghosts();
        if(lazarGroup.isTouching(riftGroup)){
            console.log("changing to level2")
            gameState=2;
            
        }
     }
     
     if(keyDown("space")){
        shoot();
        
    }
    
    if(ghoulGroup.isTouching(lazarGroup)){
        ghoulGroup.destroyEach();
        lazarGroup.destroyEach();
    }
    if(ghoulGroup1.isTouching(lazarGroup)){
       ghoulGroup1.destroyEach();
       lazarGroup.destroyEach();
   }
   if(ghoulGroup2.isTouching(lazarGroup)){
       ghoulGroup2.destroyEach();
       lazarGroup.destroyEach();
   }
   if(ghoulGroup3.isTouching(lazarGroup)){
       ghoulGroup3.destroyEach();
       lazarGroup.destroyEach();
   }
   if(ghoulGroup4.isTouching(lazarGroup)){
       ghoulGroup4.destroyEach();
       lazarGroup.destroyEach();
   }

    if(alienGroup1.isTouching(lazarGroup)){
        alienGroup1.destroyEach();
        lazarGroup.destroyEach();
    }
    if(alienGroup2.isTouching(lazarGroup)){
       alienGroup2.destroyEach();
       lazarGroup.destroyEach();
   }
   if(alienGroup3.isTouching(lazarGroup)){
       alienGroup3.destroyEach();
       lazarGroup.destroyEach();
   }
   if(alienGroup4.isTouching(lazarGroup)){
       alienGroup4.destroyEach();
       lazarGroup.destroyEach();
   }
   if(alienGroup5.isTouching(lazarGroup)){
       alienGroup5.destroyEach();
       lazarGroup.destroyEach();
   } 
   if(stormKing.isTouching(lazarGroup)){
       stormKing.destroy();
       cube1.destroy();
   }
   

   
   else if(gameState===2){
       console.log("level 2")
       ghost4.visible=true;
        ghost1.visible=true;
        ghost2.visible=true;
        ghost3.visible=true;
        ghost5.visible=true;
        alien1.visible=false;
        alien2.visible=false;
        alien3.visible=false;
        alien4.visible=false;
        alien5.visible=false;
        cubeGroup.visible=false;
        stormKing.visible=false;
          
           
           invasion();
       

        
    }
    //else if(gameState==3){
        //background(bg3);
    //}
   
    
    drawSprites();
}


function ghosts(){
    background(bg1);
     superman1.scale=0.40
    if(keyDown("right")){
        superman1.x=superman1.x+10;
    }
    
    if(keyDown("up")){
        superman1.y=superman1.y-10;
    }
    if(keyDown("down")){
        superman1.y=superman1.y+10;
    }
    if(keyDown("left")){
        superman1.x=superman1.x-10;
    
    }
    

    
    
}
    function invasion(){

        console.log("inside invasion")
        background(bg2);
        
        superman1.scale=0.40
        if(keyDown("right")){
            superman1.x=superman1.x+10;
        }
        
        if(keyDown("up")){
            superman1.y=superman1.y-10;
        }
        if(keyDown("down")){
            superman1.y=superman1.y+10;
        }
        if(keyDown("left")){
            superman1.x=superman1.x-10;
        
        }
        
             


        

        
     
     
}  



function shoot(){
    lazar=createSprite(300,75,10,10);
    lazar.addImage(lazerbeam);
    lazar.scale=0.2;
    lazar.y=superman1.y-125;
    lazar.x=superman1.x+500;
    lazar.velocityX=10
    lazar.lifetime=100;
    rift1.depth = lazar.depth;
    lazar.depth = lazar.depth + 1;
    lazarGroup.add(lazar);
    createEdgeSprites();
   
   if(gameState==4){
    textSize(50)
    fill("blue");
    text("GAME OVER , THE STORM KING STANDS STRONG",200,100);
   }
    
   
    
    
}
function level3(){

    if(cube1.isTouching(lazarGroup)){
        superman1.destroy();
        console.log("I AM TOUCHING");
        gameState=4;
        
        lazarGroup.destroyEach();
    }

}
        


