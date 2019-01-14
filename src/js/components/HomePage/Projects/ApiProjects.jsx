import React from 'react';
import { Link } from 'react-router-dom';
import WeatherImage from './../../../../../public/images/WeatherApp.jpg'

const ApiProjects = ({gitHub, title}) => {

  let gitHubLink = (link) => {
    gitHub(link);
  }

  return (
    <div className="projects-page-form full-page">
      <div className="container projects-container">
        <div className="projects-header">
          API Projects
        </div>
        <div className="projects">
          <Link to = '/weather' className='projects-div'>
            <img  src={WeatherImage} 
                  className='projects-div-info projects-div-info--front' 
            />
            <div className="projects-div-info projects-div-info--back projects-div-info--weatherApp">
              <p className='projects-div-info-title'>
                <u> Weather App</u> 
              </p>
              <p className = 'projects-div-info-text'>This is the first Redux application that I built while at Origin Code Academy. This application helped me understand the true power of Redux and the potential of the framework. The toughest part for me to grasp was the separation of React into a simple view component and allowing Redux to handle all of the grunt work. Handling errors in Redux was also another hurdle for me due to the fact that when using Redux Promise Middleware, errors now had to be dealt with in state as opposed to just being dealt with in the server.               
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ApiProjects;
