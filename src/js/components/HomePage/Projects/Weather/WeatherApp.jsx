import React, { Component } from 'react';
import ReactGA from 'react-ga';
import Form from './WeatherForm';
import CityInfo from './CityInfo';
import Search from './Search';

export default class Weather extends Component {
  gitHub() {
    ReactGA.event({
      category: 'Visited GitHub from Modal',
      action: 'From Weather Modal'
    })
  }

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
            <Form />
            <CityInfo />
            <Search />
          </div>

          <div className='row project-close-row'>
            <div className="col-sm-6 col-xl-6">
              <a href="https://github.com/wongalfonso/Weather-App" target="_blank" onClick = {this.gitHub}>
                <img className="gitMark" src="/images/GitHub.png" />
              </a>
            </div>
            <div className="col-sm-6 col-xl-6 closeCol ">
              <button className='btn btn-danger form-control-xl closeBtn' onClick={this.props.close}>Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}