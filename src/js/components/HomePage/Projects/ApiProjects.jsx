import React from 'react';
import Weather from './Weather/WeatherApp';
import WeatherImage from './../../../../../public/images/WeatherApp.jpg'

const ApiProjects = ({title, selected}) => {
  
  let modalTemplate = (modal) => {
    ReactGA.event({
      category: 'Opened Modal',
      action: `Opened ${modal}`
    })
    return (
      <Modal
        isOpen = {}
        onAfterOpen = {}
        onRequestClose = {}
        ariaHideApp = 'false'
        className = 'ReactModal_Content ReactModal_Content--after-open'
        style = {modalStyle}
        >        
        {(selected == 'Weather') && <Weather close={this.closeModal} />}
        </Modal>
    )
  }

  let gitHub = (link, github) => {
    ReactGA.event({
      category: 'visited GitHub',
      action: github
    });
    return (
      <a href={link} target='_blank'><img src={GitHubWhite} className='gitHubImage' /></a>
    )
  }

  return (
    <div>
      <div className='row project-rows'>
            <div className='col-sm-12 col-xl-6'>
              <img src={WeatherImage} className='project-images' onClick={() => this.openModal('Weather')} />
            </div>
            <div className="col-sm-12 col-xl-6">
              <div className='info-div'>
                <p className='infoTitle'><u> Weather App</u> {this.gitHub('https://github.com/wongalfonso/Weather-App', 'weather')}</p>
                <p>This is the first Redux application that I built while at Origin Code Academy. This application helped me understand the true power of Redux and the potential of the framework. The toughest part for me to grasp was the separation of React into a simple view component and allowing Redux to handle all of the grunt work. Handling errors in Redux was also another hurdle for me due to the fact that when using Redux Promise Middleware, errors now had to be dealt with in state as opposed to just being dealt with in the server. After understanding the possibilities of what Redux can do, I decided to build this portfolio in that framework.</p>
              </div>
            </div>
          </div>
    </div>
  )

}

export default ApiProjects;
