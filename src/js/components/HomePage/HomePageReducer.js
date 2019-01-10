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
    default: {
      return state;
    }
  }
}