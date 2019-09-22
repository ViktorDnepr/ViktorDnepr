let arr = [];
    
for(let k = 0; k < 10; k++){

    arr.push(prompt('Вводите числа от 0 до 100: '));

    if(arr[k] < 0 || arr[k] > 100 || isNaN(arr[k])){
        alert('Вы ввели недопустимое значение! Только числа от 0 до 100');
        break;
    }
}

let sPoint = [...arr],
    max = [],
    num = [];

arr.sort(function(a, b){
    return a - b;
});

for(let l = 0; l < 3; l++){
    max.push(arr.pop());
    num.push(sPoint.indexOf(max[l]));
}
alert("Победители: " + num[0] + ": " + max[0] + " очков, "+ num[1] + ": " + max[1] + " очков, " + num[2] + ": " + max[2] + " очков");

console.log(sPoint);
console.log(arr);
console.log(max);
console.log(num);