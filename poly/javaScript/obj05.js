// 객체를 선언
const student = { 

}; //빈 객체

// 동적으로 프로퍼티를 추가할 수 있다.
student.name = "최유림";
student.hobby = '춤';
student.dream = '개발자';

console.log(student);

// 속성 삭제
delete student.hobby;
console.log(student);