import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import { UserOutlined, CaretDownOutlined } from '@ant-design/icons';
import { Layout, Menu, Avatar } from 'antd';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const { Header, Content, Footer } = Layout;

function App() {

  return (
    <Layout className="layout">
      <Router>
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1"><Link to="/" >Home</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/page1" >Login</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/page2" >Sign Up</Link></Menu.Item>
            <Menu.Item key="5"><Link to="/page3" >My Profile</Link></Menu.Item>
            <Menu.Item key="6"><Link to="/page4" >Friend Profile</Link></Menu.Item>
            <Menu.Item key="7"><Link to="/page5" >Friend Profile</Link></Menu.Item>
            {
            /*
            <div style={{ float: 'right', width: 200 }} >
              <div style={{ float: 'left', marginRight: 10 }} >นาย วสุรัฐ ธรรมปัญญา</div>
              <Avatar size={48} icon={<UserOutlined />} style={{ float: 'left', top: 10 }} />
              <CaretDownOutlined size={48} />
            </div>
            */
            }

          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content" style={{ paddingTop: 30 }}>
            <Switch>
              <Route path="/page1"></Route>
              <Route path="/page2"></Route>
              <Route path="/page3"></Route>
              <Route path="/page4"></Route>
              <Route path="/page5"></Route>
              <Route path="/page6"></Route>
              <Route path="/page7"></Route>
              <Route path="/"></Route>
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}></Footer>
      </Router>
    </Layout>
  );
}

export default App;
