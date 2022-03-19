import { convertSeriesToOption } from "../../functions/data";

it("convertSeriesToOption should return Object option correctly", () => {
  const mockSeries = [{ type: "bar", data: [1, 2] }];
  expect(convertSeriesToOption(mockSeries)).toEqual({
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: mockSeries,
  });
});
