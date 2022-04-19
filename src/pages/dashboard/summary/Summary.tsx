import { Card, Col, Image, Row, Space, Statistic, Typography } from 'antd';
import { ReportIcon } from '@assets/icons';
import { FieldTimeOutlined, HeartOutlined } from '@ant-design/icons';

import {
  attendanceDays,
  averageAccessTime,
  averageActivityCount,
  leftChartData,
  rightChartData,
} from '../../../mockData';

import { leftChartColorScale, rightChartColorScale } from '@constants/chart';
import DonutChart from '@components/DonutChart';

// import styles from './Summary.less';

const summaryPrimaryStatistics = [
  {
    title: '평균 출석일 수',
    value: `${attendanceDays}일`,
    img: <Image src={ReportIcon} width={90} preview={false} />,
  },
  {
    title: '평균 접속 시간',
    value: `${averageAccessTime[0]} 시간 ${averageAccessTime[1]}분`,
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

type Props = {};

function Summary({}: Props) {
  return (
    <>
      <Row gutter={[16, 16]} style={{ marginBottom: 32 }}>
        {summaryPrimaryStatistics.map((item) => {
          return (
            <Col key={item.title} xs={24} md={12} lg={8}>
              <Space
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'white',
                  paddingLeft: 20,
                  paddingTop: 30,
                  paddingBottom: 30,
                }}
              >
                {item.img}
                <Statistic
                  title={
                    <Typography style={{ fontSize: 16 }}>
                      {item.title}
                    </Typography>
                  }
                  value={item.value}
                  valueStyle={{ fontSize: 38, fontWeight: 500, marginTop: 15 }}
                />
              </Space>
            </Col>
          );
        })}
      </Row>
      <Row gutter={[16, 16]}>
        <Col md={24} lg={12}>
          <Card
            title="사용자 분포추이 - 성별"
            headStyle={{ fontWeight: 'bold' }}
            style={{ backgroundColor: 'white', height: '100%' }}
          >
            <DonutChart
              chartData={leftChartData}
              colorScale={leftChartColorScale}
            />
          </Card>
        </Col>
        <Col md={24} lg={12}>
          <Card
            title="사용자 분포추이 - 연령대"
            headStyle={{ fontWeight: 'bold' }}
            style={{ backgroundColor: 'white', height: '100%' }}
          >
            <DonutChart
              chartData={rightChartData}
              colorScale={rightChartColorScale}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Summary;
