import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import React, { Component } from "react";
import HomePage from "./components/HomePage";
import BlogPage from "./components/BlogPage/BlogPage";
import SignUp from "./components/Login";
import Login from "./components/Login";
import EnsureLoggedIn from "./components/EnsureLoggedIn";
import Profile from "./components/Profile";
import List from "./components/List"
import { connect } from "react-redux";


class AppRouter extends Component {
  render() {
    console.log(this.props);
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path ="/profile" component = { Profile } />
          <Route path="/blogpage" component={BlogPage} />
          <EnsureLoggedIn/>          
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />          
          <Route path="/codewars" component = {List}/>
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
