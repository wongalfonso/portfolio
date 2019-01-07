const defaultState = {
  coffees: [],
  breakfast: [],
  bakery: [],
  currentScreen: 'drinks',
  currentOrder: [],
  currentSelected: {},  
  orderTotal: 0,
  savedOrders: [],
  subTotal: 0,
  drinkSize: 'grande',
  sizes: ['tall', 'grande', 'venti']
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
        ...state, currentOrder: payload.order, subTotal: payload.subTotal, currentSelected: payload.currentSelected, orderTotal: payload.total
      }
    }
    case 'CHANGE_SIZE': {
      return {
        ...state, drinkSize: payload
      }
    }
    default: {
      return state;
    }
  }
}