import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import {Result , Button } from 'antd' ; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link 
} from "react-router-dom";


import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import MenuPage from './components/MenuPage'
import MainPage from './components/MainPage'
import KnowledgePage from './components/KnowledgePage'
import KnowledgeViewPage from './components/KnowledgeViewPage'
import GroupPage from './components/GroupPage'


import CookingFooter from './components/CookingFooter'
import CookingHeader from './components/CookingHeader'

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem('token') ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}

function App() {
  return (
    <Router>
      <CookingHeader />
      <div className="main-content">
        <Switch>
          <Route path="/login"><LoginPage /></Route>
          <Route path="/register"><RegisterPage /></Route>
          <PrivateRoute path="/main"><MainPage /></PrivateRoute>
          <PrivateRoute path="/menu/:id"><MenuPage /></PrivateRoute>
          <PrivateRoute path="/group/:id"><GroupPage /></PrivateRoute>
          <PrivateRoute path="/knowledge/:id"><KnowledgeViewPage /></PrivateRoute>
          <PrivateRoute path="/knowledge"><KnowledgePage /></PrivateRoute>
          <Route path="/"> <Redirect to={{ pathname: "/login"}}/></Route>
         
        </Switch>
      </div>

      <CookingFooter />

    </Router >

  );
}

export default App;
