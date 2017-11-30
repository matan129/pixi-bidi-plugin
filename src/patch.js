import * as PIXI from 'pixi.js';

export function patchPixiText() {
    const original = PIXI.Text.prototype.drawLetterSpacing;
    PIXI.Text.prototype.drawLetterSpacing = function() {
        if (this.style.forceRtl) {
            arguments[1] = this.canvas.width - arguments[1]
        }

        return original.apply(this, arguments);
    }
}
