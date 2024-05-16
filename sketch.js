var capture;
let cre
function preload(){
    cre = loadImage("ngl.jpg")
}
function setup() {
  createCanvas(windowWidth, windowheight);
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
  capture = createCapture(constraints);
  
  capture.hide();
  cre.resize(200,0)
}


function draw() {
 image(capture, 0, 0); 
 image(cre,width/2,height/2)
}