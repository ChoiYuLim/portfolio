function callThreeTimes(callback) {
    for(let i=0; i<3; i++){
        // 함수를 매개변수로 받는 경우에는 
        // 매개변수명 뒤에 ()
        // 호출 사용합니다.
        callback(i);
    }
}

// 매개변수로 함수를 전달할 때는
// ()호를 제외합니다.
callThreeTimes(function (i) {
    console.log(i + "번째 함수 호출");
});