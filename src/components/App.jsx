import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";


import HomePage from "./HomePage";
import BlogPage from "./BlogPage";
import SignUp from "./SignUp"
import Login from "./Login"
import Profile from "./Profile"
import "../css/style.scss"


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false
    }
  }
  render() {
    return (
      <Router>
        <div className="container mainPage">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/users/signup" component={SignUp} />
            <Route path="/users/login" component={Login} />
            <Route path="/users/profile/:id" component={Profile} />
            <Route path="/users/codewars" component={BlogPage} /> 
            <Route path= "" render = {() => {return <h1>Sorry This Page Does Not Exist</h1>}}/>
            </Switch>
        </div>
      </Router>
    )
  }
}