import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout, Spin } from "antd";
import { connect } from "react-redux";
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
import Resources from "./resources//Resources";

import Header from "./layout/header/Header";
import Footer from "./layout/Footer";
import { Centered } from "./layout/Layout";
import antStyled from "./antStyled";

const { Footer: AntFooter, Content, Header: AntHeader } = Layout;

const LightHeader = antStyled(AntHeader)`
  background-color: ${props => props.position === "fixed" ? 'rgba(255, 255, 255, 0)' : '#fff'} ;
  width: 100%;
  height: 71px;
  position: ${ props => props.position || "static" };
`;

class App extends Component {
  render() {
    let { loading, headerStyles } = this.props;
    return (
      <div>
        { loading &&
          <Centered overlay>
            <Spin size="large" />
          </Centered>
        }
        <BrowserRouter>
          <Layout>
            <LightHeader position={headerStyles.position}>
              <Header />
            </LightHeader>
            <Content>
              <Switch>
                <Route exact path='/register/:id' component={Register} />

                <UnregisteredRoute exact path='/' component={Landing} />
                <UnregisteredRoute exact path='/login' component={Login} />

                <PrivateRoute exact path='/dashboard' component={Dashboard} />
                <PrivateRoute exact path='/forum' component={Forum} />
                <PrivateRoute exact path="/forum/threads/new" component={NewThread} />
                <PrivateRoute exact path="/forum/threads/:id" component={ThreadPage} />
                <PrivateRoute exact path='/projects' component={Project} />
                <PrivateRoute exact path='/projects/new' component={NewProject} />
                <PrivateRoute exact path='/resources' component={Resources} />

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

const mapStateToProps = (state) => {
  return {
    loading: state.loading.spinner,
    headerStyles: state.headerStyles
  }
}

export default connect(mapStateToProps, {})(App);
