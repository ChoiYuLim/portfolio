let student = { name: "박태현", major:"데이터학과", grade: 1};
console.log(student);
console.log(typeof(student));

let jsonObj = JSON.stringify(student);
console.log(typeof(jsonObj));
console.log(jsonObj);

let obj = JSON.parse(jsonObj);
console.log(typeof(obj));
console.log(obj);