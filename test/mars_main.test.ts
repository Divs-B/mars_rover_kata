import { RoversOnMars } from "../src/mars_main";

describe("roverPositionMovedTo", () => {
    test("it will display final position of rovers from initial position", () => {
        const input: Object = [[5, 5], [1, 2, "N", "LMLMLMLMM"], [3, 3, "E", "MMRMMRMRRM"]]
        const output: Object = [[1, 3, "N"], [5, 1, "E"]]
        const rovermars = new RoversOnMars()
        const result = rovermars.roversPositionMovedTo(input)
        expect(result).toStrictEqual(output)
    })
})
