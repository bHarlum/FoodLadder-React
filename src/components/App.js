import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout } from "antd";
import './../styles/App.css';

import Landing from './Landing';
import Register from './auth/Register';
import Login from './auth/Login';
import Forum from './forum/Forum';
import Project from './projects/Project';
import Dashboard from './dashboard/Dashboard';
import ThreadPage from "./forum/thread/ThreadPage";
import NewThread from "./forum/thread/NewThread";

import Header from "./layout/Header";
import Footer from "./layout/Footer";

import LoginForm from "./forms/LoginForm";

import ReduxTest from './ReduxTest';
import ReduxFormTest from './ReduxFormTest';
import TestRegisterForm from './forms/TestRegisterForm';

const { Footer: AntFooter, Content } = Layout;

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout>
            <Header />
            <Content>
              <Switch>
                <Route exact path='/' component={Landing} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/dashboard' component={Dashboard} />
                <Route exact path='/forum' component={Forum} />
                <Route exact path="/forum/threads/new" component={NewThread} />
                <Route exact path="/forum/threads/:id" component={ThreadPage} />
                <Route exact path='/projects' component={Project} />
                <Route exact path='/loginform' component={LoginForm} />
                <Route exact path="/redux" component={ReduxTest} />
                <Route exact path="/reduxform" component={ReduxFormTest} />
                <Route exact path="/testregister" component={TestRegisterForm} />
              </Switch>
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
