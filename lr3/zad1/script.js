/**
 * 1.7 Задание: 
 * Написать функцию, которая будет определять
 * является ли фраза(слово), 
 * введенная пользователем палиндромом.
 */

let stroka;
do {
    stroka = prompt('Введите строку', '');
} while (stroka == null || stroka == false)
let result = palindrom(stroka);
if (result != undefined) {
    if (result == true) {
        console.log('Является палиндромом');
    } else {
        console.log('Не является палиндромом');
    }
}


function palindrom(stroka) {
    if (stroka != null) {
        let arrSrav = stroka.toLowerCase().split('');
        arrSrav = arrSrav.filter(arrSrav => arrSrav.trim() !== "")
        let srav = arrSrav.join('');
        if (srav === arrSrav.reverse().join('')) {
            return true;
        } else {
            return false;
        }
    }
}