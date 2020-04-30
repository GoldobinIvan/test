let day = 100;
let dayProsholo = prompt('Введите число дней', '22');
let dayOstaloc = (day - dayProsholo);
/**
 * Остался 1 день
 * Осталось 2-4 дня
 * Осталось 5-20 дней
 */
if (dayOstaloc >= 10 && dayOstaloc <= 20) {
    console.log(`Осталось ${dayOstaloc} дней`);
} else {
    Ostoloc = dayOstaloc % 10;
    switch (Ostoloc) {
        case 0:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            console.log(`Осталось ${dayOstaloc} дней`);
            break;
        case 2:
        case 3:
        case 4:
            console.log(`Осталось ${dayOstaloc} дня`)
            break;
        case 1:
            console.log(`Остался ${dayOstaloc} день`)
            break;
    }
}