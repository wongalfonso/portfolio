import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTimer, setBPM, startTimer } from './BPMActions';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.counterSpaceBar = this.counterSpaceBar.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  componentDidMount() {
    const { dispatch} = this.props;    
    window.addEventListener('keyup', this.counterSpaceBar);
    this.interval = setInterval(() => {
      const { timer } = this.props;
      let currentTime = timer + 100;
      if (currentTime > 180000) {
        currentTime = 0;
      }
      dispatch(setTimer(currentTime));
    }, 100);
  }

  counterSpaceBar(event) {
    const { tapCounter } = this.props;
    if (event.keyCode == '32') {
      this.handleClick(tapCounter + 1);
    }
  }
  stopTimer() {
    const { dispatch } = this.props;
    dispatch(startTimer(null));
  }
  handleClick(count) {
    const { dispatch } = this.props;
    const { intervalArr, classAnim, timer, classArr } = this.props;
    let intArr = [], averageArr = [], classCheck = [], average, interval, minute, bpm, classNum;
    if (intervalArr.length > 0) {
      intArr = intervalArr;
    }
    intArr.push(timer);
    if (intArr.length > 1) {
      for (let i = 1; i < intArr.length; i++) {
        interval = intArr[i] - intArr[i - 1];        
        averageArr.push(interval);
        if (averageArr.length > 40) {
          averageArr.shift();
        }
      }
        if (intArr.length > 40) {
        intArr.shift();
      }
    } else {
      averageArr.push(0)
    }
    average = averageArr.reduce((total, num) => total + num);
    average = average / averageArr.length;   
    minute = 60000;

    if (averageArr.length == 1) {
      bpm = 60;
    } else {
      bpm = minute / average;
    }


    classCheck = classArr.slice();        
    classCheck.push(Math.round(bpm));
    if (classCheck.length > 2) {
      classCheck.shift();
    }    
    if (classCheck[1] > classCheck[0] || classCheck[1] < classCheck[0]) {
      if (classAnim > 7) {
        classNum = 8
      } else {
        classNum = classAnim + 1;
      }
    } else {
      if (classAnim < 1) {
        classNum = 0;
      } else {
        classNum = classAnim - 1;
      }
    }    
    dispatch(setBPM(count, intArr, average, Math.round(bpm), bpm.toFixed(2), classNum, classCheck));  
    document.getElementById('counter-button').blur();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    window.removeEventListener('keyup', this.counterSpaceBar);
  }

  render() {
    const { classAnim, averageBPM, BPM, tapCounter} = this.props;
    return (
      <div className='bpm-counters'>
        <span>Average BPM</span>
        <div className={"main-counter main-counter-" + classAnim}>{averageBPM}</div>
        <span>BPM</span>
        <div className="average-counter">{BPM}</div>
        <span>Tap Counter</span>
        <div className="tap-counter">{tapCounter}</div>
        <button className='buttons buttons-reset' onClick={this.stopTimer}>Reset Counter</button>
        <button className='buttons buttons-counter' id='counter-button' onClick={() => this.handleClick(tapCounter + 1)}>Tap to Count</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {  
  return {
    classAnim: state.home.bpm.classAnim,
    averageBPM: state.home.bpm.averageBPM,
    BPM: state.home.bpm.bpm,
    tapCounter: state.home.bpm.tapCounter,
    intervalArr: state.home.bpm.intervalArr,
    timer: state.home.bpm.timer,
    classArr: state.home.bpm.classArr
  }
}

export default connect(mapStateToProps)(Counter);