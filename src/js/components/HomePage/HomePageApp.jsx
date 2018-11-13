import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { ScrollToTopOnMount, SectionsContainer, Section } from 'react-fullpage';
import backgroundVid from '../../../../public/video/backgroundVideo.mp4';
import Background from './Background';
import Splash from './Splash';
import About from './About/About';
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
  blankPage() {
    return(
      <div className = 'fullPage'>

      </div>
    )
  }
  render() {       
    let options = {
      activeClass:          'active', 
      anchors:              ['Top', 'About', 'Projects'], 
      arrowNavigation:      false,
      className:            'SectionContainer',
      delay:                1000, 
      navigation:           false, 
      scrollBar:            false,
      sectionClassName:     'Section', 
      sectionPaddingTop:    '0', 
      sectionPaddingBottom: '0', 
      verticalAlign:        false 
    };
    console.log(this.props)
    return (      
      <div  id = 'homePage' className='full-site'>
        <div className="vid-container">
          <video id='homeVid' loop autoPlay muted >
            <source src={backgroundVid} type='video/mp4' />
          </video>  
        </div>
        {/* <NavBar 
          active = {this.state.enter} 
          menu = {this.state.exit} 
          isActive = {this.mouseEnter}
          scroll = {this.scroll}/>     */}
        <ScrollToTopOnMount/>
        <Header/>    
        <SectionsContainer {...options}>
          <Section>                        
            <Splash/>                        
          </Section>
          <Section>
            <About/>
            {/* <Projects/> */}
          </Section>
          {/* <Projects screen={screen} enter = {this.mouseEnter} exit = {this.mouseExit}/> */}
        </SectionsContainer>
                  
        {/* <Footer /> */}
      </div>
    )
  }
};
