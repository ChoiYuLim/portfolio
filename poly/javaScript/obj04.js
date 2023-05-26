const pet = {
    name: "토리",
    // 프로퍼티에 익명함수를 할당 -> 자바스크립트의 객체 메소드 선언방법
    eat: function(food){
        console.log(`${this.name}가 ${food}를 맛있게 먹고 있어요`)
    }
}

// 메소드를 호출하니다.
// .과 프로퍼티명 뒤에 () 호출한다.
pet.eat("닭고기");