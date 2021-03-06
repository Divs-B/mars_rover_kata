import { RoversOnMars } from "../src/mars_main";

//--Valid cases--//
it.each([
    [
        [[5, 5], [3, 3, "N", "LM"], [4, 4, "E", "MM"]],
        [[2, 3, "W"], [5, 4, "E"]]
    ],
    [
        [[5, 5], [1, 2, "N", "LMLMLMLMM"], [3, 3, "E", "MMRMMRMRRM"]],
        [[1, 3, "N"], [5, 1, "E"]]
    ],
    [
        [[5, 5], [1, 2, "N", "LMLMLMLMM"], [3, 3, "E", "MMRMMRMRRM"], [1, 2, "N", "LMLMLMLMM"], [3, 3, "E", "MMRMMRMRRM"], [1, 2, "N", "LMLMLMLMM"], [3, 3, "E", "MMRMMRMRRM"]],
        [[1, 3, "N"], [5, 1, "E"], [1, 3, "N"], [5, 1, "E"], [1, 3, "N"], [5, 1, "E"]]

    ],
    [
        [[500, 500], [20, 7, "S", "MMMMMMRLMLLL"], [3, 3, "E", "MMRMMRMRRM"]],
        [[20, 0, "W"], [5, 1, "E"]]
    ]
])("calculate movements for all the rovers with valid input and valid plateau size '", (input, output) => {
    const rovermars = new RoversOnMars()
    const result = rovermars.driveRoversOnMars(input)
    expect(result).toStrictEqual(output)
})


//---Edge cases--//
describe("driveRoversOnMars", () => {
    test("check driveRover functionality processing exception thrown when valid input is not passed", () => {
        const input: Object = NaN
        const rovermars = new RoversOnMars()
        expect(() => rovermars.driveRoversOnMars(input)).toThrow();
    })
})

describe("driveRoversOnMars", () => {
    test("check driveRovers functionality processing exception thrown when plateau size 0,0 is passed", () => {
        const input: Object = [[0, 0], [3, 3, "N", "LM"], [4, 4, "E", "MM"]]
        const rovermars = new RoversOnMars()
        expect(() => rovermars.driveRoversOnMars(input)).toThrow();
    })
})

describe("driveRoversOnMars", () => {
    test("check driveRovers functionality processing exception thrown when rovers input does not contain valid letters", () => {
        const input: Object = [[5, 5], [3, 3, "N###", "LM//"], [4, 4, "E", "MM"]]
        const rovermars = new RoversOnMars()
        expect(() => rovermars.driveRoversOnMars(input)).toThrow();
    })
})


describe("driveRoversOnMars", () => {
    test("check driveRovers functionality processing exception thrown when plateau input contain negative range", () => {
        const input: Object = [[-5, -5], [3, 3, "N", "LM"], [4, 4, "E", "MM"]]
        const rovermars = new RoversOnMars()
        expect(() => rovermars.driveRoversOnMars(input)).toThrow();
    })
})

describe("driveRoversOnMars", () => {
    test("check driveRovers functionality processing exception thrown when rovers input contain negative coordinates", () => {
        const input: Object = [[5, 5], [-3, -3, "N", "LM"], [-4, -4, "E", "MM"]]
        const rovermars = new RoversOnMars()
        expect(() => rovermars.driveRoversOnMars(input)).toThrow();
    })
})
