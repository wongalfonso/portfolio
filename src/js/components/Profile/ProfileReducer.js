const defaultState = {
  blogs: [],
  loading: true,
  response: ''
};


export default function ProfileReducer(state = defaultState, action) {
  const { payload, type } = action;
  switch (type) {
    case 'GET_ALL_BLOGS_PENDING': {
      return { ...state, loading: true };
    }
    case 'GET_ALL_BLOGS_FULFILLED': {
      return { ...state, blogs: payload, loading: false };
    }
    case 'GET_ALL_BLOGS_REJECTED': {
      return { ...state, response: payload };
    }
    default: {
      return state;
    }
  }
}
