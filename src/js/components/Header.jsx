import React from 'react';

const Header = ({title}) => {
  return (
    <div className = 'header-page'>   
      <div className="header-animation">
        <div className="name-animation">
          Alfonso Wong
        </div>
        <div className = 'title-animation'>
          Front End Developer
        </div>
      </div>   
      <div className="overlay-name">
        Alfonso Wong
      </div>
      <div className="overlay-text title">
        Web Developer
      </div>
    </div>
  )
}

export default Header;