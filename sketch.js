var login, loginImg;
var signUp, signUpImg;
var hb, hbImg;

function preload(){
  signUpImg = loadImage("assets/images/submitbutton.jpg");
  hbImg = loadImage("assets/images/hamburgermenu.png");
  loginImg = loadImage("assets/images/login.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  login = createSprite(width / 2, height /7, 10, 10);
  login.addImage("login", loginImg);
  login.scale = 0.5;
  hb = createSprite(width / 17, height / 23, 10, 10);
  hb.addImage("login", hbImg);
  hb.scale = 0.25;
  signUp = createSprite(width/2,height/1.2,10,10);
  signUp.addImage("signup", signUpImg);
  signUp.scale = 0.4;
}

function draw() {
  //trex.debug = true;
  background("white");
  drawSprites();
}