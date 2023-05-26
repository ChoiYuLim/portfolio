const product = ['우유', '식빵'];
console.log(product);

// 얕은 복사
const goods = product;
console.log(goods);

goods.push('고구마');
console.log(goods);

console.log(product);

// 깊은 복사
const food = [...product];
console.log(food);

food.push('토마토');
console.log(food);

console.log(product);