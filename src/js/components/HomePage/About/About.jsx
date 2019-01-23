import React, { Component } from 'react';
import profileImage from '../../../../../public/images/mainProfileImage.png';

export default class About extends Component {

  componentDidMount() {
    const about = document.getElementById('aboutPage');
    about.onmouseenter = () => this.props.gaEvent('scroll', 'scrolled to About Page');       
  }

  render() {    
    return (
      <div className='about-page' id='aboutPage'>
        <div className="container about-container">
          <div className="about-top">
            <div className="about-header">
              About Me
            </div>
          </div>
          <div className="about-row">
            <div className='about-text'>
              <div className='image-container'>
                <img src={profileImage} className='profile-image' />
              </div>
              My name is <i>Alfonso Wong</i>. I graduated from Cal State Dominguez Hills with a bachelors in Digital Media with an emphasis in Audio Recording. After working as an Audio Engineer in San Diego, I found that I could use my love for creating and developing media and applying it to Web Design. After receiving my certification from Origin Code Academy, I have focused my time and energy into building Web Applications with the React framework.
              <br />
              <span className='lg-paragraph'>
                This site is built with just that. I have added React and Redux to this site because it is much more then just a static web page. This site is also hosted on AWS, which gives me flexibility with my application. I have basic CRUD operations on the back end that allow me to communicate via Mongoose to MongoDB. These CRUD operations allow me to login, post, edit and delete a Blog that I have created for my solutions of Code Wars that I have completed.
              </span>
              <div className='about-name'>- Alfonso </div>
            </div>
          </div>
          <div className="about-bottom">
            <a href='/files/AlfonsoWongResume.pdf' download>
              <div className="download-btn">
                <button

                  id='downloadBtn'
                  onClick={() => this.props.gaEvent('Clicked About Page', 'downloaded resume')}>
                  DOWNLOAD RESUME
                  </button>
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

