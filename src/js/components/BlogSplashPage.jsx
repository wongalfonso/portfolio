import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom"


class BlogSplashPage extends Component {
  
  render() {
    const { blog } = this.props
    const { isLoggedIn } = this.props
    const kyu = blog.blog;
    return (
      <div className="container text-center">
        {(isLoggedIn !== true) && <Redirect from="/blogsplash" to="/login" />}
        <div className="row">
          <div className="col-12">
            <h2>You have Posted Your Kyu</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h4>Kyu</h4>
            <h5>{kyu.kyuType}</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h4>Name</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h5>{kyu.name}</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h4> Instructions </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h5> {kyu.instructions} </h5>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h4> Thinking </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h5> {kyu.thinking} </h5>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h4> Answer </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h5> {kyu.answer} </h5>
          </div>
        </div>
        <div className="row">
          <div className="col-12 pull-right">
            <Link to="/profile"><button className="btn btn-primary">Next</button></Link>
          </div>
        </div>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    blog: state.blog,
    user: state.user,
    isLoggedIn: state.userLogin.isLoggedIn
  }
}

export default connect(mapStateToProps)(BlogSplashPage);
