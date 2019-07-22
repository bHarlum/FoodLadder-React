import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Layout, Spin } from "antd";
import { connect } from "react-redux";
import "./../styles/App.css";

import PrivateRoute from "./PrivateRoute";
import UnregisteredRoute from "./UnregisteredRoute";

import Landing from "./Landing";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Forum from "./forum/Forum";
import Project from "./projects/Project";
import NewProject from "./projects/NewProject";
import Dashboard from "./dashboard/Dashboard";
import ThreadPage from "./forum/thread/ThreadPage";
import NewThread from "./forum/thread/NewThread";
import Faq from "./forum/Faq";
import PrivacyPolicy from "./forum/PrivacyPolicy";
import Resources from "./resources/Resources";
import Profile from "./users/Profile";
import EditProject from "./projects/EditProject";

import Header from "./layout/header/Header";
import { Centered } from "./layout/Layout";
import Footer from "./layout/footer/Footer";
import antStyled from "./antStyled";

const { Footer: AntFooter, Content } = Layout;

class App extends Component {
  render() {
    let { loading, headerStyles } = this.props;
    return (
      <div>
        {loading && (
          <Centered overlay>
            <Spin size="large" />
          </Centered>
        )}
        <BrowserRouter>
          <Layout>
            <Header />
            <Content>
              <Switch>
                <UnregisteredRoute exact path="/forum/faq" component={Faq} />
                <UnregisteredRoute
                  exact
                  path="/forum/privacypolicy"
                  component={PrivacyPolicy}
                />

                <Route exact path="/register/:id" component={Register} />

                <UnregisteredRoute exact path="/" component={Landing} />
                <UnregisteredRoute exact path="/login" component={Login} />
                <PrivateRoute exact path='/projects/edit/:id' component={EditProject} />

                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute exact path="/forum" component={Forum} />
                <PrivateRoute
                  exact
                  path="/forum/threads/new"
                  component={NewThread}
                />
                <PrivateRoute
                  exact
                  path="/forum/threads/:id"
                  component={ThreadPage}
                />
                <PrivateRoute
                  exact
                  path="/projects/new"
                  component={NewProject}
                />
                <PrivateRoute exact path="/projects/:id" component={Project} />
                <PrivateRoute exact path="/resources" component={Resources} />
                <PrivateRoute exact path="/users/:id" component={Profile} />
              </Switch>
            </Content>
            <AntFooter>
              <Footer />
            </AntFooter>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading.spinner,
    headerStyles: state.headerStyles
  };
};

export default connect(
  mapStateToProps,
  {}
)(App);
