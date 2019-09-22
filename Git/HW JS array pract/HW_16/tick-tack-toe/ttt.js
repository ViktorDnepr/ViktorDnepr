let arrTtt = ["X", "O"],
    o = 3,
    x = 3,
    arrTable = [],
    str = '';


for (let i = 0; i < x; i++) {

    arrTable[i] = [];

    for (let j = 0; j < o; j++) {
        arrTable[i][j] = arrTtt[Math.floor(Math.random() * arrTtt.length)];
    }
}
str = arrTable.join('\n');

console.log(str);