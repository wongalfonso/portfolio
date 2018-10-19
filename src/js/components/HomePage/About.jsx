import React, { Component } from 'react';
import ReactGA from 'react-ga';

export default class About extends Component {
  downloadResume() {
    ReactGA.event({
      category: 'Clicked About Page Button',
      action: 'downloaded Resume'
    })
  }
  aboutText() {

    return (
      <div className='col-lg-12 col-lg-10 col-xl-7 text-center about-text-row'>
        <div className="about-text">
          <p>My name is <b>Alfonso Wong</b>. I graduated from Cal State Dominguez Hills with a bachelors in Digital Media with an emphasis in Audio Recording. After working as an Audio Engineer in San Diego, I found that I could use my love for creating and developing media and applying it to Web Design. After receiving my certification from Origin Code Academy, I have focused my time and energy into building Web Applications with the React framework.</p>
          <p>This site is built with just that. I have added React and Redux to this site because it is much more then just a static web page. This site is also hosted on AWS, which gives me flexability with my application. I have basic CRUD operations on the backend that allow me to communicate via Mongoose to MongoDB. These CRUD operations allow me to login, post, edit and delete a Blog that I have created for my solutions of Code Wars that I have completed. I hope you enjoy my page.</p>
          <span>- Alfonso </span>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className='about-page' id='aboutPage'>
        <div className='container about-container' id='aboutContainer'>

          About Me

          
        </div>
      </div>
    )
  }
};
