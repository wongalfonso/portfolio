let defaultState = {
  title: '',
  modalIsOpen: false,
  selected: '',
  hover: '',
  currentPage: '#Top',
  screen: '',
}

export default function HomePageReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'CHANGE_TITLE' : {
      return {
        ...state, title: payload
      }
    }
    case 'SET_WIDTH' : {
      return {
        ...state, width: payload
      }
    }
    case 'SET_PAGE': {
      return {
        ...state, currentPage: payload
      }
    }
    case 'OPEN_MODAL' : {
      return {
        ...state, selected: payload.selected, modalIsOpen: payload.modalIsOpen
      }
    }
    case 'CLOSE_MODAL' : {
      return {
        ...state, modalIsOpen: payload
      }
    }
    default: {
      return state;
    }
  }
}