const defaultState = {
  data: [],
  loading: true,
  response: ""
}


export default function ProfileReducer(state = defaultState, action) {
  const { payload, type } = action
  switch (type) {
    case "GET_ALL_BLOGS_PENDING": {
      return {loading: true}
    }
    case "GET_ALL_BLOGS_FULFILLED": {      
      return Object.assign({}, state, {data: payload})
    }
    case "GET_ALL_BLOGS_REJECTED" : {
      return {...state, response: payload}
    }
    default: {
      return state
    }
  }


} 