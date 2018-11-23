import React from 'react';
import Weather from './Weather/WeatherApp';
import WeatherImage from './../../../../../public/images/WeatherApp.jpg'

const ApiProjects = ({gitHub, title, openModal}) => {

  let modal = (modal) => {  
    console.log('modal', modal);  
    openModal(modal);
  }

  let gitHubLink = (link) => {
    gitHub(link);
  }

  return (
    <div className="projects-page-form full-page">
      <div className="container projects-container">
        <div className="projects-header">
          {title}
        </div>
        <div className="projects">
          <div className='projects-div'>
            <img  src={WeatherImage} 
                  className='projects-div-info projects-div-info--front' 
            />
            <div className="projects-div-info projects-div-info--back projects-div-info--weatherApp"
                  onClick={() => modal('Weather')}>
              <p className='projects-div-info-title'>
                <u> Weather App</u> 
                <span className = 'projects-div-info-title--github'>
                  {gitHubLink('https://github.com/wongalfonso/Weather-App', 'weather')}
                </span>
              </p>
              <p className = 'projects-div-info-text'>This is the first Redux application that I built while at Origin Code Academy. This application helped me understand the true power of Redux and the potential of the framework. The toughest part for me to grasp was the separation of React into a simple view component and allowing Redux to handle all of the grunt work. Handling errors in Redux was also another hurdle for me due to the fact that when using Redux Promise Middleware, errors now had to be dealt with in state as opposed to just being dealt with in the server.               
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApiProjects;
