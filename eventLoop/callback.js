function 아반떼(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("아반떼 go")
        }, 1000)
    })     
}

아반떼().then(data => console.log(data))
function 소나타(callback) {
    setTimeout(() => {
    console.log("소나타 go")
    callback()
}, 2000)

}

function 제네시스() {
    setTimeout(() => {
        console.log("제네시스 go")
    }, 3000)
  
}


// 아반떼(() => {소나타(제네시스)})

