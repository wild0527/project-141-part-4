right_wristX = 0;
right_wristY = 0;
score = 0;

function preload() {
    ball_touch_paddel = loadSound("ball_touch_paddel.wav");
    missed = loadSound("missed.wav");
}

function setup() {
    var canvas = createCanvas(700, 600);
    canvas.parent('canvas');

    video = createCapture(VIDEO);
    video.size(700, 600);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("model is loaded");

}

function gotPoses(results)
{
    if (results.length>0)
    {
        console.log(results);
        right_wristX[0].pose.wrist.x; 
        right_wristY[0].pose.wrist.y;
        score = results[0].pose.keypoints[10].score;
        console.log(score);
    }
}