import React, { Component } from 'react';
import { connect } from 'react-redux';

class Splash extends Component {

  componentDidMount() {
    const splash = document.getElementById('splashPage');     
    splash.onmouseenter = () => this.props.enter('splash');
    splash.onmouseleave = () => this.props.exit('splash');
  }

  render() {
    const { title } = this.props;    
    return (
      <div className="splash-home" id='splashPage'>
        <div className="splash-container">
          <div className="splash-text">
            <div className="splash-name">
              Alfonso Wong
            </div>
            <div className="splash-title">
              Web Developer
            </div>
          </div>
          <div className="splash-header">
            <div className="splash-head">
              Web Developer
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {    
  return {
    title: state.home.homePage.title
  }
}

export default connect(mapStateToProps)(Splash);