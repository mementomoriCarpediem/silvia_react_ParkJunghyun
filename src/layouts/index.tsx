import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { Avatar, Layout, Menu, Space, Typography } from 'antd';

import { LaptopOutlined, UserOutlined } from '@ant-design/icons';

import { PATH_SIMPLE } from '@routes/path';
import styles from './index.less';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

const dashboardSubMenuInfo = [
  { title: '요약', path: PATH_SIMPLE.summary },
  { title: '인지훈련', path: PATH_SIMPLE.cognitive_training },
  { title: '생활관리', path: PATH_SIMPLE.life_management },
];

type Props = {};

const DashboardLayout = (props: Props) => {
  const navigate = useNavigate();

  return (
    <Layout style={{ height: '100vh' }}>
      <Header style={{ backgroundColor: 'white' }}>
        <Space>
          <Avatar size="large" icon={<UserOutlined />} />
          <Typography className="userName">박정현</Typography>
        </Space>
      </Header>
      <Layout>
        <Sider width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['sub1']}
            defaultOpenKeys={['sub2']}
            theme="dark"
            // className="dashboardMenu"
            // className={styles.dashboardMenu}
            style={{
              height: '100%',
              backgroundColor: '#100E66',
              padding: 5,
            }}
          >
            <Menu.Item
              key="sub1"
              icon={<UserOutlined />}
              onClick={() => navigate(PATH_SIMPLE.home)}
              style={{ margin: 0, width: '100%', color: 'white' }}
            >
              홈
            </Menu.Item>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="대시보드">
              {dashboardSubMenuInfo.map((item, index) => {
                return (
                  <Menu.Item
                    key={item.title}
                    onClick={() => navigate(item.path)}
                    style={{
                      color: 'white',
                      backgroundColor: '#100E66',
                      margin: 0,
                    }}
                  >
                    {item.title}
                  </Menu.Item>
                );
              })}
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
