import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";


export default class Profile extends Component {
  constructor(props) {
    super(props); 
    this.postBlog = this.postBlog.bind(this);
  }

  postBlog(e) {
    e.preventDefault();        
    return (
      <Redirect to = "/blogpage" from = "/profile" />
    )
  }
  render() {
    const { isLoggedIn } = this.props;
    return (      
      <div className="container">
      {/* {(isLoggedIn !== true) && <Redirect from = "/profile" to = "/login"/> } */}
        <div className="row">
          <h2>Welcome </h2>
        </div>
        <div className="row">
          <div className="col-8">
            <h3>Past Posts</h3>
          </div>
          <div className="col-4">
            <h3> Tool Bar </h3>
            <button className = "btn" onClick = {this.postBlog}>Post A new Blog              
            </button>
          </div>
        </div>
      </div>
    )
  }
}