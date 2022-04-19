// alert("start javascript");

// 숫자형
/*
    10진수 : 일상생활에서 쓰는 수
    255
    2진수 (0b 1111 1111) , 0b binary number 
        128 64 32 16 8 4 2 1

    179 :   
    2진수 (0b 1011 0011) ,
        128 0 32 16 0 0 2 1

    8진수 (0o 000) ,
            64 8 1
    
    255 : 
    8진수 (0o 377)
            192 56 7

    16진수 (0x 00) ,

    255:
    16진수 (0x 00ff) = (0x ff)
            256 16 1   f = 15
*/

let num = 255;
console.log(num.toString(2)); // 2진수
console.log(num.toString(8)); // 8진수
console.log(num.toString(16)); // 16 진수



let randomNum = Math.random() * 10; // 0.0 ~ 1.0 사이의 랜덤한 값(난수) 정수부를 하나 만들어 놓고 버리든 올리든 반올린다.
console.log(randomNum);

console.log(Math.floor(randomNum));   // 버림 내림
console.log(Math.ceil(randomNum));    // 올림
console.log(Math.round(randomNum));   // 반올림

// Math에서 쓰이는 함수 random, floor, ceil, round

/*
    실습.
    프로그램이 3 ~ 10 사이의 랜덤한 값을 지정한다.
    값을 하나 입력 받아서 정답인지 아닌지 출력해준다.
*/

// https://hianna.tistory.com/454 난수 생성하기 예제

// 내가 한 것

// let i = prompt("정답을 입력하세요."); // prompt 에도 변수를 선언해 줄 수 있다.
// let result = Math.floor(Math.random() * 10); // 0 ~ 7을 만들고 3을 더한다. 해결하지 못함.

// console.log(result);
// if (i == result) { //비교 대상 == 연산자
//         alert("정답입니다.")
//     }else {
//         alert("정답이 아닙니다.")
//     }


// 교수님이 한 것

let inputNum = prompt("정답을 입력하세요.");
// et result = Math.floor(Math.random() * 7 + 3); 3 ~ 10
let correctNum = Math.floor((Math.random() * 10)) % 8 + 3; // 3  + 0 ~ 3 + 7
console.log(correctNum);
if (inputNum == correctNum) {
    alert("정답입니다.");
} else {
    alert("틀렸습니다");
}

// 변수명 이름 규칙
/*
    1. 변수명을 지을때, 알파벳, _, -, 숫자 (한글(추천하지않음), 특수문자, 일본어...권장 x(문법적으로는 가능하지만 권장하지 않고 혼자 프로젝트를 하는 것이 아니기 때문에 일반적으로 영어를 쓴다. 통일을 위해서))
        1_1. 숫자가 제일 앞에 올 수 없다.
    2. camel 표기법  https://needjarvis.tistory.com/632
        ex : let myVeryLongLongName; 변수명을 시작할때는 소문자 나머지 단어는 대문자로 쓰는법
        ex : let MyVeryLongLongName; pascal  (Pascal case)표기법 
    3. 대소문자를 구분한다.
        ex : let myVeryLongLongName;
        ex : let MyVeryLongLongName;
*/

// console.log(varName);               // 호이스팅 다른언어에서는 쓸수 없지만 javascript에서는 쓸 수 있다.  자바스크립트라는 엔진이 있고 거기 파일에 구동이 된다. 변수가 선언의 과정이 이루어지고 런타임에서 코드에 실제로 사용이 된다. 변수들을 가지고 메모리를 잡아놓고 그뒤에 다시 코드를 실행중에 진행을 하면서 사용을 한다. 그래서 사용 가능하다.
// var varName = '박태현';             // 가장 오래된 버전에서 사용하는 변수 타입, 가변성이 강하고 중복선언의 경우에 불편하다. 전역변수가 많으면 끝날때까지 메모리를 소모하기 떄문에 효율적이지 않다.
//                                     // 전역변수 프로젝트 전반에서 사용하는 변수 전연변수 지역변수 설명: https://edu.goorm.io/learn/lecture/201/%ED%95%9C-%EB%88%88%EC%97%90-%EB%81%9D%EB%82%B4%EB%8A%94-c%EC%96%B8%EC%96%B4-%EA%B8%B0%EC%B4%88/lesson/1271588/%EC%A0%84%EC%97%AD%EB%B3%80%EC%88%98%EC%99%80-%EC%A7%80%EC%97%AD%EB%B3%80%EC%88%98
// console.log(varName);

// if (true)  
// {
//                                     // {코드 영역이 새로 만들어졌다.}
//                                     // 지역변수 자동으로 메모리를 해제해준다. 사용할때만 메모리를 쓰고 사용이 끝나면 바로 메모리를 해제해준다. 메모리 사용 측면에서 효율적임.
//     var varName = 'TaehyunPark';
// }
// console.log(varName);               //TaehyunPark이 찍힌다.

// let letName = 'pth';      
// console.log(letName);           // pth

// if(true) 
// {                               // 지역변수
//     let letName = 'parktaehyun'
//     console.log(letName);       // parktaehyun
// }

// // let letName = "박태현";         // 같은 영역안에서 같은 변수를 중북해서 선언할수 없다. 
// console.log(letName);          // pth

// 재할당할 일이 없을때 사용한다.  값이 수정될 일이 없는 변수 (상수라고 하지만 내용을 변환할 수 있다. 클래스를 사용하는 오브젝트에서는 변경 가능하다.)
// 게임에서 1스테이지 맵의 크기 (일반적으로 변환하지 않는것)
// 1스테이지 보스이름 (일반적으로 변환하지 않는것)
// document를 변수로 선언할 때  이미 만들어져 있는 객체를 가져와서 쓰는 것이기 때문에 const로 가져와서 쓴다.
// 상수 이기 때문에 선언하면서 동시에 초기화를 해줘야 한다. 


// const constName = "Taehyun";   //const는 선언과 초기화를 동시에 해줘야 한다.
// constName = "pth";
// console.log(constName);        // 실행해서 문제가 뜬다는 것은 RunTimeError

// complie runtime 차이 js파일을 만들면 사람이 알기 쉬운 언어에서 컴퓨터가 동작 할 수 있는 언어로 변환을 시켜주는 것을 complie
// runtime 실제로 바낀 목적 파일을 실행한다.
