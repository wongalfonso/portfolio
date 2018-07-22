import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import Splash from '../Splash/Splash';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Footer from '../../Footer';
import NavBar from '../NavBar/NavBar';


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enter: 'splash',
      exit: '', 
    }
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseExit = this.mouseExit.bind(this);
    this.scroll = this.scroll.bind(this);
  }
  componentDidMount() {
    const { dispatch } = this.props;
    const screen = this.screen; 
    if (screen.offsetWidth) {
      dispatch(exportScreenSize(screen.offsetWidth))
    } 
    setTimeout(() => {this.scroll('aboutPage')}, 8000)
  }
  
  mouseEnter(page) {
    this.setState({
      enter: page
    })
  }
  mouseExit(page) {
    this.setState({
      exit: page
    })
  }
  scroll(target) {
    let page;
    if (target === 'vidContainer') {page = 'splash'}
    if (target === 'aboutPage') {page = 'about'}
    if (target === 'projectPage') {page = 'project'}
    if (this.state.enter === page) {
      return 
    } else {
      var id = document.getElementById(target).offsetTop
      window.scrollTo({top: id, behavior: 'smooth'})
      this.setState({ enter: page })
    }
  }


  render() {
    const { screen } = this.props;
    return (
      <div className='fullSite' id='fullpage' ref={(screen) => this.screen = screen}>
        <NavBar 
          active = {this.state.enter} 
          menu = {this.state.exit} 
          isActive = {this.mouseEnter}
          scroll = {this.scroll}/>
        <Splash 
          screen={screen} 
          enter = {this.mouseEnter} 
          exit = {this.mouseExit}/>
        <About 
          screen={screen} 
          enter = {this.mouseEnter} 
          exit = {this.mouseExit}/>
        <Projects screen={screen} enter = {this.mouseEnter} exit = {this.mouseExit}/>
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
