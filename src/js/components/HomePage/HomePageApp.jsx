import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { ScrollToTopOnMount, SectionsContainer, Section } from 'react-fullpage';
import Modal from 'react-modal';
import backgroundVid from '../../../../public/video/backgroundVideo.mp4';
import Splash from './Splash';
import About from './About/About';
import FormProjects from './Projects/FormProjects';
import ApiProjects from './Projects/ApiProjects';
import WebProjects from './Projects/WebProjects';
import ChangeCalc from './Projects/ChangeCalc/ChangeCalc';
import VSTDA from './Projects/VstdaApp/Vstda';
import AstroWeight from './Projects/AstroWeight/AstroWeight';
import Weather from './Projects/Weather/WeatherApp';
import Footer from './../Footer';
import Header from './../Header';
import NavBar from './NavBar';
import GitHubWhite from '../../../../public/images/GitHubWhite.png';

const modalStyle = {
  overlay: {
    zIndex: 99
  }
};
Modal.setAppElement('#app');

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      selected: '',
      hover: '',
      currentPage: '#Top',
      title: 'Web Developer',
      width: '',
      screen: '',
    }        
    this.scroll = this.scroll.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.modalTemplate = this.modalTemplate.bind(this);    
  }
  componentWillMount() {
    ReactGA.initialize('UA-126168783-1');      
  }  
  
  componentDidUpdate() {
    const { currentPage, title } = this.state;
    if (currentPage !== this.props.location.hash) {
      this.setState({currentPage: this.props.location.hash})
    }
    if (currentPage === '#Top' && title !== 'Web Developer') {
      setTimeout( () => this.setState({title: 'Web Developer'}),800);
    }
    if (currentPage === '#About' && title !== 'About Me') {
      setTimeout( () => this.setState({title: 'About Me'}),800);
    }
    if (currentPage === '#Form-Projects' && title !== 'Form Projects') {
      setTimeout( () => this.setState({title: 'Form Projects'}),800);      
    }    
    if (currentPage === '#API-Projects' && title !== 'API Projects') {
      setTimeout( () => this.setState({title: 'API Projects'}),800);
    }    
    if (currentPage === '#Web-Projects' && title !== 'Web Projects') {
      setTimeout( () => this.setState({title: 'Web Projects'}),800);
    }    
  }
  componentDidMount() {
    const screen = this.screen; 
    if (screen.clientWidth) {
      this.setState({width: screen.clientWidth})      
    }
  }
  openModal(project) {   
    this.setState({
      modalIsOpen: true, 
      selected: project
    })
  }

  closeModal() {
    this.setState({
      modalIsOpen: false
    })
  }

  modalTemplate() {
    return (
      <Modal
        isOpen = {this.state.modalIsOpen}
        onRequestClose = {this.closeModal}  
        ariaHideApp={false}
        className={'ReactModal_Content ReactModal_Content--after-open'}
        style={modalStyle}    
      >
        {(this.state.selected === 'Change') && <ChangeCalc closeModal = {this.closeModal} />}
        {(this.state.selected == 'VSTDA') && <VSTDA closeModal={this.closeModal} />}
        {(this.state.selected == 'Astro') && <AstroWeight closeModal={this.closeModal} />}
        {(this.state.selected == 'Weather') && <Weather closeModal={this.closeModal} />}
      </Modal>
    )
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
      <a href={link} target='_blank'><img src={GitHubWhite} className='github-image' /></a>
    )
  }
  smallScreen() {
    const { title } = this.state;
    return (
      <div className = 'section-container'>
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
    return (
      <div>
        <ScrollToTopOnMount/>
        <Header/>    
        {this.modalTemplate()}
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
                title = {title}
                openModal = {this.openModal}/>
            </div>
          </Section>
          <Section className = 'section'>
            <div  className="projects-page"
                  id = 'apiProjects'
                  ref = {(project) => this._project = project}>
            <ApiProjects 
              gitHub = {this.gitHub}
              title = {title}
              openModal = {this.openModal}
              />
          </div>
          </Section>
          <Section className = 'section'>
            <div  className="projects-page"
                  id = 'webProjects'
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
    return (      
      <div  id = 'homePage' 
            className='full-site' 
            ref={(screen) => this.screen = screen}>
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
        {(this.state.width > 900) ? this.largeScreen(options) : this.smallScreen()}
        {/* <Footer /> */}
      </div>
    )
  }
};
