const defaultState = {
  coffees: [],
  breakfast: [],
  bakery: [],
  currentScreen: 'drinks'
};

export default function PosReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    
    case 'GET_MENU_FULFILLED': {      
      return {
        ...state, coffees: payload.coffees[0], breakfast: payload.food[0].breakfast, bakery: payload.food[1].bakery
      }
    }
    case 'CURRENT_SCREEN_FULFILLED': {      
      return {
        ...state, currentScreen: payload
      }
    }
    default: {
      return state;
    }
  }
}