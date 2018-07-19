import React, { Component } from 'react';
import { authenticateUser } from './LoginActions';
import { getDate } from './../../Date';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const username = this.state.username
    const password = this.state.password
    const { dispatch } = this.props;
    const date = getDate();
    dispatch(authenticateUser(username, password, date));
  }

  submitButton() {
    let pw = this.state.password;
    let config = this.state.passwordConf;
    let un = this.state.username;
    if (pw.length === 0 || un.length === 0) {
      return (
        <button
          type='submit'
          className='btn btn-danger form-control loginBtn'
          disabled>
          Submit
      </button>
      )
    } else {
      return (
        <button
          type='submit'
          className='btn btn-success form-control loginBtn'>
          Submit
        </button>
      )
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='page'>
          <form onSubmit={this.handleSubmit} id='loginForm'>
            <div className='row'>
              <div className='col-12 text-center' id = 'loginName'>
                <span>Log-In</span>
              </div>
            </div>
            <div className='row'>
              <div className='col-8 inputs'>
                <div className='form-group'>
                  <input type='text'
                    onChange={this.handleInput}
                    name='username'
                    placeholder='Username'
                    value={this.state.username}
                    id='username'
                    className='form-control'/>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-8 inputs'>
                <div className='form-group has-feedback'>
                  <input type='password'
                    onChange={this.handleInput}
                    name='password'
                    id='password'
                    placeholder='Password'
                    value={this.state.password}
                    className='form-control' />
                </div>
              </div>
            </div>
            <div className='row text-center'>
              <div className='col-8 inputs'>
                <div className='form-group'>
                  {this.submitButton()}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
};
