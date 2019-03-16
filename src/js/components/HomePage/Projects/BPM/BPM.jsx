import React, { Component } from 'react';
import { connect } from 'react-redux';
import {startTimer} from './BPMActions'
import Counter from './Counter';
import Start from './Start';
import ProjectClose from '../../ProjectClose';

class BPM extends Component {
  constructor(props) {
    super(props);    
    this.resetTimer = this.resetTimer.bind(this);
  }

  resetTimer() {
    const { dispatch } = this.props;    
    dispatch(startTimer(null));
  }

  render() {    
    const { startTimer } = this.props;
    return (
      <div className = 'bpm-full-page'>
        <div className="bpm-container">
          <div className="bpm-app">
            {startTimer ? 
              <Counter/> : <Start/>
            }
          </div>
          <ProjectClose
              white='white'
              github={this.github}
              href='/'
              link='https://github.com/wongalfonso/bpm-counter'
            />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    startTimer: state.home.bpm.startTimer
  }
}

export default connect(mapStateToProps)(BPM);