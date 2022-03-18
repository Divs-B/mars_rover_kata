/*
TODO test double on logger or any other dependencies

import { RoversOnMars } from "../src/mars_main";
import { Logger } from '../src/logger'

jest.mock('../src/mars_main')
jest.mock('../src/logger')

const loggs = Logger.prototype.log("test");


let dummyDetails = [];
const mockedClass = Logger as jest.MockedClass<typeof Logger>;

beforeEach(() => {
  dummyDetails = [[5, 5], [3, 3, "N", "LM"], [4, 4, "E", "MM"]]
  mockedClass.mockClear
});

afterEach(() => {
  jest.clearAllMocks()
})

it('We can check ...', () => {
  //const loggs = new Logger();
  const rovermars = new RoversOnMars()
  const result = rovermars.driveRoversOnMars(dummyDetails)
  expect(loggs).toHaveBeenCalled();
});

*/
