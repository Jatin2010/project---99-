var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;
    speak();
}

function speak() {

var synth = window.speechSynthesis;
var text = document.getElementById("textbox").value;
var utterThis = new SpeechSynthesisUtterance(text);
synth.speak(utterThis);
Webcam.attach(cam);
}

Webcam.set({
    height: 250,
    with: 360,
    image_format:'png',
    png_quality: 100
});

var cam = document.getElementById("camera");

