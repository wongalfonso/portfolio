import React, { Component } from 'react';
import Img from 'react-image';
import { connect } from 'react-redux';
import { getDate } from './WeatherFormActions';

class CityInfo extends Component {  

  renderCitySuccess() {
    const { weatherInfo, datePrint } = this.props;
    return (
      <div className='weather-output-info'>
        <div className="weather-output-info-head">
          {datePrint}
        </div>
        {weatherInfo.map((weather, i) => {
          console.log(weather);
          const { lon, lat } = weather.coord;
          const { humidity, pressure, temp, temp_max, temp_min } = weather.main;
          let { country, sunrise, sunset } = weather.sys;
          const { description, icon } = weather.weather[0];
          const { speed } = weather.wind.speed;          
          let rise, set;
          let srise = new Date(sunrise * 1000);
          let sset = new Date(sunset * 1000);
          if (srise) { rise = getDate(srise)}
          if (sset) { set = getDate(sset)}          
          return (
            <div className='weather-output-info-body' key={i}>
              <div className='weather-output-info-body-main'>
                <div className='city'>
                  <div className = 'city-title'>
                    <Img src={'http://openweathermap.org/img/w/' + icon + '.png'} className = 'city-title-icon'/>
                    <div className = 'city-title-location'>
                      {weather.name}, {country}
                    </div>
                  </div>
                  <div className='city-temp'>      
                    <div className ='city-temp-degrees'>
                    {temp} ˚
                    </div>
                  </div>
                </div>
                <div className = 'basic-info'>
                  <div className="basic-info-sunrise">
                    Sunrise: {rise}
                  </div>
                  <div className="basic-info-sunrise">
                    Sunset: {set}
                  </div>
                </div>
                {/* <div className='weather-output-info-body-city-description'>
                      <span>
                        Lat/Long: {lat},{lon}</span>
                      <span>
                      {description}
                      </span>                    
                  </div> */}
              </div>
              <div className='weather-output-info-body-stats'>

                <div className='weather-output-info-body-stats-group'>
                  <label><b>Pressure</b></label>
                  <div id='pressure' className='weather-output-info-body-stats-group-alert'>{pressure}</div>
                </div>
                <div className='weather-output-info-body-stats-group'>
                  <label><b>Humdity</b></label>
                  <div id='humidity' className='weather-output-info-body-stats-group-alert'>{humidity}</div>
                </div>

                <div className='weather-output-info-body-stats-group'>
                  <label><b>Lowest Temp(F)</b></label>
                  <div className='weather-output-info-body-stats-group-alert'>{temp_min}F</div>
                </div>
                <div className='weather-output-info-body-stats-group'>
                  <label><b> Highest Temp (F)</b></label>
                  <div className='weather-output-info-body-stats-group-alert' >{temp_max}F</div>
                </div>
                <div className='weather-output-info-body-stats-group'>
                  <label><b>Wind Speed</b></label>
                  <div className='weather-output-info-body-stats-group-alert'>{speed}mph</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  renderCityBasic(style) {
    return (
      <div className={style}></div>
    )
  }

  render() {
    const { success } = this.props;
    return (
      (success) ? this.renderCitySuccess() : this.renderCityBasic('empty-search')
    )
  }
}

function mapStateToProps(state) {
  return {
    weatherInfo: state.home.weather.weatherInfo,
    throwErr: state.home.weather.throwErr,
    success: state.home.weather.success,
    datePrint: state.home.weather.datePrint
  }
}

export default connect(mapStateToProps)(CityInfo);