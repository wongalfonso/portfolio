import React, { Component } from "react"
import { AuthRoute } from "react-router-auth";
import { connect } from "react-redux";
import Profile from "./Profile";
import Login from "./Login"
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

class EnsureLoggedIn extends Component {
  constructor(props) {
    super(props);
    this.renderProfile = this.renderProfile.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
  }

  renderProfile() {    
    history.push("/profile")
    return (
      <Profile/>
    )
  }

  renderLogin() {
    history.push("/login");
    return (
      <Login/>
    )
  }

  render() { 
    const { isLoggedIn } = this.props;
    if (isLoggedIn) {
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