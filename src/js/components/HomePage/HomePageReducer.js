let defaultState = {
  modalIsOpen: false,
  selected: '',
  hover: '',
  currentPage: '#Top',
  title: 'Web Developer',
  width: '',
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
    default: {
      return state;
    }
  }
}