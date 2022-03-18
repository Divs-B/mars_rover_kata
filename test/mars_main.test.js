"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mars_main_1 = require("../src/mars_main");
//----test double 'mock' to check dependency of logger in mars_main
// import { Logger } from "../src/logger";
// jest.mock('../src/logger')
// let dummyDetails = [];
// const mockedClass = Logger as jest.MockedClass<typeof Logger>;
// const mockLogger = jest.fn()
// beforeEach(() => {
//     dummyDetails = [[5, 5], [3, 3, "N", "LM"], [4, 4, "E", "MM"]]
//     mockedClass.mockClear
// });
// afterEach(() => {
//     jest.clearAllMocks()
// })
// it('We can check ...', () => {
//     const loggs = new Logger();
//     const rovermars = new RoversOnMars()
//     const result = rovermars.intialize(dummyDetails)
//     expect(mockLogger).toHaveBeenCalled();
// });
//----different inputs case---//
const input = {};
const output = {};
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
    const rovermars = new mars_main_1.RoversOnMars();
    const result = rovermars.driveRoversOnMars(input);
    expect(result).toStrictEqual(output);
});
//---Edge case--//
describe("driveRoversOnMars", () => {
    test("check driveRover functionality processing exception thrown when valid input is not passed", () => {
        const input = NaN;
        const rovermars = new mars_main_1.RoversOnMars();
        expect(() => rovermars.driveRoversOnMars(input)).toThrow();
    });
});
describe("driveRoversOnMars", () => {
    test("check driveRovers functionality processing exception thrown when plateau size 0,0 is passed", () => {
        const input = [[0, 0], [3, 3, "N", "LM"], [4, 4, "E", "MM"]];
        const rovermars = new mars_main_1.RoversOnMars();
        expect(() => rovermars.driveRoversOnMars(input)).toThrow();
    });
});
describe("driveRoversOnMars", () => {
    test("check driveRovers functionality processing exception thrown when rovers input does not contain valid letters", () => {
        const input = [[5, 5], [3, 3, "N###", "LM//"], [4, 4, "E", "MM"]];
        const rovermars = new mars_main_1.RoversOnMars();
        expect(() => rovermars.driveRoversOnMars(input)).toThrow();
    });
});
