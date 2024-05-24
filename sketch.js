let capture;
let t =0;
let t1 =0
let T1 = 500;
let T=1000;
let TT1 = 700;
let TT =500
let x,y,x1,y1
let cre, cre1
let z =400
let z1 =400
function preload(){
    cre = loadImage("ngl.png")
    cre1 = loadImage("cr.png")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1); 
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
  //if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device
  capture = createCapture(VIDEO,constraints);
  //}else{
    // false for not mobile device
   // capture = createCapture(VIDEO)
  //}
  //
  //capture = createCapture(VIDEO)
  capture.size(width/5,height/5)
  capture.hide();
  cre.resize(z,0)
  cre1.resize(z1,0)
}


function draw() {
 image(capture, 0, 0,width,height); 

 image(cre,x,y,z,z)
 image(cre1,x1,y1,z1,z1)
  
  // x=100;y=200;
  x = noise(t);
  x = map(x,0,1,0,width-300);// so the creature doenet keep going off screen
  y = noise(T);
  y = map(y,0,1,0,height);
  z = noise(TT)
  z = map(z,0,1,200,500)
  t =t+0.01;
  T =T+0.01;
  TT=TT+0.01;


  x1 = noise(t1);
  x1 = map(x1,0,1,width-300,0);// so the creature doenet keep going off screen
  y1 = noise(T1);
  y1 = map(y1,0,1,height,0);
  z1 = noise(TT1)
  z1 = map(z1,0,1,200,500)
  t1 =t1+0.01;
  T1 =T1+0.01;
  TT1=TT1+0.01;
}