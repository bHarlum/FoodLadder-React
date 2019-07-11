import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './../styles/App.css';

import Landing from './layout/Landing';
import Register from './auth/Register';
import Login from './auth/Login';
import Posts from './forum/Posts';
import Project from './projects/Project';
import Dashboard from './dashboard/Dashboard';
import Post from './post/Post';

import LoginForm from './forms/LoginForm';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <h1>Food Ladder Base App</h1>
            <Route exact path='/' component={Landing} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/forum' component={Posts} />
            <Route exact path='/post' component={Post} />
            <Route exact path='/projects' component={Project} />
            
            <Route exact path="/loginform" component={LoginForm} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
