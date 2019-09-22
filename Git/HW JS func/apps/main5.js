function perfNumb(a) {
    let num = 0;

    for (let i = a - 1; i > 0; i--) {
        if (a % i == 0) {
            num += i;
        }
    }
    return (a == num) ? console.log(a + ": Поздравляю! Ваше число - совершенное!") : console.log(a + ": Увы, Ваше число - не совершенно.");
}

let a = parseInt(prompt("Введите интересующее Вас число."));

perfNumb(a);