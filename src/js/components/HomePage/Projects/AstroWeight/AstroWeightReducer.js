const defaultState = {
  weight: '',
  planetValue: 0,
  planetName: '',
  planetList: [],
  checked: false,
  newWeight: '',
  output: '',
};

export default function AstroReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch(type) {
    case 'UPDATE_PLANETS': {
      return {
        ...state, planetList: payload
      }
    }
    case 'ADD_WEIGHT' : {
      return {
        ...state, weight: payload
      }
    }
    case 'SELECT_PLANET' : {
      return {
        ...state, planetValue: payload.planetValue, planetName: payload.planetName, output: payload.output 
      }
    }
    case 'PLUTO_CHECKED' : {
      return {
        ...state, checked: payload
      }
    }
    case 'CALCULATE_WEIGHT': {
      return {
        ...state, newWeight: payload.newWeight, output: payload.output
      }
    }
    default: {
      return state
    }
  }
}