import React, { Component } from 'react';
import backgroundVid from './../../../../public/video/backgroundVideo.mp4';


export default class Splash extends Component {
  componentDidMount() {
    const about = document.getElementById('splash-page');
    about.onmouseenter = () => this.props.enter('splash');
    about.onmouseleave = () => this.props.exit('splash');
  }

  render() {
    return (
      <div id="splash-page" >
        <video id='splash-vid' loop autoPlay muted >
          <source src={backgroundVid} type='video/mp4' />
        </video>
        <div id="splash-img">
          <div className='overlay'>
            <div className="overlay-text">
              <div className = 'overlay-name'>
                <div>Alfonso Wong</div>
              </div>                     
            </div>
            <div className = 'overlay-title'>
              WEB DEVELOPER
            </div>
          </div>
        </div>
      </div>
    )
  }
}
