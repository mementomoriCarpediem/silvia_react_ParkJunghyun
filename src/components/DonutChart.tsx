import React, { useMemo } from 'react';
import { Space } from 'antd';
import { VictoryLegend, VictoryPie } from 'victory';
import {
  calculateChartDataSum,
  getLegendDataFromChartData,
} from '@/utils/index';

type Props = {
  chartData: { x: string; y: number }[];
  colorScale: string[];
};

const DonutChart = ({ chartData, colorScale }: Props) => {
  const chartDataSum = useMemo(
    () => calculateChartDataSum(chartData),
    [chartData]
  );

  const legendData = useMemo(
    () => getLegendDataFromChartData(chartData),
    [chartData]
  );

  return (
    <Space>
      <VictoryPie
        height={300}
        innerRadius={50}
        data={chartData}
        colorScale={colorScale}
        labels={({ datum }) => [
          `${datum.x}: ${datum.y}명`,
          `(${(datum.y / chartDataSum) * 100}%)`,
        ]}
        labelRadius={({ innerRadius }) => Number(innerRadius) + 30}
        style={{ labels: { fill: 'white' } }}
        padding={10}
      />
      <VictoryLegend
        orientation="vertical"
        data={legendData}
        colorScale={colorScale}
        height={chartData.length > 2 ? 150 : 50}
        width={100}
      />
    </Space>
  );
};

export default DonutChart;
