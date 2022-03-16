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
        // type direction = "L" | "R" | "M" | "N" | "S" | "E" | "W"
        // const dir: direction = "L"
        this.rovers.forEach(aRover => {
            const dirs = [...aRover.directionToMove];
            dirs.forEach((dir, i) => {
                switch (dir) {
                    case "L":
                        console.log("go for L");
                        if (aRover.orientation === "N")
                            aRover.orientation = "W";
                        else if (aRover.orientation === "W")
                            aRover.orientation = "S";
                        else if (aRover.orientation === "S")
                            aRover.orientation = "E";
                        else if (aRover.orientation === "E")
                            aRover.orientation = "N";
                        break;
                    case "R":
                        console.log("go for R");
                        if (aRover.orientation === "N")
                            aRover.orientation = "E";
                        else if (aRover.orientation === "E")
                            aRover.orientation = "S";
                        else if (aRover.orientation === "S")
                            aRover.orientation = "W";
                        else if (aRover.orientation === "W")
                            aRover.orientation = "N";
                        break;
                    case "M":
                        console.log("go for M " + this.plateau[1]);
                        if (aRover.orientation === "N")
                            aRover.y = aRover.y < this.plateau[1] ? aRover.y + 1 : aRover.y;
                        else if (aRover.orientation === "E")
                            aRover.x = aRover.x < this.plateau[0] ? aRover.x + 1 : aRover.x;
                        else if (aRover.orientation === "W")
                            aRover.x = aRover.x > 0 ? aRover.x - 1 : aRover.x;
                        else if (aRover.orientation === "S")
                            aRover.y = aRover.y > 0 ? aRover.y - 1 : aRover.y;
                        break;
                }
            });
        });
        const finalResult = this.rovers.map(aRover => {
            return [aRover.x, aRover.y, aRover.orientation];
        });
        return [...finalResult];
    }
}
exports.RoversOnMars = RoversOnMars;
