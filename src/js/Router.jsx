import { Switch, Route } from "react-router-dom"
import React, { Component } from "react";
import HomePage from "./components/HomePage";
import BlogPage from "./components/BlogPage";
import SignUp  from "./components/Login"
import Login from "./components/Login"
import Profile from "./components/Profile/Profile"

export default class AppRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/users/signup" component={SignUp} />
        <Route path="/users/login" component={Login} />
        <Route path="/users/codewars" component={BlogPage} />
        {/* <SignUpRoute  auth = {this.state.authenticated} user = {this.state.user} path = "/users/profile/:id" component = {Profile}/> */}
        {/* <Route path= "" render = {() => {return <h1>Sorry This Page Does Not Exist</h1>}}/> */}
      </Switch>
    )
  }
}
