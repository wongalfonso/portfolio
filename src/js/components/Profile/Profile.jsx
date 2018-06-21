import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { getBlogs } from "./ProfileActions";

export default class Profile extends Component {
  constructor(props) {
    super(props);     
  }

  componentDidMount() {    
  }

  render() {
    const { user } = this.props;
    const isLoggedIn = user.isLoggedIn;
    return (      
      <div className="container">
      {(isLoggedIn !== true) && <Redirect from = "/profile" to = "/login"/> }
        <div className="row">
          <h2>Welcome {}</h2>
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
        <div className="row">
          <div className="col-12">
          <ul>
            {/* {user.map((kyu,i) => {
              <li><Link to = {`/codewars/${kyu._id}`}>{i}{kyu.name}</Link></li>
            })} */}
          </ul>
          </div>
        </div>
      </div>
    )
  }
}