function addNum(...numbers){
    let sum = 0;
    for(let num of numbers) {
        sum += num;
    }
    return sum;
}

console.log(addNum(1,5,6,87));

// arguments 응용해서 동일하게

function add() {
    let sum = 0;
    for(let num of arguments){
        sum += num;
    }
    return sum;
}

console.log(add(1,2,3,4));