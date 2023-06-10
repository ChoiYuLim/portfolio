let i; //undefined

i = 10;
console.log(i);
/*
수많은 코드 존재...
누군가가 i 값 사용 및 수정을 한다  
*/

for(let i = 0; i < 5; i++) { // i = 0, 참조변수에 리터럴이 할당
    console.log("loop " + i);
}

console.log(i);