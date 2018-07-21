import React, { Component } from 'react';
import backgroundVid from './../../../../../public/video/backgroundVideo.mp4';


export default class Splash extends Component {
  componentDidMount(){
    const about = document.getElementById('splashPage');about.onmouseenter = () => this.props.enter('splash');
    about.onmouseleave = () => this.props.exit('splash');
  }
  smallScreen() {
    return (
      <div id="splashPage">
        <div className="container splashContainer">
          <div className='overlayText'>
            <div className="row">
              <div className="col-12">
                ALFONSO
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                WONG
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                FRONT
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                END
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                DEVELOPER
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  largeScreen() {
    return (
      <div className='vidContainer section' id = 'vidContainer'>
        <video id='backgroundVid' loop autoPlay muted>
          <source src={backgroundVid} type='video/mp4' />
        </video>
        <div id="splashPage">
          <div className="container">
            <div className='overlay'>
              <ul className='overlayText overlayTextName'>
                <div className="row">
                  <div className="col-12">
                    <li>A</li>
                    <li>L</li>
                    <li>F</li>
                    <li>O</li>
                    <li>N</li>
                    <li>S</li>
                    <li>O </li>
                    <li>W</li>
                    <li>O</li>
                    <li>N</li>
                    <li>G</li>
                  </div>
                </div>
              </ul>
              <ul className='overlayText overlayTextTitle'>
                <div className="row">
                  <div className="col-12">
                    <li>F</li>
                    <li>R</li>
                    <li>O</li>
                    <li>N</li>
                    <li>T</li>
                    <li>E</li>
                    <li>N</li>
                    <li>D</li>
                    <li>D</li>
                    <li>E</li>
                    <li>V</li>
                    <li>E</li>
                    <li>L</li>
                    <li>O</li>
                    <li>P</li>
                    <li>E</li>
                    <li>R</li>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { screen } = this.props;
    if (screen > 992) {
      return this.largeScreen();
    } else {
      return this.smallScreen();
    }
  }
}
