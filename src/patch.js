import * as PIXI from 'pixi.js';
import {getPlaygroundDiv} from "./playground";

export function patchPixiText() {
    const originalDrawLetterSpacing = PIXI.Text.prototype.drawLetterSpacing;
    PIXI.Text.prototype.drawLetterSpacing = function(text, x, ...extras) {
        if (this.style.forceRtl) {
            x = this.canvas.width - x
        }

        return originalDrawLetterSpacing.apply(this, text, x, ...extras);
    };

    const originalDestroy = PIXI.Text.prototype.destroy;
    PIXI.Text.prototype.destroy = function() {
        getPlaygroundDiv().removeChild(this.canvas);
        return originalDestroy.apply(this, arguments);
    }
}
