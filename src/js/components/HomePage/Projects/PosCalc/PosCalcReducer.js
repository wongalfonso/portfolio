const defaultState = {
  coffees: [],
  breakfast: [],
  bakery: []
};

export default function PosReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'GET_MENU_FULFILLED': {      
      return {
        ...state, coffees: payload.coffees[0], breakfast: payload.food[0].breakfast, bakery: payload.food[1].bakery
      }
    }
    default: {
      return state;
    }
  }
}