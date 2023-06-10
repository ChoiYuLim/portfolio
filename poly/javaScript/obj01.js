const kim = {
    firstname: "john",
    lastname: "kim",
    age: 35,
    address: "seoul"
};

console.log(kim);
console.log("이름: " + kim.firstname);
console.log(typeof (kim));

// 상수에 다른 객체 할당,
// 상수는 변경을 할 수 없습니다. 

kim.firstname = "yulim";
kim.lastname = "choi";
kim.age = 24;

// kim = {
//     firstname: "yulim",
//     lastname: "choi",
//     age: 24,
//     address: "seoul"
// };

console.log(kim);
console.log("이름: " + kim.firstname);
