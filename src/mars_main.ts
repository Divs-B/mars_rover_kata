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
                this.rovers[index] = { position: { x: value[0], y: value[1], orientation: value[2] }, inputDirectionCommandString: value[3] }
                index += 1
            }
        }
    }

    isPlateauAptSize(x: number, y: number): boolean {
        return (this.plateau.sizex > 0 && this.plateau.sizey > 0)
    }

    calculateMovesForEachRover(rovers: Array<Vehicle>): Object {
        rovers.forEach(aRover => {
            const dirs = [...aRover.inputDirectionCommandString]
            dirs.forEach((dir, i) => {
                switch (dir) {
                    case "L":
                        if (aRover.position.orientation === "N")
                            aRover.position.orientation = "W"
                        else if (aRover.position.orientation === "W")
                            aRover.position.orientation = "S"
                        else if (aRover.position.orientation === "S")
                            aRover.position.orientation = "E"
                        else if (aRover.position.orientation === "E")
                            aRover.position.orientation = "N"
                        break;
                    case "R":
                        if (aRover.position.orientation === "N")
                            aRover.position.orientation = "E"
                        else if (aRover.position.orientation === "E")
                            aRover.position.orientation = "S"
                        else if (aRover.position.orientation === "S")
                            aRover.position.orientation = "W"
                        else if (aRover.position.orientation === "W")
                            aRover.position.orientation = "N"
                        break;
                    case "M":
                        if (aRover.position.orientation === "N")
                            aRover.position.y = aRover.position.y < this.plateau.sizey ? aRover.position.y + 1 : aRover.position.y
                        else if (aRover.position.orientation === "E")
                            aRover.position.x = aRover.position.x < this.plateau.sizex ? aRover.position.x + 1 : aRover.position.x
                        else if (aRover.position.orientation === "W")
                            aRover.position.x = aRover.position.x > 0 ? aRover.position.x - 1 : aRover.position.x
                        else if (aRover.position.orientation === "S")
                            aRover.position.y = aRover.position.y > 0 ? aRover.position.y - 1 : aRover.position.y
                        break;
                    default:
                        throw new Error("Rover input is not valid!");

                }
            })
        })
        const finalResult = this.rovers.map(aRover => {
            return [aRover.position.x, aRover.position.y, aRover.position.orientation]
        })
        return [...finalResult]
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
