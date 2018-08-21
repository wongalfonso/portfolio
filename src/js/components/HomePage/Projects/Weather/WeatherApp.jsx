import React, { Component } from 'react';
import Form from './WeatherForm';
import CityInfo from './CityInfo';
import Search from './Search';

export default class Weather extends Component {

  render() {

    return (
      <div id='weatherProject' className='allProjectModals'>
        <div className='container weatherContainer allProjectModalsContainers'>

          <div className="row project-headers">
            <div className="col-xl-12">
              <div className='col-xl-12' id='weatherHeader'>
                <h1 id='weatherH4'>Weather Application</h1>
              </div>
            </div>
          </div>

          <div className='row project-modal-body'>
            <div className='col-xl-12'>
              <div className='row'>
                <Form />
              </div>
              <div className='row weahterCardsRow'>
                <div className='col-6'>
                  <CityInfo />
                </div>
                <div className='col-6'>
                  <Search />
                </div>
              </div>
            </div>
          </div>

          <div className='row project-close-row'>
            <div className="col-xl-6">
              <a href="https://github.com/wongalfonso/Weather-App" target="_blank">
                <img className="gitMark" src="/images/GitHub.png" />
              </a>
            </div>
            <div className="col-xl-6 closeCol ">
              <button className='btn btn-danger form-control-xl closeBtn' onClick={this.props.close}>Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}