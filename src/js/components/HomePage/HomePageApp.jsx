import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { connect } from 'react-redux';
import { pageTitle, setWidth, setCurrentPage, mouseEnter, mouseExit } from './HomePageActions';
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
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseExit = this.mouseExit.bind(this);
  }

  componentWillMount() {
    ReactGA.initialize('UA-126168783-1');
  }

  analytics(category, action) {
    console.log(category, action);
    ReactGA.event({
      category: category,
      action: action
    })
  }


  mouseEnter(page) {
    const { dispatch } = this.props;
    dispatch(mouseEnter(page));
  }

  mouseExit(page) {
    const {dispatch } = this.props;
    dispatch(mouseExit(page));
  }
  componentDidUpdate() {
  }

  componentDidMount() {
    const screen = this.screen;
    const { dispatch } = this.props;
    if (screen.clientWidth) {
      dispatch(setWidth(screen.clientWidth))
    }
  }  

  render() {
    const { width } = this.props;
    return (
      <div id='homePage'
        className='full-site'
        ref={(screen) => this.screen = screen}>
        <div className="vid-container">
          <video id='homeVid' loop autoPlay muted >
            <source src={backgroundVid} type='video/mp4' />
          </video>
        </div>
        <Header/>
        <Splash          
          enter = {this.mouseEnter}
          exit = {this.mouseExit}/>
        <About          
          enter = {this.mouseEnter}
          exit = {this.mouseExit}
          gaEvent = {this.analytics}/>
        <div className="projects-page"
          id='formProjects'
          ref={(project) => this._project = project}>
          <FormProjects
            gitHub={this.gitHub}
          />
        </div>
        <div className="projects-page"
          id='apiProjects'
          ref={(project) => this._project = project}>
          <ApiProjects
            gitHub={this.gitHub}
          />
        </div>
        <div className="projects-page"
          id='webProjects'
          ref={(project) => this._project = project}>
          <WebProjects
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