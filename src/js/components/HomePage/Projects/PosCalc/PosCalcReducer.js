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
  sizes: ['tall', 'grande', 'venti'],
  modalIsOpen: false,
  modalType: ''
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
        ...state, currentSelected: payload.selected, currentScreen: payload.currentScreen, drinkSize: payload.drinkSize
      }
    }
    case 'REMOVED_ITEM' : {
      return {
        ...state, currentOrder: payload.order, subTotal: payload.subTotal, orderTotal: payload.total, currentSelected: payload.selected
      }
    }
    case 'CANCEL_ORDER' : {
      return {
        ...state, currentOrder: payload.order, subTotal: payload.subTotal, orderTotal: payload.total, modalIsOpen: payload.modalIsOpen, currentScreen: payload.currentScreen
      }
    }
    case 'OPEN_MODAL' : {
      return {
        ...state, modalIsOpen: payload.openModal, modalType: payload.modalType
      }
    }
    case 'CLOSE_MODAL' : {
      return {
        ...state, modalIsOpen: payload
      }
    }
    case 'SAVE_ORDER' : {
      return {
        ...state, modalIsOpen: payload.modalIsOpen, savedOrders: payload.savedOrders, currentOrder: payload.currentOrder, orderTotal: payload.orderTotal, subTotal: payload.subTotal
      }
    }
    case 'OPEN_ORDER' : {
      return {
        ...state, currentOrder: payload.currentOrder, subTotal: payload.subTotal, orderTotal: payload.total, currentScreen: payload.currentScreen, savedOrders: payload.savedOrders
      }
    }
    default: {
      return state;
    }
  }
}