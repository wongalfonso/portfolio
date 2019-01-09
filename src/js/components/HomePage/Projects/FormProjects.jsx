import React from 'react';
import POS from './../../../../../public/images/PosImage.jpg'
import ChangeCalcImage from './../../../../../public/images/ChangeCalc.jpg'
import VSTDAImage from './../../../../../public/images/VSTDAReact.jpg'
import AstroImage from './../../../../../public/images/AstroWeightCalc.jpg'

const FormProjects = ({ gitHub, title, openModal, closeModal }) => {

  let gitHubLink = (link) => {
    gitHub(link)
  }
  let modal = (modal) => {       
    openModal(modal);
  }
  return (
    <div className='projects-page-form full-page'>
      <div className="container projects-container">
        <div className="projects-header">
          {title}
        </div>
        <div className="projects">
          <div className='projects-div'>
            <img src={POS}
              className='projects-div-info projects-div-info--front' id='posCalcImage'  
              onClick={() => modal('POS')}          
            />
            <div className="projects-div-info projects-div-info--back projects-div-info--posCalc" 
                  onClick={() => modal('POS')}>
              <p className='projects-div-info-title'>
                <u>Point Of Sale Calculator</u>
                <span className = 'projects-div-info-title--github'>
                  {gitHubLink('https://github.com/wongalfonso/React-Change-Calculator', 'change')}
                </span>
              </p>
              <p className='projects-div-info-text'>
                This is a pretty complex single page Point of Sale application that I built from memory after using the Starbucks POS system. There are still customizations that could be added to this pos but I decided to keep it very simple and just translate the UX that is involved in this software. It is just a simple cash calculator that allows you to add in items along with customizing the sizes of drinks. This system also allows you to save orders and modify them along with voiding and cancelling entire orders. 
                {/* This is a simple React form that allows you to enter the total amount of an item and the amount the person used to pay for that amount. This React project is a simple JavaScript project that was easy to reproduce with some basic math logic. This is not a form that is meant to be used for online shopping due to the fact that exact totals are usually charged, this is though meant to be used as a cash register form where amounts such as a whole Dollars can be accepted to pay for the item.  */}
              </p>
            </div>
          </div>
          <div className='projects-div'>
            <div className="projects-div-col-img">
              <img src={VSTDAImage} className='projects-div-info projects-div-info--front' id='vstdaImage'
              onClick={() => modal('VSTDA')}/>
            </div>
            <div className="projects-div-info projects-div-info--back projects-div-info--vstda" 
                  onClick={() => modal('VSTDA')}>
              <p className='projects-div-info-title'>
                <u>VSTDA</u>
                <span className = 'projects-div-info-title--github'>
                  {gitHubLink('https://github.com/wongalfonso/VSTDA', 'vstda')}
                </span>
              </p>
              <p className='projects-div-info-text'>
                The main purpose of this application is to create a list and use basic CRUD operations within React's state. With this application you have the ability to Add an item to the list and select a priority. Once the item has been added, the user has the ability to Update the lists priority or description and then Delete it once it is no longer needed. CRUD operations within React was a new concept that it took me a while to wrap my brain around. Finally learning this concept help grasp the idea and true power within React.
              </p>
            </div>
          </div>
          <div className='projects-div'>
            <div className="projects-div-col-img">
              <img src={AstroImage} className='projects-div-info projects-div-info--front'
              onClick={() => modal('Astro')}/>
            </div>
            <div  className="projects-div-info projects-div-info--back projects-div-info--astro"
                  onClick={() => modal('Astro')} 
                  >
              <p className='projects-div-info-title'>
                <u>Astro Calculator</u>
                <span className = 'projects-div-info-title--github'>
                  {gitHubLink('https://github.com/wongalfonso/Astro-Weight-React', 'astro')}
                </span>
              </p>
              <p className='projects-div-info-text'>
                This form is a basic JavaScript form that I modified into a React form. The main purpose of this form is for the user to input their current weight and the form will adjust the users weight depending on the planet they choose from the list. I added a feature to remove Pluto from the list since it has been downgraded from a planet to a Dwarf Planet. This is one of the first JavaScript projects that I worked on and the toughest part for me was trying to understand objects and arrays.
                </p>
            </div>
          </div>        
        </div>
      </div>
    </div>
  )
}

export default FormProjects;
