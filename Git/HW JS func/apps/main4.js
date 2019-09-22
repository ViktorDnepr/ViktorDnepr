let a = parseInt(prompt('Введите длину одной стороны (числом)')),
    b = parseInt(prompt('Введите длину второй стороны (числом)'));


function sq(a, b) {
    if (isNaN(a) && isNaN(b)) return 'Вы ввели некорректное значение';
    if (a <= 0 || isNaN(a)) return b * b;
    if (b <= 0 || isNaN(b)) return a * a;
    else return a * b;
}
alert(sq(a, b));



