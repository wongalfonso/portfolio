import React from 'react';
import BarberosBarbershop from '../../../../../public/images/TheBarberosBarbershop.jpg';
import MyLifeUnlocked from '../../../../../public/images/MyLifeUnlocked.jpg';
const WebProjects = ({title}) => {
  
  return (
    <div className="projects-page-form full-page">
      <div className="container projects-container">
        <div className="projects-header">
          Web Projects
        </div>
        <div className="projects">
          <div className='projects-div'>
            <img  src={BarberosBarbershop} 
                  className='projects-div-info projects-div-info--front'     
            />
            <a href = 'https://thebarberosbarbershop.com/' target = '_blank' className = 'projects-div-info--website'>
              <div className="projects-div-info projects-div-info--back projects-div-info--barberShop">
                <p className='projects-div-info-title'>
                  <u> The Barberos Barbershop</u>               
                </p>
                <p className = 'projects-div-info-text'>My first client as a freelance web developer. The idea was to incorporate an admin area that would be able to adjust the content of the pages, price points, photos and allow customers to login and schedule appointments. I built a full React frontend with a Node.JS back-end that could implement a MongoDB database allowing for user login. After a price point was discussed, we decided to implement a 3rd party service instead that would allow for scheduling and user logins. A basic logo was given to me and a color schema, I then used that schema to create the UI for the page. 
                </p>
              </div>
            </a>
          </div>
          <div className='projects-div'>
            <img  src={MyLifeUnlocked} 
                  className='projects-div-info projects-div-info--front'     
            />
            <a href = 'https://freeingyourbeing.com/' target = '_blank' className = 'projects-div-info--website'>
              <div className="projects-div-info projects-div-info--back projects-div-info--myLife">
                <p className='projects-div-info-title'>
                  <u> My Life Unlocked</u>               
                </p>
                <p className = 'projects-div-info-text'>This is a wordpress.com website that is meant to be a paid membership course for customers to log in and complete online courses. Through the website, the user has the ability to login and purchase a specific course from the menu. When I first started this project the structure of the site wasn't laid out. The back end of the site also needed quite a few plugins for the membership login and email service. Basic CSS was needed for this layout as well. 
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebProjects;
