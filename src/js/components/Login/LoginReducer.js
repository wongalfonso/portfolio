const defaultState = {
  loading: false,
  message: ""
}

export default function LoginReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case "AUTH_USER": {
      return { ...state, user: payload }
    }
    case "AUTH_USER_FULFILLED": {           
      return Object.assign({}, state, payload.data, {isLoggedIn: true})
    }
    case "AUTH_USER_REJECTED": {
          
      return { ...state, loading: false, message: payload }
    }
    case "CREATE_USER_PENDING": {
      return {loading: true}
    }
    case "CREATE_USER_FULFILLED": {
      return Object.assign({}, state, payload, {isLoggedIn: true})
    }
    case "CREATE_USER_REJECTED": {
      return {loading:false}
    }
    default: {
      return state;
    }
  }
}