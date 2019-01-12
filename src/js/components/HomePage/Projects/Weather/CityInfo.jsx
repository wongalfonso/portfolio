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
          if (srise) { rise = getDate(srise) }
          if (sset) { set = getDate(sset) }
          return (
            <div className='weather-output-info-body' key={i}>
              <div className='weather-output-info-body-main'>
                <div className='head'>
                  <table>
                    <tbody>
                      <tr>
                        <td className='first'>
                          <div className='first-visual'>
                            <Img src={'http://openweathermap.org/img/w/' + icon + '.png'} className='first-visual-icon' />
                            <div className='first-visual-degrees'>
                              {temp} ˚
                            </div>
                          </div>
                        </td>
                        <td className = 'second'>
                          {weather.name}, {country}
                        </td>
                        <td className = 'third'>
                          <div className="third-sunrise">
                            Sunrise: {rise}
                          </div>
                          <div className="third-sunrise">
                            Sunset: {set}
                          </div>
                          <div className="third-description">
                            {description}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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