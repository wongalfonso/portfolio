import React from 'react';
import { Link } from 'react-router-dom';
import BPM from './../../../../../public/images/BPM.jpg';
import PosImage from './../../../../../public/images/PosImage.jpg';
const UserApplications = ({ gitHub, title}) => {

  let gitHubLink = (link) => {
    gitHub(link);
  }
  
  return (
    <div className='projects-page-form full-page' id ='form-projects'>
      <div className="projects-container">
        <div className="projects-header">
          User Applications
        </div>
        <div className="projects">
          <Link to = '/pos' className='projects-div'>
            <img src={PosImage}
              className='projects-div-info projects-div-info--front' id='posCalcImage'/>
            <div className="projects-div-info projects-div-info--back projects-div-info--posCalc">
              <p className='projects-div-info-title'>
                <u>Point Of Sale Calculator</u>                
              </p>
              <p className='projects-div-info-text'>
                This is a pretty complex single page Point of Sale application that I built from memory after using the Starbucks POS system. There are still customizations that could be added to this pos but I decided to keep it very simple and just translate the UX that is involved in this software. It is just a simple cash calculator that allows you to add in items along with customizing the sizes of drinks. This system also allows you to save orders and modify them along with voiding and cancelling entire orders. 
              </p>
            </div>
          </Link>
          <Link to ='/bpm' className='projects-div'>
            <div className="projects-div-col-img">
              <img src={BPM} className='projects-div-info projects-div-info--front' id='bpmImage'/>
            </div>
            <div className="projects-div-info projects-div-info--back projects-div-info--bpm">
              <p className='projects-div-info-title'>
                <u>Beats Per Minute</u>                
              </p>
              <p className='projects-div-info-text'>
                Because one of my previous occupations was a recording engineer, knowing the beats per minute for a specific piece of music was important. With that being said, I really had to think about how other softwares worked and how to copy the same behaviours. For example, when you first start the application, it will start you off at 60 and then try and put you closests to the tempo you are tapping. I'm dividing within an average of 40 numbers, so the closests you get to the tempo the lighter green the number gets
              </p>
            </div>
          </Link>               
        </div>
      </div>
    </div>
  )
}

export default UserApplications;
