import React from 'react';
import logo from './logo.png';
import './App.css';
// 引入布局
import { Layout, Menu } from 'antd';

// 引入路由
import { HashRouter, NavLink } from 'react-router-dom'
import Routes from './routes'


const { Header, Content, Sider } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header className="header" style={{
          backgroundColor: '#3ba0e9'
        }}>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <Menu.Item key="1">
                <HashRouter>
                  <NavLink to="/">查看todo</NavLink>
                </HashRouter>
              </Menu.Item>
              <Menu.Item key="2">
                <HashRouter>
                  <NavLink to="/edit">添加todo</NavLink>
                </HashRouter>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 0 24px' }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}>
                <Routes></Routes>
            </Content>
          </Layout>
        </Layout>
      </Layout>,
);
    </div>
  );
}

export default App;
