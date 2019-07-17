import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout } from "antd";
import './../styles/App.css';

import PrivateRoute from "./PrivateRoute";
import UnregisteredRoute from "./UnregisteredRoute";

import Landing from './Landing';
import Register from './auth/Register';
import Login from './auth/Login';
import Forum from './forum/Forum';
import Project from './projects/Project';
import NewProject from './projects/NewProject';
import Dashboard from './dashboard/Dashboard';
import ThreadPage from "./forum/thread/ThreadPage";
import NewThread from "./forum/thread/NewThread";

import Header from "./layout/header/Header";
import Footer from "./layout/Footer";

import LoginForm from "./forms/LoginForm";

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
                <UnregisteredRoute exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
                <PrivateRoute exact path='/dashboard' component={Dashboard} />
                <Route exact path='/forum' component={Forum} />
                <Route exact path="/forum/threads/new" component={NewThread} />
                <Route exact path="/forum/threads/:id" component={ThreadPage} />
                <Route exact path='/projects' component={Project} />
                <Route exact path='/projects/new' component={NewProject} />
                <Route exact path='/loginform' component={LoginForm} />
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
