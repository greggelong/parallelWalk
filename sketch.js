var capture;
let cre
function preload(){
    cre = loadImage("ngl.png")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  var constraints = {
    audio: false,
    video: {
      facingMode: {
        exact: "environment"
      }
    }    
    //video: {
      //facingMode: "user"
    //} 
  };
  capture = createCapture(VIDEO,constraints);
  //capture = createCapture(VIDEO)
  capture.size(width/10,height/10)
  capture.hide();
  cre.resize(400,0)
}


function draw() {
 image(capture, 0, 0,width,height); 

 image(cre,width/2,height/2)
}