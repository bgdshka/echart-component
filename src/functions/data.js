// There may be different functions here
// or a more complex function to convert data to options for echarts.
// Depends on the task/subject domain.

/**
 * Convert series data to options in week interval for `echarts`.
 * @param {Array[Object]} series - array series
 * @returns {Array} - generated array
 */
export const convertSeriesToOption = (series = []) => {
  return {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series,
  };
};
