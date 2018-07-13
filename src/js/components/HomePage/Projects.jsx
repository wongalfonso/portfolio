import React, { Component } from 'react';
import Modal from 'react-modal';
import ChangeCalc from './projects/ChangeCalc';
import VSTDA from './projects/Vstda';
import AstroWeight from './projects/AstroWeight';

const modalStyle = {
  content: {    
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',  
    padding: 0,   
    transform: 'translate(-50%, -50%)',
    width: '70%',
    maxWidth: '1800px',
    maxHeight: '1000px',
    borderRadius: '20px',
    overflow: 'hidden'
    // opacity: 0,    
  },
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
          ariaHideApp= {false}
          style = {modalStyle}      
          >
          {(this.state.selected === 'Change') && <ChangeCalc close = {this.closeModal}/>}
          {(this.state.selected == 'VSTDA' ) && <VSTDA close = {this.closeModal}/>}
          {(this.state.selected == 'Astro' ) && <AstroWeight close = {this.closeModal}/>}
        </Modal>
    )
  }
  render() {
    return (
      <div className='projectsPage'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 projectsHeader'>
              <div className='title'>Portfolio</div>
            </div>
          </div>
        </div>
        {this.modalTemplate()}
        <div className='row projectContainer' id='calcContainer'>
          <div className='infoDiv'>
            <p>
              This is a simple React form that allos you to enter the total amount of an item and the amount the person used to pay for that amount. This React project is a simple JavaScript project that was easy to reproduce with some basic math logic.
              </p>
            <p>
              This is not a form that is meant to be used for online shopping due to the fact that exact totals are usually charged, this is though meant to be used as a cash register form where amounts such as a whole Dollars can be accepted to pay for the item.
              </p>
          </div>
          <div id='changeCalcImage' className='projectImages' onClick={() => this.openModal('Change')}></div>
        </div>

        <div className='row projectContainer' id='calcContainer'>
          <div className='infoDiv' id='infoDiv'>
            <p>
              This React project is called Very Simple ToDo App. The main purpose of this application is to create a list and use basic CRUD operations within React state. With this application you have the ability to Add an item to the list and select a priority. Once the item has been added, the user has the ability to Update the lists priority or description and then Delete it once it is no longer needed.
            </p>
            <p>
              When I was first learning React, CRUD operations within React was a new concept that it took me a while to wrap my brain around. Finally learning this concept help grasp the idea and true power within React.
            </p>
          </div>
          <div id='vstdaImage' className='projectImages' onClick={() => this.openModal('VSTDA')}>
          </div>
        </div>

        <div className='row projectContainer' id='calcContainer'>
          <div className='infoDiv' id='infoDiv'>
            <p>This form is a basic JavaScript form that I modified into a React form. The main purpose of this form is for the user to input their current weight and the form will adjust the users weight depending on the planet they choose from the list. The Sun and Moon are also possibilities to choose from since they are part of our solar system. I added a feature to remove Pluto from the list since it has been downgraded from a planet to a Dwarf Planet. This is one of the first JavaScript projects that I worked on and the toughest part for me was trying to understand objects and arrays. Reading from an array was fairly simple, but modifying one seemed to be challenging.
            </p>
          </div>
          <div id='astroWeightImage' className='projectImages' onClick={() => this.openModal('Astro')}>
          </div>
        </div>        
      </div>
    )
  }
};
