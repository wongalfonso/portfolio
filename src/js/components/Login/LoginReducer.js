const defaultState = {
  user: [],
  loading: false
}

export default function LoginReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case "AUTH_USER": {
      return { ...state, user: payload }
    }
    case "AUTH_USER_FULFILLED": {
      const { data } = payload
      return Object.assign({}, state, { user: data, authenticated: true, isLoggedIn: true, isLoggedOut: false })
    }
    case "AUTH_USER_REJECTED": {
      return { loading: false }
    }
    default: {
      return state;
    }
  }
}