import * as PIXI from 'pixi.js';
import {getPlaygroundDiv} from "./playground";

export function patchPixiText() {
    const originalDrawLetterSpacing = PIXI.Text.prototype.drawLetterSpacing;
    PIXI.Text.prototype.drawLetterSpacing = function() {
        if (this.style.forceRtl) {
            arguments[1] = this.canvas.width - arguments[1]
        }

        return originalDrawLetterSpacing.apply(this, arguments);
    };

    const originalDestroy = PIXI.Text.prototype.destroy;
    PIXI.Text.prototype.destroy = function() {
        getPlaygroundDiv().removeChild(this.canvas);
        return originalDestroy.apply(this, arguments);
    }
}
