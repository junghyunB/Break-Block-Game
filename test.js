function checkPrimeNumber(num) {
    for(let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

function solution(nums) {
    let sumNumber = 0;
    let result = 0;
    // 숫자 세개를 골라서 합하는 코드
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            for(let k = j + 1; k < nums.length; k++) {
                sumNumber = nums[i] + nums[j] + nums[k];
                //console.log(sumNumber);
                 // 그 숫자가 소수인지 판단하는 코드
                if (checkPrimeNumber(sumNumber)) {
                    result++;
                }
            }
        }
    }
    console.log(result);
}

solution([1,2,7,6,4])