import React from 'react';
import backgroundVid from '../../../../public/video/backgroundVideo.mp4';

const Background = () => {
    return (
      <div id="background" className = 'full-site'>    
        <video id='homeVid' loop autoPlay muted >
          <source src={backgroundVid} type='video/mp4' />
        </video>                 
      </div>      
    )  
}

export default Background;
