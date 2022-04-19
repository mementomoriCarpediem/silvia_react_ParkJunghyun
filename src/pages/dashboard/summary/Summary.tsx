import { useMemo } from 'react';

import { Card, Col, Image, Row, Space, Typography } from 'antd';
import { ReportIcon } from '@assets/icons';
import { FieldTimeOutlined, HeartOutlined } from '@ant-design/icons';
import { VictoryPie, VictoryLegend } from 'victory';
import {
  attendanceDays,
  averageAccessTime,
  averageActivityCount,
  leftChartData,
  rightChartData,
} from '../../../mockData';
import { calculateChartDataSum } from '@utils/index';
import { leftChartColorScale, rightChartColorScale } from '@constants/chart';
import DonutChart from '@components/DonutChart';

// import styles from './Summary.less';

const { Title } = Typography;

type Props = {};

function Summary({}: Props) {
  const leftChartDataSum = useMemo(
    () => calculateChartDataSum(leftChartData),
    []
  );
  const rightChartDataSum = useMemo(
    () => calculateChartDataSum(rightChartData),
    []
  );

  return (
    <>
      <Row gutter={[16, 16]} style={{ marginBottom: 32, height: '25%' }}>
        <Col span={8}>
          <Space
            style={{
              width: '100%',
              height: '100%',
              paddingLeft: 20,
              backgroundColor: 'white',
            }}
          >
            <Image src={ReportIcon} width={90} preview={false} />
            <Space direction="vertical">
              <Typography style={{ fontSize: 16 }}>평균 출석일 수</Typography>
              <Title style={{ margin: 0 }}>{attendanceDays} 일</Title>
            </Space>
          </Space>
        </Col>
        <Col span={8}>
          <Space
            style={{
              width: '100%',
              height: '100%',
              paddingLeft: 20,
              backgroundColor: 'white',
            }}
          >
            <FieldTimeOutlined
              style={{ fontSize: 67, color: '#757575', padding: 15 }}
            />
            <Space direction="vertical">
              <Typography style={{ fontSize: 16 }}>평균 접속 시간</Typography>
              <Title style={{ margin: 0 }}>
                {averageAccessTime[0]} 시간 {averageAccessTime[1]}분
              </Title>
            </Space>
          </Space>
        </Col>
        <Col span={8}>
          <Space
            style={{
              width: '100%',
              height: '100%',
              paddingLeft: 20,
              backgroundColor: 'white',
            }}
          >
            <HeartOutlined
              style={{ fontSize: 67, color: '#757575', padding: 15 }}
            />
            <Space direction="vertical">
              <Typography style={{ fontSize: 16 }}>평균 활동 횟수</Typography>
              <Title style={{ margin: 0 }}>{averageActivityCount}회</Title>
            </Space>
          </Space>
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ height: '70%' }}>
        <Col span={12}>
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
        <Col span={12}>
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
