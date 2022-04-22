// /*
//   배열

// */

// let testArray=[1,2,3,4,5];
// let testArray2 = new Array(5);

// testArray[0] = 100;

// for(let i = 0; i < testArray.length; i++){
//     testArray[i];
// }

// // testArray.push(30);

// // testArray.forEach(function(number, index, arr){
// //     console.log("2. n:" , number, "i",  index, "a:", arr);
// // })

// // testArray.pop();

// // testArray.forEach(function(number, index, arr){
// //     console.log("3. n:" , number, "i",  index, "a:", arr);
// // })

// testArray.unshift(300);
// testArray.forEach(function(number, index, arr){
//     console.log("4. number:" , number, "index",  index, "arr:", arr);
// })

// testArray.shift();
// testArray.forEach(function(number, index, arr){
//     console.log("5. number:" , number, "index",  index, "arr:", arr);
// })

// let arrayMultiple = testArray.map(x => x * 2); //배열의 요소들을 x에 담아서 하ㅏ하나 다 곱해준다.
// arrayMultiple.forEach(function(number, index, arr){
//     console.log("6. number:" , number, "index",  index, "arr:", arr);
// }) 

// const arr = [1, 2, [3, 4]];

// // To flat single level array
// let flatarr = arr.flat();
// // is equivalent to
// console.log(flatarr)
// let redarr = arr.reduce((acc, val) => acc.concat(val), []);
// console.log(redarr)

// [1, 2, 3, 4]

// or with decomposition syntax
// const flattened = arr => [].concat(...arr);

///↑↑↑↑↑↑↑↑↑↑↑↑↑↑ 배열 공부 pop과 다르게 맨 앞 배열 인덱스에 붙이는 함수이기때문에 메모리가 많이 든다.

/*
    클래스 (class)
    함수 생성자
    */

// function Brick(left, top, right, bottom) {
//     this.left = left,
//     this.top = top,
//     this.right = right,
//     this.bottom = bottom
// }

// let tempBrick = new Brick(0, 0, 10, 10);
// tempBrick.movingAction();

// Brick.prototype.movingAction = function() {
//     this.left++;
//     console.log("내가 움직이고 있어")
// }

// for(let i = 0; i < 20; i++) {

// let tempBrick = new Brick(0, 0, 10, 10);
// tempBrick.movingAction();     
// }





const canvas = document.getElementById('myCanvas');

const context = canvas.getContext("2d");

let arcPosX = canvas.width / 2;
let arcPosY = canvas.height - 38;
let arcMoveDirX = -1;
let arcMoveDirY = -1;
let arcMoveSpd = 2;
let BigBrickWidth = 50;
let BigBrickHeight = 50;
let BigBrickPosX = 175;
let BigBrickPosY = 175;
let rectPosX = canvas.width / 2 - 50;
let rectPosY = canvas.height - 20;
let rectMoveDirX = 1;
const barWidth = 200;
const barHeight = 20;
const arcRadius = 20;
let barPosX = canvas.width / 2 - barWidth / 2;
let barPosY = canvas.height - barHeight;

//벽돌관련
const brickWidth = 50; //간격은 10
const brickHeight = 25; // 간격 5
let brickColumn = 5;
let brickRow = 4;
let bricks = [];
let brokenbrickcount = 0;



let ball = {
    left: 0, right: 0, top: 0, bottom: 0,
};


let paddle = {
    left: 0, right: 0, top: 0, bottom: 0,
};

class Brick {
    constructor(left, top, right, bottom, Direction, color) {
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.isAlive = true;
        this.Direction = Direction;
        this.color = color;
    }

    draw() {
        if (this.isAlive) {
            context.rect(this.left, this.top, brickWidth, brickHeight);
            context.fillStyle = this.color;
            context.fill();
        }
    }
}

class MovingBrick extends Brick {
    movingAction() {
        if(this.left == 350) {
            this.Direction = -1
            this.left += this.Direction
            this.right += this.Direction
        } else if(this.left == 0) 
            this.Direction = 1
            this.left += this.Direction
            this.right += this.Direction      
    }    
}

let BigBrick = new MovingBrick(175, 175, 225, 225, 1);


//키 함수 추가
document.addEventListener('keydown', keyDownEventHandler);
// document.addEventListener('keyup', keyUpEventHandler);



function setBricks() {

    

    var row1 = document.getElementById('row').value;
    document.getElementById('answerRow').innerHTML = row1;

    var col1 = document.getElementById('col').value;
    document.getElementById('answerCol').innerHTML = col1;

    brickRow = row1;
    brickColumn = col1;


    for (let i = 0; i < brickRow; i++) { //위에서부터 5줄
        bricks[i] = [];
        for (let j = 0; j < brickColumn; j++) {  //가로로 4개
            // bricks[i][j] = {
            //     left: 55 + j * (brickWidth + 10),
            //     right: 55 + j * (brickWidth + 10) + 50,
            //     top: 30 + i * (brickHeight + 5),
            //     bottom: 30 + i * (brickHeight + 5) + 25,
            //     column: i, row: j,
            //     isAlive: true,
            //     nothingToBreak: false
            // };
            bricks[i][j] = new Brick(55 + j * (brickWidth + 10),
            30 + i * (brickHeight + 5), 55 + j * (brickWidth + 10) + 50, 30 + i * (brickHeight + 5) + 25, 1, "red");
        }
    }
}




function drawBigBricks() {
    context.beginPath();
    context.rect(BigBrick.left, BigBrick.top, BigBrickWidth, BigBrickHeight);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
}

function drawBricks() {
    context.beginPath();
    for (let i = 0; i < brickRow; i++) {
        for (let j = 0; j < brickColumn; j++) {
            bricks[i][j].draw();
        }
    }
    context.closePath();
}


function keyDownEventHandler(e) {

    if (e.key == 'ArrowRight') {
        if (barPosX + 100 < canvas.width) {
            rectMoveDirX = 10;
        } else if (barPosX + 100 >= canvas.width) {
            rectMoveDirX = 0;
        }
    }
    if (e.key == 'ArrowLeft') {
        if (barPosX > 0) {
            rectMoveDirX = -10;
        } else if (barPosX <= 0) {
            rectMoveDirX = 0;
        }
    }

    if (e.key == " ") {
        setInterval(update, 10);
    }
    if (e.key == "Enter") {
        console.log(BigBrick)
        console.log(ball)
    }
    barPosX += rectMoveDirX;

    paddle.left = barPosX;
    paddle.right = barPosX + barWidth;
    paddle.top = barPosY;
    paddle.bottom = barPosY + barHeight;
}

//실습. 동그라미가 오른쪽으로 움직이다가 캔버스 끝에 닿으면 왼쪽으로 이동

context.clearRect(0, 0, canvas.width, canvas.height) //화면을 네모난 모양


function update() {

    //arcposx는 원의 중심이다.
    if (arcPosX - arcRadius < 0) {
        arcMoveDirX = 1;
    } else if (arcPosX + arcRadius > canvas.width) {
        arcMoveDirX = -1;
    }

    if (arcPosY - arcRadius < 0) {
        arcMoveDirY = 1;
    } else if (arcPosY + arcRadius > canvas.height) {
        arcMoveDirY = -1;
    }

    arcPosX += arcMoveDirX * arcMoveSpd;
    arcPosY += arcMoveDirY * arcMoveSpd;
    // arcPosX = arcPosX + arcMoveDir + arcMoveSpd;

    ball.left = arcPosX - arcRadius;
    ball.right = arcPosX + arcRadius;
    ball.top = arcPosY - arcRadius;
    ball.bottom = arcPosY + arcRadius;



    //충돌확인
    if (isCollisionRectToRect(ball, paddle)) {
        arcMoveDirY = -1;
        arcPosY = paddle.top - arcRadius;
        console.log(BigBrick.bottom)
    }

    if (isCollisionRectToRect(ball, BigBrick)) {
        arcMoveDirY = -arcMoveDirY;

    }


    // 벽돌과 공 충돌확인
    for (let i = 0; i < brickRow; i++) {
        for (let j = 0; j < brickColumn; j++) {
            if (bricks[i][j].isAlive && isCollisionRectToRect(ball, bricks[i][j])) { //벽돌이 살아있고 충돌이 일어날때
                //벽돌 안보이게, 위치를 바뀌던지 볼 방향변경

                bricks[i][j].isAlive = false;
                arcMoveDirY *= -1;
                brokenbrickcount++;
                break;
            }
        }
    }
    BigBrick.movingAction();
    noMoreBricks(); //벽돌없어
    //바닥에 떨어지면/ 패들보다 낮게 떨어지면
    gameOver();

}

function gameOver() {
    if (arcPosY > 380) {
        window.location.reload(true);
        alert("Game Over");
    }
}


async function asyncTimeoutCheckClear(brickColumn, brickRow, timeout) {
    if (brokenbrickcount == brickColumn * brickRow) {
        setTimeout(() => {
        window.location.reload(true);
        alert("Game Clear")
        }, timeout);
    }
    else throw new Error(age);
}

async function noMoreBricks() {

    // bricks배열에 있는 정보로 처리
    // flat() 2차원 배열을 1차원 배열로 바꿔줌

    // let flatBricks = bricks.flat()

    // let deadBricks = flatBricks.filter(brick => brick.isAlive == false);
    // if (deadBricks.length == brickRow * brickColumn) {
    //     window.location.reload(true);
    //     alert("Game Clear")
    // }
    await asyncTimeoutCheckClear(brickColumn, brickRow, 1000);

}


function isCollisionRectToRect(rectA, rectB) {
    //a의 왼쪽과 b의 오른쪽
    //aㅁ의 ㅇ른쪽과 b의 왼쪽
    //a의 아래쪽과 b의 위
    //a의 위와 b의 아래
    if (rectA.left > rectB.right ||
        rectA.right < rectB.left ||
        rectA.top > rectB.bottom ||
        rectA.bottom < rectB.top) {
        return false;
    } //안겹친다

    return true; // 겹친다
}


function draw() {
    //화면 클리어
    context.clearRect(0, 0, canvas.width, canvas.height) //사각형 지우기
    drawRect();
    drawArc();
    drawBricks();
    drawBigBricks()
}

function drawRect() {
    context.beginPath();
    context.rect(barPosX, barPosY, barWidth, barHeight);
    context.fillStyle = 'red';
    context.fill();
    context.closePath();
}

function drawArc() {

    context.beginPath();
    context.arc(arcPosX, arcPosY, arcRadius, 0, 2 * Math.PI);
    context.fillStyle = 'blue';
    context.fill();
    context.closePath();
}




setBricks();
update();
setInterval(draw, 10);