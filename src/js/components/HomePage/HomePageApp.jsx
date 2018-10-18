import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { SectionsContainer, Section } from 'react-fullpage';
import Splash from './Splash';
import About from './About';
import Projects from './Projects/Projects';
import Footer from './../Footer';
import NavBar from './NavBar';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
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
    let options = {
      sectionClassName:     'section',
      anchors:              ['sectionOne', 'sectionTwo', 'sectionThree'],
      scrollBar:            false,
      navigation:           false,
      verticalAlign:        false,            
      arrowNavigation:      false
    };
    return (      
      <div className='full-site'>
        <NavBar 
          active = {this.state.enter} 
          menu = {this.state.exit} 
          isActive = {this.mouseEnter}
          scroll = {this.scroll}/>        
        <SectionsContainer {...options}>
          <Section>
            <Splash 
              screen={screen} 
              enter = {this.mouseEnter} 
              exit = {this.mouseExit}/>
          </Section>
          <Section>
            <About 
              screen={screen} 
              enter = {this.mouseEnter} 
              exit = {this.mouseExit}/>

          </Section>
          <Projects screen={screen} enter = {this.mouseEnter} exit = {this.mouseExit}/>
        </SectionsContainer>
                  
        {/* <Footer /> */}
      </div>
    )
  }
};
