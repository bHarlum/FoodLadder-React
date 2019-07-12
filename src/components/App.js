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

import antStyled from "./antStyled";

const { Header: AntHeader, Footer: AntFooter, Content } = Layout;

const AppHeader = antStyled(AntHeader)`
  background-color: rgb(244, 244, 244);
`;

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout>
            <AppHeader>
              <Header/>
            </AppHeader>
            <Content>
              <Route exact path='/' component={Landing} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/dashboard' component={Dashboard} />
              <Route exact path='/forum' component={Forum} />
              <Route exact path='/projects' component={Project} />
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
