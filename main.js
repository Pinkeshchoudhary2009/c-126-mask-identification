var video =""
function setUp(){
    canvas =createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO)
    video.hide();
    classifier =ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/xqDGV7euH/model.json');

}
function modelLoaded(){
    console.log('model Loaded!')
  }
  
  function draw(){
    image(video ,0,0,300,300)
    classifier.classify(video, gotResult);
  
  }

  function gotResult(error,results){
    if(error){
      console.log(error);
    }
    else{
      
    document.getElementById("result_object_name").innerHTML =results[0].label;
    
    document.getElementById("result_object_accuracy").innerHTML =results[0].confidence.toFixed(3);
      }
    }

    
    
    