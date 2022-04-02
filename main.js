x = 0;
y = 0;
screen_width = 0;
screen_height = 0;
draw_apple = "";
speak_data = "";
to_number = "";

 function preload(){
  apple = loadImage("apple.png");
}

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 
 content = event.results[0][0].transcript;
 to_number = Number(content);

 if(Number.isInteger(to_number)){
  document.getElementById("status").innerHTML = "Start Drawing Apple " 
  draw_apple = "set";
 }
 else{
  document.getElementById("status").innerHTML = "The speech has not recognized a number " 
 }

 

 

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
 screen_width = window.innerWidth;
 screen_height = window.innerHeight;
 canvas = createCanvas(500,500);
 canvas.position(500,160);
}





function draw() {
  if(draw_apple == "set")
  {
    for(i = 1; i<=to_number;i++)
    {
      x = random(480);
      y = random(480);
      image(apple,x,y,40,40);
    }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    speak_data = to_number + " Apples drawn";
    speak();
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
