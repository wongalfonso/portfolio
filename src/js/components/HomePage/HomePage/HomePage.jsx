import React, { Component } from 'react';
import { connect } from 'react-redux';
import Splash from '../Splash/Splash';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Footer from '../../Footer';


class HomePage extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    const screen = this.screen;
    if (screen.offsetWidth) {
      dispatch(exportScreenSize(screen.offsetWidth))
    }
  }
  render() {
    const { screen } = this.props;
    return (
      <div className='fullSite' id='fullpage' ref={(screen) => this.screen = screen}>
        <Splash screen={screen} />
        <About screen={screen} />
        <Projects screen={screen} />
        <Footer />
      </div>
    )
  }
};

const exportScreenSize = (screen) => {
  return {
    type: 'SCREEN_SIZE',
    payload: screen
  }
}

const mapStateToProps = (state) => {
  return {
    screen: state.home.screen
  }
}

export default connect(mapStateToProps)(HomePage); 
