import React, { Component } from "react";
import { HashRouter as Router, hashHistory } from "react-router-dom";
import { connect } from "react-redux";
import "../css/style.scss"
import AppRouter from "./Router";


export default class App extends Component {
  render() {
    return (
      <Router history = {hashHistory}>
        <div className="container mainPage">
          <AppRouter/>
        </div>
      </Router>
    )
  }
};

// const SignUpRoute = ({ auth, component: Component, user }) => (
//   <Route render={props => (
//     (auth) ? (
//       <Component user = {user}/>
//     ) : (
//       <SignUp/>
//     )
//   )}/>
// )