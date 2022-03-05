function setup(){
    canvas = createCanvas(200, 200);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas)
    synth = window.speechSynthesis;
}
function preload(){
classifiy = ml5.imageClassifier('DoodleNet');
}
function draw(){
stroke(0);
strokeWeight(13);
if(mouseIsPressed){
line(pmouseX, pmouseY, mouseX, mouseY);}
}
function ClearCanvas(){
    background("white");
}
function classifyCanvas(){
    classifiy.classify(canvas, gotResults)
}
function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{console.log(results);
    document.getElementById("lbl1").innerHTML = "Label : " + results[0].label;
    document.getElementById("lbl2").innerHTML = "Confidence : " + Math.round(results[0].confidence * 100) + "%";
    speak_data = "the sketch is " + results[0].label;
    utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
}
}