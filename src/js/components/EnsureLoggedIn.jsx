import React, { Component } from "react"
import { connect } from "react-redux";
import Profile from "./Profile";
import Login from "./Login"
import { Route, Redirect } from "react-router-dom";

class EnsureLoggedIn extends Component {
  constructor(props) {
    super(props);
    this.renderProfile = this.renderProfile.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
  }

  renderProfile() {
    return (      
        <Redirect from = "/login" to = "/profile" />        
    )
  }

  renderLogin() {    
    return (
      <Route path="/login" component = { Login } />
    )
  }

  render() {
    const { isLoggedIn } = this.props;
    if (isLoggedIn === true) {
      return this.renderProfile()
    } else {
      return this.renderLogin()
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn
  }
}

export default connect(mapStateToProps)(EnsureLoggedIn);