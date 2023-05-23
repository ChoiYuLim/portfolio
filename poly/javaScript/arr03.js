let fruits = ['사과','배','오렌지','바나나'];
console.log(fruits);

let result = fruits.splice(2,1);
console.log(result);
console.log(fruits);
console.log("---");
fruits.push(result[0]);
console.log(fruits);