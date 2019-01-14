import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { ScrollToTopOnMount, SectionsContainer, Section } from 'react-fullpage';
import { connect } from 'react-redux';
import { pageTitle, setWidth, setCurrentPage, } from './HomePageActions';
import backgroundVid from '../../../../public/video/backgroundVideo.mp4';
import Splash from './Splash';
import About from './About/About';
import FormProjects from './Projects/FormProjects';
import ApiProjects from './Projects/ApiProjects';
import WebProjects from './Projects/WebProjects';
import Footer from './../Footer';
import Header from './../Header';
import NavBar from './NavBar';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.analytics = this.analytics.bind(this);
  }

  componentWillMount() {
    ReactGA.initialize('UA-126168783-1');
  }

  analytics() {
    ReactGA.event({
      category: 'scrolled',
      action: `scrolled to ${location}`
    })
  }

  componentDidUpdate() {
    const { title, dispatch, location } = this.props;
    let hash = location.hash.replace(/#/g, '');
    if (hash === 'Top' && title !== 'Web Developer') {

      setTimeout(() => dispatch(pageTitle('Web Developer')), 800);
    }
    if (hash === 'About' && title !== 'About Me') {
      this.analytics(hash);
      setTimeout(() => dispatch(pageTitle('About Me')), 800);
    }
    if (hash === 'Form-Projects' && title !== 'Form Projects') {
      this.analytics(hash);
      setTimeout(() => dispatch(pageTitle('Form Projects')), 800);
    }
    if (hash === 'API-Projects' && title !== 'API Projects') {
      this.analytics(hash);
      setTimeout(() => dispatch(pageTitle('API Projects')), 800);
    }
    if (hash === 'Web-Projects' && title !== 'Web Projects') {
      this.analytics(hash);
      setTimeout(() => dispatch(pageTitle('Web Projects')), 800);
    }
  }

  componentDidMount() {
    const screen = this.screen;
    const { dispatch } = this.props;
    if (screen.clientWidth) {
      dispatch(setWidth(screen.clientWidth))
    }
  }
  
  mouseEnter(page) {

  }

  mouseExit() {

  }

  scroll(target) {
    const { enter } = this.props;
    let page;
    if (target === 'vidContainer') {page = 'splash'}
    if (target === 'aboutPage') {page = 'about'}
    if (target === 'projectPage') {page = 'project'}
    if (enter === page) {
      return 
    } else {
      let id = document.getElementById(target).offsetTop
      window.scrollTo({top: id, behavior: 'smooth'})
      
    }
  }
  render() {
    const { width, title } = this.props;
    return (
      <div id='homePage'
        className='full-site'
        ref={(screen) => this.screen = screen}>
        <div className="vid-container">
          <video id='homeVid' loop autoPlay muted >
            <source src={backgroundVid} type='video/mp4' />
          </video>
        </div>
        <Splash
          title={title} />
        <About
          title={title} />
        <div className="projects-page"
          id='formProjects'
          ref={(project) => this._project = project}>
          <FormProjects
            gitHub={this.gitHub}
            title={title}
          />
        </div>
        <div className="projects-page"
          id='apiProjects'
          ref={(project) => this._project = project}>
          <ApiProjects
            gitHub={this.gitHub}
            title={title}
          />
        </div>
        <div className="projects-page"
          id='webProjects'
          ref={(project) => this._project = project}>
          <WebProjects
            title={title}
          />
        </div>
        {/* <NavBar 
          active = {this.state.enter} 
          menu = {this.state.exit} 
          isActive = {this.mouseEnter}
          scroll = {this.scroll}/>     */}        
        {/* <Footer /> */}
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    width: state.home.homePage.width,
    currentPage: state.home.homePage.currentPage,
    title: state.home.homePage.title,
    selected: state.home.homePage.selected,
    hover: state.home.homePage.hover,
    screen: state.home.homePage.screen
  }
}

export default connect(mapStateToProps)(HomePage);