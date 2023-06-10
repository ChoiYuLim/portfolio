let output = '';
for (let i = 1; i < 6; i++) {
    for (let j = 0; j < i; j++) {
        output += '*';
    }
    if (i == 5) {
        output += '?';
    }
    else {
        for (let k = 0; k < 11 - 2 * i; k++) {
            output += ' ';
        }
    }
    for (let j = 0; j < i; j++) {
        output += '*';
    }
    output += '\n';
}

let i = 1;

while (i < 6) {
    for (let j = 0; j < i; j++) {
        output += ' ';
    }
    for (let k = 0; k < 11 - 2 * i; k++) {
        if (k == (5 - i)) output += '?';
        else output += '*';
    }
    for (let j = 0; j < i; j++) {
        output += ' ';
    }
    output += '\n';
    i++;
}

console.log(output);