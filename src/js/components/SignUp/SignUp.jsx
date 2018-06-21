import React, { Component } from "react";
import axios from "axios";
import {createUser } from "../Login/LoginActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom"
import { getDate } from "../Date"

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      passwordConf: "",
      redirect: false,
      response: []
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    console.log(this.props);
  }
  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const date = getDate();
    const { dispatch } = this.props;    
    dispatch(createUser(this.state.username, this.state.password, date));
  }

  submitButton() {
    let pw = this.state.password;
    let config = this.state.passwordConf;
    let un = this.state.username;
    if (pw.length === 0 || config.length === 0 || pw !== config || un.length === 0) {
      return (
      <button type="submit" 
              className= "btn btn-danger float-right"
              disabled>
              Submit
      </button>
      )
    } else {
      return (
        <button type = "submit"
                className = "btn btn-success float-right">
                Submit
        </button>
      )
    }
  }
  render() {
    const { user } = this.props;
    console.log(user);
    const isLoggedIn = user.isLoggedIn
    return (
      <div className="container">
      {(isLoggedIn === true) && <Redirect from = "/signup" to = "/profile"/>}
        <div className="row">
          <div className="col-12 text-center">
            <h2>User Sign Up</h2>
          </div>
        </div>

        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="form-group col-12">
              <label  htmlFor="username" 
                      className = "control-label">
                      Username
              </label>
              <input  type="text" 
                      onChange={this.handleInput} 
                      name="username" 
                      value={this.state.username} 
                      id = "username" 
                      className = ""/>
            </div>
          </div>
          <div className="row">
            <div className="form-group has-feedback col-12">
              <label  htmlFor="password" 
                      className = "control-label" >
                      Password
              </label>
              <input  type="password" 
                      onChange={this.handleInput} 
                      name="password" 
                      value={this.state.password} />
            </div>
          </div>
          <div className="row">
            <div className="form-group has-feedback col-12">
              <label  htmlFor="passwordConf" 
                      className = "control-label">
                      Retype Password
              </label>
              <input  type="passwordConf" 
                      onChange={this.handleInput} 
                      name="passwordConf" 
                      value={this.state.passwordConf} />
            </div>
          </div>
          <div className="row">
            <div className="form-group has-feedback col-12">
              {this.submitButton()}
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(SignUp);
