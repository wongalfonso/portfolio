import React from 'react';

const Splash = ({title}) => {  
  return (
    <div className="splash-home" id = 'splashPage'>  
      <div className="splash-text">
        <div className="splash-name">
          Alfonso Wong
        </div>
        <div className="splash-title">
          Web Developer
        </div>            
      </div>  
      <div className="splash-header">
        <div className="splash-head">
          {title}
        </div>
      </div>  
    </div>
  )
}

export default Splash;