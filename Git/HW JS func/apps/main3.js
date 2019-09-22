let arr = [];

for (let i = 0; i < 3; i++) {

    arr.push(prompt('Вводите цифры (0-9): '));

    if (arr[i] < 0 || arr[i] > 9 || isNaN(arr[i])) {
        alert('Вы ввели недопустимое значение! Только числа цифры');
        break;
    }
}
function joinNum(arr) {
    let joinArr = 0;
    joinArr = arr.join('');
    return parseInt(joinArr);
}

alert(joinNum(arr));