import React, { Component } from 'react';
import '../scss/main.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage/HomePageApp';
import PageBlog from './components/Blog/PageBlog';
import SignUp from './components/Blog/SignUp/SignUp';
import Login from './components/Blog/Login';
import EnsureLoggedIn from './components/Blog/EnsureLoggedIn';
import Profile from './components/Blog/Profile';
import ListEdit from './components/Blog/ListEdit';
import BlogSplashPage from './components/Blog/BlogSplashPage';

export default class App extends Component {
  render() {    
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route path ='/profile' component = { Profile } />
          <Route path ='/blogpost' component={ PageBlog } />
          <Route path ='/blogsplash' component = { BlogSplashPage } />   
          <Route path='/codewars/:id' component = {ListEdit}/>
          <Route path='/signup' component={ SignUp } />      
          <EnsureLoggedIn/>          
          <Route path='/login' component={Login} />              
        </Switch>
      </Router >
    )
  }
}
