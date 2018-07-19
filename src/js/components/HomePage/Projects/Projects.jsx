import React, { Component } from 'react';
import Modal from 'react-modal';
import ChangeCalc from './ChangeCalc/ChangeCalc';
// import VSTDA from './Vstda/Vstda';
import AstroWeight from './AstroWeight/AstroWeight';
// import WeatherApp from './WeatherApp/WeatherApp';
import GitHub from './../../../../../public/images/gitHub_Mark.png'
import ChangeCalcImage from './../../../../../public/images/ChangeCalc.jpg'
import VSTDAImage from './../../../../../public/images/VSTDAReact.jpg'
import AstroImage from './../../../../../public/images/AstroWeightCalc.jpg'
import WeatherImage from './../../../../../public/images/WeatherApp.jpg'

const modalStyle = {
  overlay: {
    zIndex: 99
  }
}
Modal.setAppElement('#app');

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      selected: '',
      hover: '',
    }
    this.openModal = this.openModal.bind(this);
    this.afterOpen = this.afterOpen.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.modalTemplate = this.modalTemplate.bind(this);
    this.aboutCalc = this.aboutCalc.bind(this);
    this.aboutVSTDA = this.aboutVSTDA.bind(this);
    this.aboutWeather = this.aboutWeather.bind(this);
    this.aboutAstro = this.aboutAstro.bind(this);
  }

  openModal(project) {
    this.setState({ modalIsOpen: true, selected: project })
  }
  afterOpen() {
  }
  closeModal() {
    this.setState({ modalIsOpen: false })
  }

  modalTemplate() {
    return (
      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpen}
        onRequestClose={this.closeModal}
        ariaHideApp={false}
        className={'ReactModal_Content ReactModal_Content--after-open'}
        style={modalStyle}
      >
        {(this.state.selected === 'Change') && <ChangeCalc close={this.closeModal} />}
        {/* {(this.state.selected == 'VSTDA') && <VSTDA close={this.closeModal} />} */}
        {(this.state.selected == 'Astro') && <AstroWeight close={this.closeModal} />}
        {/* {(this.state.selected == 'Weather') && <WeatherApp close={this.closeModal} />} */}
        
      </Modal>
    )
  }
  gitHub(link) {
    return (
      <a href={link} target='_blank'><img src={GitHub} className='gitHubImage' /></a>
    )
  }
  aboutCalc(calcStyle) {
    return (
      <div className={calcStyle}>
        <p>This is a simple React form that allos you to enter the total amount of an item and the amount the person used to pay for that amount. This React project is a simple JavaScript project that was easy to reproduce with some basic math logic. This is not a form that is meant to be used for online shopping due to the fact that exact totals are usually charged, this is though meant to be used as a cash register form where amounts such as a whole Dollars can be accepted to pay for the item.</p>
        <p className='downloadRepo'>If you'd like to try this app out just click on the image, if you really like this repo you can download it from my github {this.gitHub('https://github.com/wongalfonso/React-Change-Calculator')}</p>
      </div>
    )
  }

  aboutVSTDA(vstdaStyle) {
    return (
      <div className={vstdaStyle}>
        <p>This React project is called Very Simple ToDo App. The main purpose of this application is to create a list and use basic CRUD operations within React state. With this application you have the ability to Add an item to the list and select a priority. Once the item has been added, the user has the ability to Update the lists priority or description and then Delete it once it is no longer needed.</p>
        <p>When I was first learning React, CRUD operations within React was a new concept that it took me a while to wrap my brain around. Finally learning this concept help grasp the idea and true power within React. {this.gitHub('https://github.com/wongalfonso/VSTDA')}</p>
      </div>
    )
  }

  aboutAstro(astroStyle) {
    return (
      <div className={astroStyle}>
        <p>This form is a basic JavaScript form that I modified into a React form. The main purpose of this form is for the user to input their current weight and the form will adjust the users weight depending on the planet they choose from the list. The Sun and Moon are also possibilities to choose from since they are part of our solar system. I added a feature to remove Pluto from the list since it has been downgraded from a planet to a Dwarf Planet. This is one of the first JavaScript projects that I worked on and the toughest part for me was trying to understand objects and arrays. Reading from an array was fairly simple, but modifying one seemed to be challenging. {this.gitHub('https://github.com/wongalfonso/Astro-Weight-React')} </p>
      </div>
    )
  }

  aboutWeather(weatherStyle) {
    return (
      <div className={weatherStyle}>
        <p>This is the first Redux application that I built while at Origin Code Academy. This application helped me understand the true power of Redux and the potential of the framework. The toughest part for me to grasp was the seperation of React into a simple view component and allowing Redux to handle all of the grunt work. Handling errors in Redux was also another hurdle for me due to the fact that when using Redux Promise Middleware, errors now had to be dealt with in state as opposed to just being dealt with in the server. After understanding the possibilities of what Redux can do, I decided to build this portfolio in that framework. {this.gitHub('https://github.com/wongalfonso/Weather-App')}</p>
      </div>
    )
  }
  smallScreen() {
    return (
      <div>
        <div className="projectContainer">
          <div className='row'>
            <div className='col-sm-12'>
              <img src={ChangeCalcImage} className='projectImages' />
            </div>
          </div>
          <div className="row">
            {this.aboutCalc('infoDiv col-sm-12')}
          </div>
        </div>

        <div className="projectContainer">
          <div className='row'>
            <div className='col-sm-12'>
              <img src={VSTDAImage} className='projectImages' />
            </div>
          </div>
          <div className="row">
            {this.aboutVSTDA('infoDiv col-sm-12')}
          </div>
        </div>

        <div className="projectContainer">
          <div className='row' >
            <div className='col-sm-12'>
              <img src={AstroImage} className='projectImages' />
            </div>
          </div>
          <div className="row">
            {this.aboutAstro('infoDiv col-sm-12')}
          </div>
        </div>

        <div className="projectContainer">
          <div className='row'>
            <div className='col-sm-12'>
              <img src={WeatherImage} className='projectImages' />
            </div>
          </div>
          <div className="row">
            {this.aboutWeather('infoDiv col-sm-12')}
          </div>
        </div>
      </div>

    )
  }

  largeScreen() {
    return (
      <div>
        {this.modalTemplate()}

        <div className='row projectContainer'>
          {this.aboutCalc('infoDiv col-6')}
          <img src={ChangeCalcImage} className='projectImages col-6' onClick={() => this.openModal('Change')} />
        </div>

        <div className='row projectContainer'>
          {this.aboutVSTDA('infoDiv col-6')}
          <img src={VSTDAImage} className='projectImages col-6' onClick={() => this.openModal('VSTDA')} />
        </div>

        <div className='row projectContainer'>
          {this.aboutAstro('infoDiv col-6')}
          <img src={AstroImage} className='projectImages col-6' onClick={() => this.openModal('Astro')} />
        </div>

        <div className='row projectContainer'>
          {this.aboutWeather('infoDiv col-6')}
          <img src={WeatherImage} className='projectImages col-6' onClick={() => this.openModal('Weather')} />
        </div>
      </div>
    )
  }

  render() {
    const { screen } = this.props;
    return (
      <div className='projectsPage'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 projectsHeader'>
              <div className='title'>Portfolio</div>
            </div>
          </div>
          {(screen > 992) ? this.largeScreen() : this.smallScreen()}
        </div>
      </div>
    )
  }
};
