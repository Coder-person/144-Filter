underNoseX = 0;
underNoseY = 0;

function preload(){

}

function setup(){
    canvas = createCanvas(450,450);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450,450);
    video.hide();
    poseNet_model = ml5.poseNet(video,modelLoaded);
    poseNet_model.on("pose",Poses);
}

function modelLoaded(){
    console.log('PoseNet model is ready.');
}

function Poses(results){
    if(results.length > 0){
        console.log(results);
        underNoseX = results[0].pose.nose.x - 20;
        underNoseY = results[0].pose.nose.y + 20;
        console.log("Underneath nose X coord = "+underNoseX);
        console.log("Underneath nose Y coord = "+underNoseY);
    }
}

function draw(){
    image(video,0,0,450,450);
}

function take_snapshot(){
    save("Filter.png");
}