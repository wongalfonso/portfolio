import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { FullPage, Slide } from 'react-full-page';
import Splash from './Splash';
import About from './About';
import Projects from './Projects/Projects';
import Footer from './../Footer';
import Header from './../Header';
import NavBar from './NavBar';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: '#splash',
      title: 'Web Developer'
    }        
    this.scroll = this.scroll.bind(this);
  }
  componentWillMount() {
    ReactGA.initialize('UA-126168783-1');    
    window.addEventListener("mousewheel", this.MouseWheelHandler, false);      
  }  
  componentDidUpdate() {
    if (this.state.currentPage !== window.location.hash) {this.setState({currentPage: window.location.hash})
    }
    if (this.state.currentPage === '#splash' && this.state.title !== 'Web Developer') {
      setTimeout( () => this.setState({title: 'Web Developer'}),800);
    }
    if (this.state.currentPage === '#about' && this.state.title !== 'About') {
      setTimeout( () => this.setState({title: 'About'}),800);
    }
    if (this.state.currentPage === '#projects' && this.state.title !== 'Projects') {
      this.setState({title: 'Projects'})
    }
    
  }
  MouseWheelHandler() {
    console.log(event);
  }
  scroll(target) {
    let page;
    if (target === '#splash') {page = 'splashPage'}
    if (target === '#about') {page = 'aboutPage'}
    if (target === '#projects') {page = 'projectPage'}
    if (this.state.currentPage === page) {
      return 
    } else {
      var id = document.getElementById(target).offsetTop
      window.scrollTo({top: id, behavior: 'smooth'})
      this.setState({ currentPage: page })
    }
  }

  render() {       
    console.log(this.props);   
    const props = {
      duration: '10000ms'
    }
    return (      
      <div className='full-site'>
        {/* <NavBar 
          active = {this.state.currentPage}          
          scroll = {this.scroll}/> */}
        <Header
          title = {this.state.title}/>        
        {/* <FullPage controlsProps = {{duration: "3000ms"}}> */}
          {/* <Slide> */}
            <Splash/>
          {/* </Slide>
          <Slide> */}
            <About               
              enter = {this.mouseEnter}/>
          {/* </Slide> */}
          {/* <Slide className = 'projects'>
            <Projects 
              enter = {this.mouseEnter}/>
          </Slide>           */}
        {/* </FullPage> */}
        
                  
        {/* <Footer /> */}
      </div>
    )
  }
};
