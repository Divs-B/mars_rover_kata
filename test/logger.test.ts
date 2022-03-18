import { RoversOnMars } from "../src/mars_main";
//import * as logs from '../src/logger'
import { Logger } from '../src/logger'

jest.mock('../src/mars_main')
jest.mock('../src/logger')


const loggs = Logger.prototype.log("test");


let dummyDetails = [];
const mockedClass = Logger as jest.MockedClass<typeof Logger>;

beforeEach(() => {
  dummyDetails = [[5, 5], [3, 3, "N", "LM"], [4, 4, "E", "MM"]]
  //jest.spyOn(logs.Logger, 'log');
  //loggs = jest.mocked(logs, true);
  //loggs = Logger as jest.MockedClass<typeof Logger>;
  //loggs = jest.mocked(logs)
  mockedClass.mockClear
});

afterEach(() => {
  jest.clearAllMocks()
})



//loggs = Logger as jest.MockedClass<typeof Logger>;
// jest.mocked(logs);
// it('mock the logger', () => {
//   const rovermars = new RoversOnMars()
//   rovermars.driveRoversOnMars(dummyDetails)
//   expect(loggs).toHaveBeenCalledTimes(1)
// })

//---

it('We can check ...', () => {
  //const loggs = new Logger();
  const rovermars = new RoversOnMars()
  const result = rovermars.driveRoversOnMars(dummyDetails)
  expect(loggs).toHaveBeenCalled();
});

//----




