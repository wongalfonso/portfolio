import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Splash from './Splash';
import About from './About';
import Projects from './Projects';
import Footer from '../Footer';


export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transform: ''
    }
  }

  render() {
    return (
      <div className='fullSite' id='fullpage'>
        <Splash />
        <About />
        <Projects />
        <Footer/>
      </div>
    )
  }
};
