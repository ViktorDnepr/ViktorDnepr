let a = prompt('Введите первое число');
let b = prompt('Введите второе число');

function compNumbers(a, b) {
    if (a > b) return 1; 
    if (a == b) return 0; 
    if (a < b) return -1; 
}
if (isNaN(a) || isNaN(b)) {
    alert('Вы ввели неправильные параметры, только числа!');
} else {
    alert(compNumbers(a, b));
}