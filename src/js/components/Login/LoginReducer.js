const defaultState = {
  response: '',
  username: '',
  id: '',
  isLoggedIn: false
};

export default function LoginReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'AUTH_USER_PENDING': {
      return {};
    }
    case 'AUTH_USER_FULFILLED': {
      return {
        ...state, username: payload.data.username, id: payload.data._id, isLoggedIn: true 
      };
    }
    case 'AUTH_USER_REJECTED': {
      return { ...state, response: payload };
    }
    case 'CREATE_USER_PENDING': {
      return {};
    }
    case 'CREATE_USER_FULFILLED': {
      return Object.assign({}, ...state, { username: payload.data.username, id: payload.data._id, isLoggedIn: true });
    }
    case 'CREATE_USER_REJECTED': {
      return { response: payload };
    }
    default: {
      return state;
    }
  }
}
