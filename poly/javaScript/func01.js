// 선언
// 자바 스크립트 내부에 함수 목록에 등록이 됨
function hello() { // 함수의 이름을 "hello"라는 키 이름으로 정함
    console.log("안녕하세요.");
}

// 호출
hello();

let greeting = function () {
    console.log("반갑습니다.");
}

greeting();
console.log(typeof(greeting));