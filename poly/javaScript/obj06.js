const student = {

}; // 빈 객체

const poly = [
    ['박태현', '꿈의 개발자', '축구'],
    ['박준하', '최고 연봉자', '농구'],
    ['정수영', '노벨 개발자', '야구']
];

// poly에 있는 2차원 배열을 객체로 변환하는 코드를 작성
// 반복문
let colums = ['name', 'dream', 'hobby', 'score'];
let empty = false;

for (let item of poly) {
    let col = {}; //초기화
    for (let i = 0; i < colums.length; i++) {
        if(item[i] == undefined){
            if(empty){
                continue;
            }else{
                col[colums[i]] = "";
            }
        }else{
            col[colums[i]] = item[i];
        }
    }
    let key = item[0];
    student[key] = col;
}
console.log(student);