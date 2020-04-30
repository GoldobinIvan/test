/**
 * 1.5	Задание Написать скрипт,
 * который создает массив,
 * в котором будет записана таблица умножения. 
 * Например, при обращении к ячейке 
 * с индексами [5][5] мы должны получить 25.
 */


let arr = [0];
for (let i = 0; i <= 10; i++) {
    let bor = [0];
    for (let k = 1; k <= 10; k++) {
        bor[k] = i * k;
    }
    arr.push(bor);
}

arr.shift();

document.write(arr.join('<br>'));

document.write('<br>');

document.write(arr[5][5]);