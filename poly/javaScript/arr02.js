const todos = ['우유 구매', '업무 메일', '코드 실습'];
todos.push('저녁 식사');

todos[10] = "제주도 귤";

for (let i = 0; i < todos.length; i++) {
    console.log(todos[i]);
}