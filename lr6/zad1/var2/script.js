let array = [{ id: 2, name: "Организация", parent_id: null },
    { id: 3, name: "Бухгалтерия", parent_id: 2 },
    { id: 6, name: "Отдел охраны", parent_id: 2 },
    { id: 7, name: "Караульная служба", parent_id: 6 },
    { id: 8, name: "Бюро пропусков", parent_id: 6 },
    { id: 12, name: "Патентный отдел", parent_id: 2 },
    { id: 13, name: "Лётная служба", parent_id: 2 },
    { id: 14, name: "Лётный отряд Боинг 737", parent_id: 13 },
    { id: 17, name: "Лётный отряд Боинг 747", parent_id: 13 },
    { id: 18, name: "1-ая авиационная эксадрилия Боинг 737", parent_id: 14 },
    { id: 19, name: "2-ая авиационная эскадрилия Боинг 737", parent_id: 14 },
    { id: 21, name: "Лётно-методический отдел", parent_id: 13 },
];
let par_array = [];

function createList(array) {
    if (array.length != 0) {
        for (let i = 0; i < array.length; i++) {
            for (let k = i; k < array.length; k++) {
                if (array[i].parent_id == null || array[i].par == true) {
                    writeList(array[i].name, array[i].id, array[i].parent_id);
                    par_array.push(array[i].id);
                    array.splice(i, 1);
                    break;
                }
            }
            createChildList(par_array, array);
        }

    }
}

function createChildList(par_array, array) {
    while (par_array.length) {
        let par_id = par_array.pop();
        for (let index in array) {
            if (par_id == array[index].parent_id) {
                array[index].par = true;
            }
        }
    }
    createList(array);
}

function writeList(name, id, parent_id) {
    if (parent_id == null) {
        let div = document.getElementById('sortedList');
        div.innerHTML += `<div style="margin-left: 20px" id=${id}>${name}</div>`;
    } else {
        let div = document.getElementById(`${parent_id}`);
        div.innerHTML += `<div style="margin-left: 20px" id=${id}>${name}</div>`;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    createList(array);
});