import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import React, { Component } from "react";
import HomePage from "./components/HomePage";
import PageBlog from "./components/PageBlog";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import EnsureLoggedIn from "./components/EnsureLoggedIn";
import Profile from "./components/Profile";
import List from "./components/List"


export default class AppRouter extends Component {
  render() {    
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path ="/profile" component = { Profile } />
          <Route path ="/blogpost" component={PageBlog} />
          <Route path="/codewars" component = {List}/>
          <Route path="/signup" component={ SignUp } />      
          <EnsureLoggedIn/>          
          <Route path="/login" component={Login} />              
        </Switch>
      </Router >
    )
  }
}

