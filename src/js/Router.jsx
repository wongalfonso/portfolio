import { Router, Switch, Route, HashHistory } from "react-router-dom"
import React, { Component } from "react";
import HomePage from "./components/HomePage";
import BlogPage from "./components/BlogPage";
import SignUp from "./components/Login";
import Login from "./components/Login";
import Profile from "./components/Profile";
import EnsureLoggedIn from "./components/EnsureLoggedIn";
import { connect } from "react-redux";
import { createBrowserHistory } from "history"
const history = createBrowserHistory()


class AppRouter extends Component {
  render() {
    console.log(this.props);
    return (
      <Router history = {history}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path = "/login" component = {EnsureLoggedIn}/>    
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />                 
          <Route path="/codewars" component={BlogPage} />
        </Switch>
      </Router >
    )
  }
}

function mapStateToProps(state) {
  return {
    isLoggedin: state.user.isLoggedin
  }
}

export default connect(mapStateToProps)(AppRouter);
