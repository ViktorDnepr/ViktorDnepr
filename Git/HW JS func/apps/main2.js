function factorial(n) {
    let z = 1;
    for (i = 1; i <= n; i++) z = z * i;
    return (z);
}
{
    let x = prompt("Введите число, факториал которого необходимо вычислить:");
    let y = factorial(x);
    if (x >= 0) {
        alert("факториал числа " + x + " равен " + y);
    }
    else
        if (x < 0) {
            alert("Внимание! Факториала для отрицательных чисел не существует!");
        }
    else
        if (isNaN(x)) {
            alert("Внимание! Факториал вычисляется только у чисел!");
        }
} 