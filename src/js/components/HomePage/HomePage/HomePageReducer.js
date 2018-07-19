const defaultState = {
  screen: ''
};

export default function HomePageReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch(type) {
    case 'SCREEN_SIZE': {
      return {...state, screen: payload};
    }
    default: {
      return state;
    }
  }
}