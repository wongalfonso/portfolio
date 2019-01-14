import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mouseEnter, mouseExit } from './HomePageReducer';

class Splash extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    const about = document.getElementById('splashPage');
    about.onmouseenter = () => dispatch(mouseEnter('splash'));
    about.onmouseleave = () => dispatch(mouseExit('splash'));
  }


  render() {
    const { title } = this.props;
    return (
      <div className="splash-home" id='splashPage'>
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
            {title}
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