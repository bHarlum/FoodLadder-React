import React, { Component } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { Layout } from "antd";
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

import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";

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
                <UnregisteredRoute exact path="/" component={Landing} />
                <UnregisteredRoute
                  exact
                  path="/register"
                  component={Register}
                />
                <UnregisteredRoute exact path="/login" component={Login} />
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
                <PrivateRoute exact path="/projects" component={Project} />
                <PrivateRoute
                  exact
                  path="/projects/new"
                  component={NewProject}
                />
                <UnregisteredRoute
                  exact
                  path="/loginform"
                  component={LoginForm}
                />
                <UnregisteredRoute exact path="/forum/faq" component={Faq} />
                <UnregisteredRoute
                  exact
                  path="/forum/privacypolicy"
                  component={PrivacyPolicy}
                />
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

export default App;
