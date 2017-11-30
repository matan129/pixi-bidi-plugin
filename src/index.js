import {createPlaygroundDiv, getPlaygroundDiv} from "./playground";
import {patchPixiText} from "./patch";

export function initPixiBidiPlugin() {
    createPlaygroundDiv();
    patchPixiText();
}

export function createRtlCanvas(attributes) {
    const canvas = document.createElement('canvas');

    for(let [name, value] of Object.entries(Object.assign({}, attributes, { dir: 'rtl' }))) {
        canvas.setAttribute(name, value);
    }

    getPlaygroundDiv().appendChild(canvas);

    return canvas;
}
