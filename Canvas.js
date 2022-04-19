/*
캔버스 설정
document
context
*/

const canvas = document.getElementById('myCanvas');
const context = canvas.getContext("2d");

context.clearRect(0, 0, canvas.width, canvas.height); // 화면을 네모 모양으로 지워주는 역할
context.beginPath();

context.rect(canvas.width / 2 - 50 , canvas.height / 2 - 50, 100, 100);

context.fillStyle = 'red';
context.fill();

context.closePath();

context.beginPath();
context.arc(canvas.width / 2 - 50 , canvas.height / 2 - 50, 50, 0, 2 * Math.PI);
context.fillStyle = 'blue';
context.fill();

context.closePath();