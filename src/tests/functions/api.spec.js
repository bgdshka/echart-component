import { apiCallMock } from "../../functions/api";

// Mock random
const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath;

it("apiCallMock should return Object correctly", async () => {
  expect(await apiCallMock()).toEqual({data: [50, 50, 50, 50, 50, 50, 50]});
});
