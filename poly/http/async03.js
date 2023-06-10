function displayA() {
    console.log("A");
}

// 매개변수도 일반적인 변수이고, 
// 변수에는 함수도 담을 수 있다.
function displayB(callback){
    // callback이라는 변수에는 함수가 담겨져 있다.
    setTimeout(()=>{
        console.log("B");
        callback();
    },2000);
}

function displayC() {
    console.log("C");
}

displayA();
displayB(displayC); // () 제외하고 함수명만 매개변수로 전달

displayB( function() {
    console.log("C")
});