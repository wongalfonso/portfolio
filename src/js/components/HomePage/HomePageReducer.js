let defaultState = {
  title: 'Web Developer',
  modalIsOpen: false,
  selected: '',
  hover: '',
  currentPage: '#Top',
  screen: '',
  enter: '',
  exit: ''
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
    case 'MOUSE_ENTER': {      
      return  {
        ...state, title: payload.title, page: payload.page
      }
    }
    case 'MOUSE_EXIT' : {
      return {
        ...state, exit: payload 
      }
    }
    default: {
      return state;
    }
  }
}