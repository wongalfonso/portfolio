import React, { Component } from 'react';
import ReactGA from 'react-ga';
import Splash from './Splash';
import About from './About';
import Projects from './Projects/Projects';
import Footer from './../Footer';
import NavBar from './NavBar';


export default class HomePage extends Component {
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
  componentWillMount() {
    ReactGA.initialize('UA-126168783-1');          

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
      <div className='full-site' ref={(screen) => this.screen = screen}>
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
        {/* <Projects screen={screen} enter = {this.mouseEnter} exit = {this.mouseExit}/>
        <Footer /> */}
      </div>
    )
  }
};
