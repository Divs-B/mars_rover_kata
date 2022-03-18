import { Vehicle } from "./vehicle";
import { Plateau } from "./plateau";


export class RoversOnMars {

    plateau: Plateau = { sizex: 0, sizey: 0 }
    rovers: Array<Vehicle> = []


    intialize(input: Object): void {
        let index: number = 0
        for (const [key, value] of Object.entries(input)) {
            if (Number.parseInt(key) === 0) {
                this.plateau = { sizex: value[0], sizey: value[1] }
            } else {
                this.rovers[index] = { x: value[0], y: value[1], orientation: value[2], directionToMove: value[3] }
                index += 1
            }
        }
    }

    isPlateauAptSize(x: number, y: number): boolean {
        return (this.plateau.sizex > 0 && this.plateau.sizey > 0)
    }

    calculateMovesForEachRover(rovers: Array<Vehicle>): Object {
        rovers.forEach(aRover => {
            const dirs = [...aRover.directionToMove]
            dirs.forEach((dir, i) => {
                switch (dir) {
                    case "L":
                        if (aRover.orientation === "N")
                            aRover.orientation = "W"
                        else if (aRover.orientation === "W")
                            aRover.orientation = "S"
                        else if (aRover.orientation === "S")
                            aRover.orientation = "E"
                        else if (aRover.orientation === "E")
                            aRover.orientation = "N"
                        break;
                    case "R":
                        if (aRover.orientation === "N")
                            aRover.orientation = "E"
                        else if (aRover.orientation === "E")
                            aRover.orientation = "S"
                        else if (aRover.orientation === "S")
                            aRover.orientation = "W"
                        else if (aRover.orientation === "W")
                            aRover.orientation = "N"
                        break;
                    case "M":
                        if (aRover.orientation === "N")
                            aRover.y = aRover.y < this.plateau.sizey ? aRover.y + 1 : aRover.y
                        else if (aRover.orientation === "E")
                            aRover.x = aRover.x < this.plateau.sizex ? aRover.x + 1 : aRover.x
                        else if (aRover.orientation === "W")
                            aRover.x = aRover.x > 0 ? aRover.x - 1 : aRover.x
                        else if (aRover.orientation === "S")
                            aRover.y = aRover.y > 0 ? aRover.y - 1 : aRover.y
                        break;
                    default:
                        throw new Error("Rover input is not valid!");

                }
            })
        })
        const finalResult = this.rovers.map(aRover => {
            return [aRover.x, aRover.y, aRover.orientation]
        })
        return [...finalResult] as Object
    }


    driveRoversOnMars(input: Object): Object {
        if (!input)
            throw new Error("Undefined input");

        this.intialize(input)

        if (!this.isPlateauAptSize(this.plateau.sizex, this.plateau.sizey))
            throw new Error('Plateau should be striclty more then 0,0');

        return this.calculateMovesForEachRover(this.rovers)
    }


}
