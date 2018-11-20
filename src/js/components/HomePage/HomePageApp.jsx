import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { ScrollToTopOnMount, SectionsContainer, Section } from 'react-fullpage';
import Modal from 'react-modal';
import backgroundVid from '../../../../public/video/backgroundVideo.mp4';
import Background from './Background';
import Splash from './Splash';
import About from './About/About';
import Projects from './Projects/Projects';
import FormProjects from './Projects/FormProjects';
import ApiProjects from './Projects/ApiProjects';
import WebProjects from './Projects/WebProjects';
import Footer from './../Footer';
import Header from './../Header';
import NavBar from './NavBar';
import GitHubWhite from '../../../../public/images/GitHubWhite.png';

// const modalStyle = {
//   overlay: {
//     zIndex: 99
//   }
// }
// modalStyle.setAppElement('#app');

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      selected: '',
      hover: '',
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
    // console.log(this.props.location.hash);
    console.log(this.state.currentPage);
    if (this.state.currentPage !== this.props.location.hash) {
      this.setState({currentPage: this.props.location.hash})
    }
    if (this.state.currentPage === '#Top' && this.state.title !== 'Web Developer') {
      setTimeout( () => this.setState({title: 'Web Developer'}),800);
    }
    if (this.state.currentPage === '#About' && this.state.title !== 'About Me') {
      setTimeout( () => this.setState({title: 'About Me'}),800);
    }
    if (this.state.currentPage === '#Form-Projects' && this.state.title !== 'Form Projects') {
      setTimeout( () => this.setState({title: 'Form Projects'}),800);      
    }    
    if (this.state.currentPage === '#API-Projects' && this.state.title !== 'API Projects') {
      setTimeout( () => this.setState({title: 'API Projects'}),800);
    }    
    if (this.state.currentPage === '#Web-Projects' && this.state.title !== 'Web Projects') {
      setTimeout( () => this.setState({title: 'Web Projects'}),800);
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

  gitHub(link, github) {
    // ReactGA.event({
    //   category: 'visited GitHub',
    //   action: github
    // });
    return (
      <a href={link} target='_blank'><img src={GitHubWhite} className='gitHubImage' /></a>
    )
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
  largeScreen(options) {
    const { title } = this.state;
    console.log(title);
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
            <div  className="projects-page"
                  id = 'formProjects'
                  ref = {(project) => this._project = project}>
              <FormProjects 
                gitHub = {this.gitHub}
                title = {title}/>
            </div>
          </Section>
          <Section className = 'section'>
            <div  className="projects-page"
                  id = 'apiProjects'
                  ref = {(project) => this._project = project}>
            <ApiProjects 
              gitHub = {this.gitHub}
              title = {title}
              />
          </div>
          </Section>
          <Section className = 'section'>
            <div  className="projects-page"
                  id = 'apiProjects'
                  ref = {(project) => this._project = project}>
              <WebProjects
                title = {title}
              />
          </div>
          </Section>
          
        </SectionsContainer>
      </div>
    )
  }
  render() {       
    let options = {
      activeClass:          'active', 
      anchors:              ['Top', 'About', 'Form-Projects', 'API-Projects', 'Web-Projects'], 
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
        {(this.state.width > 321) ? this.largeScreen(options) : this.smallScreen(title)}
        {/* <Footer /> */}
      </div>
    )
  }
};
