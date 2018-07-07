import React, { Component } from 'react';
import '../css/style.less'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HomePage from "./components/HomePage/HomePage";
import PageBlog from "./components/PageBlog";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login";
import EnsureLoggedIn from "./components/EnsureLoggedIn";
import Profile from "./components/Profile";
import ListEdit from "./components/ListEdit";
import BlogSplashPage from "./components/BlogSplashPage";

export default class App extends Component {
  render() {    
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path ="/profile" component = { Profile } />
          <Route path ="/blogpost" component={PageBlog} />
          <Route path ="/blogsplash" component = {BlogSplashPage} />   
          <Route path="/codewars/:id" component = {ListEdit}/>
          <Route path="/signup" component={ SignUp } />      
          <EnsureLoggedIn/>          
          <Route path="/login" component={Login} />              
        </Switch>
      </Router >
    )
  }
}
