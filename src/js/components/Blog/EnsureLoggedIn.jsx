import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Login from './Login/Login';

class EnsureLoggedIn extends Component {
  constructor(props) {
    super(props);
    this.renderProfile = this.renderProfile.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
  };

  renderProfile() {    
    return (      
        <Redirect from = '/login' to = '/profile' />        
    )
  }

  renderLogin() {    
    return (
      <Route path='/login' component = { Login } />
    )
  }

  render() {
    const { isLoggedIn } = this.props;

    if (isLoggedIn === true) {
      return this.renderProfile()
    } else {
      return this.renderLogin()
    }
    // return (<Login/>)
    
  }
}

const mapStateToProps = (state) => {  
  return {
    isLoggedIn: state.user.userLogin.isLoggedIn
  }
};

export default connect(mapStateToProps)(EnsureLoggedIn);
