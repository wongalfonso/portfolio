const defaultState = {

};

export default function ListEditReducer(state = defaultState, action) {
  const { payload, type } = action;
  switch (type) {
    case 'EDIT_LIST_PENDING': {
      return {};
    }
    case 'EDIT_LIST_FULFILLED': {
      return { payload };
    }
    case 'EDIT_LIST_REJECTED': {
      return {};
    }
    default:
      return state;
  }
}
