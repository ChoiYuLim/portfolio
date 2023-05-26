const product = ['우유','식빵'];
console.log(product);

// 얕은 복사
const goods = product;
console.log(goods);

goods.push('고구마');
console.log(goods);

console.log(product);