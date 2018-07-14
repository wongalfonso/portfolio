import React from 'react';
import Form from "./WeatherForm";
import CityInfo from "./CityInfo";
import Search from "./Search";

export default class WeatherApp extends React.Component {
  render() {
    return (
      <div id="weatherProject" className='allProjectModals'>
        <div className='container weatherContainer allProjectModalsContainer'>
          <div className="row modalBody">
            <div className="col-12">
              <div className="row">
                <div className="col-12" id = 'weatherHeader'>
                  <h1>Weather Application</h1>
                  <h4 id = 'weatherH4'>Always know if you'll need an umbrella!</h4>
                </div>
              </div>
              <div className="row">
                <Form />
              </div>
              <div className="row weahterCardsRow">
                <div className="col-6">
                  <CityInfo />
                </div>
                <div className="col-6">
                  <Search />
                </div>
              </div>
            </div>
          </div>
          <div className='row closeRow'>
            <div className="col-12">
              <div className="col-8">
                <a href="https://github.com/wongalfonso/React-Change-Calculator" target="_blank">
                  <img className="gitMark float-left" src="/images/github.png" />
                </a>
              </div>
              <div className="col-4 closeCol float-right">
                <button className='btn btn-danger float-right form-control-xl closeBtn' onClick={this.props.close}>Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}