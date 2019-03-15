import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startTimer } from './BPMActions';

class Start extends Component {
  constructor() {
    super();
    this.startSpaceBar = this.startSpaceBar.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keyup', this.startSpaceBar);   
  }

  startSpaceBar(e) {      
    const { dispatch } = this.props;
    if (e.keyCode == '32') {        
      dispatch(startTimer(true));
    }
  }
  startTimer() {
    const { dispatch } = this.props;
    dispatch(startTimer(true));
  }
  componentWillUnmount() {
    window.removeEventListener('keyup', this.startSpaceBar);
  }
  render() {
    return (
      <div className="bpm-counters">
        <span>Average BPM</span>
        <div className="main-counter main-counter-2">0</div>
        <span>BMP</span>
        <div className="average-counter">0</div>
        <span>Tap Counter</span>
        <div className="tap-counter">0</div>
        <button className='buttons buttons-counter buttons-counter-start'
          id='counter-button'
          onClick={this.startTimer}>
          Tap to Count
            </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps)(Start);