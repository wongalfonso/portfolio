import React, { Component } from "react";

export default class Profile extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <h2>Welcome </h2>
        </div>
        <div className="row">
          <div className="col-8">
            <h3>Past Posts</h3>
          </div>
          <div className="col-4">
            <h3> Tool Bar </h3>
            <button>Post A new Blog</button>
          </div>
        </div>
      </div>
    )
  }
}