import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";


export default class Profile extends Component {
  constructor(props) {
    super(props);     
  }

  render() {
    const { isLoggedIn } = this.props;
    return (      
      <div className="container">
      {(isLoggedIn !== true) && <Redirect from = "/profile" to = "/login"/> }
        <div className="row">
          <h2>Welcome </h2>
        </div>
        <div className="row">
          <div className="col-8">
            <h3>Past Posts</h3>
          </div>
          <div className="col-4">
            <h3> Tool Bar </h3>
            <Link to = "/blogpost"><button className = "btn">Post A new Blog              
            </button></Link>
          </div>
        </div>
      </div>
    )
  }
}