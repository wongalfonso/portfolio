
export function startTimer(timer) {
 return {
   type: 'START_TIMER',
   payload: timer
 } 
}

export function setTimer(time) {
  return {
    type: 'SET_TIMER',
    payload: time
  }
}

export function setBPM(count, intArr, ave, aveBpm, Bpm, classAnim, classArr) {
  return {
    type: 'SET_BPM', 
    payload: { count, intArr, ave, aveBpm, Bpm, classAnim, classArr }
  }
}