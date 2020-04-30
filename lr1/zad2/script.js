/**
 * Вывести таблицу умножения
 * 1 2 3 4 5 6 7 8 9
 * 2 4 6 8 10 12 14 16 18
 */
let str = '';
for (let i = 1; i < 10; i++) {
    str = str + `
    `;
    for (let j = 1; j < 10; j++) {
        str = str + ' ' + (i * j);
    }
}
console.log(str);