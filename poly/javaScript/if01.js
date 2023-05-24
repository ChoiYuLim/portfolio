const currentYear = 2023;
let birthYear;
let age;

// let birthStr;
// let birthNum;
// birthStr = prompt("태어난 년도"); // 문자열로 받아옴
// birthNum = parseInt(); // 문자열을 숫자로 변환해줌

birthYear = parseInt(prompt("태어난 년도")); // 한줄로 쓸 수 있음, 변수를 줄일 수 있음

age = currentYear - birthYear + 1;
if (age < 20) {
    alert("성인이 아닙니다.");
}

// 백틱은 ES6 문법임
alert(`${currentYear}년 현재, ${age}세 입니다.`);