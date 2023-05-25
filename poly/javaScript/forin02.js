const students = ["정주연", "강태근", "최유림"];
for (let index in students){
    students[index] += "화이팅";
    console.log(`${index} 번째 학생은 ${students[index]} 입니다.`);
}

console.log(students);