import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import React, { Component } from "react";
import HomePage from "./components/HomePage";
import PageBlog from "./components/PageBlog";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login";
import EnsureLoggedIn from "./components/EnsureLoggedIn";
import Profile from "./components/Profile";
// import List from "./components/List";
import ListEdit from "./components/ListEdit";
import BlogSplashPage from "./components/BlogSplashPage";


export default class AppRouter extends Component {
  render() {    
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path ="/profile" component = { Profile } />
          <Route path ="/blogpost" component={PageBlog} />
          <Route path ="/blogsplash" component = {BlogSplashPage} />
          {/* <Route path="/codewars" component = {List}/> */}
          <Route path="/codewars/:id" component = {ListEdit}/>
          <Route path="/signup" component={ SignUp } />      
          <EnsureLoggedIn/>          
          <Route path="/login" component={Login} />              
        </Switch>
      </Router >
    )
  }
}

