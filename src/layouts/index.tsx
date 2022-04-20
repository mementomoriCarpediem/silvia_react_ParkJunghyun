import { Outlet, useNavigate } from 'react-router-dom';

import { Avatar, Layout, Menu, Space, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { PATH_SIMPLE } from '@/routes/path';
import { useState } from 'react';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

const dashboardSubMenuInfo = [
  { title: '요약', path: PATH_SIMPLE.summary },
  { title: '인지훈련', path: PATH_SIMPLE.cognitive_training },
  { title: '생활관리', path: PATH_SIMPLE.life_management },
];

const DashboardLayout = () => {
  const navigate = useNavigate();

  const [selectedItem, setSelectedItem] = useState<string>('');

  return (
    <Layout style={{ minHeight: '100vh' }}>
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
            style={{
              height: '100%',
              backgroundColor: '#100E66',
              padding: 5,
            }}
            onClick={(e) => setSelectedItem(e.key)}
          >
            <Menu.Item
              key="1"
              onClick={() => navigate(PATH_SIMPLE.home)}
              style={{
                margin: 0,
                width: '100%',
                color: 'white',
                backgroundColor: selectedItem === '1' ? '#4D61FF' : '#100E66',
              }}
            >
              홈
            </Menu.Item>
            <SubMenu key="2" title="대시보드" style={{ color: 'white' }}>
              {dashboardSubMenuInfo.map((item, index) => {
                return (
                  <Menu.Item
                    key={`sub${index}`}
                    onClick={() => navigate(item.path)}
                    style={{
                      color: 'white',
                      backgroundColor:
                        selectedItem === `sub${index}` ? '#4D61FF' : '#100E66',
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
