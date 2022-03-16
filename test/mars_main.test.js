"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mars_main_1 = require("../src/mars_main");
describe("roverPositionMovedTo", () => {
    test("it will display final position of rovers from initial position", () => {
        const input = [[5, 5], [1, 2, "N", "LMLMLMLMM"], [3, 3, "E", "MMRMMRMRRM"]];
        const output = [[1, 3, "N"], [5, 1, "E"]];
        const rovermars = new mars_main_1.RoversOnMars();
        const result = rovermars.roversPositionMovedTo(input);
        expect(result).toStrictEqual(output);
    });
});
