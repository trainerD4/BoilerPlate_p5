var bat, object1, object2, home;
var batImage;

function preload(){
    batImage = loadImage('batImg.png')
}

function setup(){

    createCanvas(600,400);

    bat= createSprite(20,200,50,50)
    bat.addImage('bat',batImage)
    bat.shapeColor = 'blue'
    bat.scale = 0.3

    object1 = createSprite(300,50,5,200)
    object1.shapeColor = 'green'
    object2 = createSprite(350,350,5,200)
    object2.shapeColor = 'red'
    home = createSprite(575, 200, 80,80)
    home.shapeColor = 'yellow'

    edge= createEdgeSprites()

    object1.velocityY = 2
    object2.velocityY = -2

}

function draw(){

    background('black')

    

    object1.bounceOff(edge)
    object2.bounceOff(edge)

    drawSprites()
    console.log(frameCount)

}
