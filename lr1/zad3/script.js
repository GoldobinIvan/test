/**
 * Написать скрипт, который запрашивает имя
 */

let name;
do {
    name = prompt('Введите имя: ', 'Иван');
    console.log(name);
    if (name == null){
        continue;
    }
    if (!confirm('Имя введено корректно?'))
	{
		name = null;
	}
} while (name == null || name === '');
alert('Здравствуй, ' + name);
