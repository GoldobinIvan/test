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


function createList(array) {
    let parent_arr = [];
    if (array.length != 0) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].parent_id == null)
                parent_arr.push(array[i]);
            array[i].children = [];
            for (let k = i; k < array.length; k++) {
                if (array[i].id == array[k].parent_id) {
                    array[i].children.push(array[k]);
                }
            }
        }
        writeList(parent_arr);
    }
}

function writeList(array) {
    for (item of array) {
        if (item.parent_id == null) {
            let div = document.getElementById(`sortedList`);
            div.innerHTML += `<div style="margin-left: 20px" id=${item.id}>${item.name}</div>`;
            writeList(item.children);
        } else {
            let div = document.getElementById(`${item.parent_id}`);
            div.innerHTML += `<div style="margin-left: 20px" id=${item.id}>${item.name}</div>`;
            writeList(item.children);
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    createList(array);
});

