noseX= 0;
noseY= 0;

function preload(){
    clown_nose= loadImage("https://i.postimg.cc/1RwVxGJH/l1.png");
}

function setup(){
    canvas= createCanvas(500,500);
    canvas.position(500,150);
    video= createCapture(VIDEO);
    video.size(500,500);
    video.hide();
    
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX= results[0].pose.nose.x-15;
        noseY= results[0].pose.nose.y+26;
    }
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function draw(){
    image(video, 0, 0, 500, 500);
    image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot(){
    save("MySelfie.png");
}