
const test = {
    // 선언적 익명 함수
    foo: function () {
        console.log("foo 메소드의 this");
        // this, 자신의 메소드를 가지고 있는 상위 객체(test)를 가리킵니다.
        console.log(this) // test에 대한 객체가 나옴
    },

    // 화살표 함수
    bar: () => {
        console.log("bar 메소드의 this");
        // 함수도 객체이다? 자바 스크립트만의 특징.
        // 화살표 함수는 자신의 메소드를 가리키고 있는 상위 객체(test)를 가리키지 않고
        // 자기 자신의 함수의 객체를 가리킨다.
        
        console.log(this) // 자체 함수의 객체가 나옴
    }
}

// 메소드를 호출합니다.
test.foo();
test.bar();
