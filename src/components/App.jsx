import React, { Component } from "react";
import { HashRouter as Router, Route, hashHistory } from "react-router-dom";
import HomePage from "./HomePage";
import BlogPage from "./BlogPage";
import "../css/style.scss"


export default class App extends Component {
  render() {
    return (
      <Router history = {hashHistory}>
      <div className = "container mainPage">
        <Route exact path = "/" component = {HomePage}/>
        <Route path = "/codewars" component = {BlogPage}/>        
      </div>
      </Router>
    )
  }
}