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
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    let scrollTop = event.srcElement.body.scrollTop,
      itemTranslate = Math.min(0, scrollTop / 3 - 60);

    this.setState({
      transform: itemTranslate
    });
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
