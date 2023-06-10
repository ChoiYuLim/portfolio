function displayA() {
    console.log("A");
}

function displayB() {
    // 2초 뒤에 실행
    setTimeout(() => console.log("B"), 2000);
    // ex 외부와의 통신을 처리하는 것이다.
    // 일정한 시간이 흐른 후에 완료가 되기 때문에 늦게 동작함
}

function displayC() {
    console.log("C");
}

displayA();
displayB();
displayC();