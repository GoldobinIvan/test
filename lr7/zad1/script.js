const items = [
    { key: 1, caption: 'Поле № 1' },
    { key: 2, caption: 'Поле № 2' },
    { key: 3, caption: 'Поле № 3' },
    { key: 4, caption: 'Поле № 4' },
    { key: 5, caption: 'Поле № 5' },
    { key: 6, caption: 'Поле № 6' },
    { key: 7, caption: 'Поле № 7' },
    { key: 8, caption: 'Поле № 8' },
    { key: 9, caption: 'Поле № 9' },
    { key: 10, caption: 'Поле № 10' },
    { key: 11, caption: 'Поле № 11' },
    { key: 12, caption: 'Поле № 12' },
    { key: 13, caption: 'Поле № 13' },
    { key: 14, caption: 'Поле № 14' },
    { key: 15, caption: 'Поле № 15' }
];

let field;
let message;
window.onload = function () {
    field = this.document.getElementById('field');
    message = this.document.getElementById('message');
    initContent();
}

function initContent() {
    for (let item of items) {
        let elmItem = document.createElement('div');
        elmItem.setAttribute('id', `i${item.key}`);
        elmItem.setAttribute('class', `item`);
        elmItem.innerHTML = `<p>${item.key}</p>`
        elmItem.addEventListener('click', setMessage.bind(null, item))
        elm.append(elmItem);
    }
}

function setMessage(item) {
    message.innerHTML = `<p>${item.caption}</p>`
}


function initContent() {
    for (let item of items) {
        let newElm = document
    }
}