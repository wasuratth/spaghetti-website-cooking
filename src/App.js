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


import LoginPage from './components/LoginPage'
import MainPage from './components/MainPage'
import CookingFooter from './components/CookingFooter'

function App() {

  return (
    <Router>
      <header style={{backgroundColor : "#F9F9F9" , height : 60  , borderBottom: '1px solid #CCC'}}>
        <Avatar style={{float: 'right' , top: '5px' ,right : '10px'}} size={48} icon={<UserOutlined />}   />
      </header>
      <div class="main-content">
        <Switch>
          <Route path="/login">
            <LoginPage></LoginPage>
          </Route>
          <Route path="/main">
            <MainPage></MainPage>
          </Route>
        </Switch>
      </div>

      <CookingFooter />

    </Router>

  );
}

export default App;
