import React, { Component } from 'react';
import Img from 'react-image';
import { connect } from 'react-redux';

class CityInfo extends Component {

  renderCitySuccess() {
    const { data } = this.props;
    var weatherArr = data.slice(0, 1);
    return (
      <div className = 'weather-output-info'>
        <div className="weather-output-info-head">
          City Information
        </div>
        {weatherArr.map((weather, i) => {
          var icon = weather.data.weather[0].icon
          return (
              <div className='weather-output-info-body' key = {i}>
                <div className='weather-output-info-body-city'>
                  <div className='weather-output-info-body-city-name'>
                    <Img src={'http://openweathermap.org/img/w/' + icon + '.png'} height={50} width={50} />
                      {weather.data.name}, {weather.data.sys.country}
                  </div>
                  <div className='weather-output-info-body-city-description'>
                      <span>
                        Lat/Long: {weather.data.coord.lat},{weather.data.coord.lon}</span>
                      <span>
                      {weather.data.weather[0].description}
                      </span>                    
                  </div>
                    <br />
                </div>
                <div className='weather-output-info-body-stats'>
                  <div className='weather-output-info-body-stats-group'>
                    <label><b>Temperature (F)</b></label>
                    <div id='temp' className='weather-output-info-body-stats-group-alert'>{weather.data.main.temp}F</div>
                  </div>
                  <div className='weather-output-info-body-stats-group'>
                    <label><b>Pressure</b></label>
                    <div id='pressure' className='weather-output-info-body-stats-group-alert'>{weather.data.main.pressure}</div>
                  </div>
                  <div className='weather-output-info-body-stats-group'>
                    <label><b>Humdity</b></label>
                    <div id='humidity' className='weather-output-info-body-stats-group-alert'>{weather.data.main.humidity}</div>
                  </div>

                  <div className='weather-output-info-body-stats-group'>
                    <label><b>Lowest Temp(F)</b></label>
                    <div className='weather-output-info-body-stats-group-alert'>{weather.data.main.temp_min}F</div>
                  </div>
                  <div className='weather-output-info-body-stats-group'>
                    <label><b> Highest Temp (F)</b></label>
                    <div className='weather-output-info-body-stats-group-alert' >{weather.data.main.temp_max}F</div>
                  </div>
                  <div className='weather-output-info-body-stats-group'>
                    <label><b>Wind Speed</b></label>
                    <div className='weather-output-info-body-stats-group-alert'>{weather.data.wind.speed}mph</div>
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
    const { success, throwErr } = this.props;
    return (
        (success === true || throwErr === true) ? this.renderCitySuccess() : this.renderCityBasic('empty-search')
    )
  }
}

function mapStateToProps(state) {
  return {
    loading: state.home.weather.loading,
    data: state.home.weather.data,
    input: state.home.weather.input,
    time: state.home.weather.time,
    date: state.home.weather.date,
    success: state.home.weather.success,
    throwErr: state.home.weather.throwErr
  }
}

export default connect(mapStateToProps)(CityInfo);