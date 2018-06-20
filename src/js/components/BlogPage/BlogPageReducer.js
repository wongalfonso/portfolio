
const defaultState = {
  blog = []
}

export const BlogPageReducer = (state = defaultState, actions) => {
  const { type, payload } = actions;

  switch(type) {
    case "POST_BLOG": {
      return {}
    }
    case "POST_BLOG_PENDING": {
      return {loading: true}
    }
    case "POST_BLOG_FULFILLED": {
      return Object.assign({}, state, {blog: payload}, {loading: true})
    }
    case "POST_BLOG_REJECTED": {
      return Object.assign({}, {loading: false, rejectedResponse: payload })
    }
    defaut: {
      return state; 
    }
  }
}