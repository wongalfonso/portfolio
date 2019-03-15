const defaultState = {
  startTimer: null,
  timer: 0,
  tapCounter: 1,
  averageBPM: 0,
  bpm: 0,
  intervalArr: [],
  classAnim: 2,
  classArr: []
}

export default function BPMReducer(state = defaultState, action) {
  const { payload, type } = action;

  switch(type) {
    case 'START_TIMER': {
      return {
        ...state, startTimer: payload
      }
    }
    case 'SET_TIMER': {
      return {
        ...state, timer: payload
      }
    }
    case 'SET_BPM': {
      return {
        ...state, tapCounter: payload.count, intervalArr: payload.intArr, averageBPM: payload.aveBpm, bpm : payload.Bpm, classAnim: payload.classAnim, classArr: payload.classArr
      }
    }
    default: {
      return state;
    }
  }
}