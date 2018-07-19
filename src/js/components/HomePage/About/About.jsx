import React, { Component } from 'react'

export default class About extends Component {


  smallScreen() {
    return (
      <div>
        <div className="row">
          <div className='col-sm-12 profilePicDiv'>
            <div className='col-sm-12 profilePic text-center'>
            </div>
          </div>
        </div>
        <div className="row">
          <div className='col-sm-12 aboutText'>
            <p>My name is <b>Alfonso Wong</b>. I graduated from Cal State Dominguez Hills with a bachelors in Digital Media with an emphasis in Audio Recording. After working as an Audio Engineer in San Diego, I found that I could use my love for creating and developing media and applying it to Web Design. After receiving my certification from Origin Code Academy, I have focused my time and energy into building Web Applications with the React framework.</p>
            <p>This site is built with just that. I have added React and Redux to this site because it is much more then just a static web page. This site is also hosted on AWS, which gives me flexability with my application. I have basic CRUD operations on the backend that allow me to communicate via Mongoose to MongoDB. These CRUD operations allow me to login, post, edit and delete a Blog that I have created for my solutions of Code Wars that I have completed. I hope you enjoy my page.</p>
            <p>-Alfonso </p>
          </div>
        </div>

      </div>
    )
  }

  largeScreen() {
    return (
      <div className='row aboutRow'>
        <div className='col-lg-6 aboutText'>
          <p>
            My name is <b>Alfonso Wong</b>. I graduated from Cal State Dominguez Hills with a bachelors in Digital Media with an emphasis in Audio Recording. After working as an Audio Engineer in San Diego, I found that I could use my love for creating and developing media and applying it to Web Design. After receiving my certification from Origin Code Academy, I have focused my time and energy into building Web Applications with the React framework.</p>
          <p> This site is built with just that. I have added React and Redux to this site because it is much more then just a static web page. This site is also hosted on AWS, which gives me flexability with my application. I have basic CRUD operations on the backend that allow me to communicate via Mongoose to MongoDB. These CRUD operations allow me to login, post, edit and delete a Blog that I have created for my solutions of Code Wars that I have completed. I hope you enjoy my page.</p>
          <p>-Alfonso </p>
        </div>
        <div className='col-lg-6 profilePicDiv'>
          <div id='profilePic'>
          </div>
        </div>
      </div>
    )
  }




  render() {
    const { screen } = this.props;
    return (
      <div className='aboutPage' refs='aboutPage'>
        <div className='container aboutContainer'>
          <div className='row'>
            <div className='col-12 aboutHeader'>
              <div className='title'>About Me</div>
            </div>
          </div>
          {(screen > 992) ? this.largeScreen() : this.smallScreen()}
          <div className='row'>
            <div className='col-12 text-center resumeBtnDiv'>
              <a href='/files/AlfonsoWongResume.pdf' download>
                <button className='btn btn-default resumeBtn'>
                  Download Resume
            </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
