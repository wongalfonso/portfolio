import React from 'react';
import GitHubWhite from './../../../../../public/images/GitHubWhite.png'
import ChangeCalcImage from './../../../../../public/images/ChangeCalc.jpg'
import VSTDAImage from './../../../../../public/images/VSTDAReact.jpg'
import AstroImage from './../../../../../public/images/AstroWeightCalc.jpg'

const FormProjects = ({ gitHub, title }) => {

  let gitHubLink = (link) => {
    return gitHub(link)
  }

  return (
    <div className='projects-form full-page'>
        <div className="projects-header">
          {title}
        </div>
      <div className="row">
        <div className="projects-title">
          Form Projects
            </div>
      </div>
      <div className="row">
        <div className='projects-div col-1-of-2'>
          <img src={ChangeCalcImage}
            className='projects-div-info projects-div-info--front' id='changeCalc'
            onClick={() => this.openModal('Change')}
          />
          <div className="projects-div-info projects-div-info--back projects-div-info--changeCalc">
            <p className='projects-div-info-title'>
              <u>Change Calculator</u>
              {gitHubLink('https://github.com/wongalfonso/React-Change-Calculator', 'change')}
            </p>
            <p className='projects-div-info-text'>
              This is a simple React form that allows you to enter the total amount of an item and the amount the person used to pay for that amount. This React project is a simple JavaScript project that was easy to reproduce with some basic math logic. This is not a form that is meant to be used for online shopping due to the fact that exact totals are usually charged, this is though meant to be used as a cash register form where amounts such as a whole Dollars can be accepted to pay for the item. If you'd like to try this app out just click on the image, if you really like this repo you can download it from my github.
            </p>
          </div>
        </div>
        <div className='projects-div col-1-of-2'>
          <div className="projects-div-col-img">
            <img src={VSTDAImage} className='projects-div-info projects-div-info--front' id='vstdaImage' onClick={() => this.openModal('VSTDA')} />
          </div>
          <div className="projects-div-info projects-div-info--back projects-div-info--vstda">
            <p className='projects-div-info-title'>
              <u>VSTDA</u>
              {gitHubLink('https://github.com/wongalfonso/VSTDA', 'vstda')}
            </p>
            <p className='projects-div-info-text'>
              This React project is called Very Simple ToDo App. The main purpose of this application is to create a list and use basic CRUD operations within React state. With this application you have the ability to Add an item to the list and select a priority. Once the item has been added, the user has the ability to Update the lists priority or description and then Delete it once it is no longer needed. When I was first learning React, CRUD operations within React was a new concept that it took me a while to wrap my brain around. Finally learning this concept help grasp the idea and true power within React.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className='projects-div col-1-of-2'>
          <div className="projects-div-col-img">
            <img src={AstroImage} className='projects-div-info projects-div-info--front' onClick={() => this.openModal('Astro')} />
          </div>
          <div className="projects-div-info projects-div-info--back projects-div-info--astro">
            <p className='projects-div-info-title'>
              <u>Astro Calculator</u>
              {gitHubLink('https://github.com/wongalfonso/Astro-Weight-React', 'astro')}
            </p>
            <p className='projects-div-info-text'>
              This form is a basic JavaScript form that I modified into a React form. The main purpose of this form is for the user to input their current weight and the form will adjust the users weight depending on the planet they choose from the list. The Sun and Moon are also possibilities to choose from since they are part of our solar system. I added a feature to remove Pluto from the list since it has been downgraded from a planet to a Dwarf Planet. This is one of the first JavaScript projects that I worked on and the toughest part for me was trying to understand objects and arrays. Reading from an array was fairly simple, but modifying one seemed to be challenging.
              </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormProjects;
