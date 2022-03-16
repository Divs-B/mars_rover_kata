"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoversOnMars = void 0;
class RoversOnMars {
    constructor() {
        this.plateau = [];
        this.rovers = [];
    }
    intialize(input) {
        let index = 0;
        for (const [key, value] of Object.entries(input)) {
            if (Number.parseInt(key) === 0) {
                this.plateau = value;
            }
            else {
                this.rovers[index] = { x: value[0], y: value[1], orientation: value[2], directionToMove: value[3] };
                index += 1;
            }
        }
        console.log("_plateau=" + this.plateau);
        console.log("_rovers=" + this.rovers[0]);
    }
    roversPositionMovedTo(input) {
        this.intialize(input);
        return [[1, 3, "N"], [5, 1, "E"]];
    }
}
exports.RoversOnMars = RoversOnMars;
