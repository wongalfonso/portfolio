import React from 'react';
import { Link } from 'react-router-dom';
import PosImage from './../../../../../public/images/PosImage.jpg'
import ChangeCalcImage from './../../../../../public/images/ChangeCalc.jpg'
import VSTDAImage from './../../../../../public/images/VSTDAReact.jpg'
import AstroImage from './../../../../../public/images/AstroWeightCalc.jpg'

const FormProjects = ({ gitHub, title}) => {

  let gitHubLink = (link) => {
    gitHub(link);
  }
  
  return (
    <div className='projects-page-form full-page' id ='form-projects'>
      <div className="projects-container">
        <div className="projects-header">
          Form Projets
        </div>
        <div className="projects">          
          <Link to ='/vstda' className='projects-div'>
            <div className="projects-div-col-img">
              <img src={VSTDAImage} className='projects-div-info projects-div-info--front' id='vstdaImage'/>
            </div>
            <div className="projects-div-info projects-div-info--back projects-div-info--vstda">
              <p className='projects-div-info-title'>
                <u>VSTDA</u>                
              </p>
              <p className='projects-div-info-text'>
                The main purpose of this application is to create a list and use basic CRUD operations within React's state. With this application you have the ability to Add an item to the list and select a priority. Once the item has been added, the user has the ability to Update the lists priority or description and then Delete it once it is no longer needed. CRUD operations within React was a new concept that it took me a while to wrap my brain around. Finally learning this concept help grasp the idea and true power within React.
              </p>
            </div>
          </Link>
          <Link to = '/astro' className='projects-div'>
            <div className="projects-div-col-img">
              <img src={AstroImage} className='projects-div-info projects-div-info--front'/>
            </div>
            <div  className="projects-div-info projects-div-info--back projects-div-info--astro">
              <p className='projects-div-info-title'>
                <u>Astro Calculator</u>                
              </p>
              <p className='projects-div-info-text'>
                This form is a basic JavaScript form that I modified into a React form. The main purpose of this form is for the user to input their current weight and the form will adjust the users weight depending on the planet they choose from the list. I added a feature to remove Pluto from the list since it has been downgraded from a planet to a Dwarf Planet. This is one of the first JavaScript projects that I worked on and the toughest part for me was trying to understand objects and arrays.
                </p>
            </div>
          </Link>        
        </div>
      </div>
    </div>
  )
}

export default FormProjects;
