/**
 * 1.9 Задание: 
 * Написать функцию для глубинного
 * клонирования массивов (если массив «многомерный»).
 */
function arrayClon (arrMnog) {
    var i, copy;
    
    if (Array.isArray(arr)) {
        copy = arr.slice(0);
        for (i = 0; i < copy.lenght; i++) {
            copy[i] = arrayClon(copy[i]);
        }
        return copy;
    } else {
        return arr;
    }
}

let arr =
    [[1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]]

let arrClon = arrayClon(arr);
console.log(arr);
console.log(arrClon);
console.log(arr[1][2]);
console.log(arrClon[1][2]);
