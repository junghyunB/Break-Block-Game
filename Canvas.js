/*
캔버스 설정
document
context
*/

const canvas = document.getElementById('myCanvas');
const context = canvas.getContext("2d");
const arcRadius = 20;

let arcPosX = canvas.width / 2;
let arcPosY = canvas.height / 2;
let arcMoveDirX = -1;
let arcMoveDirY = -1;
let arcspd = 1; 
const barWidth = 100;
const barHeight = 20;
let DirectionX = canvas.width / 2 - barWidth / 2
let DirectionY = canvas.height - barHeight;
let barSpeed = 10;

let ball = {
    left:0, right:0, top:0, bottom:0
};

let paddle = {
    left:0, right:0, top:0, bottom:0
}

//이벤트가 일어났을때 해당함수를 호출해주는 함수
document.addEventListener("keydown", keyDownEventHandler);
document.addEventListener("keyup", keyUpEventHandler);

function keyDownEventHandler(e) {

    if (e.key == "ArrowRight") {
        // 바를 오른쪽으로 이동
        if(DirectionX < canvas.width - 100)
        DirectionX += barSpeed;
    }
    else if (e.key == "ArrowLeft") {
        // 바를 왼쪽으로 이동
        if(DirectionX > canvas.width - 400)
        DirectionX -= barSpeed;
    }
    paddle.left = DirectionX;
    paddle.right = DirectionX + barWidth;
    paddle.top = DirectionY 
    paddle.bottom = DirectionY - barHeight;
}

function keyUpEventHandler(e) {
    
}

function update() {
    //데이터 수정 ( 도형의 위치 이동 )
    if(arcPosX - arcRadius < 0) {
        arcMoveDirX = 1;
   
    } else if(arcPosX + arcRadius > canvas.width) {
        arcMoveDirX = -1;

    }

    if( arcPosY - arcRadius < 0) {
        arcMoveDirY = 1;
    } else if (arcPosY + arcRadius > canvas.height) {
        arcMoveDirY = -1;
    }
    arcPosX += arcMoveDirX * arcspd;
    arcPosY += arcMoveDirY * arcspd;

    ball.left = arcPosX - arcRadius
    ball.right = arcPosX + arcRadius
    ball.top = arcPosY - arcRadius
    ball.bottom = arcPosY + arcRadius

    //충돌 확인

    if(isCollisionRectToRect(ball,paddle))
    {   
        arcMoveDirY = -1;
        arcPosY = paddle.top - arcRadius;
    }
}

function isCollisionRectToRect(rectA, rectB) {

    //a의 왼쪽과 b의 오른쪽
    //a의 오른쪽과 b의 왼쪽
    //a의 아래쪽과 b의 위쪽
    //a의 위쪽과 b의 아래쪽

    if(rectA.left > rectB.right || 
       rectA.right < rectB.left ||
       rectA.top > rectB.bottom ||
       rectA.bottom < rectB.top) {
           return false;
       }
    return true;
}


function draw() {
    //화면 클리어
    context.clearRect(0, 0, canvas.width, canvas.height);
    //다른 도형 그리기
    drawRect();
    drawArc();
}

function drawArc() {   
    
    context.beginPath();
    context.arc(arcPosX, arcPosY, arcRadius, 0, 2 * Math.PI);
    context.fillStyle = 'blue';
    context.fill();
    
    context.closePath();
}

function drawRect() {
    
    context.beginPath(); 
    context.rect(DirectionX , DirectionY, 100, 20);   
    context.fillStyle = 'red';
    context.fill();
    
    context.closePath();
}




setInterval(update, 10);
setInterval(draw, 10);