import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import { Result, Button } from 'antd';
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
import CommentPage from './components/CommentPage'
import KnowledgePage from './components/KnowledgePage'
import KnowledgeViewPage from './components/KnowledgeViewPage'
import GroupPage from './components/GroupPage'
import ProfilePage from './components/ProfilePage' ; 
import MenuFormPage from './components/MenuFormPage'; 
import SearchViewPage from './components/SearchViewPage' ; 


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
          <Route exact path="/"> <Redirect to={{ pathname: "/login" }} /></Route>
          <Route path="/login"><LoginPage /></Route>
          <Route path="/register"><RegisterPage /></Route>
          <PrivateRoute path="/profile"><ProfilePage /></PrivateRoute>
          <PrivateRoute path="/main"><MainPage /></PrivateRoute>
          <PrivateRoute path="/menuadd"><MenuFormPage /></PrivateRoute>
          <PrivateRoute path="/menu/:id"><MenuPage /></PrivateRoute>
          <PrivateRoute path="/comment/:menu_id"><CommentPage /></PrivateRoute>
          <PrivateRoute path="/group/:id" ><GroupPage /></PrivateRoute>
          <PrivateRoute path="/knowledge/:id"><KnowledgeViewPage /></PrivateRoute>
          <PrivateRoute path="/knowledge"><KnowledgePage /></PrivateRoute>
          
          <Route path="*">
            <Result
              status="404"
              title="404"
              subTitle="Sorry, the page you visited does not exist."
              extra={<Button type="primary">Back Home</Button>}
            />
          </Route>
         
        </Switch>
      </div>
      <CookingFooter />

    </Router >

  );
}

export default App;
