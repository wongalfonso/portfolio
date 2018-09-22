import React, { Component } from 'react';
import backgroundVid from './../../../../../public/video/backgroundVideo.mp4';


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
            <div className="container splash-container">
              <div className="row text-row-top">
              </div>
              <div className="row text-row-middle">
                <div className="overlay-text">
                  <div className="col-lg-12 overlay-text-col">
                    <ul className='overlay-text-name' id='name-first'>
                      <li>A</li>
                      <li>L</li>
                      <li>F</li>
                      <li>O</li>
                      <li>N</li>
                      <li>S</li>
                      <li>O </li>
                    </ul>
                    <ul className='overlay-text-name' id='name-last'>
                      <li>W</li>
                      <li>O</li>
                      <li>N</li>
                      <li>G</li>
                    </ul>
                  </div>
                  <div className="col-lg-12">
                    <ul className='overlay-text-title' id='title-first'>
                      <li>F</li>
                      <li>R</li>
                      <li>O</li>
                      <li>N</li>
                      <li>T</li>
                    </ul>
                    <ul className='overlay-text-title' id='title-middle'>
                      <li>E</li>
                      <li>N</li>
                      <li>D</li>
                    </ul>
                    <ul className='overlay-text-title' id=
                      'title-last'>
                      <li>D</li>
                      <li>E</li>
                      <li>V</li>
                      <li>E</li>
                      <li>L</li>
                      <li>O</li>
                      <li>P</li>
                      <li>E</li>
                      <li>R</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row text-row-bottom">
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
