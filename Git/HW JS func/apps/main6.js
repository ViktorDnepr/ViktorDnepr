
function perfNumb(a) {
    let num = 0;

    for (let i = a - 1; i > 0; i--) {
        if (a % i == 0) {
            num += i;
        }
    }
    if (a == num) {
        arr.push(a);
    }
}

let a = parseInt(prompt("Введите минимальное число интерисующего диапазона.")),
    b = parseInt(prompt("Введите максимальное число интересующего диапазона.")),
    arr = [];

for (let i = a; i <= b; i++) {
    perfNumb(i)
}
if (arr.length == 0) {
    console.log("Совершенных чисел не обнаруженно.");
} else {
    console.log(arr);
}
