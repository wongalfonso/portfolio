const defaultState = {
  coffees: [],
  breakfast: [],
  bakery: [],
  currentScreen: 'drinks',
  currentOrder: [],
  currentSelected: 0,  
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
        ...state, currentOrder: payload.order, currentSelected: payload.currentSelected, subTotal: payload.subTotal, orderTotal: payload.total
      }
    }    
    case 'CHANGE_SIZE': {
      return {
        ...state, drinkSize: payload.size, currentOrder: payload.currentOrder, subTotal: payload.subTotal, orderTotal: payload.total
      }
    }
    case 'SELECTED_ITEM' : {
      return {
        ...state, currentSelected: payload.selected, currentScreen: payload.currentScreen
      }
    }
    case 'REMOVED_ITEM' : {
      return {
        ...state, currentOrder: payload.order, subTotal: payload.subTotal, orderTotal: payload.total, currentSelected: payload.selected
      }
    }
    default: {
      return state;
    }
  }
}