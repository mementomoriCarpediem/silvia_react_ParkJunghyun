import { Card, Col, Image, Row, Space, Statistic, Typography } from 'antd';
import { ReportIcon } from '@/assets/index';
import { FieldTimeOutlined, HeartOutlined } from '@ant-design/icons';

import {
  attendanceDays,
  averageAccessTime,
  averageActivityCount,
  leftChartData,
  rightChartData,
} from '../../../mockData';

import { leftChartColorScale, rightChartColorScale } from '@/constants/chart';
import DonutChart from '@/components/DonutChart';
import { useWindowSize } from '@/hooks/useWindowSize';
import { breakpoints } from '@/constants/breakpoints';

import styles from '@/pages/dashboard/summary/Summary.module.less';

const summaryPrimaryStatisticsData = [
  {
    title: '평균 출석일 수',
    value: `${attendanceDays}일`,
    img: <Image src={ReportIcon} width={95} preview={false} />,
  },
  {
    title: '평균 접속 시간',
    value: `${averageAccessTime[0]}시간 ${averageAccessTime[1]}분`,
    img: (
      <FieldTimeOutlined
        style={{ fontSize: 67, color: '#757575', padding: 15 }}
      />
    ),
  },
  {
    title: '평균 활동 횟수',
    value: `${averageActivityCount}회`,
    img: (
      <HeartOutlined style={{ fontSize: 67, color: '#757575', padding: 15 }} />
    ),
  },
];

const summaryChartData = [
  {
    title: '사용자 분포추이 - 성별',
    chartData: leftChartData,
    colorScale: leftChartColorScale,
  },
  {
    title: '사용자 분포추이 - 연령대',
    chartData: rightChartData,
    colorScale: rightChartColorScale,
  },
];

function Summary() {
  const { width } = useWindowSize();

  return (
    <>
      <Row
        gutter={[16, 16]}
        style={{ marginBottom: 32 }}
        className={styles.summary_upperlow}
      >
        {summaryPrimaryStatisticsData.map((item) => {
          return (
            <Col key={item.title} xs={24} md={12} lg={8}>
              <Space className={styles.statisticContainer}>
                {item.img}
                <Statistic
                  title={
                    <Typography className={styles.statisticTitle}>
                      {item.title}
                    </Typography>
                  }
                  value={item.value}
                  valueStyle={{
                    fontSize: width && width < breakpoints.xl ? 20 : 38,
                    fontWeight: 500,
                    marginTop: 15,
                  }}
                  style={{ marginLeft: 15 }}
                />
              </Space>
            </Col>
          );
        })}
      </Row>
      <Row gutter={[16, 16]} className={styles.summary_downlow}>
        {summaryChartData.map((item) => {
          return (
            <Col key={item.title} md={24} lg={12}>
              <Card
                title={item.title}
                headStyle={{ fontWeight: 'bold' }}
                style={{ backgroundColor: 'white', height: '100%' }}
              >
                <DonutChart
                  chartData={item.chartData}
                  colorScale={item.colorScale}
                />
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default Summary;
