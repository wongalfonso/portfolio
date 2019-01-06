const defaultState = {
  coffees: [],
  breakfast: [],
  bakery: [],
  currentScreen: 'drinks',
  currentOrder: [],
  currentSelected: {},
  orderTotal: '',
  savedOrders: []
};

export default function PosReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    
    case 'GET_MENU_FULFILLED': {      
      return {
        ...state, coffees: payload.coffees[0], breakfast: payload.food[0].breakfast, bakery: payload.food[1].bakery
      }
    }
    case 'CURRENT_SCREEN': {         
      return {
        ...state, currentScreen: payload
      }
    }
    case 'ADD_ITEM' : {
      return {
        ...state, currentOrder: payload.currentItem
      }
    }
    default: {
      return state;
    }
  }
}