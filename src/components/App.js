import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './../styles/App.css';

import Landing from './Landing';
import Register from './auth/Register';
import Login from './auth/Login';
import Forum from './forum/Forum';
import Project from './projects/Project';
import Dashboard from './dashboard/Dashboard';

import { Layout } from "antd";

import Header from "./layout/Header";
import Footer from "./layout/Footer";

import LoginForm from "./forms/LoginForm";

import antStyled from "./antStyled";
import ReduxTest from './ReduxTest';
import ReduxFormTest from './ReduxFormTest';

const { Header: AntHeader, Footer: AntFooter, Content } = Layout;

const AppHeader = antStyled(AntHeader)`
  height: 100px;
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
`;

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout>
            <Header/>
            <Content>
              <Route exact path='/' component={Landing} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/dashboard' component={Dashboard} />
              <Route exact path='/forum' component={Forum} />
              <Route exact path='/projects' component={Project} />
              <Route exact path='/loginform' component={LoginForm} />
              <Route exact path="/redux" component={ReduxTest} />
              <Route exact path="/reduxform" component={ReduxFormTest} />
            </Content>
            <AntFooter>
              <Footer/>
            </AntFooter>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
