let capture;
let t =0;
let T=1000;
let TT =500
let x,y
let cre
let z =400
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
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device
    capture = createCapture(VIDEO,constraints);
  }else{
    // false for not mobile device
    capture = createCapture(VIDEO)
  }
  //
  capture = createCapture(VIDEO)
  capture.size(width/5,height/5)
  capture.hide();
  cre.resize(z,0)
}


function draw() {
 image(capture, 0, 0,width,height); 

 image(cre,x,y,z,z)
  
  // x=100;y=200;
  x = noise(t);
  x = map(x,0,1,0,width);
  y = noise(T);
  y = map(y,0,1,0,height);
  z = noise(TT)
  z = map(z,0,1,300,500)
  t =t+0.01;
  T =T+0.01;
  TT=TT+0.01;
}