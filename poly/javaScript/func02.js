// 호출
hello();

function hello() { // 함수의 이름을 "hello"라는 키 이름으로 정함
    console.log("안녕하세요.");
}

// 먼저 호출하고
greeting();

// 익명함수를 나중에 생성
let greeting = function () {
    console.log("반갑습니다.");
}

