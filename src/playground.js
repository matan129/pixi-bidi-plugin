const DIV_ID = 'pixi-bidi-plugin-container';

export function createPlaygroundDiv() {
    const div = document.createElement('div');
    div.id = DIV_ID;
    div.style.display = 'none';
    document.body.appendChild(div);
}

export function getPlaygroundDiv() {
    return document.getElementById(DIV_ID);
}
