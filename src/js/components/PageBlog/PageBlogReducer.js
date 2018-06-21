const defaultState = {
  blog: []
}

export default function PageBlogReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case "POST_BLOG_PENDING": {
      return { loading: true }
    }
    case "POST_BLOG_FULFILLED": {
      return Object.assign({}, state, { blog: payload }, { loading: true })
    }
    case "POST_BLOG_REJECTED": {
      return Object.assign({}, { loading: false, rejectedResponse: payload })
    }
    default: {
      return state;
    }
  }
}