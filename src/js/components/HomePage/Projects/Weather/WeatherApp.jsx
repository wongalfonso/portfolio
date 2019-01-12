import React, { Component } from 'react';
import ReactGA from 'react-ga';
import Form from './WeatherForm';
import CityInfo from './CityInfo';
import Search from './Search';
import ProjectClose from '../../ProjectClose';

export default class Weather extends Component {
  gitHub() {
    ReactGA.event({
      category: 'Visited GitHub from Modal',
      action: 'From Weather Modal'
    })
  }

  render() {

    return (
      <div id='weatherProject'>
        <div className='weather-container'>

          <div className="weather-header">          
            <header>
              Weather App
            </header>            
          </div>
          <div className="weather-content content">
            <Form />
            <div className="weather-output">
              <CityInfo />
              <Search />          
            </div>
          </div>
          <ProjectClose
            white = 'white'
            gitHub = {this.gitHub}
            close = {this.props.closeModal}
          />
        </div>
      </div>
    );
  }
}