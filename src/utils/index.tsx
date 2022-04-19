/**
 * get chartDataSum from chartData for percentage
 * @param chartData
 * @returns number
 */

export const calculateChartDataSum = (
  chartData: { x: string; y: number }[]
) => {
  return chartData.reduce((acc, cur) => acc + cur.y, 0);
};

/**
 * get LegendData from chartData for Legend data input
 * @param chartData
 * @returns legend data input
 */

export const getLegendDataFromChartData = (
  chartData: { x: string; y: number }[]
) => {
  return chartData.map((item) => {
    return { name: item.x };
  });
};
