var GAME = {
    width: 600,
    ymin: 0,
    xmin: 0,
    height: 600,
    background: 'rgb(128, 128, 128)'
}

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var canvasWidth = 600;
var canvasHeight = 600;
canvas.width = GAME.width;
canvas.height = GAME.height;
var ball = {
    color: "orange",
    x: 100,
    y: 80,
    size: 20,
    xDirection: 3,
    yDirection: 5,
}

var roketka = {
    width: 100,
    y: 500,
    x: 0,
    height: 20,
    color: "white",
    speed: 2,
    speed2: 30,
}

function drawRoketka(roketka){
ctx.fillStyle = roketka.color;
ctx.beginPath();
ctx.fillRect(roketka.x, roketka.y, roketka.width, roketka.height);
ctx.closePath();
}

drawRoketka(roketka);





function drawBall(ball) {
ctx.fillStyle = ball.color;
ctx.beginPath();
ctx.arc(ball.x, ball.y, ball.size / 2, 0, Math.PI*2);
ctx.fill();
ctx.closePath();
}
drawBall(ball);
function updateBall(ball){
    ball.x += ball.xDirection;
    ball.y += ball.yDirection;
    if (ball.y - ball.size / 2 < GAME.ymin){
        ball.yDirection = - ball.yDirection;
    }
    if (ball.y + ball.size / 2 > GAME.height){
        ball.yDirection = -ball.yDirection;
    }

    if (ball.x + ball.size / 2 > GAME.width){
        ball.xDirection = -ball.xDirection;
    }
    if (ball.x - ball.size / 2 < GAME.xmin){
        ball.xDirection = -ball.xDirection;
    }
    var rokettopline = ((ball.y + (ball.size / 2)) > roketka.y);
    var roketleftline = ((ball.x + (ball.size / 2)) > roketka.x);
    var roketbottomline = ((ball.y - (ball.size / 2)) < (roketka.y + roketka.height));
    var roketrightline = ((ball.x - (ball.size / 2)) < (roketka.x + roketka.width));
    if(rokettopline && roketleftline && roketrightline && roketbottomline){
        ball.yDirection = -ball.yDirection;
        ball.xDirection = -ball.xDirection;
    }
}


function drawFrame(){
ctx.clearRect(GAME.xmin,GAME.ymin, GAME.width, GAME.height);
drawBackground();
drawBall(ball);
drawRoketka(roketka);
}
function drawBackground(){
    ctx.fillStyle = GAME.background;
ctx.fillRect(GAME.xmin,GAME.ymin, GAME.width, GAME.height);
}
function updateRocket(roketka){
if(roketka.x < 0){
    roketka.x = 0;
}
if(roketka.x + roketka.width > GAME.width){
    roketka.x = GAME.width -roketka.width;
}
}
function initEvntsListeners(){
    window.addEventListener("mousemove", onCanvasMouseMove);
    window.addEventListener("keydown", onCanvasKeyDown);
}
function onCanvasKeyDown(event){
    if(event.key === "a"){
        roketka.x = roketka.x - roketka.speed2;
    }
    if(event.key === "d"){
        roketka.x = roketka.x + roketka.speed2;
    }
    if(roketka.x < 0){
        roketka.x = 0;
    }
    if(roketka.x + roketka.width > GAME.width){
        roketka.x = GAME.width -roketka.width;
    }
}
function onCanvasMouseMove(event){
    roketka.x = event.clientX;
    if(roketka.x < 0){
        roketka.x = 0;
    }
    if(roketka.x + roketka.width > GAME.width){
        roketka.x = GAME.width - roketka.width;
    }
}
initEvntsListeners();
function play(){
    drawFrame();
    updateBall(ball, roketka);
    requestAnimationFrame(play);
}
play();