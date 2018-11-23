import React from 'react';

const WebProjects = ({title}) => {


  return (
    <div className="projects-page-form full-page">
      <div className="container projects-container">
        <div className="projects-header">
          API Projects
        </div>
        <div className="projects">
          <div className='projects-div'>
            {/* <img  src={WeatherImage} 
                  className='projects-div-info projects-div-info--front'     
            /> */}
            <div className="projects-div-info projects-div-info--back projects-div-info--barberShop">
              <p className='projects-div-info-title'>
                <u> The Barberos Barbershop</u>               
              </p>
              <p className = 'projects-div-info-text'>My first client as a freelance web developer. The idea was to incorporate an admin area that would be able to adjust the content of the pages, price points, photos and allow customers to login and schedule appointments. I built a full React frontend with a Node.JS back-end that could implement a MongoDB database allowing for user login. After a price point was discussed, we decided to implement a 3rd party service instead that would allow for scheduling and user logins. A basic logo was given to me and a color schema, I then used that schema to create the UI for the page. 
              </p>
            </div>
          </div>
          <div className='projects-div'>
            {/* <img  src={WeatherImage} 
                  className='projects-div-info projects-div-info--front'     
            /> */}
            <div className="projects-div-info projects-div-info--back projects-div-info--barberShop">
              <p className='projects-div-info-title'>
                <u> My Life Unlocked</u>               
              </p>
              <p className = 'projects-div-info-text'>This is a Wordpress.com website that needed to implement a memberpress plug in and edit different content for the pages. I was able to use my digital media skills to edit audio, video, images, etc. This was my first real Wordpress job and took a while for me to figure out the layout. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebProjects;
