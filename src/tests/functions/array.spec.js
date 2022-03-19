import { getRandomArray } from "../../functions/array";

// Mock random
const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath;

it("getRandomArray should return Array correctly", () => {
  expect(getRandomArray(2,10)).toEqual([5,5]);
});
