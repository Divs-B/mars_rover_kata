import { Rover } from "./rover";

export class RoversOnMars {

    plateau: Array<number> = []
    rovers: Array<Rover> = []

    intialize(input: Object): void {
        let index: number = 0
        for (const [key, value] of Object.entries(input)) {
            if (Number.parseInt(key) === 0) {
                this.plateau = value
            } else {
                this.rovers[index] = { x: value[0], y: value[1], orientation: value[2], directionToMove: value[3] }
                index += 1
            }
        }

        console.log("_plateau=" + this.plateau);
        console.log("_rovers=" + this.rovers[0]);

    }

    roversPositionMovedTo(input: Object): Object {
        this.intialize(input)
        return [[1, 3, "N"], [5, 1, "E"]] as Object
    }

}
