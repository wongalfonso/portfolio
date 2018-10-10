import React from 'react';
import backgroundVid from './../../../../public/video/backgroundVideo.mp4';


const Splash = () => { 
    return (
      <div id="splashPage" className = 'full-page'>
        <video id='splashVid' loop autoPlay muted >
          <source src={backgroundVid} type='video/mp4' />
        </video>
        <div id="splashImg">
        </div>                           
      </div>      
    )  
}

export default Splash