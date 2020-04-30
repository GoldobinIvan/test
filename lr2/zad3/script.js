/**
 * 2.4 Задание 
 * Написать скрипт, который преобразует
 * русский текст в транслит и выводит его в консоль.
 * ГОСТ 7.79-2000. Нужно запросить у пользователя
 * строку текста (проверить, чтобы она была не пустой),
 * перевести ее в транслит и вывести в консоль.
 * Нужно сохранять регистр букв.
 * Если символ не является кириллическим
 * (цифра, знак и т.п.), то его нужно оставить без изменений.
 */
var srav = new Array();
srav['А'] = 'A';
srav['а'] = 'a';
srav['Б'] = 'B';
srav['б'] = 'b';
srav['В'] = 'V';
srav['в'] = 'v';
srav['Г'] = 'G';
srav['г'] = 'g';
srav['Д'] = 'D';
srav['д'] = 'd';
srav['Е'] = 'E';
srav['е'] = 'e';
srav['Ё'] = 'Yo';
srav['ё'] = 'yo';
srav['Ж'] = 'Zh';
srav['ж'] = 'zh';
srav['З'] = 'Z';
srav['з'] = 'z';
srav['И'] = 'I';
srav['и'] = 'i';
srav['Й'] = 'J';
srav['й'] = 'j';
srav['К'] = 'K';
srav['к'] = 'k';
srav['Л'] = 'L';
srav['л'] = 'l';
srav['М'] = 'M';
srav['м'] = 'm';
srav['Н'] = 'N';
srav['н'] = 'n';
srav['О'] = 'O';
srav['о'] = 'o';
srav['П'] = 'P';
srav['п'] = 'p';
srav['Р'] = 'R';
srav['р'] = 'r';
srav['С'] = 'S';
srav['с'] = 's';
srav['Т'] = 'T';
srav['т'] = 't';
srav['У'] = 'U';
srav['у'] = 'u';
srav['Ф'] = 'F';
srav['ф'] = 'f';
srav['Х'] = 'X';
srav['х'] = 'x';
srav['Ц'] = 'C';
srav['ц'] = 'c';
srav['Ч'] = 'Ch';
srav['ч'] = 'ch';
srav['Ш'] = 'Sh';
srav['ш'] = 'sh';
srav['Щ'] = 'Shh';
srav['щ'] = 'shh';
srav['Ъ'] = '';
srav['ъ'] = '';
srav['Ы'] = 'Yi';
srav['ы'] = 'yi';
srav['Ь'] = '';
srav['ь'] = '';
srav['Э'] = 'Ye';
srav['э'] = 'ye';
srav['Ю'] = 'Yu';
srav['ю'] = 'yu';
srav['Я'] = 'Ya';
srav['я'] = 'ya';

while (true) {
    let stroka = prompt('Введите строку', 'Привет, я строка!');
    if (stroka != null) {
        let arr = stroka.split('');
        for (let i = 0; i < arr.length; i++) {
            if (srav[arr[i]] != undefined) {
                arr[i] = srav[arr[i]];
            }

        }
        document.write(arr.join(''));
        break;
    }
}