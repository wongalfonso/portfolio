import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { ScrollToTopOnMount, SectionsContainer, Section } from 'react-fullpage';
import backgroundVid from '../../../../public/video/backgroundVideo.mp4';
import Background from './Background';
import Splash from './Splash';
import About from './About/About';
import Projects from './Projects/Projects';
import FormProjects from './Projects/FormProjects';
import ApiProjects from './Projects/ApiProjects';
import Footer from './../Footer';
import Header from './../Header';
import NavBar from './NavBar';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: '#Top',
      title: 'Web Developer',
      width: ''
    }        
    this.scroll = this.scroll.bind(this);
  }
  componentWillMount() {
    ReactGA.initialize('UA-126168783-1');      
  }  
  
  componentDidUpdate() {
    if (this.state.currentPage !== this.props.location.hash) {
      this.setState({currentPage: this.props.location.hash})
    }
    if (this.state.currentPage === '#Top' && this.state.title !== 'Web Developer') {
      setTimeout( () => this.setState({title: 'Web Developer'}),800);
    }
    if (this.state.currentPage === '#About' && this.state.title !== 'About Me') {
      setTimeout( () => this.setState({title: 'About Me'}),800);
    }
    if (this.state.currentPage === '#Projects' && this.state.title !== 'Projects') {
      this.setState({title: 'Projects'})
    }    
  }
  componentDidMount() {
    const screen = this.screen; 
    if (screen.clientWidth) {
      this.setState({width: screen.clientWidth})      
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
  smallScreen(title) {
    return (
      <div>
        <Header/>  
        <Splash 
            title = {title}/>
        <About
            title = {title}/>                      
      </div>
    )
  }
  largeScreen(title, options) {
    return (
      <div>
        <ScrollToTopOnMount/>
        <Header/>    
        <SectionsContainer {...options} className = 'section-container'>
          <Section className = 'section'>                        
            <Splash 
            title = {title}/>                        
          </Section>
          <Section className = 'section'>
            <About
            title = {title}/>
          </Section>
          <Section className = 'section'>
            <Projects
            title = {title}/>
          </Section>
          <Section className = 'section'>

          </Section>
          {/* <Projects screen={screen} enter = {this.mouseEnter} exit = {this.mouseExit}/> */}
        </SectionsContainer>
      </div>
    )
  }
  render() {       
    let options = {
      activeClass:          'active', 
      anchors:              ['Top', 'About', 'Form Projects', 'API Projects'], 
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
    console.log(this.state.currentPage)
    const { title } = this.state;
    return (      
      <div  id = 'homePage' className='full-site' ref={(screen) => this.screen = screen}>
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
        {(this.state.width > 321) ? this.largeScreen(title, options) : this.smallScreen(title)}
        {/* <Footer /> */}
      </div>
    )
  }
};
