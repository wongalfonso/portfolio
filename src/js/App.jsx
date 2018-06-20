import React, { Component } from "react";
import { Router } from "react-router-dom";
import { connect } from "react-redux";
import "../css/style.scss"
import AppRouter from "./Router";


export default class App extends Component {
  render() {
    return <AppRouter/>
  }
};
