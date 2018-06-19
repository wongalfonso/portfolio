const defaultState = {
  user: [],
  loading: false
}

export default function LoginReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch(type) {    
    case "AUTH_USER": {      
      return {...state, user: payload}
    }
    case "AUTH_USER_FULFILLED": {
      console.log(payload)
      return Object.assign({}, state, {user: payload})
    }
    case "AUTH_USER_REJECTED": {
      return {loading: false}
    }
    default: {
      return state;
    }
  }
}