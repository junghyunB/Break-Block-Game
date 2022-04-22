/*
    비동기 처리
    promise
    동기 처리
*/



// new Promise 호출과 동시에 비동기 처리 시작
// new는 런타임중에 메모리를 호출하는애

// const promise = new Promise((resolve, reject) => {
//     /*
//         시간이 오래 걸리는 실행문....... 5초
//     */
//     resolve();
//     reject();
// });

// promise.then(() => {
//         console.log('promise() then() called');
//     }).catch(() => {
//         console.log('promise() catch() called');
//     });


// function testFunc1() {
//     console.log('testFunc1()')

//     let startTime = new Date().getTime();
//     while(new Date().getTime() - startTime < 1000);

//     testFunc2();
// }

// function testFunc2() {
//     console.log('testFunc2()')
// }
// testFunc1();

// resolve를 먼저 다처리를한 후 reject를 처리한다.

// function asyncCheckAdult(age) {
//     return new Promise((resolve, reject) => {
//         if(age >= 20) {
//             resolve(age);
//         } else reject(age);
//     })
// }

// await : 함수가 종료될때까지 기다린다.

async function asyncTimeoutCheckAdult(age, timeout) {
    if (age >= 20) {
        setTimeout(() => {
            console.log(`asyncTimeoutCheckAdult(${age})`)
            return age;
        }, timeout);
        
    }
    else throw new Error(age);
}

async function asyncCheckAdult(age) {
        if(age >= 20) {
            return age;
        } else throw new Error(age);
}


async function testAsyncAwaitFunc() {

    await asyncTimeoutCheckAdult(100, 2000);
    
    const promiseCheckAdult1 = asyncCheckAdult(10);
    promiseCheckAdult1.then((age) => {
        console.log(`${age} is Adult OK`);
    }).catch((age) => {
        console.log(`${age} is Adult NO`);
    });

   const promiseCheckAdult2 = asyncCheckAdult(21);
    promiseCheckAdult2.then((age) => {
        console.log(`${age} is Adult OK`);
    }).catch((age) => {
        console.log(`${age} is Adult NO`);
    });

}
testAsyncAwaitFunc()






